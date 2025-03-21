import BlogForm from "@/components/admin/blog-form"
import { createClient } from "@/lib/supabase/server"

export default async function NewBlogPage() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from("categories").select("*").order("name")

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Create New Blog</h1>
        <p className="text-gray-600 mt-1">Write and publish a new blog post</p>
      </div>

      <BlogForm categories={categories || []} />
    </div>
  )
}
