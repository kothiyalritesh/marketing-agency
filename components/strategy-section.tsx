import Image from "next/image"

export default function StrategySection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Yellow geometric shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4ed31] -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#d4ed31] rotate-12 hidden lg:block"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Black geometric background */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#1a1a1a] -rotate-6 hidden lg:block"></div>

              <Image
                src="/creative-person-with-lightbulb-ideas-illustration-.jpg"
                alt="Strategy and creativity illustration"
                width={450}
                height={500}
                className="relative z-10"
              />

              {/* Floating elements */}
              <div className="absolute top-10 left-10 text-6xl">💡</div>
              <div className="absolute bottom-20 right-10 text-4xl">🎨</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Strategy,
              <br />
              Creativity &
              <br />
              Results!
            </h2>
            <p className="text-sm text-gray-600 mb-4 font-semibold italic">
              Our approach is backed by strategy, creativity and optimized for results.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              We understand that each client and each project we undertake is different and so we have developed a
              repeatable process that we know works. Our methodology puts the user at the heart of the experience from
              the start. By working iteratively through rapid prototypes, we ideate, design, build beautiful and usable
              solutions that work hard and deliver targeted results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
