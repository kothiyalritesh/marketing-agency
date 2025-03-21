import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Plus } from "lucide-react"
import BlogsTable from "@/components/admin/blogs-table"

export default async function AdminBlogsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">All Blogs</h1>
          <p className="text-gray-600 mt-1">Manage your blog posts</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-[#d4ed31] text-[#1a1a1a] px-6 py-3 rounded-lg font-medium hover:bg-[#c4dd21] transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Blog
        </Link>
      </div>

      <BlogsTable blogs={blogs || []} />
    </div>
  )
}
