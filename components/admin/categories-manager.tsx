"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Pencil, X, Check } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
}

export default function CategoriesManager({ categories: initialCategories }: { categories: Category[] }) {
  const [categories, setCategories] = useState(initialCategories)
  const [newCategory, setNewCategory] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingName, setEditingName] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCategory.trim()) return

    setIsAdding(true)
    const supabase = createClient()

    const { data, error } = await supabase
      .from("categories")
      .insert({
        name: newCategory.trim(),
        slug: generateSlug(newCategory),
      })
      .select()
      .single()

    if (!error && data) {
      setCategories([...categories, data])
      setNewCategory("")
    }

    setIsAdding(false)
  }

  const handleUpdate = async (id: string) => {
    if (!editingName.trim()) return

    const supabase = createClient()
    const { error } = await supabase
      .from("categories")
      .update({
        name: editingName.trim(),
        slug: generateSlug(editingName),
      })
      .eq("id", id)

    if (!error) {
      setCategories(
        categories.map((c) => (c.id === id ? { ...c, name: editingName.trim(), slug: generateSlug(editingName) } : c)),
      )
    }

    setEditingId(null)
    setEditingName("")
  }

  const handleDelete = async (id: string) => {
    const supabase = createClient()
    const { error } = await supabase.from("categories").delete().eq("id", id)

    if (!error) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  return (
    <div className="max-w-2xl">
      {/* Add Category Form */}
      <form onSubmit={handleAdd} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex gap-3">
          <Input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isAdding || !newCategory.trim()}
            className="bg-[#d4ed31] text-[#1a1a1a] hover:bg-[#c4dd21]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </form>

      {/* Categories List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {categories.length > 0 ? (
          <ul className="divide-y divide-gray-100">
            {categories.map((category) => (
              <li key={category.id} className="p-4 flex items-center justify-between">
                {editingId === category.id ? (
                  <div className="flex items-center gap-2 flex-1">
                    <Input
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      className="flex-1"
                      autoFocus
                    />
                    <button
                      onClick={() => handleUpdate(category.id)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(null)
                        setEditingName("")
                      }}
                      className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div>
                      <p className="font-medium text-[#1a1a1a]">{category.name}</p>
                      <p className="text-sm text-gray-500">{category.slug}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          setEditingId(category.id)
                          setEditingName(category.name)
                        }}
                        className="p-2 text-gray-400 hover:text-[#1a1a1a] hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center text-gray-500">No categories yet. Add your first category above.</div>
        )}
      </div>
    </div>
  )
}
