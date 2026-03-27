// JavaScript for Class 10 Hindi index page

document.addEventListener('DOMContentLoaded', function() {
    console.log('Class 10 Hindi page loaded');

    // Add click event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default navigation to the chapter folder
            // The href points to chapter folder, which has index.html
            window.location.href = this.href;
        });
    });
});
