import Link from "next/link"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg text-center">
          <div className="w-16 h-16 bg-[#d4ed31] rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-[#1a1a1a]" />
          </div>

          <h1 className="text-2xl font-bold text-[#1a1a1a]">Check your email!</h1>
          <p className="text-gray-600 mt-4">
            We&apos;ve sent you a confirmation email. Please click the link in the email to verify your account before
            signing in.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/auth/login"
              className="block w-full bg-[#d4ed31] text-[#1a1a1a] hover:bg-[#c4dd21] font-semibold py-3 rounded-lg transition-colors"
            >
              Go to Login
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
