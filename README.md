# Gig Ignition

**Your Side Hustle, Engineered** — AI-powered gig matching that actually works.

![Gig Ignition](public/logo.png)

## Overview

Gig Ignition is a premium landing page for an AI-powered side hustle platform targeting young adults (18-30). The design features a dark, sophisticated aesthetic with blue and gold accents.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Syne (display) + Outfit (body)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Import the repository
4. Deploy (zero configuration needed)

## Project Structure

```
gig-ignition/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── HowItWorks.tsx   # 3-step process
│   ├── GigTracks.tsx    # Gig categories
│   ├── SocialProof.tsx  # Ticker & stats
│   ├── Features.tsx     # Feature grid
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Footer
├── public/
│   └── logo.png         # Logo asset
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sections fit within viewport on desktop/laptop
- ✅ Smooth scroll animations
- ✅ Interactive cursor glow effect
- ✅ Animated logo with orbiting elements
- ✅ Auto-scrolling social proof ticker
- ✅ Dark premium aesthetic

## License

Private - All rights reserved.
