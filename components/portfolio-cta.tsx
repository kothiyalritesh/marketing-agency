import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PortfolioCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8">Want to check out our portfolio?</h2>
        <Link
          href="/work"
          className="inline-flex items-center gap-3 bg-[#d4ed31] text-[#1a1a1a] px-8 py-4 font-semibold text-sm hover:bg-[#c5de22] transition-colors"
        >
          OUR WORK <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}
