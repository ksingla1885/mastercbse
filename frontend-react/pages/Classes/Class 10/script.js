// Navigation and Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
        
        // Animate hamburger to X
        this.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                menuToggle.click();
            }
        });
    });

    // Add scroll effect to header
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 10) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Show login modal after 30 seconds or on certain interactions
let modalShown = false;

function showLoginModal() {
    if (!modalShown) {
        document.getElementById('loginModal').style.display = 'block';
        modalShown = true;
    }
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Auto-show modal after 30 seconds
setTimeout(function() {
    if (!modalShown && Math.random() < 0.7) { // 70% chance to show
        showLoginModal();
    }
}, 30000);

// Show modal on scroll or after visiting 2-3 sections
let sectionsVisited = 0;
window.addEventListener('scroll', function() {
    if (!modalShown && sectionsVisited >= 2) {
        showLoginModal();
    }
});

// Track section visits
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('click', function() {
        sectionsVisited++;
    });
});

function navigateToSubject(subjectName) {
    // Map subject names to their respective paths within Class 10
    const subjectPaths = {
        'English': 'English/index.html',
        'Hindi': 'Hindi/index.html',
        'Mathematics': 'Mathematics/index.html',
        'Science': 'Science/index.html',
        'Social Science': 'Social Science/index.html',
        'Computer Applications': 'Computer Applications/index.html',
        'Sanskrit': 'Sanskrit/index.html'
    };

    const path = subjectPaths[subjectName];
    if (path) {
        window.location.href = path;
    } else {
        alert('Navigation path not found for ' + subjectName);
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
