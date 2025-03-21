"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search } from "lucide-react"

const categories = [
  { name: "News", count: 12 },
  { name: "Insights", count: 8 },
  { name: "Strategy", count: 15 },
  { name: "SEO", count: 10 },
  { name: "Design", count: 7 },
  { name: "Social Media", count: 20 },
]

const recentPosts = [
  { title: "WeBeeSocial wins a Gold at the Digixx 2020", date: "June 30, 2020" },
  { title: "WeBeeSocial wins 'Top 10 Digital Agencies' award", date: "February 09, 2021" },
  { title: "5 Digital Marketing Trends for 2024", date: "December 15, 2023" },
]

export default function BlogSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Search */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg">
        <h3 className="font-bold text-[#1a1a1a] mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-[#d4ed31]"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1a1a1a]">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg">
        <h3 className="font-bold text-[#1a1a1a] mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href="#"
                className="flex items-center justify-between text-gray-600 hover:text-[#1a1a1a] transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-[#f5f5f5] p-6 rounded-lg">
        <h3 className="font-bold text-[#1a1a1a] mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.title}>
              <Link href="#" className="group">
                <h4 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#d4ed31] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
        <h3 className="font-bold text-white mb-2">Want to grow your business?</h3>
        <p className="text-gray-400 text-sm mb-4">Let's discuss your project</p>
        <Link
          href="/contact"
          className="inline-block bg-[#d4ed31] text-[#1a1a1a] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#c5de22] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </motion.aside>
  )
}
