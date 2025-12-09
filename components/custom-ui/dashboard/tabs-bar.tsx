"use client"

import type { MouseEvent } from "react"
import { cn } from "@/lib/utils"
import { X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
  const visibleTabs = tabs.length > 10 ? tabs.slice(0, 10) : tabs
  const hiddenTabs = tabs.slice(10)
  const showDropdown = tabs.length > 10
 
  return (
    <div className="bg-card border-border z-50 px-1 flex items-center gap-1 overflow-x-auto pt-1">
      {visibleTabs.map((tab: Tab) => (
        <div
          key={tab.id}
          className={cn(
            "flex items-center border-t z-50 border-x rounded-t-md gap-1 px-2 py-1 cursor-pointer transition-colors",
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

      {showDropdown && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-auto flex items-center gap-1 px-2 py-1 border-t border-x border-transparent rounded-t-md bg-blue-50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap">
              <span className="text-sm font-medium">+{hiddenTabs.length}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {hiddenTabs.map((tab: Tab) => (
              <DropdownMenuItem
                key={tab.id}
                onClick={() => onTabSelect(tab.id)}
                className="flex items-center justify-between gap-4"
              >
                <span>{tab.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
