// Script for Class 10 Science Chapter Pages

// Function to show the login modal
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

// Function to close the login modal
function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Premium Links (optional visual feedback)
    const premiumLinks = document.querySelectorAll('.premium-nav, .premium-link');
    premiumLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s';
        });
        link.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

// Export functions if using in a module context (though this is primarily for raw HTML usage)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showLoginModal,
        closeLoginModal
    };
}
