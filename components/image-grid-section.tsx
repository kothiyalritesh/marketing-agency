import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ImageGridSection() {
  return (
    <section className="py-0 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {/* Facebook Icon Block */}
        <div className="aspect-square bg-[#1877f2] flex items-center justify-center">
          <Facebook size={48} className="text-white" />
        </div>

        {/* Image 1 */}
        <div className="aspect-square relative col-span-2 row-span-2">
          <Image src="/creative-team-working-on-digital-marketing.jpg" alt="Creative team" fill className="object-cover" />
        </div>

        {/* Yellow Block */}
        <div className="aspect-square bg-[#d4ed31]"></div>

        {/* Image 2 */}
        <div className="aspect-square relative">
          <Image src="/colorful-creative-workspace.png" alt="Creative workspace" fill className="object-cover" />
        </div>

        {/* Image 3 */}
        <div className="aspect-square relative">
          <Image src="/woman-using-smartphone-social-media.jpg" alt="Social media" fill className="object-cover" />
        </div>

        {/* Instagram Icon Block */}
        <div className="aspect-square bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
          <Instagram size={48} className="text-white" />
        </div>

        {/* Black Block */}
        <div className="aspect-square bg-[#1a1a1a]"></div>

        {/* Image 4 */}
        <div className="aspect-square relative">
          <Image src="/digital-marketing-dashboard.png" alt="Analytics" fill className="object-cover" />
        </div>

        {/* Twitter Icon Block */}
        <div className="aspect-square bg-[#1da1f2] flex items-center justify-center">
          <Twitter size={48} className="text-white" />
        </div>

        {/* Image 5 */}
        <div className="aspect-square relative col-span-2">
          <Image src="/creative-design-team-collaboration.jpg" alt="Team collaboration" fill className="object-cover" />
        </div>

        {/* LinkedIn Icon Block */}
        <div className="aspect-square bg-[#0077b5] flex items-center justify-center">
          <Linkedin size={48} className="text-white" />
        </div>
      </div>
    </section>
  )
}
