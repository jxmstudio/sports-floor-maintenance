"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Star, Users, Zap, Sparkles } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Basketball Court Cleaning",
    description: "Specialized court maintenance, line repainting, and surface treatment for optimal performance.",
    features: [
      "Court cleaning & sanitization",
      "Line repainting", 
      "Surface treatment",
      "Grip enhancement"
    ],
    color: "emerald"
  },
  {
    icon: Users,
    title: "Commercial Floor Cleaning",
    description: "Professional cleaning for office buildings, retail spaces, and warehouses.",
    features: [
      "Deep cleaning",
      "Stain removal",
      "Floor polishing", 
      "Maintenance programs"
    ],
    color: "green"
  },
  {
    icon: Star,
    title: "Residential Floor Cleaning",
    description: "Expert cleaning for hardwood, tile, and carpet in residential properties.",
    features: [
      "Hardwood restoration",
      "Tile & grout cleaning",
      "Carpet deep cleaning",
      "Eco-friendly products"
    ],
    color: "purple"
  },
  {
    icon: Zap,
    title: "Sports Facility Maintenance",
    description: "Comprehensive maintenance for gym floors, tennis courts, and indoor sports surfaces.",
    features: [
      "Gym floor maintenance",
      "Tennis court care",
      "Indoor sports surfaces",
      "Equipment cleaning"
    ],
    color: "orange"
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "Quick response for urgent cleaning needs and emergency situations.",
    features: [
      "24/7 availability",
      "Rapid response",
      "Emergency cleanup",
      "Damage restoration"
    ],
    color: "red"
  }
]

export function CleanServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From basketball courts to commercial spaces, we provide comprehensive floor cleaning 
            and maintenance solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500 mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className={`w-full border-${service.color}-200 text-${service.color}-600 hover:bg-${service.color}-50`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can create a tailored maintenance plan for your specific needs. 
              Contact us for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Consultation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  Request Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
