"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function RecoatingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Timber Sports Floor
              <br />
              <span className="text-blue-600">Recoating & Maintenance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Keep your sports floor looking great and performing its best with our professional recoating and maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100 px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Annual Recoating Matters */}
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
              Why Annual Recoating Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A high-quality timber sports floor is a big investment — and one that deserves the right care. 
              Regular cleaning and annual recoating aren't just about keeping your floor looking fresh; 
              they're essential for maintaining safety, grip, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Protect the Timber",
                description: "From moisture, sweat, and wear that can damage the surface over time",
                color: "blue"
              },
              {
                icon: Star,
                title: "Restore Surface Traction",
                description: "For safe play and peak performance on your sports floor",
                color: "green"
              },
              {
                icon: CheckCircle,
                title: "Revive Appearance",
                description: "Bring back that rich timber shine and professional look",
                color: "yellow"
              },
              {
                icon: Clock,
                title: "Extend Floor Life",
                description: "Save you costly repairs or sanding later with proper maintenance",
                color: "purple"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className={`w-8 h-8 text-${benefit.color}-600`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recoating Process */}
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
              Our Recoating Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team uses professional-grade products and equipment designed for sports flooring. 
              The entire process is efficient and can often be completed within 24–48 hours, 
              minimising downtime for your venue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Deep Clean & Prepare",
                description: "We start by removing all contaminants and preparing the surface for optimal adhesion."
              },
              {
                step: "02", 
                title: "Light Abrasion",
                description: "We lightly abrade the existing finish to ensure a perfect bond with the new coating."
              },
              {
                step: "03",
                title: "Apply Durable Finish",
                description: "We apply a durable international compliant timber sports floor finish that meets EU13036-2011 standard for slip resistance."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white">
                  <CardHeader>
                    <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Cleaning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Routine Cleaning Makes All the Difference
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Regular cleaning is just as important as your annual recoat. Dust, sweat, and body oils can quickly build up, 
                creating slippery or patchy spots on the surface. We offer scheduled cleaning and maintenance programs to keep 
                your floor in top playing condition throughout the year.
              </p>
              <div className="space-y-4">
                {[
                  "Scheduled cleaning programs",
                  "Professional-grade cleaning solutions", 
                  "Safe for timber and vinyl surfaces",
                  "Maintains floor integrity and performance"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal for:</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Indoor basketball courts",
                  "School gymnasiums", 
                  "Fitness studios",
                  "Multi-sport complexes",
                  "Community recreation centres"
                ].map((venue, index) => (
                  <motion.div
                    key={venue}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{venue}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Book Your Recoat or Maintenance Service Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Protect your investment and keep your sports floor game-ready all year long. 
              Contact Sports Floor Maintenance Australia today for a free quote or to book your next recoat service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-white">
                <Phone className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">Free consultation & quote</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <Mail className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">Detailed service information</p>
              </div>
              <div className="flex flex-col items-center text-white">
                <MapPin className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Service Areas</h3>
                <p className="text-blue-100">SA, VIC, NSW & ACT</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open('tel:+61-XXX-XXX-XXX', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
