'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Heart, 
  Coffee, 
  Code, 
  Bug, 
  Rocket, 
  Sparkles, 
  Github, 
  ArrowRight,
  MousePointer,
  Cpu,
  Database,
  Globe,
  Shield,
  Target,
  Flame,
  Droplets,
  Leaf,
  Moon,
  Sun,
  Cloud,
  Thunder,
  Snowflake
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crazy Animated Icons */}
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
          <Zap className="w-10 h-10 text-cyan-400" />
        </motion.div>

        <motion.div
          className="absolute top-60 left-1/4"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-8 h-8 text-pink-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-1/6"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 720]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Coffee className="w-6 h-6 text-green-400" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/6"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Code className="w-7 h-7 text-orange-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/8"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Bug className="w-9 h-9 text-red-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/8"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Rocket className="w-8 h-8 text-purple-400" />
        </motion.div>

        <motion.div
          className="absolute top-3/4 left-1/3"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 3.7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-6 h-6 text-blue-400" />
        </motion.div>

        {/* More Crazy Icons */}
        <motion.div
          className="absolute top-1/6 right-1/4"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 540]
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cpu className="w-7 h-7 text-indigo-400" />
        </motion.div>

        <motion.div
          className="absolute top-2/5 left-2/3"
          animate={{
            x: [0, 20, 0],
            scale: [1, 0.7, 1],
            rotate: [0, -360]
          }}
          transition={{
            duration: 4.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Database className="w-8 h-8 text-teal-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/5 right-1/3"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 720],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Globe className="w-6 h-6 text-emerald-400" />
        </motion.div>

        {/* Element Icons */}
        <motion.div
          className="absolute top-1/4 right-1/6"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Flame className="w-7 h-7 text-red-500" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/5"
          animate={{
            y: [0, -25, 0],
            x: [0, -10, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 3.9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Droplets className="w-6 h-6 text-blue-500" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5.7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Leaf className="w-8 h-8 text-green-500" />
        </motion.div>

        {/* Additional Particle System */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-80 left-1/5 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-1/6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-96 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/8 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Floating Stars */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/6 w-28 h-28 bg-gradient-to-r from-green-500/25 to-emerald-500/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-1/3 right-1/8 w-36 h-36 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-1/6 left-1/8 text-xs text-gray-400 animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '4.5s' }}>
          &lt;/&gt;
        </div>
        <div className="absolute top-1/5 right-1/8 text-xs text-gray-400 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.8s' }}>
          { }
        </div>
        <div className="absolute top-2/5 left-1/12 text-xs text-gray-400 animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }}>
          ( )
        </div>
        <div className="absolute top-3/5 right-1/12 text-xs text-gray-400 animate-bounce" style={{ animationDelay: '1.7s', animationDuration: '3.5s' }}>
          [ ]
        </div>
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-16 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Homepage Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Title with crazy animations */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative z-10"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              XUNITE
            </motion.h1>
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-4 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Developers Unite & Code Gets Weird!
          </motion.p>
          
          {/* Goofy subtitle with crazy animation */}
          <motion.p 
            className="text-lg mb-8 text-pink-300 max-w-2xl mx-auto"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎪 The place where bugs become features and coffee becomes code! ☕
          </motion.p>
          
          {/* Enhanced CTA Button with crazy effects */}
          <motion.div 
            className="mb-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(236, 72, 153, 0.4)",
                  "0 0 0 20px rgba(236, 72, 153, 0)",
                  "0 0 0 0 rgba(236, 72, 153, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <Link 
                href="https://github.com/AnanyaPratapSingh7/xunite"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 group relative overflow-hidden"
              >
                {/* Button glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Github className="w-6 h-6 mr-3 relative z-10" />
                </motion.div>
                <span className="relative z-10">Join the Madness!</span>
                <motion.div
                  className="absolute right-4"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Goofy stats with framer-motion */}
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-pink-400/50 transition-all duration-300 group hover:scale-105 hover:rotate-1 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl font-bold text-pink-400 relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ∞
              </motion.div>
              <div className="text-sm text-gray-400 relative z-10">Bugs Fixed (or created?)</div>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105 hover:-rotate-1 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl font-bold text-purple-400 relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                42
              </motion.div>
              <div className="text-sm text-gray-400 relative z-10">Cups of Coffee</div>
            </motion.div>
            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 hover:rotate-1 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl font-bold text-cyan-400 relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                100%
              </motion.div>
              <div className="text-sm text-gray-400 relative z-10">Pure Chaos</div>
            </motion.div>
          </motion.div>
          
          {/* New Interactive Elements with framer-motion */}
          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div 
              className="text-xs text-gray-500 hover:text-pink-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, y: -2 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🎭 Hover everything!
            </motion.div>
            <motion.div 
              className="text-xs text-gray-500 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, y: -2 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ✨ Click to explore!
            </motion.div>
            <motion.div 
              className="text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, y: -2 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🚀 Join the fun!
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4 bg-black/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400 hover:text-green-300 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            How to Contribute (The Fun Way!)
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 hover:scale-105 hover:rotate-1 transition-all duration-300 border border-white/20 hover:border-pink-400/50 group relative overflow-hidden"
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                rotate: 3,
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl mb-4 text-pink-400 font-bold relative z-10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 relative z-10">Fork Repository</h3>
              <p className="text-gray-300 mb-3 relative z-10">
                Fork the repository like you're stealing the last slice of pizza! 🍕
              </p>
              <p className="text-gray-300 relative z-10">
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400 text-sm break-all hover:bg-gray-700 transition-colors duration-300">
                  https://github.com/AnanyaPratapSingh7/xunite
                </code>
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 hover:scale-105 hover:-rotate-1 transition-all duration-300 border border-white/20 hover:border-purple-400/50 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                rotate: -3,
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl mb-4 text-pink-400 font-bold relative z-10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 relative z-10">Create Your Page</h3>
              <p className="text-gray-300 relative z-10">
                Build something awesome! Make it weird, make it wild, make it yours! 🎨✨
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 hover:scale-105 hover:rotate-1 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 group relative overflow-hidden"
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                rotate: 3,
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="text-3xl mb-4 text-pink-400 font-bold relative z-10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 relative z-10">Submit PR</h3>
              <p className="text-gray-300 relative z-10">
                Submit that PR and join our chaotic but lovable community! 🚀🎪
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrollable Card List Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            Community Members (The Cool Kids!)
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ananya's Card */}
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
                href="/ananya"
                className="group bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden block"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                      "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
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
                    A
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
                    Definetely not Ananya
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Full Stack Developer & Community Creator
                  </p>
                  <p className="text-xs text-pink-300 mb-3 italic">
                    "Turning coffee into code since forever!" ☕
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

            {/* Add more cards here as community grows */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-dashed border-gray-600 flex items-center justify-center min-h-[200px] hover:bg-white/10 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center text-gray-500 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                <div className="text-4xl mb-2 group-hover:animate-bounce">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </div>
                <p className="text-sm">Add Your Card</p>
                <p className="text-xs mt-1">Join the chaos!</p>
                <p className="text-xs mt-2 text-pink-300 italic">
                  "We need more weirdos!" 🎭
                </p>
              </div>
            </div>
            
            {/* New Floating Card */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30 group relative overflow-hidden hover:scale-105 transition-all duration-300 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  ?
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">
                  Future Member
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Could this be you?
                </p>
                <p className="text-xs text-green-300 mb-3 italic">
                  "Waiting for the next legend!" 🌟
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300 group-hover:bg-green-500/40 transition-colors duration-300">
                    Your Tech
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 group-hover:bg-emerald-500/40 transition-colors duration-300">
                    Your Style
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2 hover:text-white transition-colors duration-300 animate-pulse">
            Made with 💖 (and probably some tears) by the Xunite Community
          </p>
          <p className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300">
            Every bug is a feature waiting to be discovered! 🐛✨
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs text-gray-600">
            <span className="hover:text-pink-400 transition-colors duration-300 cursor-pointer">🎪</span>
            <span className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">🚀</span>
            <span className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">✨</span>
            <span className="hover:text-green-400 transition-colors duration-300 cursor-pointer">💻</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 