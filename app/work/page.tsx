import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import WorkGrid from "@/components/work-grid"
import WorkFilter from "@/components/work-filter"

export const metadata = {
  title: "Our Work | WeBeeSocial",
  description: "Explore our portfolio of successful digital marketing campaigns and projects.",
}

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="Our" highlight="Portfolio" subtitle="#OurWork" />
      <WorkFilter />
      <WorkGrid />
      <Footer />
    </main>
  )
}
