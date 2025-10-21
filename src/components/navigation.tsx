"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const navPrimary = [
  { name: "Home", href: "/" },
]

const services = [
  { name: "Sanding & Finishing", href: "/services/sanding-finishing" },
  { name: "Recoating & Maintenance", href: "/services/recoating-maintenance" },
  { name: "Line Marking", href: "/services/line-marking" },
  { name: "Cleaning", href: "/services/cleaning" },
  { name: "Sprung Floors", href: "/services/sprung-floors" },
]

const navMobile = [
  { name: "Home", href: "/" },
  ...services,
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" 
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <Image
              src="/Sports Floor Maintenance Australia - Final Files.png"
              alt="Sports Floor Maintenance Australia"
              width={400}
              height={400}
              className="h-16 w-auto lg:h-20"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navPrimary.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-64">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
                    {services.map(link => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              <div className="font-semibold">0415894869</div>
              <div>info@sportsfloorau.com.au</div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="py-4 space-y-2">
            {navMobile.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block px-4 py-2 text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault()
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                  } else if (item.href.startsWith('/')) {
                    // Handle page navigation
                    window.location.href = item.href
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                x: isMobileMenuOpen ? 0 : -20 
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="px-4 pt-4 space-y-2"
            >
              <div className="text-sm text-gray-600">
                <div className="font-semibold">0415894869</div>
                <div>info@sportsfloorau.com.au</div>
              </div>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
              >
                Get Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}