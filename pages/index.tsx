"use client"

import localFont from "next/font/local";
import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/custom-ui/dashboard/dashboard-header"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { TabsBar } from "@/components/custom-ui/dashboard/tabs-bar"
import { Separator } from "@/components/ui/separator"
import { TabContent } from "@/components/custom-ui/dashboard/TabContent"


const geistMono = localFont({
  src: '../fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf',
  variable: "--font-geist-mono",
  weight: '100 900',
});


interface Tab {
  id: string
  name: string
}

export default function Home() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: "dashboard", name: "Dashboard" }])
  const [activeTabId, setActiveTabId] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(240)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const newWidth = e.clientX
      if (newWidth > 240 && newWidth < 500) {
        setSidebarWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const handleTabChange = (id: string, name: string) => {
    if (!tabs.find((tab) => tab.id === id)) {
      setTabs((prev) => [...prev, { id, name }])
    }
    setActiveTabId(id)
  }

  const handleTabClose = (id: string) => {
    if (id === "dashboard") return

    const newTabs = tabs.filter((tab) => tab.id !== id)
    setTabs(newTabs)

    if (activeTabId === id) {
      const newActive = newTabs[newTabs.length - 1]?.id || "dashboard"
      setActiveTabId(newActive)
    }
  }

  return (
      <div className={isDragging ? "no-transition" : ""}>
        <div className="min-h-screen bg-primary w-full">
          {/* Fixed Header */}
          <DashboardHeader />

          {/* Sidebar */}
          <AppSidebar
              activeTabId={activeTabId}
              onTabChange={handleTabChange}
              collapsed={sidebarCollapsed}
              onCollapseChange={setSidebarCollapsed}
              sidebarWidth={sidebarWidth}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
          />

          <main
              className={`pt-10 transition-all duration-300  ${
                  sidebarCollapsed ? "pt-10 ml-4" : "pt-10 ml-[250px]"
              }`}
              style={{
                marginLeft: sidebarCollapsed ? 4 : sidebarWidth,
              }}
          >
            <div className={`${sidebarCollapsed ? "pl-[8px] pr-3" : "pl-[23px] pr-3"}`}>
              <div className="flex-1 h-[calc(99vh-78px)] mt-7 flex flex-col border border-border rounded-lg shadow-sm bg-card overflow-hidden">

                {/* Tabs Bar */}
                <TabsBar
                    tabs={tabs}
                    activeTabId={activeTabId}
                    onTabSelect={setActiveTabId}
                    onTabClose={handleTabClose}
                />

                <Separator />

                {/* Tab Content */}
                <div className="flex-1 pt-20 overflow-auto p-6 border-t-1 border-secondary">
                  <TabContent activeTabId={activeTabId} />
                </div>
              </div>
            </div>
            <div className="text-[10px] pt-[2px] text-white text-center tracking-[0.5px]">
              Version : 1.0.0 | Released date: 2025-01-15 | @Copyright 2025 by ACLEDA Bank Plc. All Rights Reserved.
            </div>
          </main>
        </div>
      </div>
  )
}