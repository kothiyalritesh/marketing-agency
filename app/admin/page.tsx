import { createClient } from "@/lib/supabase/server"
import { FileText, Eye, EyeOff, Clock } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get blog statistics
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false })

  const totalBlogs = blogs?.length || 0
  const publishedBlogs = blogs?.filter((b) => b.published).length || 0
  const draftBlogs = blogs?.filter((b) => !b.published).length || 0
  const recentBlogs = blogs?.slice(0, 5) || []

  const stats = [
    { label: "Total Blogs", value: totalBlogs, icon: FileText, color: "bg-blue-500" },
    { label: "Published", value: publishedBlogs, icon: Eye, color: "bg-green-500" },
    { label: "Drafts", value: draftBlogs, icon: EyeOff, color: "bg-yellow-500" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s an overview of your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-[#1a1a1a] mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Link
          href="/admin/blogs/new"
          className="bg-[#d4ed31] hover:bg-[#c4dd21] rounded-xl p-6 transition-colors group"
        >
          <h3 className="text-xl font-bold text-[#1a1a1a]">Create New Blog</h3>
          <p className="text-[#1a1a1a]/70 mt-2">Start writing a new blog post</p>
        </Link>
        <Link href="/admin/blogs" className="bg-[#1a1a1a] hover:bg-gray-800 rounded-xl p-6 transition-colors group">
          <h3 className="text-xl font-bold text-white">Manage Blogs</h3>
          <p className="text-white/70 mt-2">View, edit, or delete existing posts</p>
        </Link>
      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#1a1a1a]">Recent Blogs</h2>
        </div>
        {recentBlogs.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <Link
                    href={`/admin/blogs/${blog.id}`}
                    className="font-medium text-[#1a1a1a] hover:text-[#d4ed31] transition-colors"
                  >
                    {blog.title}
                  </Link>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        blog.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/admin/blogs/${blog.id}`}
                  className="text-sm text-[#1a1a1a] hover:text-[#d4ed31] font-medium"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No blogs yet. Create your first blog post!</p>
            <Link
              href="/admin/blogs/new"
              className="inline-block mt-4 bg-[#d4ed31] text-[#1a1a1a] px-6 py-2 rounded-lg font-medium hover:bg-[#c4dd21] transition-colors"
            >
              Create Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
