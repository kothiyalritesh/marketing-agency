"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const cta = ctaRef.current

    if (title) {
      title.style.opacity = "0"
      title.style.transform = "translateY(30px)"
      setTimeout(() => {
        title.style.transition = "opacity 1s, transform 1s"
        title.style.opacity = "1"
        title.style.transform = "translateY(0)"
      }, 500)
    }

    if (subtitle) {
      subtitle.style.opacity = "0"
      subtitle.style.transform = "translateY(30px)"
      setTimeout(() => {
        subtitle.style.transition = "opacity 1s, transform 1s"
        subtitle.style.opacity = "1"
        subtitle.style.transform = "translateY(0)"
      }, 800)
    }

    if (cta) {
      cta.style.opacity = "0"
      cta.style.transform = "translateY(30px)"
      setTimeout(() => {
        cta.style.transition = "opacity 1s, transform 1s"
        cta.style.opacity = "1"
        cta.style.transform = "translateY(0)"
      }, 1100)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            We Build Brands That Stand Out
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            Transforming Ideas into Impact
          </p>
          <div ref={ctaRef}>
            <Link href="/#contact">
              <Button className="bg-primary text-black hover:bg-black hover:text-primary border-2 border-primary text-base font-semibold px-8 py-6 rounded-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

