"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"
import { Megaphone, Palette, Code, Search, BarChart3, PieChart } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: `all 0.8s ease ${delay}ms`,
        ...(inView && {
          opacity: 1,
          transform: "translateY(0)",
        }),
      }}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-light-gray">{description}</p>
    </div>
  )
}

const Services = () => {
  return (
    <section className="bg-black text-white section" id="services">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Megaphone size={48} />}
            title="Digital Marketing"
            description="Comprehensive digital marketing strategies to boost your online presence and drive conversions."
            delay={0}
          />
          <ServiceCard
            icon={<Palette size={48} />}
            title="Brand Identity"
            description="Create a memorable brand identity that resonates with your target audience and sets you apart."
            delay={200}
          />
          <ServiceCard
            icon={<Code size={48} />}
            title="Web Development"
            description="Custom website development that combines stunning design with seamless functionality."
            delay={400}
          />
          <ServiceCard
            icon={<Search size={48} />}
            title="SEO Optimization"
            description="Improve your search engine rankings and drive organic traffic to your website."
            delay={600}
          />
          <ServiceCard
            icon={<BarChart3 size={48} />}
            title="PPC Advertising"
            description="Strategic pay-per-click campaigns that maximize ROI and target your ideal customers."
            delay={800}
          />
          <ServiceCard
            icon={<PieChart size={48} />}
            title="Analytics & Reporting"
            description="Comprehensive data analysis and reporting to track performance and inform strategic decisions."
            delay={1000}
          />
        </div>
      </div>
    </section>
  )
}

export default Services

