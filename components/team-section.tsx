"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  { name: "Sahil Chopra", role: "Founder & CEO", image: "professional man in suit smiling" },
  { name: "Neha Sharma", role: "Creative Director", image: "professional woman creative director" },
  { name: "Amit Kumar", role: "Head of Strategy", image: "professional man strategist" },
  { name: "Priya Singh", role: "Lead Developer", image: "professional woman developer" },
]

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The brilliant minds behind WeBeeSocial's success</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <img
                  src={`/.jpg?height=400&width=300&query=${encodeURIComponent(member.image)}`}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#d4ed31] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin size={18} className="text-[#1a1a1a]" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#d4ed31] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Twitter size={18} className="text-[#1a1a1a]" />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
