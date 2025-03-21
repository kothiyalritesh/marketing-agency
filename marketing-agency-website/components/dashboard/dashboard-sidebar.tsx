"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart2,
  Settings,
  MessageSquare,
  Calendar,
  HelpCircle,
} from "lucide-react"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
        active ? "bg-primary/20 text-primary" : "text-gray-400 hover:bg-primary/10 hover:text-primary",
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <aside className="w-64 bg-black border-r border-primary/20 min-h-[calc(100vh-73px)] p-4">
      <nav className="space-y-1">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          href="/dashboard"
          active={pathname === "/dashboard"}
        />
        <SidebarItem
          icon={<Users size={20} />}
          label="Clients"
          href="/dashboard/clients"
          active={pathname === "/dashboard/clients"}
        />
        <SidebarItem
          icon={<FileText size={20} />}
          label="Projects"
          href="/dashboard/projects"
          active={pathname === "/dashboard/projects"}
        />
        <SidebarItem
          icon={<BarChart2 size={20} />}
          label="Analytics"
          href="/dashboard/analytics"
          active={pathname === "/dashboard/analytics"}
        />
        <SidebarItem
          icon={<MessageSquare size={20} />}
          label="Messages"
          href="/dashboard/messages"
          active={pathname === "/dashboard/messages"}
        />
        <SidebarItem
          icon={<Calendar size={20} />}
          label="Calendar"
          href="/dashboard/calendar"
          active={pathname === "/dashboard/calendar"}
        />
        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
          href="/dashboard/settings"
          active={pathname === "/dashboard/settings"}
        />
        <SidebarItem
          icon={<HelpCircle size={20} />}
          label="Help"
          href="/dashboard/help"
          active={pathname === "/dashboard/help"}
        />
      </nav>
    </aside>
  )
}

