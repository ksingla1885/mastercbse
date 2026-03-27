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

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNav() {
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
    
    window.addEventListener('scroll', highlightNav);
    
    // Toggle code visibility
    const showCodeButtons = document.querySelectorAll('.btn-show-code');
    
    showCodeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const codeContainer = document.getElementById(targetId);
            
            // Toggle the 'show' class
            codeContainer.classList.toggle('show');
            
            // Update button text
            if (codeContainer.classList.contains('show')) {
                this.textContent = 'Hide Code';
            } else {
                this.textContent = 'Show Code';
            }
        });
    });
    
    // Add copy to clipboard functionality for code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.title = 'Copy to clipboard';
        copyButton.textContent = 'Copy';
        
        // Style the copy button
        copyButton.style.position = 'absolute';
        copyButton.style.top = '0.5rem';
        copyButton.style.right = '0.5rem';
        copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '0.25rem';
        copyButton.style.padding = '0.25rem 0.5rem';
        copyButton.style.color = '#ecf0f1';
        copyButton.style.cursor = 'pointer';
        copyButton.style.fontSize = '0.8rem';
        copyButton.style.transition = 'all 0.2s ease';
        
        // Add hover effect
        copyButton.addEventListener('mouseover', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        copyButton.addEventListener('mouseout', () => {
            if (copyButton.textContent !== 'Copied!') {
                copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
        
        // Add click event to copy code
        copyButton.addEventListener('click', () => {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(() => {
                // Visual feedback
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.background = '#2ecc71';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
        
        // Add copy button to code block
        const preElement = codeBlock.parentElement;
        preElement.style.position = 'relative';
        preElement.style.paddingTop = '2rem';
        preElement.appendChild(copyButton);
    });
    
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.syntax-card, .program-card').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Initialize highlightNav to set initial active state
    highlightNav();
});
