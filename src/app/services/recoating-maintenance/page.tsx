"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Sparkles, CheckCircle, ArrowRight, Award } from "lucide-react"

export default function RecoatingMaintenancePage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/90 to-slate-900/90" />
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
              <Shield className="w-4 h-4" />
              EU13036-2011 Certified
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Timber Sports Floor
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Recoating & Maintenance</span>
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 font-semibold max-w-4xl mx-auto mb-8">
              Keep Your Sports Floor Looking Great and Performing Its Best
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                A high-quality timber sports floor is a big investment — and one that deserves the right care. Regular cleaning and annual recoating aren&apos;t just about keeping your floor looking fresh; they&apos;re essential for maintaining safety, grip, and performance.
              </p>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                At Sports Floor Maintenance Australia, we specialise in protecting and rejuvenating timber sports floors across gyms, stadiums, and recreation centres. Our professional recoating service restores the gloss, traction, and durability your floor needs to perform at its best all year round.
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
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Floors Maintained" },
              { number: "24-48hr", label: "Turnaround" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-orange-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Annual Recoating Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Annual Recoating Matters</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over time, sports floors take a beating — constant foot traffic, heavy equipment, dust, and perspiration all wear down the protective surface coating. Without proper upkeep, the finish dulls, the grip lessens, and the timber underneath becomes exposed to damage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              title: "Protect the Timber",
              desc: "Shield from moisture, sweat, and wear",
              icon: Shield,
              gradient: "from-orange-500 to-orange-600"
            },{
              title: "Restore Traction",
              desc: "Safe play and peak performance",
              icon: Award,
              gradient: "from-blue-700 to-blue-800"
            },{
              title: "Revive Appearance",
              desc: "Bring back that rich timber shine",
              icon: Sparkles,
              gradient: "from-orange-400 to-orange-500"
            },{
              title: "Extend Floor Life",
              desc: "Save costly repairs or sanding later",
              icon: Clock,
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
                <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${it.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <it.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{it.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">{it.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recoating Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recoating Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team uses professional-grade products and equipment designed for sports flooring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              step: "01",
              title: "Deep Clean & Prepare",
              desc: "Remove all contaminants from the surface",
              icon: Sparkles
            },{
              step: "02",
              title: "Light Abrasion",
              desc: "Lightly abrade existing finish to ensure perfect bond",
              icon: Shield
            },{
              step: "03",
              title: "Apply Durable Finish",
              desc: "International compliant timber sports floor finish meeting EU13036-2011 standard for slip resistance",
              icon: CheckCircle
            }].map((it, i) => (
              <motion.div 
                key={it.step} 
                initial={{ opacity: 0, y: 16 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-300 transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-600">{it.step}</div>
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <it.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{it.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 text-center">
              <p className="text-lg text-gray-700">
                The entire process is efficient and can often be completed within <strong className="text-orange-600">24–48 hours</strong>, minimising downtime for your venue.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Routine Cleaning */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Routine Cleaning Makes All the Difference</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Regular cleaning is just as important as your annual recoat. Dust, sweat, and body oils can quickly build up, creating slippery or patchy spots on the surface. We offer scheduled cleaning and maintenance programs to keep your floor in top playing condition throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Free Quote • No Obligation
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Book Your Recoat or
              <br />
              Maintenance Service Today
            </h2>
            <p className="text-xl md:text-2xl text-emerald-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              Protect your investment and keep your sports floor game-ready all year long.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-50 text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 font-bold"
              >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl backdrop-blur-sm font-bold"
              >
                Call: 0415894869
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>24-48hr Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Servicing All Australia</span>
          </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
