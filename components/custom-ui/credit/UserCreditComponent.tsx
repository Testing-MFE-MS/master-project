"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Edit, Trash2, ChevronLeft, ChevronRight, Users, History, FileText } from "lucide-react"
import {userData} from "@/lib/muck-data/ccd-data/userData";

export function UserCreditComponent() {
  const [activeUserTab, setActiveUserTab] = useState("user-list")
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    userId: "",
    staffName: "",
    email: "",
    profileName: "",
    isADUser: false,
    isLocked: false,
    remarks: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleResetForm = () => {
    setFormData({
      userId: "",
      staffName: "",
      email: "",
      profileName: "",
      isADUser: false,
      isLocked: false,
      remarks: "",
    })
  }

  return (
    <div className="flex-1 -mt-14 overflow-auto">
      <Tabs value={activeUserTab} onValueChange={setActiveUserTab} className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="user-list" className="px-6">
              <Users className="mr-2 h-4 w-4" />
              User List
            </TabsTrigger>
            <TabsTrigger value="history-list" className="px-6">
              <History className="mr-2 h-4 w-4" />
              History List
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="user-list" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">User (Live)</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10 bg-accent w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter By...
                  </Button>
                  <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="bg-primary rounded-t-md text-primary-foreground p-3 -m-6 mb-4">
                          User (New)
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="user-id">@ID :</Label>
                          <Input id="user-id" className="mt-1 bg-background w-full" />
                        </div>

                        <Tabs defaultValue="details" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="details" className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Details
                            </TabsTrigger>
                            <TabsTrigger value="audit" className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Audit
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="details" className="space-y-4 mt-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="is-ad-user"
                                checked={formData.isADUser}
                                onCheckedChange={(checked) => handleCheckboxChange("isADUser", checked as boolean)}
                              />
                              <Label htmlFor="is-ad-user">Is AD User</Label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="user-id-field">
                                  User ID <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="user-id-field"
                                  name="userId"
                                  value={formData.userId}
                                  onChange={handleInputChange}
                                  className="mt-1 w-full bg-background"
                                />
                              </div>
                              <div>
                                <Label htmlFor="staff-name">Staff Name</Label>
                                <Input
                                  id="staff-name"
                                  name="staffName"
                                  value={formData.staffName}
                                  onChange={handleInputChange}
                                  className="mt-1 w-full bg-background"
                                />
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 w-full bg-background"
                              />
                            </div>

                            <div>
                              <Label htmlFor="profile-name">
                                Profile Name <span className="text-red-500">*</span>
                              </Label>
                              <Select
                                value={formData.profileName}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, profileName: value }))}
                              >
                                <SelectTrigger className="mt-1 w-full">
                                  <SelectValue placeholder="Select profile..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="admin">Admin</SelectItem>
                                  <SelectItem value="user">User</SelectItem>
                                  <SelectItem value="manager">Manager</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="is-locked"
                                checked={formData.isLocked}
                                onCheckedChange={(checked) => handleCheckboxChange("isLocked", checked as boolean)}
                              />
                              <Label htmlFor="is-locked">Is Locked</Label>
                            </div>

                            <div>
                              <Textarea
                                name="remarks"
                                placeholder="Additional notes..."
                                value={formData.remarks}
                                onChange={handleInputChange}
                                className="min-h-[100px] max-h-[150px] w-full overflow-y-auto"
                                wrap="soft"
                              />
                            </div>
                          </TabsContent>

                          <TabsContent value="audit" className="space-y-4 mt-4">
                            <div className="text-center text-muted-foreground py-8">
                              Audit information will be displayed here after user creation.
                            </div>
                          </TabsContent>
                        </Tabs>

                        <div className="flex flex-wrap justify-end gap-2 pt-4 border-t">
                          <Button variant="outline" onClick={() => setIsUserDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            variant="outline"
                            className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
                            onClick={() => {
                              handleResetForm()
                            }}
                          >
                            Reset
                          </Button>
                          <Button
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => {
                              setIsUserDialogOpen(false)
                              handleResetForm()
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <span className="text-sm text-muted-foreground">21-40 of 1462</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                      <TableHead className="text-primary-foreground font-semibold">No</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">User ID</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">User Name</TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden md:table-cell">
                        Profile Name
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Is Locked</TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden lg:table-cell">
                        Remark
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden md:table-cell">
                        Is AD User
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden lg:table-cell">
                        Booked Date
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden xl:table-cell">
                        Inputter
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden xl:table-cell">
                        Cur.No.
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.userId}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">{user.profileName}</TableCell>
                        <TableCell>
                          <Badge variant={user.isLocked === "T" ? "destructive" : "secondary"}>{user.isLocked}</Badge>
                        </TableCell>
                        <TableCell className="max-w-32 truncate hidden lg:table-cell">{user.remark}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {user.isADUser}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm hidden lg:table-cell">{user.bookedDate}</TableCell>
                        <TableCell className="text-sm max-w-40 truncate hidden xl:table-cell">
                          {user.inputter}
                        </TableCell>
                        <TableCell className="text-sm max-w-40 truncate hidden xl:table-cell">{user.curNo}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive bg-transparent"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history-list" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">User (History)</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10 w-64 bg-accent " />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter By...
                  </Button>
                  <span className="text-sm text-muted-foreground">21-40 of 1462</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                      <TableHead className="text-primary-foreground font-semibold">No</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">User ID</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">User Name</TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden md:table-cell">
                        Profile Name
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Is Locked</TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden lg:table-cell">
                        Remark
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden md:table-cell">
                        Is AD User
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden lg:table-cell">
                        Booked Date
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden xl:table-cell">
                        Inputter
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold hidden xl:table-cell">
                        Cur.No.
                      </TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.userId}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">{user.profileName}</TableCell>
                        <TableCell>
                          <Badge variant={user.isLocked === "T" ? "destructive" : "secondary"}>{user.isLocked}</Badge>
                        </TableCell>
                        <TableCell className="max-w-32 truncate hidden lg:table-cell">{user.remark}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {user.isADUser}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm hidden lg:table-cell">{user.bookedDate}</TableCell>
                        <TableCell className="text-sm max-w-40 truncate hidden xl:table-cell">
                          {user.inputter}
                        </TableCell>
                        <TableCell className="text-sm max-w-40 truncate hidden xl:table-cell">{user.curNo}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-destructive hover:text-destructive bg-transparent"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
