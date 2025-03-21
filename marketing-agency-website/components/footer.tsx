import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-bold text-primary mb-4">Buzz Marketing</h2>
            <p className="text-light-gray mb-6">
              Transforming Ideas into Impact. We help businesses grow through strategic marketing solutions.
            </p>
          </div>
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-bold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" className="text-light-gray hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-light-gray hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-light-gray hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-light-gray hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-light-gray hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-light-gray hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-lg font-bold text-primary mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-primary text-sm mt-12">
          <p>&copy; {new Date().getFullYear()} Buzz Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

