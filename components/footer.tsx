import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const services = [
  "Digital Strategy and Planning",
  "Social Media Marketing",
  "Website Design and Development",
  "SEO and Search Engine Marketing",
  "Web Analytics",
]

const offices = [
  {
    city: "New Delhi [India]",
    address: "3rd Floor, Eskato complex 39, Plot No. 38 Mehrauli Ganj, Jaiwar D.K., India 110030",
  },
  {
    city: "Dubai [UAE]",
    address: "C613, Green Glory Tower, Majan D, Business Bay, Dubai, UAE Dubai",
  },
  {
    city: "Toronto [Canada]",
    address: "3403 Sheppard Ave E, Toronto, ON M1T 3K5, Canada",
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">WeBee</span>
              <span className="text-xs block -mt-1 tracking-[0.3em] text-gray-400">SOCIAL</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              We are a full service creative digital marketing agency based in New Delhi, creating integrated marketing
              solutions with creative campaigns across platforms with the best teams online. - We create super-rich
              experiences online!
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#d4ed31] transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4ed31] transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4ed31] transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4ed31] transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4ed31] transition-colors">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="font-bold mb-6 text-sm">Registered Office</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Plot no.7 Savita 99 Dwarka Sub City, New Delhi, India 110075
            </p>
            <h4 className="font-bold mb-3 text-sm">Registered Office (UAE)</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Webenseed Media L.L.C-FZ, License Number: 17455, Masdar Road, Ras Al Khaimah, Dubai UAE
            </p>
          </div>

          {/* Other Offices */}
          <div>
            <h4 className="font-bold mb-6 text-sm">Other Offices</h4>
            {offices.map((office) => (
              <div key={office.city} className="mb-4">
                <p className="text-sm font-semibold text-white">{office.city}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="font-bold mb-6 text-sm">Our Services</h4>
            <ul className="space-y-2 mb-8">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-gray-400 hover:text-[#d4ed31] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold mb-3 text-sm">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Get In touch</p>
              <p className="text-sm text-[#d4ed31]">hello@webeesocial.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">©WeBeesocial © 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
