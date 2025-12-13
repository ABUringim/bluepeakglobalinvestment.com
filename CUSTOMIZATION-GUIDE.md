# Website Customization Guide

## Easy Customizations (No Coding Required)

### 1. Change Text Content
**Location**: All HTML files
**What to edit**: Text between HTML tags

Example:
```html
<h2>Powering Progress Through Strategic Global Investments</h2>
```
Simply change the text between `>` and `<`

### 2. Update Contact Information
**Files to edit**: All HTML files (footer section)
- Email: Search for "bluepeakglobalinvestment@gmail.com"
- Phone: Search for "+234 803 561 9489"
- Address: Search for "No. S11 Alhamsad Tower"

### 3. Add Your Logo
**File**: All HTML files
**Find**: `<div class="logo"><h1>Blue Peak Global Investment Limited</h1></div>`
**Replace with**:
```html
<div class="logo">
    <img src="images/logo.png" alt="Blue Peak Global" style="height: 50px;">
</div>
```

## Intermediate Customizations

### 1. Change Color Scheme
**File**: `css/styles.css`
**Lines**: 8-14

```css
:root {
    --primary-navy: #1a2b4a;      /* Change main color */
    --secondary-grey: #e8e8e8;    /* Change background color */
    --accent-gold: #d4af37;       /* Change accent color */
    --white: #ffffff;
    --text-dark: #333333;
    --text-light: #666666;
}
```

**Popular Color Schemes:**
- **Professional Blue**: #003366, #0066cc, #ffcc00
- **Modern Green**: #2d5016, #4a7c2c, #8bc34a
- **Corporate Red**: #8b0000, #dc143c, #ffd700
- **Tech Purple**: #4a148c, #7b1fa2, #ba68c8

### 2. Change Fonts
**File**: All HTML files (head section)
**Current**: Montserrat & Open Sans

Replace this line:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

**Popular Alternatives:**
- **Roboto & Lato**: `family=Roboto:wght@400;700&family=Lato:wght@400;700`
- **Poppins & Inter**: `family=Poppins:wght@400;600&family=Inter:wght@400;600`
- **Playfair & Source Sans**: `family=Playfair+Display:wght@700&family=Source+Sans+Pro:wght@400;600`

Then update `css/styles.css`:
```css
body {
    font-family: 'Your-Body-Font', sans-serif;
}

h1, h2, h3, h4 {
    font-family: 'Your-Heading-Font', sans-serif;
}
```

### 3. Adjust Gallery Speed
**File**: `css/styles.css`
**Line**: ~95

```css
animation: scroll 60s linear infinite;  /* Change 60s to speed up/slow down */
```
- Faster: Use 30s or 40s
- Slower: Use 80s or 100s

### 4. Modify Hero Section
**File**: `index.html`
**Section**: Lines 40-48

Change headline, subtitle, or add background image:
```css
/* In css/styles.css, find .hero section */
.hero {
    background-image: url('../images/your-hero-image.jpg');
    background-size: cover;
    background-position: center;
}
```

## Advanced Customizations

### 1. Add Social Media Links
**File**: All HTML files (footer section)

Add before closing `</footer>`:
```html
<div class="social-links" style="text-align: center; margin-top: 2rem;">
    <a href="https://facebook.com/yourpage" style="color: var(--accent-gold); margin: 0 1rem; font-size: 1.5rem;">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com/yourpage" style="color: var(--accent-gold); margin: 0 1rem; font-size: 1.5rem;">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com/company/yourpage" style="color: var(--accent-gold); margin: 0 1rem; font-size: 1.5rem;">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

### 2. Enhance AI Chat Bot
**File**: `js/script.js`
**Lines**: 25-40

Add more responses:
```javascript
const responses = {
    'services': 'We offer 7 core services...',
    'pricing': 'For pricing information, please contact us at...',
    'hours': 'We are open Monday-Friday 8AM-5PM...',
    // Add more keywords and responses
};
```

### 3. Add Email Functionality to Contact Form
**File**: `contact.html`

Replace form action:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Or use services like:
- Formspree.io (free tier available)
- Netlify Forms (if hosted on Netlify)
- EmailJS (JavaScript-based)

### 4. Add Google Analytics
**File**: All HTML files (before closing `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Add Loading Animation
**File**: All HTML files (after opening `<body>`)

```html
<div id="loader" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #1a2b4a; display: flex; align-items: center; justify-content: center; z-index: 9999;">
    <div style="color: #d4af37; font-size: 2rem;">Loading...</div>
</div>

<script>
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });
</script>
```

### 6. Add Testimonials Slider
**File**: Create new section in `index.html`

```html
<section class="testimonials-slider">
    <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <!-- Add testimonial cards here -->
    </div>
</section>
```

### 7. Add Newsletter Signup
**File**: `index.html` or footer of all pages

```html
<div class="newsletter" style="background: var(--accent-gold); padding: 3rem 2rem; text-align: center;">
    <h3>Stay Updated</h3>
    <p>Subscribe to our newsletter for industry insights</p>
    <form style="max-width: 500px; margin: 0 auto; display: flex; gap: 1rem;">
        <input type="email" placeholder="Your email" style="flex: 1; padding: 0.8rem; border: none; border-radius: 5px;">
        <button type="submit" style="padding: 0.8rem 2rem; background: var(--primary-navy); color: white; border: none; border-radius: 5px; cursor: pointer;">Subscribe</button>
    </form>
</div>
```

## Tips for Safe Customization

1. **Always backup** before making changes
2. **Test locally** before uploading to live site
3. **Use browser developer tools** (F12) to test CSS changes
4. **Validate HTML** at validator.w3.org
5. **Check mobile** responsiveness after changes
6. **Clear cache** (Ctrl+F5) to see changes

## Common Issues & Solutions

**Problem**: Changes not showing
**Solution**: Clear browser cache (Ctrl+F5)

**Problem**: Layout broken after changes
**Solution**: Check for missing closing tags or brackets

**Problem**: Colors not changing
**Solution**: Ensure you're editing the `:root` variables in styles.css

**Problem**: Images not displaying
**Solution**: Check file paths are correct and case-sensitive

## Need Professional Help?

For complex customizations or custom features:
- Hire a web developer on Fiverr or Upwork
- Contact local web development agencies
- Use website builders like WordPress for easier management

---

**Happy customizing! Start small and test often.**
