import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import CareersIntro from "@/components/careers-intro"
import JobListings from "@/components/job-listings"
import WhyJoinUs from "@/components/why-join-us"

export const metadata = {
  title: "Careers | WeBeeSocial",
  description: "Join our team at WeBeeSocial. Explore exciting career opportunities in digital marketing.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="Work" highlight="With Us" subtitle="#Careers" />
      <CareersIntro />
      <WhyJoinUs />
      <JobListings />
      <Footer />
    </main>
  )
}
