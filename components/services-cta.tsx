"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesCTA() {
  return (
    <section className="py-20 lg:py-32 bg-[#d4ed31]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">Ready to grow your business?</h2>
          <p className="text-[#1a1a1a]/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors group"
          >
            Get In Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
