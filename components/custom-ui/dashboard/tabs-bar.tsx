"use client"

import type { MouseEvent } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface Tab {
  id: string
  name: string
}

interface TabsBarProps {
  tabs: Tab[]
  activeTabId?: string
  onTabSelect: (id: string) => void
  onTabClose: (id: string) => void
}

export function TabsBar({ tabs, activeTabId, onTabSelect, onTabClose }: TabsBarProps) {
  return (
    <div className="bg-card border-border px-1 flex items-center gap-1 overflow-x-auto pt-1">
      {tabs.map((tab: Tab) => (
        <div
          key={tab.id}
          className={cn(
            "flex items-center border-t border-x rounded-t-md gap-1 px-2 py-1 cursor-pointer transition-colors",
            activeTabId === tab.id
              ? "border-secondary text-secondary bg-background"
              : "border-transparent bg-blue-50 text-muted-foreground hover:text-foreground hover:bg-muted",
          )}
          onClick={() => onTabSelect(tab.id)}
        >
          <span className="text-sm font-medium whitespace-nowrap">{tab.name}</span>
          {tab.name !== "Dashboard" && (
            <button
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
              className="hover:bg-muted rounded p-0.5 ml-1 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
