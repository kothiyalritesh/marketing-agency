"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-black border-primary/20 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-primary text-lg">Total Clients</CardTitle>
            <CardDescription className="text-gray-400">Active clients this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-green-500 mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-primary/20 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-primary text-lg">Active Projects</CardTitle>
            <CardDescription className="text-gray-400">Projects in progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18</div>
            <p className="text-xs text-green-500 mt-1">+5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black border-primary/20 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-primary text-lg">Revenue</CardTitle>
            <CardDescription className="text-gray-400">Total revenue this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$42,500</div>
            <p className="text-xs text-green-500 mt-1">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black border-primary/20 text-white">
          <CardHeader>
            <CardTitle className="text-primary">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center space-x-4 border-b border-primary/10 pb-4 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {i % 3 === 0 ? (
                      <BarChart size={20} />
                    ) : i % 2 === 0 ? (
                      <LineChart size={20} />
                    ) : (
                      <PieChart size={20} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {i % 3 === 0
                        ? "New client onboarded"
                        : i % 2 === 0
                          ? "Project milestone completed"
                          : "Campaign analytics updated"}
                    </p>
                    <p className="text-xs text-gray-400">{`${i} hour${i > 1 ? "s" : ""} ago`}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-primary/20 text-white">
          <CardHeader>
            <CardTitle className="text-primary">Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center space-x-4 border-b border-primary/10 pb-4 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {i}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {i % 3 === 0 ? "Client meeting" : i % 2 === 0 ? "Project review" : "Content creation"}
                    </p>
                    <p className="text-xs text-gray-400">{`Due in ${i} day${i > 1 ? "s" : ""}`}</p>
                  </div>
                  <div className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                    {i % 3 === 0 ? "High" : i % 2 === 0 ? "Medium" : "Low"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

