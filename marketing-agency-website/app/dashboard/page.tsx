import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login?callbackUrl=/dashboard")
  }

  return (
    <div className="dark min-h-screen bg-black text-white">
      <DashboardHeader user={session.user} />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
          <DashboardOverview />
        </main>
      </div>
    </div>
  )
}

