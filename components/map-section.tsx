"use client"

import { motion } from "framer-motion"

export default function MapSection() {
  return (
    <section className="h-96 bg-gray-200 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <img src="/new-delhi-india-map-satellite-view.jpg" alt="Office Location Map" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a1a]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-[#d4ed31] rounded-full flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 bg-[#1a1a1a] rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
