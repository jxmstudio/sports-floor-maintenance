"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react"

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Professional sports floor expertise"
  },
  {
    number: 500,
    suffix: "+",
    label: "Floors Serviced",
    description: "Completed projects across Australia"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
                      <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
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
              <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">FIBA Approved</p>
                <p className="text-sm text-gray-600">Certified installer of competition-grade flooring systems</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">EU13036-2011</p>
                <p className="text-sm text-gray-600">European sports flooring standard compliance</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Fully Insured</p>
                <p className="text-sm text-gray-600">Comprehensive public liability and workers compensation</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="font-bold text-gray-900 mb-1">Quality Assured</p>
                <p className="text-sm text-gray-600">Certified technicians and premium-grade materials</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
