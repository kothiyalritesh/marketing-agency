import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import AboutContent from "@/components/about-content"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"

export const metadata = {
  title: "About Us | WeBeeSocial",
  description: "Learn more about WeBeeSocial - A full-service creative digital marketing agency based in New Delhi.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="We create" highlight="super-rich experiences!" subtitle="#AboutUs" />
      <AboutContent />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
