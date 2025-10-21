"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Wrench, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "FIBA Court Installation",
    venue: "Recreation Centre",
    location: "Melbourne, VIC",
    service: "Sprung Floor Installation",
    description: "Complete FIBA approved sprung floor system with competition-grade finish and multi-sport line marking.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    badge: "FIBA Certified",
    badgeColor: "orange"
  },
  {
    title: "Basketball Court Recoating",
    venue: "High School Gymnasium",
    location: "Adelaide, SA",
    service: "Annual Recoating",
    description: "48-hour turnaround recoating service during school holidays. Restored grip and appearance for upcoming season.",
    image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=800&auto=format&fit=crop",
    badge: "Fast Turnaround",
    badgeColor: "blue"
  },
  {
    title: "Multi-Sport Line Marking",
    venue: "Community Sports Complex",
    location: "Sydney, NSW",
    service: "Line Marking",
    description: "Color-coded line marking for basketball, netball, and volleyball on single court surface.",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=800&auto=format&fit=crop",
    badge: "Multi-Sport",
    badgeColor: "purple"
  },
  {
    title: "Complete Floor Restoration",
    venue: "University Sports Hall",
    location: "Canberra, ACT",
    service: "Sanding & Finishing",
    description: "Full sand and refinish of 15-year-old floor. Belt sanding for perfect flatness, followed by professional polyurethane finish.",
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=800&auto=format&fit=crop",
    badge: "Full Restoration",
    badgeColor: "green"
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    project.badgeColor === 'orange' ? 'bg-orange-500' :
                    project.badgeColor === 'blue' ? 'bg-blue-600' :
                    project.badgeColor === 'purple' ? 'bg-purple-600' :
                    'bg-green-600'
                  }`}>
                    {project.badge}
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                      {project.service}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.venue}</p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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

