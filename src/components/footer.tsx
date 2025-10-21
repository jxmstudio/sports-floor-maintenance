"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  { name: "Sanding & Finishing", href: "/services/sanding-finishing" },
  { name: "Recoating & Maintenance", href: "/services/recoating-maintenance" },
  { name: "Line Marking", href: "/services/line-marking" },
  { name: "Sports Floor Cleaning", href: "/services/cleaning" },
  { name: "Sprung Floors", href: "/services/sprung-floors" }
]

const companyLinks = [
  { name: "All Services", href: "/services" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/#contact" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Get Quote", href: "/#contact" }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              SPORTS FLOOR<br />
              MAINTENANCE AUSTRALIA
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional floor cleaning and maintenance services across Australia. 
              Specializing in sports facilities, commercial spaces, and residential properties.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span>0415894869</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-orange-500" />
                  <span>info@sportsfloorau.com.au</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                  <span>SA, VIC, NSW & ACT</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <p className="text-gray-400 text-sm">South Australia, Victoria, New South Wales and Canberra</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div>Mon-Fri: 7AM-6PM</div>
                <div>Sat: 8AM-4PM</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Sports Floor Maintenance Australia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
