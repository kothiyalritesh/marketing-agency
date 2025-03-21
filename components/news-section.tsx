import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    category: "News",
    date: "June 30, 2020",
    title: "WeBeeSocial wins a Gold at the Digixx 2020",
    excerpt:
      "WeBeeSocial won a Gold at the Digixx 2020 Awards! Yet again we are elated as we announce that we have been recognized!",
    image: "/award-trophy-gold-celebration.jpg",
  },
  {
    id: 2,
    category: "News",
    date: "February 18, 2021",
    title: "WeBeeSocial wins 'Top 10 Digital Agencies - Independent' award at DOD 2021",
    excerpt:
      "WeBeeSocial has won 'Top 10 Digital Agencies - Independent' award at Content of Digital Awards 2021! We are delighted to announce the WeNews!",
    image: "/digital-agency-award-ceremony.jpg",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="text-[#1a1a1a]">
          <path d="M10 50 Q 50 10, 100 50 T 190 50" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 80 Q 50 40, 100 80 T 190 80" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 110 Q 50 70, 100 110 T 190 110" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
              Our
              <br />
              news<span className="text-[#d4ed31]">...</span>
            </h2>
          </div>

          {/* Right - News Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {news.map((item) => (
              <article key={item.id} className="bg-white group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#d4ed31] bg-[#1a1a1a] px-2 py-1">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-[#d4ed31] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.excerpt}</p>
                  <Link
                    href={`/blog/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all"
                  >
                    READ MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
