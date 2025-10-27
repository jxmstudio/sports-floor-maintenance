"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react"

const stats = [
  {
    number: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Professional sports floor expertise"
  },
  {
    number: 350,
    suffix: "+",
    label: "Satisfied Clients",
    description: "Gyms, schools and sports facilities"
  },
  {
    number: 48,
    suffix: "hr",
    label: "Fast Turnaround",
    description: "Typical recoating completion time"
  },
  {
    number: 4,
    suffix: " States",
    label: "Service Coverage",
    description: "SA, VIC, NSW & ACT"
  }
]

function AnimatedCounter({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = React.useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(progress * end)
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {end % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Facilities Across Australia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. See why hundreds of facilities trust us with their floor maintenance needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <div className="relative inline-block mb-4">
                {/* Background circle */}
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-orange-100"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 56}
                    initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-orange-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Professional Certifications & Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "FIBA Approved",
                  description: "Certified installer of competition-grade flooring systems",
                  gradient: "from-orange-500 to-orange-600"
                },
                {
                  icon: FileCheck,
                  title: "EU13036-2011",
                  description: "European sports flooring standard compliance",
                  gradient: "from-blue-700 to-blue-800"
                },
                {
                  icon: Shield,
                  title: "Fully Insured",
                  description: "Comprehensive public liability and workers compensation",
                  gradient: "from-orange-600 to-red-600"
                },
                {
                  icon: CheckCircle,
                  title: "Quality Assured",
                  description: "Certified technicians and premium-grade materials",
                  gradient: "from-blue-800 to-slate-900"
                }
              ].map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-card rounded-xl p-6 text-center border-2 border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="font-bold text-gray-900 mb-1 relative z-10 group-hover:text-orange-600 transition-colors duration-300">{cert.title}</p>
                  <p className="text-sm text-gray-600 relative z-10">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
