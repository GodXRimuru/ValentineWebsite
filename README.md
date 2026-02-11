# 💕 Valentine's Day Interactive Website

A beautiful, romantic, and interactive Valentine's Day website featuring a memory card game, reasons why you're loved, and a heartfelt letter. Perfect for sharing with someone special!

## ✨ Features

- **Welcome Screen**: Animated greeting with floating hearts
- **Memory Card Game**: Interactive matching game with move counter
- **Reasons Section**: Expandable cards revealing why they're loved
- **Love Letter**: Beautifully formatted personal message
- **Animations**: Smooth transitions, confetti effects, sparkles, and floating hearts
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Accessible**: Keyboard navigation and screen reader support

## 🚀 How to Use

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Repository name: `valentine-website` (or any name you prefer)
   - Make it **Public**
   - Click "Create repository"

3. **Upload the files**:
   - Click "uploading an existing file"
   - Drag and drop all files from this folder:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
   - Click "Commit changes"

4. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment

5. **Get your website URL**:
   - Your site will be live at: `https://YOUR-USERNAME.github.io/valentine-website/`
   - Share this link with your special someone!

### Option 2: Local Testing

1. Open the folder containing these files
2. Double-click `index.html`
3. The website will open in your default browser

### Option 3: Other Hosting Services

You can also upload these files to:
- **Netlify**: Drag and drop the folder at https://app.netlify.com/drop
- **Vercel**: Import the folder at https://vercel.com/new
- **Any web hosting service** that supports static HTML files

## 📝 Customization

### Changing the Love Letter

Edit the letter content in `index.html` around line 123-145:

```html
<div class="letter-content">
    <p>Your custom message here...</p>
    <!-- Add more paragraphs as needed -->
</div>
```

### Changing Reasons

Edit the reasons in `index.html` around lines 74-120. Each reason follows this structure:

```html
<div class="reason-item" onclick="toggleReason(this)">
    <div class="reason-header">
        <span class="reason-heart">♥</span>
        <span class="reason-title">Your Title</span>
    </div>
    <div class="reason-content">
        Your message here.
    </div>
</div>
```

### Changing Colors

Edit the color scheme in `styles.css`:

- Primary pink: `#a43867`
- Secondary pink: `#d4698f`
- Background gradient: Modify the `body` gradient in CSS

### Adding/Removing Game Cards

In `script.js`, modify the `symbols` array (line 7):

```javascript
const symbols = ['♥', '♥', '♣', '♣', '♦', '♦', '♠', '♠', '♪', '♪', '★', '★'];
```

Always use pairs (2 of each symbol).

## 🎨 Design Details

- **Font**: System fonts for optimal performance
- **Colors**: Romantic pink and purple gradient
- **Animations**: CSS-based for smooth performance
- **Responsive**: Mobile-first design
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Touch-friendly buttons (min 44px tap targets)
- Responsive layouts
- Optimized font sizes
- Smooth animations on all devices

## ♿ Accessibility Features

- Keyboard navigation support
- Focus indicators for interactive elements
- ARIA labels for screen readers
- Reduced motion support for users who prefer it
- High contrast text for readability

## 🐛 Troubleshooting

**The website doesn't look right:**
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Check that your browser is up to date

**GitHub Pages isn't working:**
- Wait 2-3 minutes after enabling Pages
- Make sure the repository is set to "Public"
- Check that you selected the "main" branch in Settings > Pages

**Game isn't working:**
- Make sure JavaScript is enabled in your browser
- Try refreshing the page
- Check browser console for errors (F12)

## 💝 Credits

Created with love for Valentine's Day 2026.

## 📄 License

Feel free to use and customize this website for personal use. Please don't sell or redistribute without modification.

---

**Made with 💕 for someone special**
