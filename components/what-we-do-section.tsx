import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhatWeDoSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Yellow geometric shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4ed31] clip-diagonal hidden lg:block"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Large Typography */}
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
              What
              <br />
              we
              <br />
              do<span className="text-[#d4ed31]">?</span>
            </h2>
          </div>

          {/* Right - Content Cards */}
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {/* Digital Card */}
            <div className="bg-white p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-4">Digital.</h3>
              <p className="text-sm text-gray-600 mb-2 font-medium">We create super-rich experiences online!</p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                WeBeeSocial is a full-scale Digital Marketing Agency based out of New Delhi, India. We use our years of
                experience and knowledge to create solutions for our clients that not only perform driven, but also
                create digital campaigns for our clients, even on social media!
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-4 transition-all"
              >
                ABOUT US <ArrowRight size={16} />
              </Link>
            </div>

            {/* And More Digital Card */}
            <div className="bg-[#1a1a1a] text-white p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-4">And More Digital.</h3>
              <p className="text-sm text-gray-400 mb-2 font-medium">Marketing brands with care</p>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                What is marketing if it is not effective marketing? We create digital experiences which stick with
                audiences and also reach the set objectives. These as well as making your brand visible and desired,
                create loyalty focused!
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4ed31] hover:gap-4 transition-all"
              >
                OUR SERVICES <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
