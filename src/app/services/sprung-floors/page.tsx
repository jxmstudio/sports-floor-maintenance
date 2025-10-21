"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Award, ArrowRight, Layers, CheckCircle, Settings, Droplet, Ruler, Clock } from "lucide-react"

export default function SprungFloorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            {/* FIBA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              FIBA Approved Systems
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">KTL Sprung Floor Supply & Installation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Premium FIBA approved sprung flooring solutions for sports venues</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Sports Floor Maintenance Australia, we supply and install <strong className="text-orange-600">FIBA approved</strong> KTL sprung flooring systems—a world‑class solution combining durability, performance, and tailored engineering. Whether you're building a gymnasium, stadium, recreation centre or multi‑purpose hall, we deliver premium sprung floors designed for your site's specific needs and certified for professional competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose KTL Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose KTL Sprung Floors?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "High Quality, Engineered Flooring",
              desc: "KTL's systems are crafted with precision, using solid hardwood boards, resilient sub‑construction, shock‑absorbing pads, and strong coating finishes (e.g. multi‑layer UV coatings).",
              icon: Shield,
              gradient: "from-orange-500 to-orange-600"
            },{
              title: "FIBA Approved & Performance Certified",
              desc: "KTL systems are FIBA approved and tested to competition levels, meeting relevant EN/DIN/ISO standards. Certified for elite sport, professional play, endurance, and safety.",
              icon: Award,
              gradient: "from-blue-700 to-blue-800"
            },{
              title: "Multiple Systems for Varied Site Requirements",
              desc: "We can supply fixed systems, portable systems, clip‑together or batten substructures, wedge leveling, etc. This means we can adapt the system to your subfloor conditions, climate, loading requirements, usage intensity etc.",
              icon: Layers,
              gradient: "from-orange-600 to-red-600"
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${it.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <it.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{it.title}</CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed">{it.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Site-Specific Preparation & Drying */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Site‑Specific Preparation & Drying</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To ensure long life and stability, correct site preparation is essential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: "Moisture Content & Climate Matching",
              desc: "The timber and substructure are conditioned to suit local humidity and moisture conditions. This helps to avoid cracking, warping, shrinkage or over‑expansion due to climate differences.",
              icon: Droplet,
              gradient: "from-blue-700 to-blue-800"
            },{
              title: "Drying & Curing of Subfloor",
              desc: "Before installing the sprung floor, the concrete or structural base must be fully dry. Drying to appropriate moisture levels, sometimes using dehumidification or site‑specific drying techniques, ensures that the substrate will not transfer moisture that damages the floor or reduces its resilience over time.",
              icon: Clock,
              gradient: "from-orange-500 to-orange-600"
            },{
              title: "Levelling and Precision",
              desc: "If the existing floor or base is uneven, we use systems (e.g. wedge systems or shims) to level accurately, so that the sprung floor functions uniformly — no dead spots or inconsistent bounce. KTL's PRO II V2 system, for example, is designed to accommodate uneven subfloors.",
              icon: Ruler,
              gradient: "from-orange-400 to-orange-500"
            }].map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="h-full border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${it.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <it.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{it.title}</CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed">{it.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiency & Long-Term Value */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Efficiency & Long‑Term Value</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full border border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-emerald-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Fast, Professional Installation</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mt-3">
                    Our team works efficiently to install with minimal disruption. Because we supply complete systems (substrate, pads, boards, finishes) matched to the site, we avoid delays due to mismatched materials.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full border border-gray-200 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-emerald-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Durability & Warranty</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed mt-3">
                    KTL wood systems often come with long warranties (for example, 10 years on coating in many cases) and are built to resist wear, moisture, cleaning agents etc. The solid hardwood boards and resilient subfloor structure mean the floor should perform for decades if maintained properly.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIBA & Competition Authorization */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FIBA & Competition‑Authorization</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              If your facility hosts high‑level competitions, tournaments, or must comply with FIBA/other governing body standards, our KTL sprung floors deliver:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Many systems are FIBA approved for competition levels 1, 2 & 3",
              "Tested performance in shock absorption, ball rebound, rolling load, slip/friction etc.",
              "These certifications ensure your floor not only meets the look and feel, but the safety & performance needed"
            ].map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-5 shadow-sm border border-emerald-200">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Supply & Installation Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Supply & Installation Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's how we make sure your sprung floor is perfect:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[{
              step: "01",
              title: "Consultation & Site Analysis",
              desc: "We assess existing subfloor structure, moisture levels, climate, usage (sports types, frequency), regulatory requirements."
            },{
              step: "02",
              title: "System Design & Specification",
              desc: "We choose the KTL system that best fits your budget, performance level, and site conditions (fixed or portable, batten or clip system, wood species, finish, etc.)."
            },{
              step: "03",
              title: "Site Preparation & Drying",
              desc: "Prepare the site, ensure moisture is below acceptable thresholds, use drying or conditioning as required. If needed, level the base accurately."
            },{
              step: "04",
              title: "Installation",
              desc: "Installation of sub‑construction, shock pads or elastic elements, hardwood boards, surface finish. Careful alignment and finishing."
            },{
              step: "05",
              title: "Final Certification & Handover",
              desc: "Testing if required (bounce, shock absorption), compliance with FIBA or other relevant certs, final inspections."
            },{
              step: "06",
              title: "Maintenance Advice",
              desc: "Guidance on cleaning, annual checks, repair etc., to ensure the system continues to perform and maintain appearance."
            }].map((it, i) => (
              <motion.div key={it.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="relative bg-slate-50 rounded-lg p-6 border border-gray-200 h-full">
                  <div className="text-4xl font-bold text-emerald-200 mb-3">{it.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{it.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{it.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch to Specify Your Sprung Floor</h2>
            <p className="text-xl text-emerald-50 mb-8">
              Ready to invest in a high‑performance flooring solution? Whether you're looking for FIBA competition standard timber, a portable system, or a timber vs vinyl hybrid, we can help.
            </p>
            <div className="space-y-4">
              <div className="text-lg text-white">
                <p className="font-semibold text-2xl mb-2">📞 Contact us: 0415894869</p>
                <p className="text-emerald-50">📧 Email [Contact Email] for system spec sheets and examples</p>
                <p className="text-emerald-50 mt-3">Get a site visit and custom quote</p>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 mt-6">
                Request Site Visit
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
