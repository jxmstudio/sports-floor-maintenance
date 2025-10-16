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
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sports Floor Line Marking</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expert line marking services for a wide range of indoor sports with precise, regulation-compliant markings</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sports Floor Maintenance Australia, we provide expert line marking services for a wide range of indoor sports, including basketball, netball, volleyball, badminton, and more. Whether you're updating an existing court or marking out a brand new layout, our team delivers precise, regulation-compliant markings on both timber and vinyl floors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We proudly service clients across South Australia, Victoria, New South Wales, and Canberra, offering reliable and high-quality results every time.
            </p>
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
                  <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full border border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-emerald-700" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Timber Floors</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mt-3">
                    Lines are applied using high-quality, hard-wearing sports floor paint that bonds well with timber coatings. We ensure clean, crisp edges and long-lasting durability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full border border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-emerald-700" />
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
                  <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <it.icon className="w-7 h-7 text-emerald-700" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Line Marking Service Today</h2>
            <p className="text-xl text-emerald-50 mb-8">
              If your court lines are fading, outdated, or you're setting up a new space, Sports Floor Maintenance Australia has the experience and tools to deliver a precise and professional finish.
            </p>
            <div className="space-y-4">
              <div className="text-lg text-white">
                <p className="font-semibold text-2xl mb-2">📞 Contact us: 0415894869</p>
                <p className="text-emerald-50">Request a quote or discuss your line marking requirements</p>
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
