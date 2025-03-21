import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#d4ed31] relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-700 mb-6 tracking-wider">CHECKOUT OUR REVIEWS</p>

          <Quote className="w-12 h-12 mx-auto mb-8 text-[#1a1a1a]/20" />

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-[#1a1a1a]">
            It is reassuring to work with people
            <br className="hidden md:block" />
            <span className="font-bold">who treat your properties as their own</span>
            <br className="hidden md:block" />
            and think pro-actively
          </blockquote>

          <div className="text-sm text-gray-700">
            <p className="font-semibold">Ankita Jayagopan</p>
            <p>Marketing Manager, Dassault-Afes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
