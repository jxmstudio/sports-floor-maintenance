"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, MapPin, Users, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blob"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              About Our Company
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Sports Floor Specialists Since 2010
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Sports Floor Maintenance Australia began in Adelaide with a simple mission: deliver professional, 
                reliable sports floor services that facilities can depend on. Over 25 years later, we've grown to 
                service major venues across four states while maintaining that same commitment to quality.
              </p>
              
              <p>
                We specialize in timber and vinyl sports flooring for gyms, stadiums, schools and recreation centers. 
                From complete floor restoration to annual maintenance, our team uses professional-grade equipment and 
                certified techniques to keep your playing surfaces in peak condition.
              </p>
              
              <p>
                As a <strong className="text-orange-600">FIBA approved installer</strong> and <strong className="text-orange-600">EU13036-2011 certified</strong> service 
                provider, we meet the highest international standards for sports floor installation and maintenance.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "FIBA Certified",
                  description: "Competition-grade installations",
                  gradient: "from-orange-500 to-orange-600",
                  bgColor: "bg-orange-100"
                },
                {
                  icon: Target,
                  title: "25+ Years",
                  description: "Industry experience",
                  gradient: "from-blue-700 to-blue-800",
                  bgColor: "bg-blue-100"
                }
              ].map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${point.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <point.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{point.title}</p>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <Card className="glass-card border-2 border-gray-100 hover:border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <MapPin className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Service Coverage</h3>
                    <p className="text-sm text-gray-600">Across 4 Australian states</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">South Australia</h4>
                    <p className="text-sm text-gray-600">Adelaide metro, regional SA including Mount Gambier, Port Augusta</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-700 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Victoria</h4>
                    <p className="text-sm text-gray-600">Melbourne, Geelong, Ballarat, Bendigo and regional Victoria</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-400 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">New South Wales</h4>
                    <p className="text-sm text-gray-600">Sydney, Newcastle, Wollongong, Central Coast regions</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-800 pl-4 py-2">
                    <h4 className="font-bold text-gray-900 mb-1">Australian Capital Territory</h4>
                    <p className="text-sm text-gray-600">Canberra, Queanbeyan and surrounding ACT region</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <p className="text-sm text-gray-700">
                    <strong className="text-orange-700">Outside these areas?</strong> We may still be able to help. 
                    Contact us to discuss your project location and requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

