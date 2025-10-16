"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Facility Manager",
    company: "Sydney Sports Complex",
    content: "Outstanding service! Our basketball courts have never looked better. The team was professional, punctual, and the results exceeded our expectations. Highly recommended for any sports facility.",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    company: "Commercial Properties Ltd",
    content: "We've been using Sports Floor Maintenance for our commercial cleaning needs for over 3 years. Their attention to detail and reliability is unmatched. Our floors always look pristine.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Emma Williams",
    role: "Homeowner",
    company: "Residential Client",
    content: "Amazing work on our hardwood floors! They restored them to like-new condition. The team was respectful, clean, and left our home spotless. Will definitely use them again.",
    rating: 5,
    initials: "EW"
  },
  {
    name: "David Thompson",
    role: "Gym Owner",
    company: "FitLife Gym",
    content: "Professional, efficient, and thorough. Our gym floors are always clean and safe for our members. The emergency service they provide gives us peace of mind.",
    rating: 5,
    initials: "DT"
  },
  {
    name: "Lisa Rodriguez",
    role: "School Administrator",
    company: "Melbourne High School",
    content: "Excellent service for our school's sports facilities. They work around our schedule and always deliver quality results. The students and staff are very happy with the clean floors.",
    rating: 5,
    initials: "LR"
  },
  {
    name: "James Wilson",
    role: "Retail Manager",
    company: "City Shopping Center",
    content: "Reliable and professional service. They handle our large retail space efficiently and always meet our high standards. Great value for money and excellent customer service.",
    rating: 5,
    initials: "JW"
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
