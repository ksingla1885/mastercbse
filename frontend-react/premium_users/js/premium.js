// Initialize Supabase
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM Elements
const subscriptionForm = document.getElementById('subscriptionForm');
const classSelect = document.getElementById('classSelect');
const streamSection = document.getElementById('streamSection');
const streamSelect = document.getElementById('streamSelect');

// Toggle stream selection based on class
if (classSelect) {
    classSelect.addEventListener('change', (e) => {
        if (e.target.value >= 11) {
            streamSection.style.display = 'block';
        } else {
            streamSection.style.display = 'none';
        }
    });
}

// Handle subscription form submission
if (subscriptionForm) {
    subscriptionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(subscriptionForm);
        const userData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            contact: formData.get('contact'),
            class: formData.get('class'),
            stream: formData.get('stream') || null,
            createdAt: new Date().toISOString()
        };

        try {
            // Save user data to Supabase
            const { data, error } = await supabase
                .from('users')
                .insert([userData])
                .select();

            if (error) throw error;

            // Store user ID in session
            sessionStorage.setItem('premiumUserId', data[0].id);
            
            // Redirect to subscription page
            window.location.href = 'subscription.html';
        } catch (error) {
            console.error('Error saving user data:', error);
            alert('An error occurred. Please try again.');
        }
    });
}

// Check subscription status on dashboard load
document.addEventListener('DOMContentLoaded', async () => {
    const userId = sessionStorage.getItem('premiumUserId');
    if (!userId && window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'index.html';
        return;
    }

    if (window.location.pathname.includes('dashboard.html')) {
        await checkSubscriptionStatus(userId);
        loadUserSubjects(userId);
    }
});

async function checkSubscriptionStatus(userId) {
    try {
        const { data: subscription, error } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error) throw error;

        const expiryDate = new Date(subscription.expiry_date);
        const today = new Date();
        const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

        // Update UI based on subscription status
        const statusElement = document.getElementById('subscriptionStatus');
        const expiryElement = document.getElementById('expiryDate');
        
        if (expiryDate < today) {
            statusElement.textContent = 'Expired';
            statusElement.className = 'status-expired';
            showExpiryWarning('Your subscription has expired. Please renew to continue access.');
        } else if (daysRemaining <= 7) {
            statusElement.textContent = `Expiring in ${daysRemaining} days`;
            statusElement.className = 'status-expiring';
            showExpiryWarning(`Your subscription will expire in ${daysRemaining} days.`);
        } else {
            statusElement.textContent = 'Active';
            statusElement.className = 'status-active';
        }

        expiryElement.textContent = expiryDate.toLocaleDateString();

    } catch (error) {
        console.error('Error checking subscription status:', error);
    }
}

function showExpiryWarning(message) {
    const warningDiv = document.createElement('div');
    warningDiv.className = 'alert alert-warning';
    warningDiv.textContent = message;
    document.querySelector('.dashboard-container').prepend(warningDiv);
}

async function loadUserSubjects(userId) {
    try {
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('class, stream')
            .eq('id', userId)
            .single();

        if (userError) throw userError;

        const { data: subjects, error: subjectsError } = await supabase
            .from('subjects')
            .select('*')
            .eq('class', user.class);

        if (subjectsError) throw subjectsError;

        const subjectsContainer = document.getElementById('subjectsContainer');
        if (subjectsContainer) {
            subjectsContainer.innerHTML = subjects.map(subject => `
                <div class="subject-card">
                    <h3>${subject.name}</h3>
                    <p>${subject.description || ''}</p>
                    <button class="btn-premium" onclick="selectSubject('${subject.id}')">
                        Get Premium
                    </button>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading subjects:', error);
    }
}

// Function to handle subject selection
window.selectSubject = async function(subjectId) {
    const userId = sessionStorage.getItem('premiumUserId');
    if (!userId) {
        window.location.href = 'index.html';
        return;
    }

    // Store selected subject in session
    sessionStorage.setItem('selectedSubjectId', subjectId);
    
    // Redirect to subscription page
    window.location.href = 'subscription.html';
};
