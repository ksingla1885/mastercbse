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

    // Copy to clipboard functionality
    function setupCopyButtons() {
        const copyButtons = document.querySelectorAll('.copy-button');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const codeBlock = this.parentElement.querySelector('code');
                const code = codeBlock.textContent;
                
                navigator.clipboard.writeText(code).then(() => {
                    // Visual feedback
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.background = '#10b981';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = 'rgba(255, 255, 255, 0.1)';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            });
        });
    }

    // Add copy buttons to all code blocks
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(codeBlock => {
            // Skip if already has a copy button
            if (codeBlock.parentElement.querySelector('.copy-button')) return;
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy';
            
            // Style the copy button
            copyButton.style.position = 'absolute';
            copyButton.style.top = '0.5rem';
            copyButton.style.right = '0.5rem';
            copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
            copyButton.style.border = 'none';
            copyButton.style.borderRadius = '0.25rem';
            copyButton.style.padding = '0.25rem 0.5rem';
            copyButton.style.color = '#e2e8f0';
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
            
            // Add to DOM
            const preElement = codeBlock.parentElement;
            preElement.style.position = 'relative';
            preElement.style.paddingTop = '2rem';
            preElement.appendChild(copyButton);
        });
        
        // Set up event listeners for the new buttons
        setupCopyButtons();
    }

    // Initialize copy buttons
    addCopyButtons();

    // Try it yourself functionality
    const tryItButtons = document.querySelectorAll('.btn-try-it');
    
    tryItButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeType = this.getAttribute('data-type');
            const codeBlock = this.parentElement.querySelector('code');
            const code = codeBlock.textContent;
            
            // In a real implementation, you might want to open a code editor
            // For now, we'll just show an alert
            alert('This would open a code editor with the following code:\n\n' + code);
        });
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
    document.querySelectorAll('.element-card, .property-card, .project-card').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    // Initialize highlightNav to set initial active state
    highlightNav();

    // Add syntax highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
