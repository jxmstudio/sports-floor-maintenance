"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Floors?
          </h2>
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-emerald-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-3">Speak directly with our team</p>
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  onClick={() => window.open('tel:+61-XXX-XXX-XXX', '_self')}
                >
                  Call (02) 1234 5678
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-green-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600 mb-3">Send us your requirements</p>
                <Button
                  variant="outline"
                  className="border-green-200 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('mailto:info@sportsfloor.com.au', '_self')}
                >
                  info@sportsfloor.com.au
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-purple-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-3">Chat with us instantly</p>
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  Start Chat
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-orange-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Book Online</h3>
                <p className="text-sm text-gray-600 mb-3">Schedule your service</p>
                <Button
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  Book Now
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Get Your Free Quote Today
                </CardTitle>
                <p className="text-gray-600">
                  Professional service with guaranteed satisfaction
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Free Quote
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      View All Services
                    </Button>
                  </motion.div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Free</div>
                    <div className="text-sm text-gray-600">on-site consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">emergency service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">satisfaction guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Eco</div>
                    <div className="text-sm text-gray-600">friendly products</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
