import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import ImageGridSection from "@/components/image-grid-section"
import IntegratedSolutionsSection from "@/components/integrated-solutions-section"
import StrategySection from "@/components/strategy-section"
import ClientsSection from "@/components/clients-section"
import PortfolioCTA from "@/components/portfolio-cta"
import NewsSection from "@/components/news-section"
import TestimonialSection from "@/components/testimonial-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <ImageGridSection />
      <IntegratedSolutionsSection />
      <StrategySection />
      <ClientsSection />
      <PortfolioCTA />
      <NewsSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}
