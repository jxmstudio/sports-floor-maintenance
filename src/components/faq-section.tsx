"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How often should I recoat my sports floor?",
    answer: "We recommend annual recoating for timber sports floors in high-traffic facilities. This maintains traction, protects the timber, and keeps your floor looking professional. The frequency may vary based on usage intensity, but yearly maintenance is ideal for gyms, stadiums, and recreation centers."
  },
  {
    question: "What's the difference between sanding and recoating?",
                answer: "Recoating involves cleaning the floor and applying a fresh coat of finish over the existing surface - typically done annually. Sanding is a complete refinishing process that removes the old finish and top layer of wood, then applies new coats. A full sand and refinish usually takes 3-5 days for a standard gymnasium. Sanding is needed every 10-25 years or when the floor has deep scratches, uneven wear, or severely damaged finish."
  },
  {
    question: "How long does the recoating process take?",
    answer: "Most recoating projects are completed within 24-48 hours for a standard gymnasium or court. This includes surface prep, cleaning, applying professional-grade coating (we use Bona or Loba commercial systems), and drying time. We schedule work to suit your facility's availability - many venues book us for weekend service to minimize disruption."
  },
  {
    question: "Do you service my area?",
    answer: "We provide services across South Australia, Victoria, New South Wales, and Canberra (ACT). Contact us to confirm service availability in your specific location and to discuss your project requirements."
  },
  {
    question: "What sports can you mark lines for?",
    answer: "We specialize in line marking for basketball, netball, volleyball, badminton, and custom multi-sport layouts. We follow official regulations and can create color-coded lines for facilities that host multiple sports. Custom layouts for schools and training zones are also available."
  },
  {
    question: "Can you work on both timber and vinyl floors?",
    answer: "Yes! We have expertise in maintaining both timber and vinyl sports floors. Each surface requires different techniques and products, and our team is trained to deliver the best results for your specific floor type."
  },
  {
    question: "How much does floor maintenance cost?",
    answer: "Pricing varies based on floor size, condition, service type, and location. As a guide: recoating typically ranges from $8-15 per sqm, while full sanding and refinishing starts around $25-40 per sqm depending on complexity. Line marking depends on court size and number of sports. We provide free, detailed quotes - contact us with your floor dimensions and we'll assess your specific requirements."
  },
  {
    question: "What makes KTL sprung floors special?",
    answer: "KTL sprung floors are engineered for elite performance, meeting FIBA competition standards and relevant EN/DIN/ISO certifications. They feature precision-crafted hardwood, shock-absorbing systems, and can be customized for your subfloor conditions, climate, and usage requirements. We handle site preparation, moisture management, and professional installation."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our sports floor services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card 
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  openIndex === index 
                    ? 'border-orange-300 shadow-lg' 
                    : 'border-gray-100 hover:border-orange-200 hover:shadow-md'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-0">
                  {/* Question */}
                  <button
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="tel:0415894869"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors"
          >
            Call us: 0415894869
          </a>
        </motion.div>
      </div>
    </section>
  )
}

