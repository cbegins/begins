'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Terminal, Book, Users, ChevronRight, Github } from 'lucide-react'

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 29, 149, 0.15), transparent 80%)`,
        }}
      />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-purple-400">Begins</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#" className="hover:text-purple-400 transition-colors">Resources</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Tutorials</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
          </motion.div>
        </nav>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-5xl font-bold mb-6 leading-tight">Unlock the World of <span className="text-purple-400">Cybersecurity</span></h2>
            <p className="text-xl mb-8 text-gray-300">Free resources and tools to empower your journey in ethical hacking and digital defense.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Start Learning <ChevronRight className="ml-2" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl filter blur-3xl opacity-30" />
            <div className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-2 p-4 bg-gray-700 rounded-xl">
                  <Shield className="text-purple-400 w-10 h-10" />
                  <span className="text-center">Cybersecurity Basics</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-2 p-4 bg-gray-700 rounded-xl">
                  <Terminal className="text-green-400 w-10 h-10" />
                  <span className="text-center">Ethical Hacking</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-2 p-4 bg-gray-700 rounded-xl">
                  <Book className="text-blue-400 w-10 h-10" />
                  <span className="text-center">Learning Paths</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center space-y-2 p-4 bg-gray-700 rounded-xl">
                  <Users className="text-yellow-400 w-10 h-10" />
                  <span className="text-center">Community Forums</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 text-center py-4 flex justify-center items-center space-x-4"
      >
        <p>&copy; 2023 Begins. All rights reserved.</p>
        <a href="https://github.com/begins" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          <Github className="w-6 h-6" />
        </a>
      </motion.footer>
    </div>
  )
}
