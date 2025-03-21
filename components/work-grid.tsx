"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Mahindra Rise",
    category: "Social Media",
    image: "automotive brand social media campaign dark theme",
    color: "#1a1a1a",
  },
  {
    title: "Ford India",
    category: "Digital Strategy",
    image: "ford car brand digital campaign blue theme",
    color: "#003478",
  },
  {
    title: "ACMA",
    category: "Branding",
    image: "corporate branding automotive industry",
    color: "#d4ed31",
  },
  {
    title: "IIHT",
    category: "Web Design",
    image: "education technology website modern design",
    color: "#f5f5f5",
  },
  {
    title: "CBRE",
    category: "Digital Strategy",
    image: "real estate corporate branding green theme",
    color: "#00703c",
  },
  {
    title: "DuPont",
    category: "Social Media",
    image: "chemical company corporate social media",
    color: "#ed1c24",
  },
  {
    title: "USAID",
    category: "Branding",
    image: "government organization branding campaign",
    color: "#002f6c",
  },
  {
    title: "MTV India",
    category: "Social Media",
    image: "music television brand colorful campaign",
    color: "#ffcc00",
  },
]

export default function WorkGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href="#" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={`/.jpg?height=400&width=400&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a1a1a]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#d4ed31] rounded-full flex items-center justify-center">
                      <ArrowUpRight size={24} className="text-[#1a1a1a]" />
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#d4ed31] transition-colors">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#333] transition-colors">
            LOAD MORE
          </button>
        </motion.div>
      </div>
    </section>
  )
}
