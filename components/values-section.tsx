"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Strategy First",
    description: "We believe in strategy-driven solutions that align with your business goals.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "Creativity is at the heart of everything we do, pushing boundaries.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We treat your business as our own, working as true partners.",
  },
  {
    icon: Zap,
    title: "Results Driven",
    description: "Every campaign is optimized for measurable, impactful results.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do at WeBeeSocial</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#222] p-8 rounded-lg hover:bg-[#2a2a2a] transition-colors group"
            >
              <div className="w-14 h-14 bg-[#d4ed31] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon size={28} className="text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
