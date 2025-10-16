"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Star, CheckCircle, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [12, 0, 12] }}
              transition={{ duration: 2.5, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
              className="inline-flex items-center gap-2 bg-emerald-600/95 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
            >
              <Shield className="w-4 h-4" />
              Trusted by 500+ Facilities Across Australia
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                Professional Sports Floor
                <br />
                <span className="text-emerald-700">Maintenance</span>
                <br />
                Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Expert sanding, finishing, and maintenance for basketball courts, gymnasiums, and sports facilities. 
                Professional-grade equipment and certified technicians across Australia.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual Block - Authentic action imagery with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[5/4]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgba(15,23,42,0.25), rgba(16,185,129,0.15)), url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <span className="sr-only">Basketball court floor maintenance</span>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Quality Guaranteed</p>
                  <p className="text-xs text-gray-600">5-Star Rated</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">24/7 Service</p>
                  <p className="text-xs text-gray-600">Emergency Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {[{
              icon: Shield,
              text: 'Certified & Insured',
              color: 'text-emerald-700'
            }, {
              icon: Clock,
              text: 'Fast Response',
              color: 'text-emerald-700'
            }, {
              icon: Star,
              text: '5-Star Rated',
              color: 'text-yellow-600'
            }, {
              icon: Zap,
              text: 'Professional Equipment',
              color: 'text-slate-600'
            }].map(({ icon: Icon, text, color }) => (
              <motion.div
                key={text}
                whileHover={{ y: -2, opacity: 0.95 }}
                className="flex items-center gap-3 px-3 py-2 rounded-md"
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <span className="text-gray-700 font-medium text-sm md:text-base">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
