"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, Users, DollarSign, ShoppingCart, Activity, Package } from "lucide-react"

const SummaryCard = ({
  title,
  value,
  change,
  icon: Icon,
  description,
}: {
  title: string
  value: string
  change?: string
  icon: React.ElementType
  description?: string
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <p className="text-xs text-muted-foreground">
          <span className={change.startsWith("+") ? "text-green-600" : "text-red-600"}>{change}</span> {description}
        </p>
      )}
    </CardContent>
  </Card>
)

const ChartPlaceholder = () => (
  <Card className="col-span-4">
    <CardHeader>
      <CardTitle>Revenue Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px] flex items-center justify-center border border-dashed border-border rounded-lg">
        <div className="text-center text-muted-foreground">
          <Activity className="h-8 w-8 mx-auto mb-2" />
          <p>Revenue chart will be displayed here</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function DashboardContent() {
  return (
    <div className="space-y-6 text-foreground -mt-14 mx-auto max-w-screen-3xl">
      {/* Header */}
      <div> 
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&#39;s what&#39;s happening today.</p>
      </div>

      {/* Summary Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          description="from last month"
          icon={DollarSign}
        />
        <SummaryCard title="Customers" value="+2,350" change="+18%" description="from last month" icon={Users} />
        <SummaryCard title="Orders" value="+1,234" change="+12%" description="from last month" icon={ShoppingCart} />
        <SummaryCard title="Inventory" value="573" change="-4%" description="from last month" icon={Package} />
      </div>

      {/* Charts and Additional Data */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ChartPlaceholder />

        {/* Quick Stats */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Active Users</p>
                  <p className="text-2xl font-bold">1,248</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold">3.2%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-500" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Avg. Order Value</p>
                  <p className="text-2xl font-bold">$124.50</p>
                </div>
                <DollarSign className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <ChartPlaceholder />

        {/* Quick Stats */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Active Users</p>
                  <p className="text-2xl font-bold">1,248</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold">3.2%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-500" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Avg. Order Value</p>
                  <p className="text-2xl font-bold">$124.50</p>
                </div>
                <DollarSign className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
