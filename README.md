# 💕 Valentine's Day React App

A beautiful, romantic, interactive single-page application built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Created as a special gift for your partner.

## ✨ Features

- **Welcome Page** - Animated greeting with shimmering gradient text
- **Memory Game** - Interactive card matching game with 12 cards (6 pairs)
- **Password Challenge** - Romantic date validation with shake animation
- **Reasons Page** - Interactive hearts revealing why you love them
- **Love Letter** - Typewriter effect displaying a heartfelt message

## 🎨 Visual Design

- **Soft pastel pink and dreamy theme**
- **Glassmorphism UI** with translucent cards and backdrop blur
- **Animated background orbs** with pulsing effects
- **Smooth Framer Motion transitions** between pages
- **Gradient text effects** on headings
- **Web Audio API sound effects** (no external files)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
- The app will be running at `http://localhost:5173`
- Open this URL in your browser

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
valentine-react-app/
├── src/
│   ├── pages/
│   │   ├── WelcomePage.tsx      # Welcome screen
│   │   ├── GamePage.tsx         # Memory card game
│   │   ├── PasswordPage.tsx     # Date validation
│   │   ├── ReasonsPage.tsx      # Reasons list
│   │   └── LetterPage.tsx       # Love letter with typewriter
│   ├── utils/
│   │   └── audio.ts             # Web Audio API sounds
│   ├── App.tsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind directives
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎮 How It Works

### Page Flow

1. **Welcome** → Click "Start" button
2. **Memory Game** → Match all 6 pairs of emojis
3. **Password** → Enter special date (01102024)
4. **Reasons** → Click hearts to reveal reasons
5. **Letter** → Read the love letter with typewriter effect

### Customization

#### Change the Special Date

Edit `src/pages/PasswordPage.tsx`:
```typescript
const CORRECT_PASSWORD = '01102024'; // Change to your date
```

#### Customize Reasons

Edit `src/pages/ReasonsPage.tsx`:
```typescript
const reasons = [
  { title: 'Your Title', text: 'Your reason...' },
  // Add more reasons
];
```

#### Modify Love Letter

Edit `src/pages/LetterPage.tsx`:
```typescript
const letterText = `Your custom letter text here...`;
```

#### Change Colors

Edit `tailwind.config.js` for theme colors or modify gradients in `App.css`.

## 🎵 Sound Effects

The app uses the Web Audio API to generate sounds programmatically:

- **Pop** - When revealing reasons
- **Ding** - On correct actions
- **Error** - On wrong password
- **Cheer** - On game completion
- **Flip** - Card flip sound

All sounds are generated in-code, no audio files needed!

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Netlify

1. Build: `npm run build`
2. Drag `dist/` folder to https://app.netlify.com/drop

### GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Web Audio API** - Sound effects

## 💖 Made With Love

This application was crafted with care as a special Valentine's Day gift.

## 📝 License

Free to use for personal romantic purposes! 💕

---

**Created with 💕 for someone special**
