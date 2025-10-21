"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Mark Patterson",
    role: "Facilities Coordinator",
    company: "Oakwood Recreation Centre",
    content: "Had them recoat our main basketball court over the long weekend. Job was done in 48 hours like they promised and the grip is perfect now. Players noticed the difference immediately. Great communication throughout.",
    rating: 5,
    initials: "MP"
  },
  {
    name: "Rebecca Chen",
    role: "Sports Director",
    company: "Adelaide Grammar School",
    content: "We got the FIBA approved sprung floor installed in our new gymnasium. The whole process from site prep to final line marking took about 3 weeks. Very professional team - they explained everything clearly and the floor plays beautifully.",
    rating: 5,
    initials: "RC"
  },
  {
    name: "Tom Williams",
    role: "Facility Manager",
    company: "Melbourne Indoor Sports Centre",
    content: "Been using them for our annual recoating for the past 4 years. Always reliable, floors look great after each service. Worth the investment to keep the playing surface in top condition.",
    rating: 5,
    initials: "TW"
  },
  {
    name: "Sarah McKenzie",
    role: "Operations Manager",
    company: "Fitness First - Sydney",
    content: "Needed urgent line remarking for a tournament. They fitted us in within a week and did basketball + netball courts with different color schemes. Finished on time and the lines are crisp and clear.",
    rating: 5,
    initials: "SM"
  },
  {
    name: "David Thompson",
    role: "Principal",
    company: "Regional High School, VIC",
    content: "Our gym floor was in pretty rough shape after 15 years. They did a full sand and refinish during summer holidays. Took about 5 days total. Looks brand new now and should last us another decade.",
    rating: 5,
    initials: "DT"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
