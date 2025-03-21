"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Social Media", "Web Design", "Branding", "Digital Strategy", "SEO"]

const projects = [
  {
    id: 1,
    title: "Mahindra Rise",
    category: "Social Media",
    image: "/automotive-brand-social-media-campaign.jpg",
  },
  {
    id: 2,
    title: "Ford India",
    category: "Digital Strategy",
    image: "/car-brand-digital-marketing.jpg",
  },
  {
    id: 3,
    title: "ACMA",
    category: "Branding",
    image: "/industrial-association-branding.jpg",
  },
  {
    id: 4,
    title: "IIHT",
    category: "Web Design",
    image: "/education-technology-website.jpg",
  },
  {
    id: 5,
    title: "CBRE",
    category: "Social Media",
    image: "/real-estate-marketing.png",
  },
  {
    id: 6,
    title: "DuPont",
    category: "Digital Strategy",
    image: "/chemical-company-digital-presence.jpg",
  },
  {
    id: 7,
    title: "USAID",
    category: "Branding",
    image: "/international-development-organization-branding.jpg",
  },
  {
    id: 8,
    title: "MTV India",
    category: "Web Design",
    image: "/music-entertainment-website-design.jpg",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(8)

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-transparent border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#d4ed31] flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{project.category}</p>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{project.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 4)}
              className="bg-[#1a1a1a] hover:bg-[#333] text-white rounded-full px-8"
            >
              LOAD MORE
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
