import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>

          <h1 className="text-2xl font-bold text-[#1a1a1a]">Authentication Error</h1>
          <p className="text-gray-600 mt-4">
            {params?.error ? `Error: ${params.error}` : "An unexpected error occurred during authentication."}
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/auth/login"
              className="block w-full bg-[#d4ed31] text-[#1a1a1a] hover:bg-[#c4dd21] font-semibold py-3 rounded-lg transition-colors"
            >
              Try Again
            </Link>

            <Link href="/" className="block text-sm text-gray-500 hover:text-[#1a1a1a]">
              &larr; Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
