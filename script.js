// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for copying
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, Ctrl+U, F12
    if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'p' || e.key === 'u')) ||
        e.key === 'F12'
    ) {
        e.preventDefault();
        return false;
    }
});

// Loading Spinner
window.addEventListener('load', function() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadingSpinner) {
        setTimeout(() => {
            loadingSpinner.classList.add('hidden');
        }, 500);
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Page Progress Indicator
const pageProgress = document.getElementById('pageProgress');
if (pageProgress) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        pageProgress.style.width = scrollPercent + '%';
    });
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const subject = form.querySelectorAll('input[type="text"]')[1].value;
    const message = form.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Floating Radial Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.radial-menu');
    const toggle = document.querySelector('.radial-toggle');
    const items = document.querySelectorAll('.radial-item');
    
    if (menu && toggle && items.length > 0) {
        const RADIUS = 110;
        const TOTAL = items.length;
        const TOGGLE_SIZE = 70;
        
        // Set initial position
        menu.style.left = (window.innerWidth - 110) + 'px';
        menu.style.top = (window.innerHeight - 150) + 'px';
        
        // Make menu draggable
        let isDragging = false;
        let dragMoved = false;
        let startX = 0;
        let startY = 0;
        let initialLeft = 0;
        let initialTop = 0;
        
        toggle.addEventListener('mousedown', function(e) {
            isDragging = true;
            dragMoved = false;
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = parseInt(menu.style.left);
            initialTop = parseInt(menu.style.top);
            e.preventDefault();
        });
        
        // Touch events for mobile
        toggle.addEventListener('touchstart', function(e) {
            isDragging = true;
            dragMoved = false;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            initialLeft = parseInt(menu.style.left);
            initialTop = parseInt(menu.style.top);
            e.preventDefault();
        }, { passive: false });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                dragMoved = true;
            }
            
            // Clamp position to keep menu on screen
            const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
            const newX = clamp(initialLeft + dx, TOGGLE_SIZE / 2, window.innerWidth - TOGGLE_SIZE / 2);
            const newY = clamp(initialTop + dy, TOGGLE_SIZE / 2, window.innerHeight - TOGGLE_SIZE / 2);
            
            menu.style.left = newX + 'px';
            menu.style.top = newY + 'px';
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            
            const touch = e.touches[0];
            const dx = touch.clientX - startX;
            const dy = touch.clientY - startY;
            
            if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                dragMoved = true;
            }
            
            // Clamp position to keep menu on screen
            const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
            const newX = clamp(initialLeft + dx, TOGGLE_SIZE / 2, window.innerWidth - TOGGLE_SIZE / 2);
            const newY = clamp(initialTop + dy, TOGGLE_SIZE / 2, window.innerHeight - TOGGLE_SIZE / 2);
            
            menu.style.left = newX + 'px';
            menu.style.top = newY + 'px';
            e.preventDefault();
        }, { passive: false });
        
        document.addEventListener('mouseup', function(e) {
            if (isDragging) {
                isDragging = false;
            }
        });
        
        document.addEventListener('touchend', function(e) {
            if (isDragging) {
                isDragging = false;
            }
        });
        
        // Helper function to close menu
        function closeMenu() {
            menu.classList.remove('active');
            items.forEach(item => {
                item.style.transform = 'translate(-50%, -50%) scale(0)';
                item.style.opacity = '0';
                item.style.transitionDelay = '0ms';
            });
        }
        
        // Single click to toggle menu
        toggle.addEventListener('click', function(e) {
            if (!dragMoved) {
                e.stopPropagation();
                menu.classList.toggle('active');
                
                // Calculate and apply radial positions
                items.forEach((item, i) => {
                    const angle = (i * 360) / TOTAL - 90;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * RADIUS;
                    const y = Math.sin(rad) * RADIUS;
                    
                    if (menu.classList.contains('active')) {
                        item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
                        item.style.opacity = '1';
                        item.style.transitionDelay = `${i * 30}ms`;
                    } else {
                        item.style.transform = 'translate(-50%, -50%) scale(0)';
                        item.style.opacity = '0';
                        item.style.transitionDelay = '0ms';
                    }
                });
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Handle navigation clicks
        items.forEach(item => {
            item.addEventListener('click', function(e) {
                closeMenu();
            });
        });

        // Handle contact panel button click
        const contactButton = document.querySelector('.contact-panel-button');
        if (contactButton) {
            contactButton.addEventListener('click', function(e) {
                closeMenu();
            });
        }
    }
});
