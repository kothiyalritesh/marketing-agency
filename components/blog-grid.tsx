"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "WeBeeSocial wins a Gold at the Digixx 2020",
    excerpt:
      "WeBeeSocial wins a Gold at the Digixx 2020! Awards held in Goa year post. Team WeBeeSocial is truly delighted to announce that we have been honored.",
    date: "June 30, 2020",
    category: "News",
    image: "award ceremony gold trophy celebration",
  },
  {
    title: "WeBeeSocial wins 'Top 10 Digital Agencies - Independent' award at DOD 2021",
    excerpt:
      "WeBeeSocial wins 'Top 10 Digital Agencies - Independent' award at DoD Awards 2021. We are delighted to announce to the World!",
    date: "February 09, 2021",
    category: "News",
    image: "digital marketing award ceremony stage",
  },
  {
    title: "5 Digital Marketing Trends for 2024",
    excerpt:
      "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in the coming year.",
    date: "December 15, 2023",
    category: "Insights",
    image: "digital marketing trends futuristic technology",
  },
  {
    title: "How to Build a Successful Social Media Strategy",
    excerpt: "Learn the key elements of creating a social media strategy that drives engagement and conversions.",
    date: "November 20, 2023",
    category: "Strategy",
    image: "social media icons connected network",
  },
  {
    title: "The Importance of SEO in Modern Marketing",
    excerpt: "Discover why SEO remains a crucial component of any comprehensive digital marketing strategy.",
    date: "October 10, 2023",
    category: "SEO",
    image: "search engine optimization analytics dashboard",
  },
  {
    title: "Web Design Best Practices for Conversions",
    excerpt: "Optimize your website design to improve user experience and increase conversion rates.",
    date: "September 05, 2023",
    category: "Design",
    image: "modern website design mockup laptop",
  },
]

export default function BlogGrid() {
  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <Link href="#" className="grid md:grid-cols-2 gap-6 items-center">
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
              <img
                src={`/.jpg?height=300&width=500&query=${encodeURIComponent(post.image)}`}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-semibold text-[#d4ed31] bg-[#1a1a1a] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar size={12} />
                  {post.date}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#1a1a1a]/70 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover:text-[#d4ed31] transition-colors">
                READ MORE
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}

      <motion.div
        className="text-center pt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#333] transition-colors">
          LOAD MORE
        </button>
      </motion.div>
    </div>
  )
}
