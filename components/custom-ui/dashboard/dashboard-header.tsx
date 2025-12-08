"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, User, Lock, Settings, LogOut } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center gap-4 bg-primary px-6">
      <div className="flex items-center space-x-3">
        <Avatar className="h-12 w-12 rounded-xl">
          <AvatarImage src="/images/acleda-logo.png" alt="Logo" className="rounded-xl object-cover" />
          <AvatarFallback className="bg-secondary text-secondary-foreground rounded-xl">MIS</AvatarFallback>
        </Avatar>
        <h2
  className="text-xl font-bold text-primary-foreground"
  style={{ fontFamily: "Times New Roman, serif" }}
>
  ACLEDA MIS
</h2>

      </div>

      <div className="flex items-center space-x-4 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-primary" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/images/Sarandy-image.jpg" alt="User Profile" />
                <AvatarFallback className="bg-secondary text-secondary-foreground">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">admin@dashboard.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Lock className="mr-2 h-4 w-4" />
              <span>Password</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
