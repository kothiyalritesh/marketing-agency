"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5",
        scrolled ? "bg-black/90 py-3 shadow-lg" : "",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-wider uppercase">
          Buzz
        </Link>

        <button
          className="md:hidden text-primary text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <div
          className={cn(
            "fixed md:static top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-black/95 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end transition-all duration-300 z-50",
            mobileMenuOpen ? "right-0" : "-right-full md:right-0",
          )}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <li>
              <Link
                href="/#home"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            {status === "loading" ? (
              <li>
                <span className="text-white">Loading...</span>
              </li>
            ) : session ? (
              <>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-white hover:text-primary font-semibold relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    onClick={closeMobileMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Button
                    variant="outline"
                    className="bg-black text-primary border-primary hover:bg-primary hover:text-black"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </Button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/auth/login" onClick={closeMobileMenu}>
                  <Button
                    variant="outline"
                    className="bg-black text-primary border-primary hover:bg-primary hover:text-black"
                  >
                    Log In
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

