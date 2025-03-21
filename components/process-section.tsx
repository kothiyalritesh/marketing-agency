"use client"

import { motion } from "framer-motion"

const steps = [
  { number: "01", title: "Discovery", description: "Understanding your business, goals, and target audience" },
  { number: "02", title: "Strategy", description: "Developing a comprehensive plan tailored to your needs" },
  { number: "03", title: "Creation", description: "Bringing ideas to life with creative excellence" },
  { number: "04", title: "Optimization", description: "Continuously improving based on data and insights" },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A proven methodology that delivers results</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl lg:text-7xl font-bold text-[#d4ed31] mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-1/2 h-0.5 bg-[#d4ed31]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
