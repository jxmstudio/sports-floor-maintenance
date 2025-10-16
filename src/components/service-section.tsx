"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Shield, Zap, MapPin, Star, Wrench } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "State-of-the-Art Equipment",
    description: "Latest belt sanding technology for superior results",
    color: "orange"
  },
  {
    icon: Settings,
    title: "Perfectly Flat Finishes",
    description: "Level and even surfaces every time",
    color: "orange"
  },
  {
    icon: Shield,
    title: "High-Performance Coatings",
    description: "Long-lasting protection for your investment",
    color: "orange"
  },
  {
    icon: Zap,
    title: "Minimal Downtime",
    description: "Quick turnaround with flexible scheduling",
    color: "orange"
  },
  {
    icon: MapPin,
    title: "Wide Service Area",
    description: "Servicing SA, VIC, NSW and ACT",
    color: "orange"
  },
  {
    icon: Star,
    title: "Expert Team",
    description: "Professional technicians with years of experience",
    color: "orange"
  }
]

export function ServiceSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Sports Floor Maintenance Australia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional results with state-of-the-art equipment and expert craftsmanship
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
              <Card className="h-full hover:shadow-xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}-100 flex items-center justify-center group-hover:bg-${service.color}-200 transition-colors duration-300`}
                  >
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
