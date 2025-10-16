"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Professional floor maintenance expertise"
  },
  {
    number: 500,
    suffix: "+",
    label: "Floors Cleaned",
    description: "Successfully completed projects"
  },
  {
    number: 300,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers across Australia"
  },
  {
    number: 4.9,
    suffix: "/5",
    label: "Client Rating",
    description: "Average customer satisfaction score"
  },
  {
    number: 100,
    suffix: "%",
    label: "Insured & Certified",
    description: "Fully licensed and insured service"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Emergency Service",
    description: "Round-the-clock availability"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
                      <div className="text-3xl lg:text-4xl font-bold text-emerald-700 mb-2">
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

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
              Certified and Insured Professionals
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🛡️</span>
                </div>
                <p className="font-semibold text-gray-900">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📜</span>
                </div>
                <p className="font-semibold text-gray-900">Industry Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="font-semibold text-gray-900">Quality Guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌱</span>
                </div>
                <p className="font-semibold text-gray-900">Eco-Friendly</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
