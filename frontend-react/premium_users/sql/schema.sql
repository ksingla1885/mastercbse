-- Enable necessary extensions
create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists "pgcrypto";

-- Create custom types
create type subscription_status as enum ('active', 'canceled', 'expired', 'past_due');
create type payment_status as enum ('pending', 'completed', 'failed', 'refunded');
create type user_role as enum ('student', 'teacher', 'admin');
create type content_type as enum ('video', 'text', 'quiz', 'assignment');

-- Users table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  phone text,
  class integer check (class between 1 and 12),
  stream text,
  school text,
  address jsonb,
  role user_role not null default 'student',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint username_length check (char_length(full_name) >= 3)
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Subjects table
create table public.subjects (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  class integer not null check (class between 1 and 12),
  stream text,
  thumbnail_url text,
  is_active boolean default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(name, class, stream)
);

-- Enable RLS on subjects
alter table public.subjects enable row level security;

-- Subject content (chapters, topics, etc.)
create table public.subject_content (
  id uuid primary key default uuid_generate_v4(),
  subject_id uuid references public.subjects(id) on delete cascade not null,
  parent_id uuid references public.subject_content(id) on delete cascade,
  title text not null,
  description text,
  content_type content_type not null,
  content_url text,
  duration_minutes integer,
  order_index integer not null default 0,
  is_free boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS on subject_content
alter table public.subject_content enable row level security;

-- Subscriptions table
create table public.subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  subject_id uuid references public.subjects(id) on delete set null,
  plan_id text not null,
  status subscription_status not null default 'active',
  start_date timestamptz not null,
  expiry_date timestamptz not null,
  auto_renew boolean default false,
  cancel_at_period_end boolean default false,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint valid_dates check (expiry_date > start_date)
);

-- Enable RLS on subscriptions
alter table public.subscriptions enable row level security;

-- Payments table
create table public.payments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  subscription_id uuid references public.subscriptions(id) on delete set null,
  amount integer not null check (amount > 0),
  currency varchar(3) not null default 'INR',
  status payment_status not null default 'pending',
  payment_method text,
  payment_intent_id text unique,
  receipt_url text,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS on payments
alter table public.payments enable row level security;

-- User progress tracking
create table public.user_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  content_id uuid references public.subject_content(id) on delete cascade not null,
  is_completed boolean default false,
  progress_percentage integer not null default 0 check (progress_percentage between 0 and 100),
  last_accessed timestamptz not null default now(),
  completed_at timestamptz,
  metadata jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, content_id)
);

-- Enable RLS on user_progress
alter table public.user_progress enable row level security;

-- User quiz attempts
create table public.quiz_attempts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  content_id uuid references public.subject_content(id) on delete cascade not null,
  score integer not null default 0,
  total_questions integer not null,
  time_spent_seconds integer,
  responses jsonb,
  created_at timestamptz not null default now()
);

-- Enable RLS on quiz_attempts
alter table public.quiz_attempts enable row level security;

-- User bookmarks
create table public.bookmarks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  content_id uuid references public.subject_content(id) on delete cascade not null,
  notes text,
  created_at timestamptz not null default now(),
  unique(user_id, content_id)
);

-- Enable RLS on bookmarks
alter table public.bookmarks enable row level security;

-- Notifications
create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  message text not null,
  is_read boolean default false,
  action_url text,
  metadata jsonb,
  created_at timestamptz not null default now(),
  read_at timestamptz
);

-- Enable RLS on notifications
alter table public.notifications enable row level security;

-- Create indexes for better performance
create index idx_subjects_class on public.subjects(class, stream);
create index idx_subject_content_subject on public.subject_content(subject_id);
create index idx_subscriptions_user on public.subscriptions(user_id);
create index idx_subscriptions_status on public.subscriptions(status);
create index idx_payments_user on public.payments(user_id);
create index idx_user_progress_user_content on public.user_progress(user_id, content_id);
create index idx_quiz_attempts_user_content on public.quiz_attempts(user_id, content_id);
create index idx_notifications_user on public.notifications(user_id, is_read);

-- Create a function to update the updated_at column
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language 'plpgsql';

-- Create triggers to update updated_at columns
create trigger update_profiles_updated_at
before update on public.profiles
for each row execute function update_updated_at_column();

create trigger update_subjects_updated_at
before update on public.subjects
for each row execute function update_updated_at_column();

create trigger update_subject_content_updated_at
before update on public.subject_content
for each row execute function update_updated_at_column();

create trigger update_subscriptions_updated_at
before update on public.subscriptions
for each row execute function update_updated_at_column();

create trigger update_payments_updated_at
before update on public.payments
for each row execute function update_updated_at_column();

