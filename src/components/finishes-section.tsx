"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Eye, Leaf } from "lucide-react"

const finishes = [
  {
    icon: Star,
    title: "High-Gloss Polyurethane",
    description: "Maximum durability and visual impact for professional venues that demand the highest standards.",
    features: ["Superior wear resistance", "Professional appearance", "Long-lasting protection"],
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100/50"
  },
  {
    icon: Eye,
    title: "Low-Sheen Professional",
    description: "Reduced glare and improved performance for optimal playing conditions and player comfort.",
    features: ["Reduced eye strain", "Better ball visibility", "Professional finish"],
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100/50"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Water-Based",
    description: "Fast-drying, eco-friendly coatings for reduced odour and faster return to play.",
    features: ["Low odour", "Quick drying time", "Environmentally safe"],
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100/50"
  }
]

export function FinishesSection() {
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
            Durable Finishes for Performance and Protection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Once sanding is complete, we apply high-quality sports floor finishes that protect the timber 
            and deliver consistent traction, shine and performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {finishes.map((finish, index) => (
            <motion.div
              key={finish.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${finish.gradient}`} />
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${finish.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <finish.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {finish.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                    {finish.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {finish.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${finish.gradient} mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/20">
            <p className="text-lg text-gray-700">
              Our coatings are designed to withstand the demands of schools, community centres 
              and professional sports facilities alike.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
