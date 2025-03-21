"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight">
              Who
              <br />
              <span className="text-[#d4ed31]">We Are?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              WeBeeSocial is a full-stack Digital Marketing Agency based out of New Delhi, India. We use our years of
              experience and knowledge to create solutions for our clients that are not only performance driven, but
              also help them reach their objectives. Think us as your digital partners for our clients every step of the
              way.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We create digital experiences which stick with audiences and drive much-desired objectives. Think as with
              making your brand visible and engaged, while hugely focused on the best experience.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:text-[#d4ed31] transition-colors group"
            >
              OUR SERVICES
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-[#f5f5f5] rounded-lg overflow-hidden relative">
              <img src="/creative-team-working-in-modern-office-with-yellow.jpg" alt="WeBeeSocial team" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-[#d4ed31] p-6">
                <p className="text-2xl font-bold text-[#1a1a1a]">10+</p>
                <p className="text-sm text-[#1a1a1a]">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
