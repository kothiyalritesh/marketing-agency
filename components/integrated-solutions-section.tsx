import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function IntegratedSolutionsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Integrated
              <br />
              Digital
              <br />
              Solutions
            </h2>
            <p className="text-sm text-gray-600 mb-4 font-semibold">
              Insights, Metrics and Analytics - Everything is connected!
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              In a digital world where everything's connected, an isolated or broken site approach to digital
              communication is bad for good business.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Here let us present you. Our approach combines creativity in technology and Merits a diverse range of
              digital marketing skills. From content development and responsive web design to search and social media
              campaigns – all under one roof.
            </p>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            {/* Yellow diagonal background */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#d4ed31] rotate-12 hidden lg:block"></div>

            <div className="relative z-10 flex items-center justify-center">
              {/* Illustration */}
              <div className="relative">
                <Image
                  src="/person-holding-phone-illustration-line-art-minimal.jpg"
                  alt="Digital connection illustration"
                  width={350}
                  height={400}
                  className="relative z-10"
                />

                {/* Everything is connected badge */}
                <div className="absolute top-10 right-0 bg-[#d4ed31] px-6 py-4 rotate-3">
                  <p className="text-sm font-medium">Everything</p>
                  <p className="text-2xl font-bold">is connected</p>
                </div>

                {/* Social icons floating */}
                <div className="absolute -left-8 top-20 w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center">
                  <Facebook size={20} className="text-white" />
                </div>
                <div className="absolute -left-4 bottom-32 w-10 h-10 bg-[#e4405f] rounded-full flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
                <div className="absolute right-10 bottom-20 w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center">
                  <Linkedin size={20} className="text-white" />
                </div>
                <div className="absolute right-0 top-40 w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center">
                  <Twitter size={20} className="text-white" />
                </div>
                <div className="absolute left-20 bottom-10 w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center">
                  <Youtube size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
