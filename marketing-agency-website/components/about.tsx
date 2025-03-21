"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { LightbulbIcon, TrendingUpIcon, TrophyIcon } from "lucide-react"

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && contentRef.current) {
      contentRef.current.style.opacity = "1"
      contentRef.current.style.transform = "translateX(0)"
    }
  }, [inView])

  return (
    <section className="bg-primary text-black section" id="about">
      <div className="container mx-auto px-4">
        <div ref={ref} className="flex flex-wrap items-center gap-12">
          <div
            ref={contentRef}
            className="flex-1 min-w-[300px] opacity-0 transform -translate-x-10 transition-all duration-1000"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">Who We Are</h2>
            <p className="mb-6">
              At Buzz Marketing, we're passionate about helping businesses grow through strategic marketing solutions.
              With over a decade of experience, our team of experts combines creativity with data-driven strategies to
              deliver exceptional results.
            </p>
            <div className="mt-8">
              <div className="feature">
                <div className="feature-icon">
                  <LightbulbIcon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Creative Thinking</h3>
                  <p>We approach every project with fresh ideas and innovative solutions.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <TrendingUpIcon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Data-Driven Strategy</h3>
                  <p>Our strategies are backed by thorough research and analytics.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <TrophyIcon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Results-Oriented</h3>
                  <p>We focus on delivering measurable results that impact your bottom line.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[300px] h-[400px] relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Marketing team brainstorming"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

