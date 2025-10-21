"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Star, Users, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Sparkles,
    title: "Sanding & Finishing",
    description: "Complete floor restoration using belt sanding technology for perfectly flat, smooth surfaces ready for high-performance play.",
    features: [
      "Belt sanding technology",
      "Professional polyurethane finishes",
      "Water-based or solvent options",
      "Minimal venue downtime"
    ],
    color: "orange",
    href: "/services/sanding-finishing"
  },
  {
    icon: Shield,
    title: "Recoating & Maintenance",
    description: "Annual recoating services to protect timber, restore traction, and maintain your floor's appearance and performance.",
    features: [
      "EU13036-2011 certified",
      "24-48 hour turnaround",
      "Grip restoration",
      "Protective coating application"
    ],
    color: "blue",
    href: "/services/recoating-maintenance"
  },
  {
    icon: Users,
    title: "Line Marking",
    description: "Precision line marking for basketball, netball, volleyball, badminton and multi-sport courts to official standards.",
    features: [
      "Regulation-compliant marking",
      "Multi-sport layouts",
      "Timber & vinyl surfaces",
      "Color-coded options"
    ],
    color: "purple",
    href: "/services/line-marking"
  },
  {
    icon: Star,
    title: "Sports Floor Cleaning",
    description: "Professional deep cleaning to remove buildup, restore grip, and extend the life of your timber or vinyl sports floor.",
    features: [
      "Annual deep cleaning",
      "Removes sweat & oils",
      "Restores surface grip",
      "Protects floor coating"
    ],
    color: "green",
    href: "/services/cleaning"
  },
  {
    icon: Zap,
    title: "KTL Sprung Floors",
    description: "FIBA approved sprung flooring systems - supply and installation for elite sports venues across Australia.",
    features: [
      "FIBA certified systems",
      "Custom site engineering",
      "Professional installation",
      "Competition-grade performance"
    ],
    color: "red",
    href: "/services/sprung-floors"
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
            Expert Sports Floor Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive timber and vinyl sports floor solutions - from complete restoration to annual maintenance. 
            Trusted by gyms, stadiums, schools and recreation centers across Australia.
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
              <Link href={service.href} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white cursor-pointer group">
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
                  <div className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
              </Link>
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
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
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
