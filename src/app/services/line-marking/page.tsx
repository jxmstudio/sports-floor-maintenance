"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ruler, Target, Palette, ArrowRight, CheckCircle, Shield, Award, Layers } from "lucide-react"

export default function LineMarkingPage() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2000&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/85 to-slate-900/90" />
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
              <Ruler className="w-4 h-4" />
              Regulation-Compliant Marking
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sports Floor
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Line Marking</span>
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 font-semibold max-w-4xl mx-auto mb-8">
              Precise, Professional Court Line Marking
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-white leading-relaxed mb-4">
                At Sports Floor Maintenance Australia, we provide expert line marking services for a wide range of indoor sports, including basketball, netball, volleyball, badminton, and more. Whether you're updating an existing court or marking out a brand new layout, our team delivers precise, regulation-compliant markings on both timber and vinyl floors.
              </p>
              <p className="text-lg md:text-xl text-orange-100 leading-relaxed">
                We proudly service clients across South Australia, Victoria, New South Wales, and Canberra, offering reliable and high-quality results every time.
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
              { number: "6+", label: "Sports Marked" },
              { number: "Official", label: "Regulations" },
              { number: "Multi-Sport", label: "Layouts" },
              { number: "Color-Coded", label: "Options" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm md:text-base text-orange-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accurate Court Marking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accurate, Regulation-Compliant Court Marking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team understands the importance of accuracy and clarity when it comes to court line marking. We follow the latest official sport regulations and dimensions, ensuring every court meets the requirements for training, school competitions, and professional play.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">We specialise in marking:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Basketball courts",
                "Netball courts",
                "Volleyball courts",
                "Badminton courts",
                "Multi-sport layouts",
                "Custom lines for schools"
              ].map((sport, i) => (
                <motion.div key={sport} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <div className="flex items-center gap-3 bg-orange-50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{sport}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <p className="text-lg text-gray-700">
              Whether you need a single-sport court or a multi-court overlay, we'll design and lay out the markings for optimal functionality and visibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Line Marking on Different Surfaces */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Line Marking on Timber & Vinyl Floors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different surfaces require different approaches. We apply the right techniques and products depending on your floor type.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Timber Floors</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mt-3">
                    Lines are applied using high-quality, hard-wearing sports floor paint that bonds well with timber coatings. We ensure clean, crisp edges and long-lasting durability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Vinyl Floors</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mt-3">
                    We use specialised vinyl-safe marking paints that offer strong adhesion without damaging the surface. Perfect for multi-purpose gymnasiums and school halls.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              We only use premium-grade sports floor paints in a wide range of colours, chosen for their durability, non-slip performance, and resistance to wear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Multi-Sport Courts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multi-Sport Courts & Custom Layouts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Need to fit multiple sports into one space? No problem. We're experienced in designing and applying multi-line court markings for facilities that host various activities throughout the week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[{
              title: "Contrasting Colours",
              desc: "Use different colours for each sport to enhance clarity",
              icon: Palette
            },{
              title: "Strategic Positioning",
              desc: "Position lines to minimise visual confusion",
              icon: Target
            },{
              title: "Functional Layouts",
              desc: "Clear designs that are easy to use and officiate",
              icon: Ruler
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <it.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{it.title}</h3>
                  <p className="text-gray-600">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              We can also mark custom zones, training grids, or school-specific layouts upon request.
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
              title: "Regulation Compliant",
              desc: "Accurate line marking to official standards",
              icon: Target
            },{
              title: "Timber & Vinyl Expertise",
              desc: "Suitable for all sports floor surfaces",
              icon: Shield
            },{
              title: "Durable Paints",
              desc: "Non-slip, high-visibility, long-lasting",
              icon: Palette
            },{
              title: "Custom Layouts",
              desc: "Multi-sport designs and custom zones",
              icon: Layers
            },{
              title: "Wide Service Area",
              desc: "Servicing SA, VIC, NSW and ACT",
              icon: Award
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <it.icon className="w-5 h-5 text-white" />
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
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Line Marking Service Today</h2>
            <p className="text-xl text-emerald-50 mb-8">
              If your court lines are fading, outdated, or you're setting up a new space, Sports Floor Maintenance Australia has the experience and tools to deliver a precise and professional finish.
            </p>
            <div className="space-y-4">
              <div className="text-lg text-white">
                <p className="font-semibold text-2xl mb-2">📞 Contact us: 0415894869</p>
                <p className="text-emerald-50">Request a quote or discuss your line marking requirements</p>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 mt-6">
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
