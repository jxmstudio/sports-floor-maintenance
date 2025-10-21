"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Shield, ArrowRight, Droplet, Award, CheckCircle } from "lucide-react"

export default function CleaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-900/85 to-slate-900/90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-100 px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Professional Deep Cleaning
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sports Floor Cleaning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Timber & Vinyl Surfaces</span>
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 font-semibold max-w-4xl mx-auto mb-8">
              Protect Performance. Preserve Appearance.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                Sports floors in gyms, stadiums, and recreation centers are built to perform — but over time, body sweat, oils, dust, and shoe marks can build up, dulling the surface and affecting traction.
              </p>
              <p className="text-lg md:text-xl text-orange-100 leading-relaxed font-semibold">
                That's why we recommend a professional deep clean at least once a year. Regular sweeping and mopping help, but they're not enough on their own.
              </p>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "Annual", label: "Recommended Frequency" },
              { number: "24hr", label: "Quick Service" },
              { number: "Eco-Safe", label: "Products Used" },
              { number: "All Surfaces", label: "Timber & Vinyl" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-orange-200">{stat.label}</div>
              </div>
            ))}
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
              icon: Droplet,
              gradient: "from-orange-500 to-orange-600"
            },{
              title: "Restore Grip",
              desc: "Restores grip and reduces the risk of slips during play",
              icon: Award,
              gradient: "from-blue-700 to-blue-800"
            },{
              title: "Improve Appearance",
              desc: "Improves appearance and keeps floors looking professional",
              icon: Sparkles,
              gradient: "from-orange-400 to-orange-500"
            },{
              title: "Extend Floor Life",
              desc: "Extends the life of timber or vinyl sports flooring",
              icon: Shield,
              gradient: "from-blue-800 to-slate-900"
            }].map((it, i) => (
              <motion.div 
                key={it.title} 
                initial={{ opacity: 0, y: 16 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${it.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <it.icon className="w-8 h-8 text-white" />
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
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
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
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 mt-6">
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
