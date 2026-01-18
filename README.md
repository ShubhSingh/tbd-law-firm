# TBD Law Firm

A modern law firm website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5.6.2
- **Styling:** Tailwind CSS 4.1.18
- **CSS Processing:** PostCSS with Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** Version 18.x or higher (recommended: 20.x LTS)
- **npm:** Version 9.x or higher (comes with Node.js)
- **Git:** For version control

You can verify your installations by running:

```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd tbd-law-firm
```

2. **Install dependencies:**

```bash
npm install
```

This will install all required packages listed in `package.json`.

## 🏃 Running the Project

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at:
- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000

The development server includes:
- Hot Module Replacement (HMR)
- Fast Refresh for instant feedback
- Detailed error messages
- TypeScript type checking

### Production Build

1. **Build the application:**

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Optimizes and minifies code
- Generates static pages where possible
- Creates production-ready bundles

2. **Start the production server:**

```bash
npm start
```

The production server will run at http://localhost:3000

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
tbd-law-firm/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── practice-areas/    # Practice areas page
│   ├── privacy/           # Privacy policy page
│   └── team/              # Team page
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── DisclaimerModal.tsx # Legal disclaimer modal
├── lib/                   # Utility functions and constants
│   ├── constants.ts      # Application constants
│   └── schema.ts         # Type definitions and schemas
├── public/               # Static assets
│   ├── logo.svg         # Company logo
│   └── og-image.png     # Open Graph image
├── styles/              # Global styles
│   └── globals.css      # Global CSS with Tailwind directives
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies and scripts
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🌐 Environment Variables

Currently, this project doesn't require environment variables. If you need to add any in the future, create a `.env.local` file in the root directory:

```bash
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🎨 Styling

This project uses Tailwind CSS v4 for styling:

- **Utility-first CSS framework**
- **Responsive design** with mobile-first approach
- **Custom configuration** in `tailwind.config.js`
- **Typography plugin** for rich text formatting

## 📱 Features

- ✅ Responsive design for all devices
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ SEO optimized with Next.js metadata
- ✅ Fast page loads with Next.js optimization
- ✅ Accessible components
- ✅ Legal disclaimer modal

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can:

1. Change the port in `package.json`:
```json
"dev": "next dev -p 3001"
```

2. Or kill the process using port 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found Errors

If you encounter module errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If the build fails:

1. Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

2. Check TypeScript errors:
```bash
npx tsc --noEmit
```

## 📝 Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Write meaningful commit messages
- Test responsive design on multiple devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Next.js and React**
