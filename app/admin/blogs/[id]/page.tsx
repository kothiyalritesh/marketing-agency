import { notFound } from "next/navigation"
import BlogForm from "@/components/admin/blog-form"
import { createClient } from "@/lib/supabase/server"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: blog } = await supabase.from("blogs").select("*").eq("id", id).single()

  if (!blog) {
    notFound()
  }

  const { data: categories } = await supabase.from("categories").select("*").order("name")

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Edit Blog</h1>
        <p className="text-gray-600 mt-1">Update your blog post</p>
      </div>

      <BlogForm blog={blog} categories={categories || []} />
    </div>
  )
}
