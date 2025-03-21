"use client"

import { useState } from "react"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings, Bell, Menu } from "lucide-react"

interface DashboardHeaderProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header className="bg-black border-b border-primary/20 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden text-primary mr-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </button>
          <Link href="/" className="text-2xl font-extrabold text-primary tracking-wider uppercase">
            Buzz
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
            <Bell size={20} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              >
                {user.image ? (
                  <img
                    src={user.image || "/placeholder.svg"}
                    alt={user.name || "User"}
                    className="h-10 w-10 rounded-full"
                  />
                ) : (
                  <User size={20} />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black border-primary/20 text-white">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-primary">{user.name}</p>
                  <p className="text-xs leading-none text-gray-400">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-primary/20" />
              <DropdownMenuItem className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                <Link href="/dashboard/profile" className="flex items-center w-full">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                <Link href="/dashboard/settings" className="flex items-center w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-primary/20" />
              <DropdownMenuItem
                className="hover:bg-primary/10 hover:text-primary cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

