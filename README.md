# YWD - Yoga With DashThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern, responsive yoga website built with Next.js, TypeScript, and Tailwind CSS. This project features a clean, calm aesthetic perfect for a yoga practice platform.## Getting Started

## 🚀 Getting StartedFirst, run the development server:

### Prerequisites```bash

npm run dev

- Node.js 18+ # or

- npm or yarnyarn dev

# or

### Installationpnpm dev

# or

1. **Clone the repository**bun dev

   `bash`

   git clone <your-repo-url>

   cd yoga_with_dashOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   ```

   ```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

2. **Install dependencies**

   ```bashThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

   npm install

   ```## Learn More

   ```

3. **Run the development server**To learn more about Next.js, take a look at the following resources:

   ````bash

   npm run dev- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

   ```- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

   ````

4. **Open [http://localhost:3000](http://localhost:3000)** in your browserYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🛠️ Built With## Deploy on Vercel

- **[Next.js 15](https://nextjs.org/)** - React framework with App RouterThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS frameworkCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

## 📁 Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── layout/           # Header, footer, navigation
│   ├── sections/         # Homepage sections
│   └── ui/              # Reusable UI components
├── data/                 # Static data fixtures
│   ├── poses.ts         # Yoga pose data
│   ├── videos.ts        # Video library data
│   ├── playlists.ts     # Playlist collections
│   └── posts.ts         # Blog post data
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configuration
└── styles/             # Global styles
```

## 🎨 Key Features

### ✨ Modern Design

- Clean, calm aesthetic with neutral colour palette
- Responsive design that works on all devices
- Smooth animations with respect for reduced motion preferences
- Glass morphism effects and subtle shadows

### 🌙 Theme System

- Light/dark mode with system preference detection
- No flash of incorrect theme on initial load
- Consistent colour tokens throughout

### 📱 Components

- **Layout**: Responsive header with mobile navigation
- **Sections**: Modular homepage sections
- **UI**: Reusable components (buttons, cards, containers)
- **Accessibility**: Screen reader support and keyboard navigation

### 🧘 Content Structure

- **Poses**: Yoga pose library with alignment and benefits
- **Videos**: Practice video collection with filtering
- **Playlists**: Curated video collections
- **Blog**: Educational content on philosophy and anatomy

## 🔧 Development

### Adding New Content

**Poses**: Edit `src/data/poses.ts`

```typescript
{
  id: "new-pose",
  name: "New Pose Name",
  sanskrit: "Sanskrit Name",
  difficulty: "beginner" | "intermediate" | "advanced",
  alignment: ["Step 1", "Step 2"],
  benefits: ["Benefit 1", "Benefit 2"],
  image: "/poses/new-pose.jpg",
  description: "Pose description"
}
```

**Videos**: Edit `src/data/videos.ts`
**Playlists**: Edit `src/data/playlists.ts`  
**Blog Posts**: Edit `src/data/posts.ts`

### Customising Styles

**Colours**: Update CSS variables in `src/app/globals.css`
**Components**: Modify Tailwind classes in component files
**Typography**: Adjust font settings in `tailwind.config.ts`

### Adding New Pages

Create new pages in the `src/app/` directory following the App Router conventions:

```
src/app/
├── about/
│   └── page.tsx
├── videos/
│   └── page.tsx
└── blog/
    └── page.tsx
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Deployment

This project is optimised for deployment on [Vercel](https://vercel.com/):

1. **Connect your repository** to Vercel
2. **Deploy** - Vercel will automatically detect Next.js and configure build settings
3. **Add environment variables** if needed (none required for basic setup)

### Other Platforms

- **Netlify**: Works with build command `npm run build`
- **Railway**: Supports Next.js out of the box
- **Self-hosted**: Use `npm run build && npm run start`

## 🔐 Environment Variables

Create `.env.local` for local development:

```bash
# Add your environment variables here
# NEWSLETTER_API_KEY=your_api_key
# DATABASE_URL=your_database_url
```

## 📸 Replacing Images

Replace placeholder images in the `/public` directory:

- `/public/logo-light.png` - Light mode logo
- `/public/logo-dark.png` - Dark mode logo
- `/public/images/about-preview.jpg` - About section image
- `/public/poses/*.jpg` - Pose instruction images
- `/public/videos/*.jpg` - Video thumbnails
- `/public/playlists/*.jpg` - Playlist cover images
- `/public/blog/*.jpg` - Blog post images

**Recommended sizes:**

- Logos: 120x40px
- Hero images: 1200x800px
- Thumbnails: 640x360px
- Blog images: 800x600px

## 🛡️ TypeScript

This project uses strict TypeScript configuration. Key type definitions:

- `Pose` - Yoga pose structure
- `Video` - Video content structure
- `Playlist` - Video collection structure
- `BlogPost` - Blog article structure

## 🎨 Theming

The design system uses a warm, earthy palette:

**Light Mode:**

- Primary: Warm gold (#b8860b)
- Background: Off-white (#fefefe)
- Text: Dark grey (#171717)

**Dark Mode:**

- Primary: Light gold (#deb887)
- Background: Dark grey (#171717)
- Text: Off-white (#fefefe)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Radix UI** for accessible component primitives

---

**Made with 🧘 for the yoga community**
