"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Professional Sports Floor Finishing",
    venue: "Recreation Centre",
    location: "Melbourne, VIC",
    service: "Sanding & Finishing",
    description: "Professional sanding and finishing with belt sanding technology for a perfectly flat, competition-ready surface.",
    image: "/20240114_110844-EDIT.jpg",
    badge: "Premium Finish",
    badgeColor: "orange",
    size: "large" // Hero project
  },
  {
    title: "Court Line Marking",
    venue: "High School Gymnasium",
    location: "Adelaide, SA",
    service: "Line Marking",
    description: "Precision line marking for basketball courts with professional-grade paint and equipment.",
    image: "/20240114_122341.jpg",
    badge: "Line Marking",
    badgeColor: "blue",
    size: "medium"
  },
  {
    title: "Floor Maintenance",
    venue: "Community Sports Complex",
    location: "Sydney, NSW",
    service: "Maintenance",
    description: "Regular maintenance and inspection services to keep your sports floor in peak condition.",
    image: "/20240104_131215.jpg",
    badge: "Maintenance",
    badgeColor: "green",
    size: "medium"
  },
  {
    title: "Complete Court Restoration",
    venue: "University Sports Hall",
    location: "Canberra, ACT",
    service: "Full Restoration",
    description: "Comprehensive floor restoration including sanding, finishing, and line marking for a brand new appearance.",
    image: "/20240114_141921.jpg",
    badge: "Restoration",
    badgeColor: "purple",
    size: "small"
  },
  {
    title: "Professional Equipment",
    venue: "On-site",
    location: "Australia Wide",
    service: "Equipment",
    description: "State-of-the-art equipment ensuring superior results and efficient service delivery.",
    image: "/20240120_184747.jpg",
    badge: "Technology",
    badgeColor: "orange",
    size: "small"
  }
]

export function ProjectsPreviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Wrench className="w-4 h-4" />
            Recent Projects
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Work Across Australia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From FIBA certified installations to quick turnaround maintenance - see examples of our 
            professional sports floor services.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => {
            // Define grid spans for bento layout
            const gridClass = project.size === 'large' 
              ? 'lg:col-span-2 lg:row-span-2' 
              : project.size === 'medium'
              ? 'lg:col-span-2'
              : 'lg:col-span-1'
            
            const imageHeight = project.size === 'large' 
              ? 'h-96' 
              : project.size === 'medium'
              ? 'h-64'
              : 'h-48'
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${gridClass}`}
              >
                <Card className="overflow-hidden glass-card border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 h-full group relative">
                  {/* Project Image */}
                  <div className={`relative ${imageHeight} overflow-hidden bg-gray-200`}>
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <motion.div 
                      initial={{ scale: 0, x: -50 }}
                      whileInView={{ scale: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg backdrop-blur-sm ${
                        project.badgeColor === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                        project.badgeColor === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        project.badgeColor === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      }`}
                    >
                      {project.badge}
                    </motion.div>
                    
                    {/* Location */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute bottom-4 left-4 flex items-center gap-2 text-white glass-effect px-3 py-2 rounded-lg"
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.location}</span>
                    </motion.div>
                    
                    {/* Hover overlay with service */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="glass-card px-6 py-3 rounded-xl border border-white/30">
                        <p className="text-white font-semibold">View Project Details</p>
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className={`p-6 ${project.size === 'large' ? 'space-y-4' : 'space-y-2'}`}>
                    <div>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-xs font-bold rounded-full mb-3">
                        {project.service}
                      </span>
                      <h3 className={`${project.size === 'large' ? 'text-2xl' : 'text-lg'} font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">{project.venue}</p>
                    </div>
                    
                    {project.size !== 'small' && (
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Note for Real Photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl">
            <p className="text-sm text-gray-700 mb-3">
              <strong className="text-blue-700">Note:</strong> These are representative examples. 
              Real project photos from your completed work will showcase your actual installations and results.
            </p>
            <Button
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

