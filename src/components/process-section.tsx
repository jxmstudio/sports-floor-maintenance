"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Wrench, CheckCircle, Sparkles } from "lucide-react"

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Initial Assessment",
    description: "We carefully evaluate your floor condition and requirements"
  },
  {
    step: 2,
    icon: Wrench,
    title: "Coarse Sanding",
    description: "Remove old coatings and prepare the surface with precision"
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Fine Sanding",
    description: "Achieve perfectly smooth surface ready for finishing"
  },
  {
    step: 4,
    icon: Sparkles,
    title: "Final Inspection",
    description: "Quality check and cleanup for professional results"
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Precision Sanding for a Perfectly Flat Floor
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A quality sports floor starts with a level surface. Our advanced belt-driven sanding machines 
                allow us to achieve a completely flat and even finish, eliminating ridges, waves and imperfections.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's a basketball court, netball court, volleyball floor or multipurpose sports hall, 
                we carefully remove old coatings and prepare the timber to create the ideal base for a new, 
                long-lasting finish.
              </p>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 group bg-gradient-to-r from-white to-orange-50/30">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:bg-orange-600 transition-colors duration-300"
                    >
                      {step.step}
                    </motion.div>
                    <div className="flex items-center space-x-3">
                      <step.icon className="w-6 h-6 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
