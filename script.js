// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for copying
document.addEventListener('keydown', function(e) {
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
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        pageProgress.style.width = scrollPercent + '%';
    });
}

// Mobile menu toggle (fallback)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!navLinks) return;
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', isExpanded);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });

            // Update active state in nav
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Active link highlighting on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                    // Ensure active link is visible in horizontal scroll on mobile
                    if (window.innerWidth <= 768 && link.scrollIntoView) {
                        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                    }
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]')?.value;
    const email = form.querySelector('input[type="email"]')?.value;
    const message = form.querySelector('textarea')?.value;

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
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(61, 41, 20, 0.4)';
    }
});

// Floating Radial Menu - Fully Draggable on Phone and Computer with Pointer Events
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.radial-menu');
    const toggle = document.querySelector('.radial-toggle');
    const items = document.querySelectorAll('.radial-item');

    if (!menu || !toggle || items.length === 0) return;

    const TOTAL = items.length;

    function clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }

    // Set initial position
    function initPosition() {
        const btnSize = toggle.offsetWidth || 65;
        const padding = 15;
        const maxX = window.innerWidth - btnSize - padding;
        const maxY = window.innerHeight - btnSize - padding;

        const savedX = sessionStorage.getItem('syg_menu_x');
        const savedY = sessionStorage.getItem('syg_menu_y');

        let left = maxX;
        let top = maxY - 25;

        if (savedX !== null && savedY !== null) {
            const parsedX = parseInt(savedX, 10);
            const parsedY = parseInt(savedY, 10);
            if (!isNaN(parsedX) && !isNaN(parsedY)) {
                left = clamp(parsedX, padding, maxX);
                top = clamp(parsedY, padding, maxY);
            }
        }

        menu.style.left = left + 'px';
        menu.style.top = top + 'px';
        menu.style.right = 'auto';
        menu.style.bottom = 'auto';
    }

    // Initialize after layout paint
    requestAnimationFrame(initPosition);

    // Re-clamp on window resize/orientationchange
    window.addEventListener('resize', function() {
        const btnSize = toggle.offsetWidth || 65;
        const padding = 15;
        const maxX = window.innerWidth - btnSize - padding;
        const maxY = window.innerHeight - btnSize - padding;
        const currentLeft = parseInt(menu.style.left, 10) || maxX;
        const currentTop = parseInt(menu.style.top, 10) || maxY;

        menu.style.left = clamp(currentLeft, padding, maxX) + 'px';
        menu.style.top = clamp(currentTop, padding, maxY) + 'px';
    });

    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let hasMoved = false;

    // Pointer Events handle both Touch (iOS/Android) and Mouse/Trackpad (Computer)
    toggle.addEventListener('pointerdown', function(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;

        isDragging = true;
        hasMoved = false;
        dragStartX = e.clientX;
        dragStartY = e.clientY;

        const rect = menu.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;

        toggle.setPointerCapture(e.pointerId);
        menu.classList.add('dragging');
        e.preventDefault();
    });

    toggle.addEventListener('pointermove', function(e) {
        if (!isDragging) return;

        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;

        // Distinguish drag from tap/click (5px threshold)
        if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
            hasMoved = true;
        }

        if (hasMoved) {
            const btnSize = toggle.offsetWidth || 65;
            const padding = 10;
            const minX = padding;
            const maxX = window.innerWidth - btnSize - padding;
            const minY = padding;
            const maxY = window.innerHeight - btnSize - padding;

            const newX = clamp(initialLeft + dx, minX, maxX);
            const newY = clamp(initialTop + dy, minY, maxY);

            menu.style.left = newX + 'px';
            menu.style.top = newY + 'px';
            menu.style.right = 'auto';
            menu.style.bottom = 'auto';
        }
    });

    function finishDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        menu.classList.remove('dragging');

        try {
            toggle.releasePointerCapture(e.pointerId);
        } catch (err) {}

        if (hasMoved) {
            const rect = menu.getBoundingClientRect();
            sessionStorage.setItem('syg_menu_x', Math.round(rect.left));
            sessionStorage.setItem('syg_menu_y', Math.round(rect.top));
        } else {
            // User tapped without moving -> toggle menu open/close
            toggleMenuRadial();
        }
    }

    toggle.addEventListener('pointerup', finishDrag);
    toggle.addEventListener('pointercancel', finishDrag);

    function closeMenu() {
        menu.classList.remove('active');
        items.forEach(item => {
            item.style.transform = 'translate(-50%, -50%) scale(0)';
            item.style.opacity = '0';
            item.style.pointerEvents = 'none';
            item.style.transitionDelay = '0ms';
        });
    }

    function toggleMenuRadial() {
        const isActive = menu.classList.toggle('active');
        const isMobile = window.innerWidth <= 768;
        const RADIUS = isMobile ? 85 : 110;

        items.forEach((item, i) => {
            if (isActive) {
                const angle = (i * 360) / TOTAL - 90;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * RADIUS;
                const y = Math.sin(rad) * RADIUS;

                item.style.transform = `translate(calc(-50% + ${Math.round(x)}px), calc(-50% + ${Math.round(y)}px)) scale(1)`;
                item.style.opacity = '1';
                item.style.pointerEvents = 'auto';
                item.style.transitionDelay = `${i * 25}ms`;
            } else {
                item.style.transform = 'translate(-50%, -50%) scale(0)';
                item.style.opacity = '0';
                item.style.pointerEvents = 'none';
                item.style.transitionDelay = '0ms';
            }
        });
    }

    // Close when tapping outside the menu
    document.addEventListener('pointerdown', function(e) {
        if (!menu.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu when radial item is clicked
    items.forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });

    const contactButton = document.querySelector('.contact-panel-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            closeMenu();
        });
    }
});