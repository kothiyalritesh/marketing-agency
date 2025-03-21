"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
}

export default function PageHeader({ title, subtitle, highlight }: PageHeaderProps) {
  return (
    <section className="bg-[#1a1a1a] pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
      {/* Yellow geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4ed31] clip-diagonal-reverse opacity-90" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {subtitle && <p className="text-gray-400 text-sm tracking-wider uppercase mb-4">{subtitle}</p>}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            {title}
            {highlight && <span className="text-[#d4ed31]"> {highlight}</span>}
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
