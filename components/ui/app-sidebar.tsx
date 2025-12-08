"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  MapPinned,
  LayoutDashboard,
  FileText,
  User,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight, FileMinusCorner,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SidebarProps = {
  activeTabId?: string
  onTabChange?: (id: string, name: string) => void
  collapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
  sidebarWidth?: number
  isDragging?: boolean
  setIsDragging: (isDragging: boolean) => void
}

export function AppSidebar({
  activeTabId = "dashboard",
  onTabChange = () => {},
  collapsed = false,
  onCollapseChange = () => {},
  sidebarWidth,
  isDragging,
  setIsDragging,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const resizeRef = useRef<HTMLDivElement>(null)

  /* ⭐ Disable text selection to prevent blue highlight while dragging */
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none"
      document.body.style.webkitUserSelect = "none"
    } else {
      document.body.style.userSelect = "auto"
      document.body.style.webkitUserSelect = "auto"
    }

    return () => {
      document.body.style.userSelect = "auto"
      document.body.style.webkitUserSelect = "auto"
    }
  }, [isDragging])

  const creditControlItems = [
    { name: "Working Paper", icon: FileText, id: "workingPaper" },
    { name: "User", icon: User, id: "user" },
    { name: "Reports", icon: FileMinusCorner , id: "reportsCCD" },
  ]

  const misItems = [
    { name: "Button1", icon: Plus, id: "button1" },
    { name: "Button2", icon: Plus, id: "button2" },
  ]

  const portalItems = [
    { name: "Button3", icon: Plus, id: "button3" },
    { name: "Button4", icon: Plus, id: "button4" },
    { name: "Button5", icon: Plus, id: "button5" },
  ]

  const applicationItems = [
    { name: "App A", icon: Plus, id: "appA" },
    { name: "App B", icon: Plus, id: "appB" },
  ]

  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase().trim()

    if (!query) {
      return applicationItems
    }

    const allItems = [...creditControlItems, ...misItems, ...portalItems, ...applicationItems]
    return allItems.filter((item) => item.name.toLowerCase().includes(query))
  }

  const searchResults = getFilteredItems()

  const handleOpenTab = (id: string, name: string) => {
    onTabChange(id, name)
    setSearchQuery("")
  }

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <aside
        style={!collapsed ? { width: `${sidebarWidth}px` } : { width: 0 }}
        className={cn(
          "fixed top-14 bottom-0 left-0 z-30 flex flex-col bg-primary text-primary-foreground transition-all duration-300",
          collapsed ? "w-0 overflow-hidden" : "w-64",
        )}
      >
        {/* Search */}
        <div className="flex-shrink-0 ml-1 pl-4 py-4 border-b border-primary-foreground/10">
          {!collapsed ? (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
              <Input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/30"
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="w-full text-primary-foreground hover:bg-primary-foreground/10">
              <Search className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1  overflow-y-auto overscroll-contain no-scrollbar">
          {/* Dashboard */}
          <div className=" ml-1 pl-4 py-4 space-y-2">
            <Button
              variant={activeTabId === "dashboard" ? "secondary" : "ghost"}
              className={cn(
                "w-full text-primary-foreground hover:bg-primary-foreground/10",
                collapsed ? "justify-center px-0" : "justify-start",
                activeTabId === "dashboard" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
              onClick={() => handleOpenTab("dashboard", "Dashboard")}
            >
              <LayoutDashboard className={cn("h-4 w-4", !collapsed && "mr-3")} />
              {!collapsed && "Dashboard"}
            </Button>
          </div>

          {/* Credit Control */}
          <div className="ml-1 pl-4 py-4 space-y-2">
            {!collapsed && <p className="text-sm text-primary-foreground/60 font-medium px-3 py-2">Credit Control Division</p>}
            <div className="space-y-2">
              {creditControlItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTabId === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full text-primary-foreground hover:bg-primary-foreground/10",
                    collapsed ? "justify-center px-0" : "justify-start",
                    activeTabId === item.id && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                  onClick={() => handleOpenTab(item.id, item.name)}
                >
                  <item.icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                  {!collapsed && item.name}
                </Button>
              ))}
            </div>
          </div>

          {/* MIS */}
          <div className="ml-1 pl-4 py-4 space-y-2">
            {!collapsed && <p className="text-sm text-primary-foreground/60 font-medium px-3 py-2">MIS</p>}
            <div className="space-y-2">
              {misItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTabId === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full text-primary-foreground hover:bg-primary-foreground/10",
                    collapsed ? "justify-center px-0" : "justify-start",
                    activeTabId === item.id && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                  onClick={() => handleOpenTab(item.id, item.name)}
                >
                  <item.icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                  {!collapsed && item.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Portal */}
          <div className="ml-1 pl-4 py-4 space-y-2">
            {!collapsed && <p className="text-sm text-primary-foreground/60 font-medium px-3 py-2">PORTAL</p>}
            <div className="space-y-2">
              {portalItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTabId === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full text-primary-foreground hover:bg-primary-foreground/10",
                    collapsed ? "justify-center px-0" : "justify-start",
                    activeTabId === item.id && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  )}
                  onClick={() => handleOpenTab(item.id, item.name)}
                >
                  <item.icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                  {!collapsed && item.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="ml-1 pl-4 py-4 space-y-2">
            {!collapsed && <p className="text-sm text-primary-foreground/60 font-medium px-3 py-2">Applications</p>}
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeTabId === item.id ? "secondary" : "ghost"}
                    className={cn(
                      "w-full text-primary-foreground hover:bg-primary-foreground/10",
                      collapsed ? "justify-center px-0" : "justify-start",
                      activeTabId === item.id && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    )}
                    onClick={() => handleOpenTab(item.id, item.name)}
                  >
                    <item.icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                    {!collapsed && item.name}
                  </Button>
                ))}
              </div>
            ) : (
              searchQuery && !collapsed && <p className="text-xs text-primary-foreground/50 px-3 py-2">No results found</p>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="shrink-0 ml-1 pl-4 py-4 border-t border-primary-foreground/20">
          {!collapsed && (
            <div className="flex justify-center items-center gap-2 px-3 py-2 bg-primary-foreground/10 rounded-md">
              <MapPinned className="h-4 w-4 shrink-0" />
              <span className="text-sm text-secondary truncate">02 : ABC (BNK)</span>
            </div>
          )}
        </div>
      </aside>

      {/* Spacer for layout */}
      <div className={cn("hidden lg:block shrink-0 transition-all duration-150")} style={{ width: collapsed ? 0 : sidebarWidth }} />

      {/* Resize Handle */}
      <div className={isDragging ? "no-transition" : ""}>
  {/* SIDEBAR HERE */}

 {/* RESIZE HANDLE + COLLAPSE LOGIC */}
{collapsed ? (
  /* When collapsed — fully invisible hotspot */
  <div
    onClick={() => onCollapseChange(false)}
    className="
      fixed top-14 bottom-0 left-0
      w-2 z-50
      group
      bg-transparent
      cursor-pointer
    "
    style={{ pointerEvents: "auto" }}
  >
    {/* Only the button appears on hover */}
    <button
      onClick={() => onCollapseChange(false)}
      className="
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        absolute top-1/2 -translate-y-1/2 left-0
        bg-secondary/40 cursor-pointer text-primary-foreground
        h-8 w-4 flex items-center justify-center
        rounded-r-md shadow
      "
    >
      <ChevronRight className="h-4 w-4 cursor-pointer" />
    </button>
  </div>
) : (
  /* When expanded — normal resize handle */
  <div
    ref={resizeRef}
    onMouseDown={() => setIsDragging(true)}
    className={cn(
      "fixed top-14 bottom-0 bg-transparent cursor-col-resize z-40",
      "w-3",
      isDragging && "bg-transparent"
    )}
    style={{ left: sidebarWidth }}
  >
    {/* Collapse button */}
    <div className="absolute top-1/2 -translate-y-1/2 right-0">
      <Button
        size="icon"
        onClick={() => onCollapseChange(true)}
        className="
          cursor-pointer h-10 w-3 flex items-center justify-center
          bg-transparent hover:bg-primary/30
        "
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  </div>
)}



</div>

    </div>
  )
}
