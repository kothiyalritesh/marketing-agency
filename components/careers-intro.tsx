"use client"

import { motion } from "framer-motion"

export default function CareersIntro() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Join a team of <span className="text-[#d4ed31]">creative innovators</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At WeBeeSocial, we believe in nurturing talent and fostering creativity. We're not just a workplace –
              we're a community of passionate individuals who love what we do and are committed to delivering
              excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you're ready to challenge yourself, grow professionally, and make a real impact in the digital
              marketing world, we want to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/creative-office-team-collaboration-meeting.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden mt-8">
              <img src="/modern-office-plants.png" alt="Modern workspace" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/team-celebration-office-party.jpg" alt="Team celebration" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden mt-8">
              <img
                src="/creative-brainstorming-session-whiteboard.jpg"
                alt="Brainstorming session"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
