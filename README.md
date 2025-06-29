# 🎪 XUNITE - Where Developers Unite & Code Gets Weird!

Welcome to **XUNITE**, a wild and wonderful developer community wall where creativity meets chaos! This is the place where bugs become features, coffee becomes code, and developers showcase their unique personalities through interactive web pages.

## 🌟 What is XUNITE?

XUNITE is a collaborative web platform built with Next.js where developers can:
- **Create their own profile pages** with unique themes and animations
- **Showcase their skills** in a fun and creative way
- **Join a community** of like-minded developers who love to experiment
- **Learn from others** by exploring different coding styles and techniques

Think of it as a digital carnival where each developer gets their own booth to show off their personality and skills!

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnanyaPratapSingh7/xunite.git
   cd xunite
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see XUNITE in action!

## 🎨 How to Contribute

### Step 1: Fork the Repository
Click the "Fork" button on the top right of this repository to create your own copy.

### Step 2: Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/xunite.git
cd xunite
```

### Step 3: Create Your Page
This is where the fun begins! You'll create your own page in the `app` folder.

#### Understanding Next.js App Router
In Next.js 13+, pages are created in the `app` folder using the file-based routing system:
- `app/page.jsx` = Homepage (`/`)
- `app/ananya/page.jsx` = Ananya's page (`/ananya`)
- `app/yourname/page.jsx` = Your page (`/yourname`)

#### Creating Your Page

1. **Create a new folder** in the `app` directory with your name:
   ```bash
   mkdir app/yourname
   ```

2. **Create a `page.jsx` file** inside your folder:
   ```bash
   touch app/yourname/page.jsx
   ```

3. **Add your page content** (see sample code below)

### Step 4: Add Your Card to the Homepage
Edit `app/page.jsx` and add your card to the community members section.

### Step 5: Submit Your Changes
```bash
git add .
git commit -m "Add my awesome page to XUNITE!"
git push origin main
```

### Step 6: Create a Pull Request
Go to the original repository and click "New Pull Request" to submit your contribution!

## 📝 Sample Page Code

Here's a sample page to get you started. Create `app/yourname/page.jsx`:

```jsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Code, Coffee, Heart } from 'lucide-react';

export default function YourNamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-12 h-12 text-yellow-400" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20"
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Code className="w-10 h-10 text-cyan-400" />
        </motion.div>
      </div>

      {/* Header */}
      <header className="py-6 px-4 border-b border-pink-400/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:scale-105 group"
          >
            <svg className="w-5 h-5 mr-2 animate-pulse group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Xunite
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-pink-300 mb-2">
              Full Stack Developer & Creative Coder
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Turning ideas into reality, one line of code at a time! 💻✨
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="flex justify-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="px-6 py-2 bg-pink-600 rounded-full text-white font-semibold shadow-lg">
              React
            </span>
            <span className="px-6 py-2 bg-purple-600 rounded-full text-white font-semibold shadow-lg">
              Next.js
            </span>
            <span className="px-6 py-2 bg-cyan-600 rounded-full text-white font-semibold shadow-lg">
              TypeScript
            </span>
          </motion.div>

          {/* About */}
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm a passionate developer who loves creating beautiful and functional web applications. 
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or enjoying a good cup of coffee! ☕
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-pink-400/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-pink-400 group-hover:animate-bounce">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-purple-400 group-hover:animate-bounce">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="text-3xl font-bold text-cyan-400 group-hover:animate-bounce">∞</div>
              <div className="text-sm text-gray-400">Cups of Coffee</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-pink-400/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2 hover:text-white transition-colors duration-300">
            Thanks for visiting my page! 🎉
          </p>
          <p className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
            "Code is poetry in motion!" 💫
          </p>
        </div>
      </footer>
    </div>
  );
}
```

## 🎯 Sample Card Code

Add this to the community members section in `app/page.jsx`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50, rotate: -5 }}
  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ 
    scale: 1.1,
    rotate: 5,
    y: -15
  }}
  whileTap={{ scale: 0.95 }}
>
  <Link 
    href="/yourname"
    className="group bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border border-pink-500/30 hover:border-pink-400/60 hover:shadow-2xl hover:shadow-pink-500/30 relative overflow-hidden block"
  >
    <div className="text-center relative z-10">
      <motion.div 
        className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold transition-all duration-300"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.3, rotate: 15 }}
      >
        Y
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
        Your Name
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        Full Stack Developer & Creative Coder
      </p>
      <p className="text-xs text-pink-300 mb-3 italic">
        "Turning ideas into reality!" 💻✨
      </p>
      <div className="flex justify-center space-x-2">
        <motion.span 
          className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300 group-hover:bg-pink-500/40 transition-colors duration-300"
          whileHover={{ scale: 1.2, y: -2 }}
        >
          React
        </motion.span>
        <motion.span 
          className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 group-hover:bg-purple-500/40 transition-colors duration-300"
          whileHover={{ scale: 1.2, y: -2 }}
        >
          Next.js
        </motion.span>
        <motion.span 
          className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs text-cyan-300 group-hover:bg-cyan-500/40 transition-colors duration-300"
          whileHover={{ scale: 1.2, y: -2 }}
        >
          TypeScript
        </motion.span>
      </div>
    </div>
  </Link>
</motion.div>
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## 🎨 Customization Ideas

Make your page unique! Here are some ideas:
- **Theme**: Choose your favorite colors and gradients
- **Animations**: Add floating elements, particle effects, or interactive animations
- **Content**: Share your projects, skills, hobbies, or anything that represents you
- **Layout**: Create custom sections like "My Projects", "Skills", "Fun Facts", etc.
- **Interactions**: Add hover effects, click animations, or scroll-triggered animations

## 🤝 Community Guidelines

- **Be creative**: This is your space to express yourself!
- **Be respectful**: Keep content appropriate for all audiences
- **Be helpful**: Comment on others' PRs and share feedback
- **Have fun**: This is meant to be enjoyable and inspiring!

## 📞 Need Help?

- **Issues**: Create an issue if you find a bug or need help
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Community**: Join our community and connect with other developers

## 🎉 Show Your Support

If you love XUNITE, consider:
- ⭐ Starring this repository
- 🍴 Forking and creating your own page
- 💬 Sharing with other developers
- 🐛 Reporting bugs or suggesting features

---

**Remember**: There are no rules in XUNITE - just creativity, fun, and a love for code! 🎪✨

*Made with 💖 (and probably some tears) by the XUNite Community*
