# Solwara Youth Guardian Website

A rugged yet futuristic website for Solwara Youth Guardian (SYG INC) built with simple HTML, CSS, and JavaScript, featuring a 60% blue, 30% green, 10% orange color scheme.

## Features

- **Rugged futuristic design** with angular geometric shapes and tech-inspired elements
- **60% Blue, 30% Green, 10% Orange color scheme** representing ocean, forest, and sunset
- **Floating draggable radial toggle menu** with circular navigation expansion
- **Tech-inspired grid patterns and overlays** for a modern aesthetic
- **Animated backgrounds** with waves, bubbles, and floating particles
- **Smooth animations and hover effects** for an engaging user experience
- **Fully responsive** - works perfectly on mobile, tablet, and desktop
- **Easy to customize** - simple code structure that anyone can edit

## Files

- **index.html** - Main HTML file with all 9 sections and eco-friendly content
- **styles.css** - Beautiful CSS styling with natural gradients, animations, and organic shapes
- **script.js** - JavaScript for interactivity (mobile menu, smooth scrolling, form handling)
- **README.md** - This file with instructions

## How to Use

1. **Open the website**: Simply double-click `index.html` to open it in your browser
2. **Edit content**: Open `index.html` in any text editor to change text, add sections, or modify content
3. **Change colors**: Open `styles.css` and modify the color variables at the top
4. **Add functionality**: Open `script.js` to add or modify JavaScript features

## Color Scheme

The website uses a 60% Blue, 30% Green, 10% Orange palette:
- **60% Ocean Blue** - Primary color for navigation, hero section, and main elements (deep ocean, primary blue, light blue)
- **30% Forest Green** - Secondary color for buttons and highlights (deep forest, primary green, light green)
- **10% Sunset Orange** - Accent color for special buttons and features (deep orange, primary orange, light orange)

Plus natural neutrals like sand, cream, and earth tones for a harmonious color scheme.

## Design Highlights

- **Gradient backgrounds** with ocean waves and forest themes
- **Angular geometric shapes** using clip-path for rugged futuristic aesthetic
- **Tech-inspired grid patterns** on navbar and hero section
- **Floating draggable radial toggle menu** with circular navigation expansion
- **Wave and bubble animations** for undersea effect
- **Hover animations** that lift and scale elements
- **Pulse animations** on cards for dynamic feel
- **Smooth transitions** on all interactive elements
- **Backdrop blur** on navigation for modern feel
- **Uppercase typography** with letter-spacing for tech aesthetic

## Sections

1. **Homepage/Hero** - Main banner with ocean wave background and animated entrance
2. **About Us** - Background story, problem statement, mission & vision
3. **Objectives & Activities** - Core objectives, key activities, conservation focus
4. **Community Impact** - Beneficiaries, community support, long-term goals
5. **Team & Structure** - Organizational structure and volunteer opportunities
6. **Innovation & Growth** - Innovation focus and growth strategy with animated cards
7. **Funding & Financial Strength** - Funding sources and financial management
8. **Get Involved** - Volunteer, partnership, and donation options with hover effects
9. **Contact Us** - Contact details and inquiry form with gradient backgrounds

## Customization Tips

### To change the logo:
- Find `<div class="logo">SYG</div>` in index.html and replace "SYG" with your preferred logo text or add an image tag

### To update contact information:
- Find the Contact section in index.html and update the phone, email, and address

### To add social media links:
- Find the social-links div in the Contact section and replace the placeholder URLs with your actual social media URLs
- Currently links to Facebook, Instagram, Twitter, and LinkedIn

### To change colors:
- Go to styles.css and modify the CSS variables at the top under `:root`:
  - `--ocean-deep`, `--ocean-primary`, `--ocean-light` for blues
  - `--forest-deep`, `--forest-primary`, `--forest-light` for greens
  - `--sunset-deep`, `--sunset-primary`, `--sunset-light` for oranges

### To add images:
- Add `<img src="your-image.jpg" alt="description">` tags where you want images to appear
- For best results, use nature-themed images (oceans, forests, wildlife)

### To modify animations:
- Adjust the `transition` and `animation` properties in styles.css
- Change animation durations (currently 0.3s for most transitions)

### To customize the radial toggle menu:
- The radial menu appears in the bottom-right corner by default
- **Drag it** anywhere on the screen by clicking and dragging the toggle button
- **Single-click** the toggle button to expand/collapse and show navigation items
- Navigation items expand in a circle around the toggle with staggered animations
- Click any navigation item to scroll to that section
- The menu includes a contact panel with company information
- Modify the navigation items in the HTML (lines 293-324)
- Modify the colors in the CSS under `.radial-menu` section
- To change the toggle icon, replace the SYG.png image with your own logo

## Responsive Design

The website is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

The mobile menu automatically appears on smaller screens with a hamburger icon.

## No Installation Required

This is a static website that runs directly in your browser. No server, no installation, no dependencies needed. Just open the HTML file and start editing!

## Eco-Friendly Features

- Clean, semantic HTML code
- Minimal JavaScript for essential functionality only
- Optimized CSS with variables for easy maintenance
- No external dependencies or frameworks
- Lightweight and fast-loading
- Accessible and inclusive design

Enjoy your rugged, futuristic, nature-inspired website!
