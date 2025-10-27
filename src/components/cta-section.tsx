"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blob"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/20 rounded-full blob"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Floors?
              </span>
            </h2>
          </motion.div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a free quote today and discover why hundreds of facilities across Australia trust us with their floor maintenance needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  description: "Speak directly with our team",
                  action: "Call 0457 77 66 88",
                  onClick: () => window.open('tel:0457776688', '_self'),
                  gradient: "from-emerald-400 to-emerald-600",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  textColor: "text-emerald-700"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "Send us your requirements",
                  action: "Email Now",
                  onClick: () => window.open('mailto:info@sportsfloorau.com.au', '_self'),
                  gradient: "from-green-400 to-green-600",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  textColor: "text-green-700"
                },
                {
                  icon: MessageCircle,
                  title: "Live Chat",
                  description: "Chat with us instantly",
                  action: "Start Chat",
                  onClick: () => {},
                  gradient: "from-purple-400 to-purple-600",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  textColor: "text-purple-700"
                },
                {
                  icon: Calendar,
                  title: "Book Online",
                  description: "Schedule your service",
                  action: "Book Now",
                  onClick: () => {},
                  gradient: "from-orange-400 to-orange-600",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200",
                  textColor: "text-orange-700"
                }
              ].map((method, idx) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                  className={`glass-card ${method.bgColor} rounded-xl p-6 text-center border-2 ${method.borderColor} hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2 relative z-10">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 relative z-10">{method.description}</p>
                  <Button
                    variant="outline"
                    className={`${method.borderColor} ${method.textColor} hover:bg-white/80 relative z-10 glow-on-hover`}
                    onClick={method.onClick}
                  >
                    {method.action}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="animated-gradient-fast border-0 shadow-2xl relative overflow-hidden">
              {/* Glass overlay */}
              <div className="absolute inset-0 glass-card" />
              
              <CardHeader className="text-center pb-6 relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <Phone className="w-8 h-8 text-orange-600" />
                </motion.div>
                <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">
                  Get Your Free Quote Today
                </CardTitle>
                <p className="text-white/90 font-medium">
                  Professional service with guaranteed satisfaction
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-white text-orange-600 hover:bg-gray-50 font-bold shadow-xl glow-on-hover"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Assessment
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-white/80 text-white hover:bg-white/20 backdrop-blur-md font-semibold"
                    >
                      View Services
                    </Button>
                  </motion.div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "Free", label: "on-site consultation", icon: "🏆" },
                    { value: "24/7", label: "emergency service", icon: "⚡" },
                    { value: "100%", label: "satisfaction guarantee", icon: "✅" },
                    { value: "Eco", label: "friendly products", icon: "🌱" }
                  ].map((benefit, idx) => (
                    <motion.div
                      key={benefit.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center glass-effect rounded-xl p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="text-3xl mb-1">{benefit.icon}</div>
                      <div className="text-xl font-bold text-white mb-1">{benefit.value}</div>
                      <div className="text-xs text-white/80">{benefit.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