create trigger update_user_progress_updated_at
before update on public.user_progress
for each row execute function update_updated_at_column();

-- Create a function to handle new user signups
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (new.id, new.email, 'student');
  
  -- Send welcome notification
  insert into public.notifications (user_id, title, message, action_url)
  values (new.id, 'Welcome to mastercbse!', 'Thank you for signing up. Start exploring our premium content now!', '/dashboard');
  
  return new;
end;
$$ language plpgsql security definer;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create a function to check if a user has access to content
create or replace function public.has_content_access(user_id uuid, content_id uuid)
returns boolean as $$
declare
  content_record record;
  has_access boolean;
begin
  -- Get content details
  select s.id as subject_id, sc.is_free
  into content_record
  from public.subject_content sc
  join public.subjects s on sc.subject_id = s.id
  where sc.id = content_id;
  
  -- If content not found, return false
  if content_record is null then
    return false;
  end if;
  
  -- If content is free, return true
  if content_record.is_free then
    return true;
  end if;
  
  -- Check if user has active subscription to the subject
  select exists (
    select 1
    from public.subscriptions s
    where s.user_id = has_content_access.user_id
    and s.subject_id = content_record.subject_id
    and s.status = 'active'
    and s.expiry_date > now()
  ) into has_access;
  
  return coalesce(has_access, false);
end;
$$ language plpgsql security definer;

-- RLS Policies
-- Profiles
create policy "Users can view their own profile"
on public.profiles for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles for update
using (auth.uid() = id);

-- Subjects
create policy "Subjects are viewable by everyone"
on public.subjects for select
to authenticated, anon
using (true);

-- Subject Content
create policy "Content is viewable if free or user has subscription"
on public.subject_content for select
using (
  is_free = true 
  or exists (
    select 1 
    from public.subscriptions s
    where s.user_id = auth.uid()
    and s.subject_id = subject_content.subject_id
    and s.status = 'active'
    and s.expiry_date > now()
  )
);

-- Subscriptions
create policy "Users can view their own subscriptions"
on public.subscriptions for select
using (auth.uid() = user_id);

create policy "Users can create their own subscriptions"
on public.subscriptions for insert
with check (auth.uid() = user_id);

-- Payments
create policy "Users can view their own payments"
on public.payments for select
using (auth.uid() = user_id);

create policy "Users can create their own payments"
on public.payments for insert
with check (auth.uid() = user_id);

-- User Progress
create policy "Users can view their own progress"
on public.user_progress for select
using (auth.uid() = user_id);

create policy "Users can update their own progress"
on public.user_progress for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Quiz Attempts
create policy "Users can view their own quiz attempts"
on public.quiz_attempts for select
using (auth.uid() = user_id);

create policy "Users can create their own quiz attempts"
on public.quiz_attempts for insert
with check (auth.uid() = user_id);

-- Bookmarks
create policy "Users can manage their own bookmarks"
on public.bookmarks for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Notifications
create policy "Users can view their own notifications"
on public.notifications for select
using (auth.uid() = user_id);

create policy "Users can update their own notifications"
on public.notifications for update
using (auth.uid() = user_id);

-- Create a view for user subscriptions with subject details
create or replace view public.user_subscriptions as
select 
  s.*,
  subj.name as subject_name,
  subj.description as subject_description,
  subj.class as subject_class,
  subj.stream as subject_stream
from public.subscriptions s
left join public.subjects subj on s.subject_id = subj.id
where s.user_id = auth.uid();

-- Create a view for user progress with content details
create or replace view public.user_learning_progress as
select 
  up.*,
  sc.title as content_title,
  sc.content_type,
  sc.duration_minutes,
  s.name as subject_name,
  s.class as subject_class
from public.user_progress up
join public.subject_content sc on up.content_id = sc.id
join public.subjects s on sc.subject_id = s.id
where up.user_id = auth.uid();

-- Create a view for user's active subscriptions
create or replace view public.active_subscriptions as
select *
from public.subscriptions
where user_id = auth.uid()
and status = 'active'
and expiry_date > now();

-- Create a function to get user's subscription status for a subject
create or replace function public.get_user_subscription_status(user_id uuid, subject_id uuid)
returns json as $$
declare
  result json;
begin
  select json_build_object(
    'has_access', exists (
      select 1 
      from public.subscriptions 
      where user_id = $1 
      and subject_id = $2
      and status = 'active'
      and expiry_date > now()
    ),
    'subscription', (
      select to_json(sub)
      from (
        select id, plan_id, status, start_date, expiry_date, auto_renew
        from public.subscriptions
        where user_id = $1 
        and subject_id = $2
        order by created_at desc
        limit 1
      ) sub
    )
  ) into result;
  
  return result;
end;
$$ language plpgsql security definer;
