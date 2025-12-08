"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DashboardContent } from "@/components/custom-ui/dashboard/DashboardContent"
import { WorkingPaperComponent } from "@/components/custom-ui/credit/WorkingPaperComponent"
import { UserCreditComponent } from "@/components/custom-ui/credit/UserCreditComponent"
import ReportCCDProjectComponent from "@/components/custom-ui/credit/ReportCCDProjectComponent";

type TabContentProps = {
  activeTabId: string
}

// Generic placeholder component for other tabs
function PlaceholderContent({ title, icon: Icon }: { title: string; icon: React.ElementType }) {
  return (
    <div className="space-y-6 -mt-14">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">Content for {title} will be displayed here</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title} Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">This is the {title} section</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function TabContent({ activeTabId }: TabContentProps) {
  switch (activeTabId) {
    case "dashboard":
      return <DashboardContent />
    case "workingPaper":
      return <WorkingPaperComponent />
    case "user":
      return <UserCreditComponent />
    case "reportsCCD" :
      return <ReportCCDProjectComponent/>
    default:
      return <PlaceholderContent title={activeTabId} icon={Plus} />
  }
}
