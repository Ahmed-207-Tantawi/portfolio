# Ahmed Samer Tantawi - AI Engineer Portfolio

A modern, minimalist portfolio website showcasing AI and Machine Learning expertise.

## 🎨 Design Features

- **Modern Swiss-style aesthetic** with clean typography
- **Neutral color palette** (whites, soft greys, charcoal) with tech-blue accents
- **Fully responsive** design for all devices
- **Smooth animations** and micro-interactions
- **Professional layout** with ample whitespace

## 📁 Files

- `index.html` - Main portfolio page
- `styles.css` - Complete styling and design system
- `script.js` - Interactive features and animations
- `assets/` - Folder for images (currently using SVG placeholders)

## 🚀 How to View

1. **Simply open the `index.html` file** in any modern web browser:
   - Double-click `index.html`, or
   - Right-click → Open with → Your preferred browser

2. **For local development server** (optional):

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using Node.js (if you have http-server installed)
   npx http-server
   ```

   Then navigate to `http://localhost:8000`

## 📷 Replacing Placeholder Images

The website currently uses SVG placeholders for images. Replace these with your actual content:

### Images to Add:

1. **Your Professional Headshot**
   - Replace the placeholder in the hero section
   - Recommended size: 800x800px (square)
   - Format: JPG or PNG
   - Location: Save as `assets/headshot.jpg` or `headshot.png`

2. **Healthcare AI Dashboard Screenshot**
   - Screenshot of your Streamlit triage prediction app
   - Recommended size: 1600x1000px (16:10 ratio)
   - Save as: `assets/healthcare-ai.png`

3. **Waste Sorting Robot YOLO Detection**
   - Screenshot showing bounding boxes and detection confidence
   - Recommended size: 1600x1000px (16:10 ratio)
   - Save as: `assets/waste-robot.png`

4. **Company Logos**
   - CIB Bank logo: `assets/cib-logo.png`
   - Telecom Egypt logo: `assets/telecom-logo.png`
   - Recommended size: 240x240px (transparent background preferred)

### How to Update Images in HTML:

1. Open `index.html` in a text editor
2. Search for `placeholder-image` or `placeholder-project-image` or `placeholder-logo`
3. Replace the placeholder `<div>` with an `<img>` tag:

```html
<!-- Replace this: -->
<div class="placeholder-image">...</div>

<!-- With this: -->
<img src="assets/headshot.jpg" alt="Ahmed Samer Tantawi" />
```

## ✏️ Customizing Content

### Update Contact Information:

In `index.html`, find and update these links:

```html
<!-- Email -->
<a href="mailto:your.email@example.com" class="btn btn-primary">Get In Touch</a>

<!-- LinkedIn -->
<a
  href="https://linkedin.com/in/yourprofile"
  target="_blank"
  class="btn btn-secondary"
  >LinkedIn</a
>
```

### Adding More Sections:

Follow the existing pattern in the HTML. Each section uses:

- `.container` for max-width and padding
- `.section-header` for titles
- Grid layouts (`.stats-grid`, `.services-grid`, etc.)

## 🎨 Color Customization

To change the color scheme, edit the CSS custom properties in `styles.css`:

```css
:root {
  --color-primary: #2563eb; /* Main blue accent */
  --color-primary-dark: #1d4ed8; /* Darker blue for hovers */
  --color-primary-light: #3b82f6; /* Lighter blue for gradients */

  /* Change these to your preferred colors */
}
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Interactive Features

- Smooth scrolling navigation
- Fade-in animations on scroll
- Typing animation in hero section
- Animated stat counters
- Hover effects on cards and buttons
- Parallax effect on hero background

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository
2. Push these files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify

1. Drag and drop the entire folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with a custom URL

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow the prompts

## 💡 Tips

- **Use high-quality images** - This is a portfolio, first impressions matter
- **Test on mobile** - Most visitors will view on mobile devices
- **Update regularly** - Keep your projects and skills current
- **Add analytics** - Consider Google Analytics to track visitors
- **SEO optimization** - Update meta descriptions and add Open Graph tags

## 📧 Support

If you need any modifications or have questions about the design, feel free to reach out!

---

**Built with modern web technologies** - HTML5, CSS3, Vanilla JavaScript
