"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialProps {
  text: string
  name: string
  position: string
  image: string
}

const testimonials: TestimonialProps[] = [
  {
    text: "Working with Buzz Marketing transformed our business. Their strategic approach to digital marketing helped us increase our online sales by 200% in just six months.",
    name: "Sarah Johnson",
    position: "CEO, Fashion Boutique",
    image: "/placeholder.svg?height=70&width=70",
  },
  {
    text: "The team at Buzz Marketing is exceptional. They completely redesigned our brand identity and created a website that perfectly represents our company values and vision.",
    name: "Michael Brown",
    position: "Founder, Tech Startup",
    image: "/placeholder.svg?height=70&width=70",
  },
  {
    text: "Their SEO expertise is unmatched. Within three months of working with Buzz Marketing, our website traffic increased by 150% and our conversion rate doubled.",
    name: "Emily Davis",
    position: "Marketing Director, E-commerce",
    image: "/placeholder.svg?height=70&width=70",
  },
]

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-primary text-black section" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-black">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="flex items-center justify-center">
                  <div className="author-image">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-5 text-left">
                    <h4 className="text-primary text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-black text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-black text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-black scale-125" : "bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

