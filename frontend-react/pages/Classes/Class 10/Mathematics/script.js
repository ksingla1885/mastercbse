// Script for Class 10 Mathematics

// Include base functionality from main script
// (In a real implementation, you might import or copy the main script)

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

// Track section visits (for Mathematics chapters)
document.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', function() {
        sectionsVisited++;
    });
});

// Note: navigateToChapter is defined in each chapter's HTML file

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Mathematics-specific enhancements (e.g., for interactive math)
// You can add more features here, like rendering LaTeX equations or interactive graphs
