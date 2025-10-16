"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Shield, Clock, ArrowRight, Droplet, Award, CheckCircle, Building } from "lucide-react"

export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sports Floor Cleaning – Timber & Vinyl Surfaces</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Protect Performance. Preserve Appearance.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sports floors in gyms, stadiums, and recreation centers are built to perform — but over time, body sweat, oils, dust, and shoe marks can build up, dulling the surface and affecting traction. Regular sweeping and mopping help, but they're not enough on their own.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4 font-semibold">
              That's why we recommend a professional deep clean at least once a year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Annual Deep Cleaning Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Annual Deep Cleaning Matters</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              title: "Remove Harmful Buildup",
              desc: "Removes sweat, oils & grime that can damage floor coatings",
              icon: Droplet
            },{
              title: "Restore Grip",
              desc: "Restores grip and reduces the risk of slips during play",
              icon: Award
            },{
              title: "Improve Appearance",
              desc: "Improves appearance and keeps floors looking professional",
              icon: Sparkles
            },{
              title: "Extend Floor Life",
              desc: "Extends the life of timber or vinyl sports flooring",
              icon: Shield
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="h-full border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <it.icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{it.title}</CardTitle>
                    <CardDescription className="text-gray-600">{it.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              Our annual cleaning process is designed to maintain the integrity of your surface without damaging the finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Cleaning Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sports Floor Cleaning Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[{
              step: "01",
              title: "Dry Debris Removal",
              desc: "We start by removing dust, dirt, and loose particles"
            },{
              step: "02",
              title: "Gentle Deep Cleaning",
              desc: "Using specialised cleaning solutions safe for timber and vinyl"
            },{
              step: "03",
              title: "Auto Scrubbing",
              desc: "Carefully used where appropriate to lift embedded dirt and sweat without harming the floor"
            },{
              step: "04",
              title: "Spot Detailing",
              desc: "We finish by addressing scuff marks, corners, and high-traffic areas manually"
            }].map((it, i) => (
              <motion.div key={it.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="relative bg-white rounded-lg p-6 border border-gray-200 h-full">
                  <div className="text-5xl font-bold text-emerald-100 mb-3">{it.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{it.title}</h3>
                  <p className="text-gray-600">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ideal For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Indoor basketball courts",
              "School gymnasiums",
              "Fitness studios",
              "Multi-sport complexes",
              "Community recreation centres"
            ].map((venue, i) => (
              <motion.div key={venue} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{venue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it's a sealed timber floor or resilient vinyl surface, we know how to clean it right — safely, thoroughly, and professionally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule Your Annual Clean Today</h2>
            <p className="text-xl text-emerald-50 mb-8">
              Professional deep cleaning to keep your sports floor performing at its best
            </p>
            <div className="space-y-4">
              <div className="text-lg text-white">
                <p className="font-semibold text-2xl mb-2">📞 Call us: 0415894869</p>
                <p className="text-emerald-50">📧 Or email us at [Contact Email]</p>
              </div>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 mt-6">
                Book Your Clean
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
