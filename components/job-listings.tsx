"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    title: "Senior Digital Strategist",
    department: "Strategy",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Lead digital strategy initiatives for major clients across various industries.",
  },
  {
    title: "Social Media Manager",
    department: "Social Media",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Manage social media accounts and create engaging content for top brands.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design beautiful and functional user interfaces for web and mobile applications.",
  },
  {
    title: "SEO Specialist",
    department: "Marketing",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Develop and implement SEO strategies to improve organic search rankings.",
  },
  {
    title: "Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time / Part-time",
    description: "Create compelling content for blogs, social media, and marketing campaigns.",
  },
  {
    title: "Frontend Developer",
    department: "Development",
    location: "New Delhi, India",
    type: "Full-time",
    description: "Build responsive and performant web applications using modern frameworks.",
  },
]

export default function JobListings() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4">Open Positions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find your perfect role and become part of our growing team</p>
        </motion.div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href="#"
                className="block p-6 border border-gray-200 rounded-lg hover:border-[#d4ed31] hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#1a1a1a]">{job.title}</h3>
                      <span className="text-xs font-semibold text-[#d4ed31] bg-[#1a1a1a] px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover:text-[#d4ed31] transition-colors">
                      Apply Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 p-12 bg-[#1a1a1a] rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Don't see a role that fits?</h3>
          <p className="text-gray-400 mb-6">
            We're always looking for talented people. Send us your resume and we'll keep you in mind.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d4ed31] text-[#1a1a1a] px-8 py-3 rounded-full font-semibold hover:bg-[#c5de22] transition-colors"
          >
            Send Your Resume
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
