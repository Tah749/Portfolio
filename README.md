# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases your projects, skills, and experience with a clean, professional design.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Project Showcase**: Display projects with images, descriptions, and links
- **Skills Visualization**: Animated progress bars for skills
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Easy Content Management**: JSON-based configuration for easy updates

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information

Update your personal information in the following files:

**`config/site.json`**
```json
{
  "site": {
    "title": "Your Name - Developer Portfolio",
    "description": "Personal portfolio showcasing web development projects",
    "author": "Your Name",
    "email": "your.email@example.com",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "location": "City, Country",
    "timezone": "UTC-5"
  }
}
```

**`src/components/Hero/Hero.tsx`**
- Update your name, title, and introduction
- Replace the profile photo path
- Update social media links

### 2. Projects

Add your projects in `src/data/projects.json`:

```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Your Project Name",
      "description": "Brief project description",
      "longDescription": "Detailed project description",
      "image": "/images/projects/your-project.jpg",
      "liveUrl": "https://your-project-demo.com",
      "githubUrl": "https://github.com/username/your-project",
      "technologies": ["React", "Node.js", "MongoDB"],
      "category": "web-app",
      "featured": true,
      "date": "2024-01-15"
    }
  ]
}
```

### 3. Skills & Experience

Update your skills and experience in `src/components/About/About.tsx`:

```typescript
const skills = [
  { name: 'Your Skill', icon: Code, level: 90 },
  // Add more skills...
];

const experience = [
  {
    year: '2023 - Present',
    title: 'Your Job Title',
    company: 'Your Company',
    description: 'Your job description...',
  },
  // Add more experience...
];
```

### 4. Images

Add your images to the following directories:
- **Profile Photo**: `public/images/profile/profile-photo.jpg`
- **Project Screenshots**: `public/images/projects/`
- **Resume**: `public/resume.pdf`

### 5. Colors & Styling

Customize the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f7fafc',
    500: '#1a365d',  // Your primary color
    600: '#2d3748',
    700: '#4a5568',
  },
  accent: {
    500: '#ed8936',  // Your accent color
    600: '#dd6b20',
  },
}
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/     # Project screenshots
│   │   ├── profile/      # Profile photos
│   │   └── icons/        # Custom icons
│   └── resume.pdf        # Your resume
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   ├── data/            # JSON data files
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── config/              # Configuration files
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy with one click
- **DigitalOcean App Platform**: Simple deployment

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Adding New Features

1. **New Section**: Create a new component in `src/components/`
2. **New Page**: Add a new route in `src/app/`
3. **New Data**: Add JSON files in `src/data/`
4. **New Types**: Add TypeScript interfaces in `src/types/`

## 📝 Content Management

### Easy Updates

The portfolio is designed for easy content management:

1. **Projects**: Edit `src/data/projects.json`
2. **Site Info**: Edit `config/site.json`
3. **Skills**: Edit `src/components/About/About.tsx`
4. **Images**: Replace files in `public/images/`

### No Code Required

Most updates can be made without touching code:
- Project information
- Personal details
- Contact information
- Images and assets

## 🎯 Performance

The portfolio is optimized for performance:
- **Lighthouse Score**: 90+ across all metrics
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic code splitting
- **SEO**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help:
1. Check the [documentation](docs/)
2. Open an [issue](issues/)
3. Contact the maintainer

---

**Happy coding! 🚀**
