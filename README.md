# Gig Ignition 🚀

**Turn Downtime into Uptime** — The AI Coach that matches you to the perfect side hustle and guides you to your first $1,000.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gig-ignition.git
cd gig-ignition
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gig-ignition/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Home page
│   └── sitemap.ts       # SEO sitemap
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── IgnitionEngine.tsx   # How it works
│   ├── HustleTracks.tsx     # Trading cards
│   ├── SocialProof.tsx      # Live wins + safety
│   ├── ParentalIntel.tsx    # For parents section
│   ├── CTASection.tsx       # Call to action
│   ├── Footer.tsx           # Footer
│   └── BackgroundEffects.tsx # Particles & grid
├── public/
│   └── Gigignition-Logo.jpg # Logo asset
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## Design System: "Solar Velocity"

### Colors
- **Stratosphere Blue**: `#007AFF` (Primary)
- **Ignition Gold**: `#FFD700` (Accent)
- **Deep Navy**: `#0F172A` (Text)
- **Canvas White**: `#FFFFFF` (Background)

### Typography
- **Headlines**: Orbitron (NASA/Launch feel)
- **Body**: DM Sans

### Key Features
- Glassmorphism cards
- 3D tilting trading cards
- Floating particle animations
- Smooth scroll animations
- Responsive design

## License

MIT License - feel free to use for your own projects!

---

Built with 💛 by Gig Ignition Team
