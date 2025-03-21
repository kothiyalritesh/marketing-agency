"use client"
import { Button } from "@/components/ui/button"
import { Link2 } from "lucide-react"

interface PortfolioItemProps {
  image: string
  title: string
  category: string
}

const portfolioItems: PortfolioItemProps[] = [
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Luxury Brand Redesign",
    category: "Brand Identity",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "E-commerce Platform",
    category: "Web Development",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Product Launch Campaign",
    category: "Digital Marketing",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "Social Media Strategy",
    category: "Social Media",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "SEO Optimization",
    category: "Search Engine Optimization",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    title: "PPC Campaign",
    category: "Advertising",
  },
]

const PortfolioItem = ({ image, title, category }: PortfolioItemProps) => {
  return (
    <div className="portfolio-item group">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="portfolio-image w-full h-full object-cover transition-transform duration-500"
      />
      <div className="portfolio-overlay">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-white mb-4">{category}</p>
        <a href="#" className="text-primary text-2xl">
          <Link2 size={24} />
        </a>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <section className="bg-black text-white section" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} image={item.image} title={item.title} category={item.category} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-black text-primary border-primary hover:bg-primary hover:text-black px-8"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

