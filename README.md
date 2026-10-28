# Baraka Byukusenge - Portfolio

A production-quality personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The portfolio will be available at http://localhost:5173/

## 🎨 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Smooth Animations**: Motion (Framer Motion successor) for polished interactions
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Meta tags and semantic HTML for search engines

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── assets/
│   │   ├── images/          # Project screenshots and profile photo
│   │   └── certificates/    # Certificate files (PNG/PDF)
│   ├── components/
│   │   ├── layout/          # Navigation, Footer
│   │   ├── sections/        # Hero, Projects, Journey, Skills, etc.
│   │   └── ui/              # Reusable UI components (Button, Card, Modal, etc.)
│   ├── data/
│   │   ├── projects.ts      # Project data
│   │   ├── skills.ts        # Skills by category
│   │   ├── journey.ts       # TheGym training phases
│   │   ├── certificates.ts  # Certificate metadata
│   │   └── social.ts        # Contact info and social links
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles + Tailwind
├── index.html
└── package.json
```

## 🔧 Customization Required

Before deploying, update the following placeholders with your real information:

### 1. Contact Information (`src/data/social.ts`)

```typescript
export const contactInfo = {
  email: 'your.email@example.com',        // Update with your email
  github: 'https://github.com/yourusername',  // Update with your GitHub profile
  linkedin: 'https://linkedin.com/in/yourprofile', // Update with your LinkedIn
  location: 'Kigali, Rwanda',
};
```

### 2. Social Links Throughout Components

The following files contain placeholder social links that need updating:

- `src/components/sections/Hero.tsx` (lines 8-10)
- `src/components/sections/Contact.tsx` (lines 24-36)
- `src/components/layout/Footer.tsx` (lines 20-22)

Replace:
- `mailto:hello@example.com` → your real email
- `https://github.com/` → your GitHub profile URL
- `#` (LinkedIn) → your LinkedIn profile URL

### 3. Optional: Profile Photo

The portfolio uses `/src/assets/images/profile.png`. If you want to update it:

1. Replace the file with your new photo (keep the same filename)
2. Or update the import in `src/components/sections/Hero.tsx`

### 4. Optional: Update Projects

Edit `src/data/projects.ts` to add, remove, or modify projects. Each project includes:
- Title, description, and context
- Technologies and concepts
- GitHub and live URLs
- Project screenshot path

## 🎨 Design System

The portfolio uses a sophisticated design system with:

- **Brand Color**: Green accent (`brand-500` through `brand-950`)
- **Surface Colors**: Stone palette for backgrounds and borders
- **Typography**: Inter (sans-serif) + Source Serif 4 (display)
- **Components**: Modular, reusable UI components

To customize colors, edit the design tokens in `src/index.css` under the `@theme` section.

## 📦 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
npm run build
# Upload the dist folder to gh-pages branch
```

## 🛠 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Motion** - Animations
- **Lucide React** - Icons

## 📄 License

This portfolio template is open source. Feel free to use it as inspiration for your own portfolio.

## 🙏 Credits

Built with care for Baraka Byukusenge by Claude Code.

---

**Note**: Remember to update all placeholder contact information before deploying!
