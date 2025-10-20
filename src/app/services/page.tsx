"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Ruler, Brush, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Sanding & Finishing",
    description: "Full sand and professional finishing for perfectly flat, high‑performance timber sports floors.",
    href: "/services/sanding-finishing",
    icon: Brush,
  },
  {
    title: "Recoating & Annual Maintenance",
    description: "Restore gloss, traction and durability with EU13036-2011 compliant slip‑resistant coatings.",
    href: "/services/recoating-maintenance",
    icon: Shield,
  },
  {
    title: "Line Marking",
    description: "Regulation‑compliant court lines for basketball, netball, volleyball, badminton and multi‑sport.",
    href: "/services/line-marking",
    icon: Ruler,
  },
  {
    title: "Cleaning – Timber & Vinyl",
    description: "Scheduled deep cleaning programs to preserve appearance and grip on timber and vinyl floors.",
    href: "/services/cleaning",
    icon: Zap,
  },
  {
    title: "KTL Sprung Floors",
    description: "Supply and installation of high‑performance KTL sprung floor systems for venues and gyms.",
    href: "/services/sprung-floors",
    icon: Shield,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Shield className="w-4 h-4" />
              Complete Sports Floor Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Sports Floor
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Maintenance Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert sanding, finishing, recoating, and maintenance for sports facilities across Australia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const gradients = [
                "from-orange-500 to-orange-600",
                "from-blue-700 to-blue-800",
                "from-orange-400 to-orange-500",
                "from-blue-800 to-slate-900",
                "from-orange-600 to-red-600"
              ];
              return (
                <motion.div 
                  key={s.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link href={s.href} className="block h-full">
                    <Card className="h-full border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-gray-50 group">
                      <CardHeader>
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[i]} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                          <s.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{s.title}</CardTitle>
                        <CardDescription className="text-base text-gray-600 leading-relaxed mb-4">{s.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                          Learn more
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


