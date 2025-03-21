import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-[#1a1a1a] min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl">
          <p className="text-gray-500 text-sm mb-4 font-mono">#digitallyrich</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            We create <span className="text-[#d4ed31]">super-rich</span>
            <br />
            experiences online!
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-16 h-[2px] bg-[#d4ed31]"></div>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 rotate-45 border border-[#d4ed31]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-20 left-8 text-white/20">
        <ArrowDown size={40} />
      </div>
    </section>
  )
}
