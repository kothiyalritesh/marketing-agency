import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import BlogGrid from "@/components/blog-grid"
import BlogSidebar from "@/components/blog-sidebar"

export const metadata = {
  title: "Blog | WeBeeSocial",
  description: "Latest insights, tips and news from WeBeeSocial's digital marketing experts.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader title="Our" highlight="News" subtitle="#Blog" />
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
