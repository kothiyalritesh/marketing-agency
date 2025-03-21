"use client"

import { motion } from "framer-motion"
import { Briefcase, Heart, Rocket, Users, Award, Coffee } from "lucide-react"

const benefits = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented professionals across disciplines",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options",
  },
  {
    icon: Briefcase,
    title: "Exciting Projects",
    description: "Work with top brands and cutting-edge campaigns",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Competitive pay and performance bonuses",
  },
  {
    icon: Coffee,
    title: "Great Perks",
    description: "Health benefits, team outings, and more",
  },
]

export default function WhyJoinUs() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4">Why Join Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes WeBeeSocial a great place to build your career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#d4ed31] rounded-lg flex items-center justify-center mb-6">
                <benefit.icon size={28} className="text-[#1a1a1a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
