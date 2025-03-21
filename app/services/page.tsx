import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ServicesGrid from "@/components/services-grid"
import ProcessSection from "@/components/process-section"
import ServicesCTA from "@/components/services-cta"

export const metadata = {
  title: "Our Services | WeBeeSocial",
  description: "Digital marketing services including strategy, social media, web development, SEO and analytics.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="What we" highlight="do best!" subtitle="#OurServices" />
      <ServicesGrid />
      <ProcessSection />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
