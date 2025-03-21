import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import MapSection from "@/components/map-section"

export const metadata = {
  title: "Contact Us | WeBeeSocial",
  description: "Get in touch with WeBeeSocial. Let's discuss your digital marketing needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="Get In" highlight="Touch" subtitle="#ContactUs" />
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <MapSection />
      <Footer />
    </main>
  )
}
