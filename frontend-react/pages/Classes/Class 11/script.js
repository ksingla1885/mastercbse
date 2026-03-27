// Navigation function
document.addEventListener('DOMContentLoaded', function() {
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

    // Highlight active navigation link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Call once on page load
});

// Stream navigation function
function navigateToClass(stream) {
    // Convert stream to lowercase and replace spaces with hyphens for the URL
    const streamPath = stream.toLowerCase().replace(/\s+/g, '-');
    
    // Handle different streams
    if (stream === 'Medical') {
        window.location.href = 'Medical/index.html';
    } else if (stream === 'Non-Medical') {
        window.location.href = 'Non-Medical/index.html';
    } else if (stream === 'Commerce') {
        window.location.href = 'Commerce/index.html';
    } else if (stream === 'Humanities') {
        window.location.href = 'Humanities/index.html';
    } else {
        // For other streams, show an alert (to be implemented later)
        alert(`${stream} stream page is coming soon!`);
    }
}

// Modal functionality
const modal = document.getElementById('loginModal');

function showLoginModal() {
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

function closeLoginModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        closeLoginModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeLoginModal();
    }
});

// Add animation to class cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.class-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
