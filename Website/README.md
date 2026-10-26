# Aniket Kumar — Personal Portfolio Website

A premium, modern, interactive, animated 3D developer portfolio inspired by high-end creative portfolios built with Wix Studio. Tailored for recruiters, software engineers, and hackathon judges.

## 🚀 Live Preview & Features

- **3D Cartoon Avatar**: Custom Pixar/Overwatch-style 3D developer avatar representing Aniket Kumar, with real-time mouse parallax tilt physics and floating orbital tech badges.
- **Three.js Particle Background**: Interactive WebGL starfield and rotating geometric polyhedra reacting seamlessly to mouse position and scroll depth.
- **Cinematic Visual Design**: Deep charcoal/black palette (`#06070a`) with glowing electric purple, cyan, and blue accents, glassmorphism panels, and clean visual hierarchy.
- **First-Principles CS & Systems Showcase**: Dedicated sections for C/C++, Linux CLI, Memory Management, Relational Databases (MySQL/SQL), and Data Structures & Algorithms.
- **Interactive Systems Terminal**: Live in-browser CLI where visitors can execute commands (`help`, `whoami`, `skills`, `projects`, `education`, `contact`, `sudo hire`).
- **Featured Project Concept Specifications**: Clean architectural breakdown and spec modals for *Household Service Finder*, *AI-Powered Product Recommendation System*, *Personal Portfolio*, and *Systems & Algorithms Lab*.
- **Education & Learning Journey**: Chronological milestones at **REVA University, Bengaluru**, highlighting foundational coursework and growth.
- **Contact Channels & Honest Form**: Validated contact form triggering client email generation with confetti celebrations, direct email copy button, and verified LinkedIn link.
- **Accessibility & Motion Controls**: Built-in reduced motion toggle button and native `prefers-reduced-motion` detection, custom glowing cursor on desktop (touch-friendly on mobile).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D & Graphics**: [Three.js](https://threejs.org/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Badges
- **Micro-Interactions**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono

---

## 📁 Project Structure

```
Website/
├── public/
│   ├── avatar-3d.jpg       # High-res 3D cartoon avatar
│   └── favicon.svg         # Glowing 'AK' developer monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx           # Split narrative + 4 systems pillars + code inspector
│   │   ├── Contact.tsx         # Validated message form + email copy + socials
│   │   ├── CustomCursor.tsx    # Smooth trailing glowing desktop cursor
│   │   ├── Footer.tsx          # Live Bengaluru IST clock + quick links
│   │   ├── Hero.tsx            # Full-screen hero + 3D avatar tilt card + CTAs
│   │   ├── Icons.tsx           # Crisp GitHub and LinkedIn vector icons
│   │   ├── Journey.tsx         # REVA University education & milestones timeline
│   │   ├── LoadingScreen.tsx   # Cinematic boot loader with skip option
│   │   ├── Navbar.tsx          # Glassmorphism header + mobile drawer + motion toggle
│   │   ├── Projects.tsx        # 3D project cards + architecture specs modal
│   │   ├── Skills.tsx          # Grouped skills + progress-free indicators + spotlight
│   │   ├── Terminal.tsx        # Interactive Linux CLI playground
│   │   └── ThreeBackground.tsx # Three.js WebGL canvas particle system
│   ├── data/
│   │   └── portfolioData.ts    # Centralized configuration (editable placeholders)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html              # SEO metadata, OpenGraph tags, Google Fonts
├── package.json
└── vite.config.ts
```

---

## ✏️ How to Customize Your Details

All personal profile information, links, projects, and skills are centralized in:
📂 **`src/data/portfolioData.ts`**

Open this file to easily update:
1. **GitHub Profile**: Replace `"https://github.com/aniket-kumar-dev"` with your actual GitHub username.
2. **Email Address**: Replace `"aniket.kumar.dev@example.com"` with your actual preferred email.
3. **Projects**: Add real repository links, screenshots, or live demo URLs when available.
4. **Milestones**: Add semester updates, hackathon achievements, or certifications as you progress.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

This portfolio builds into a static bundle in `dist/` that can be deployed to any static host with zero configuration:
- **Vercel**: Run `vercel` or link your GitHub repository.
- **Netlify**: Drag and drop the `dist/` folder or connect via Git.
- **GitHub Pages**: Deploy the `dist/` folder using `gh-pages`.
