"use client"

import { motion } from "framer-motion"
import { BarChart3, Megaphone, Code, Search, PenTool, LineChart, Share2, Mail } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Digital Strategy & Planning",
    description:
      "We develop comprehensive digital strategies aligned with your business objectives, ensuring maximum ROI across all channels.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Engaging social media campaigns that build communities, drive engagement, and convert followers into customers.",
  },
  {
    icon: Code,
    title: "Website Design & Development",
    description: "Beautiful, responsive websites that deliver exceptional user experiences and drive conversions.",
  },
  {
    icon: Search,
    title: "SEO & Search Marketing",
    description: "Data-driven SEO strategies and SEM campaigns that improve visibility and drive qualified traffic.",
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description: "Stunning visual designs that capture attention and communicate your brand message effectively.",
  },
  {
    icon: LineChart,
    title: "Web Analytics",
    description: "In-depth analytics and reporting to measure performance and optimize your digital presence.",
  },
  {
    icon: Share2,
    title: "Influencer Marketing",
    description: "Strategic influencer partnerships that amplify your brand reach and credibility.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and drive customer retention.",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 border border-gray-200 rounded-lg hover:border-[#d4ed31] hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4ed31] transition-colors">
                <service.icon size={28} className="text-white group-hover:text-[#1a1a1a] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
