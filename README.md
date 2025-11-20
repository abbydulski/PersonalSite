# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful full-screen sections with background images
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 Smooth scrolling navigation
- 💅 Styled with Tailwind CSS
- 🔍 SEO-friendly

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Background Images

Create a `public/images` folder and add your photos:

```
public/
  images/
    hero-bg.jpg       (Charles River or Golden Gate Bridge)
    about-bg.jpg      (Your choice of background)
    skills-bg.jpg     (Your choice of background)
    projects-bg.jpg   (Your choice of background)
    contact-bg.jpg    (Your choice of background)
```

### 3. Customize Your Content

Edit the following files to personalize your portfolio:

- `app/layout.tsx` - Update the site title and description
- `components/Hero.tsx` - Add your name and tagline
- `components/About.tsx` - Write your bio
- `components/Skills.tsx` - List your skills and technologies
- `components/Projects.tsx` - Showcase your projects
- `components/Contact.tsx` - Add your contact information and social links

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js and configure everything
7. Click "Deploy"

That's it! Your site will be live in minutes.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
└── public/
    └── images/         # Your background images
```

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for hosting

## License

MIT

