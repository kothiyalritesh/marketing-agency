"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const filters = ["All", "Social Media", "Web Design", "Branding", "Digital Strategy", "SEO"]

export default function WorkFilter() {
  const [active, setActive] = useState("All")

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                active === filter ? "bg-[#1a1a1a] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
