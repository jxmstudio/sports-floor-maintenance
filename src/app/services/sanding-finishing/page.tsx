"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Ruler, Wrench, ArrowRight, Sparkles, Clock, CheckCircle, Zap, Award } from "lucide-react"

export default function SandingFinishingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Wrench className="w-4 h-4" />
              Belt Sanding Technology
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Timber Sports Floor
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Sanding & Finishing</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-semibold max-w-4xl mx-auto mb-8">
              Perfectly Flat Sanding with Durable Sports Coatings
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                At Sports Floor Maintenance Australia, we provide professional sanding and finishing services for all types of timber sports floors. Using the latest belt sanding technology, we ensure every floor is perfectly flat, smooth, and ready for high-performance play.
              </p>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Our expert team services South Australia, Victoria, New South Wales and Canberra, working efficiently to deliver outstanding results with minimal downtime to your venue.
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
              { number: "1000+", label: "Floors Restored" },
              { number: "State-of-Art", label: "Equipment" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Precision Sanding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precision Sanding for a Perfectly Flat Floor</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A quality sports floor starts with a level surface. Our advanced belt-driven sanding machines allow us to achieve a completely flat and even finish, eliminating ridges, waves and imperfections.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's a basketball court, netball court, volleyball floor or multipurpose sports hall, we carefully remove old coatings and prepare the timber to create the ideal base for a new, long-lasting finish.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="border border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-emerald-700" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Advanced Belt Sanding Technology</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    State-of-the-art equipment ensuring perfectly level surfaces for optimal play performance
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Durable Finishes Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Durable Finishes for Performance and Protection</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Once sanding is complete, we apply high-quality sports floor finishes that protect the timber and deliver consistent traction, shine and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "High-Gloss Polyurethane",
              desc: "Maximum durability and visual impact for professional venues",
              icon: Sparkles
            },{
              title: "Low-Sheen Professional",
              desc: "Reduced glare and improved performance for competitive play",
              icon: Shield
            },{
              title: "Eco-Friendly Water-Based",
              desc: "Fast-drying coatings with reduced odour for faster return to play",
              icon: Zap
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
              Our coatings are designed to withstand the demands of schools, community centres and professional sports facilities alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Efficient Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Efficient Process, Minimal Downtime</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We understand that sporting venues often run on tight schedules. That's why we've developed a streamlined sanding and finishing process designed to minimise disruption and get your court back in action quickly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With our efficient machinery and fast-curing finishes, we're able to complete most full sand and finish projects within a short turnaround, without compromising quality or safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Sports Floor Maintenance Australia?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
              title: "State-of-the-Art Equipment",
              desc: "Belt sanding machines for superior results",
              icon: Wrench
            },{
              title: "Perfectly Flat Finishes",
              desc: "Level surfaces every time, guaranteed",
              icon: Ruler
            },{
              title: "High-Performance Coatings",
              desc: "Long-lasting protection and traction",
              icon: Shield
            },{
              title: "Minimal Downtime",
              desc: "Efficient scheduling to suit your venue",
              icon: Clock
            },{
              title: "Wide Service Area",
              desc: "Servicing SA, VIC, NSW and the ACT",
              icon: Award
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <it.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{it.title}</h3>
                    <p className="text-gray-600">{it.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Sanding & Finishing Service</h2>
            <p className="text-xl text-emerald-50 mb-8">
              If your sports floor has lost its shine, is uneven, or needs a full refresh, the team at Sports Floor Maintenance Australia can bring it back to life.
            </p>
            <div className="space-y-4">
              <div className="text-lg text-white">
                <p className="font-semibold text-2xl mb-2">📞 Contact us: 0415894869</p>
                <p className="text-emerald-50">Get a free quote or discuss your next sanding and finishing project</p>
              </div>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 mt-6">
                Get Free Quote
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


