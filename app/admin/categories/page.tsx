import { createClient } from "@/lib/supabase/server"
import CategoriesManager from "@/components/admin/categories-manager"

export default async function AdminCategoriesPage() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from("categories").select("*").order("name")

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Categories</h1>
        <p className="text-gray-600 mt-1">Manage blog categories</p>
      </div>

      <CategoriesManager categories={categories || []} />
    </div>
  )
}
