"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Plot no.7 Savita 99 Dwarka", "Sub City, New Delhi, India 110075"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 11 4107 5538", "+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@webeesocial.com", "careers@webeesocial.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
  },
]

export default function ContactInfo() {
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-8">We'd love to hear from you. Here's how you can reach us.</p>

      <div className="space-y-8">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 bg-[#d4ed31] rounded-lg flex items-center justify-center shrink-0">
              <detail.icon size={24} className="text-[#1a1a1a]" />
            </div>
            <div>
              <h3 className="font-bold text-[#1a1a1a] mb-1">{detail.title}</h3>
              {detail.lines.map((line) => (
                <p key={line} className="text-gray-600 text-sm">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg">
        <h3 className="text-white font-bold mb-4">Follow Us</h3>
        <p className="text-gray-400 text-sm mb-4">Stay connected on social media for updates and insights.</p>
        <div className="flex gap-3">
          {["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 bg-[#333] rounded-lg flex items-center justify-center text-white hover:bg-[#d4ed31] hover:text-[#1a1a1a] transition-colors text-xs font-medium"
            >
              {social.charAt(0)}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
