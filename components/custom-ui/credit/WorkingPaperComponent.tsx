"use client"

import { useState } from "react"
import { format } from "date-fns"
import {
  FileText,
  Home,
  Users,
  Download,
  FileUp,
  CalendarIcon,
  Wrench,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Save,
  Check,
  FileDown,
  Database,
  Upload,
  RefreshCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {customerData} from "@/lib/muck-data/ccd-data/customerData";

export function WorkingPaperComponent() {
  const [activeTab, setActiveTab] = useState("customer-info")
  const [selectedCheckType, setSelectedCheckType] = useState("post-disbursement")
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex-1 -mt-14 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Working Paper</h1>
          <p className="text-muted-foreground">Customer check and verification form</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="customer-info" className="w-full">
          <TabsContent value="customer-info" className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Check File</p>
                      <p className="text-3xl font-bold text-primary">829</p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Home Visit</p>
                      <p className="text-3xl font-bold text-primary">591</p>
                    </div>
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Customer Visit</p>
                      <p className="text-3xl font-bold text-primary">45</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* File Upload Section */}
            <div className="mt-8 pb-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-lg border-2 border-border flex items-center justify-center">
                      <Download className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Import Customer Data</h3>
                      <p className="text-sm text-muted-foreground">Import CSV file to import customer information</p>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2 border-border hover:bg-secondary bg-transparent">
                    <FileUp className="w-4 h-4" />
                    Choose File
                  </Button>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="customer-info"
                className="border border-border rounded-lg bg-white px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.92_0.02_45)] flex items-center justify-center">
                      <Users className="w-6 h-6 text-[oklch(0.5_0.1_45)]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">Customer Information</h3>
                      <p className="text-sm text-muted-foreground">Configure customer information</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ទម្រង់ព័ត៌មានអតិថិជនសម្រាប់ការត្រួតពិនិត្យ</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cif">CIF:</Label>
                          <div className="flex">
                            <Input id="cif" className="rounded-r-none bg-background" />
                            <Button variant="outline" size="icon" className="rounded-l-none border-l-0 bg-transparent">
                              <Users className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contract-id">Contract ID:</Label>
                          <Input id="contract-id" className="bg-background" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="client-name">Client Name:</Label>
                          <Input id="client-name" className="bg-background" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="id-user">ID User:</Label>
                          <Input id="id-user" className="bg-background" defaultValue="02311" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="branch">Branch Checking:</Label>
                          <Input id="branch" className="bg-background" defaultValue="KTL" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Date:</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "dd-MMM-yyyy") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={date}
                                onSelect={(newDate) => newDate && setDate(newDate)}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="user">User:</Label>
                          <Select defaultValue="bcc">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ccu">CCU</SelectItem>
                              <SelectItem value="bcc">BCC</SelectItem>
                              <SelectItem value="cau">CAU</SelectItem>
                              <SelectItem value="bca">BCA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Type of Check */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Type of Check</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup
                          value={selectedCheckType}
                          onValueChange={setSelectedCheckType}
                          className="space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="post-disbursement" id="post-disbursement" className="w-5 h-5" />
                              <Label htmlFor="post-disbursement" className="text-base font-medium cursor-pointer">
                                Post-disbursement
                              </Label>
                            </div>
                            <Badge variant="secondary">230</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="default-90" id="default-90" className="w-5 h-5" />
                              <Label htmlFor="default-90" className="text-base font-medium cursor-pointer">
                                Default-90 Days
                              </Label>
                            </div>
                            <Badge variant="secondary">579</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="facility-review" id="facility-review" className="w-5 h-5" />
                              <Label htmlFor="facility-review" className="text-base font-medium cursor-pointer">
                                Facility Review
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="credit-risk" id="credit-risk" className="w-5 h-5" />
                              <Label htmlFor="credit-risk" className="text-base font-medium cursor-pointer">
                                Credit Risk Grading
                              </Label>
                            </div>
                            <Badge variant="secondary">10</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="compliance" id="compliance" className="w-5 h-5" />
                              <Label htmlFor="compliance" className="text-base font-medium cursor-pointer">
                                Compliance to Policy
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                        </RadioGroup>
                      </CardContent>
                    </Card>

                    {/* Type of Check Loan and System */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Type of Check Loan</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-loan-hard" className="w-5 h-5" />
                              <Label htmlFor="check-loan-hard" className="text-base font-medium cursor-pointer">
                                Check Loan doc (hard copy)
                              </Label>
                            </div>
                            <Badge variant="secondary">579</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-loan-paper" className="w-5 h-5" />
                              <Label htmlFor="check-loan-paper" className="text-base font-medium cursor-pointer">
                                Check Loan doc (paper park)
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-loan-t24" className="w-5 h-5" />
                              <Label htmlFor="check-loan-t24" className="text-base font-medium cursor-pointer">
                                Check loan in T24
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-loan-clickloan" className="w-5 h-5" />
                              <Label htmlFor="check-loan-clickloan" className="text-base font-medium cursor-pointer">
                                Check loan in Clickloan
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-collateral" className="w-5 h-5" />
                              <Label htmlFor="check-collateral" className="text-base font-medium cursor-pointer">
                                Check collateral in MCMM
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Type of Check File and Home Visit */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Type of Check File and Home Visit</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-file" className="w-5 h-5" />
                              <Label htmlFor="check-file" className="text-base font-medium cursor-pointer">
                                Check File
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-business" className="w-5 h-5" />
                              <Label htmlFor="check-business" className="text-base font-medium cursor-pointer">
                                Check business
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="home-visit" className="w-5 h-5" />
                              <Label htmlFor="home-visit" className="text-base font-medium cursor-pointer">
                                Home visit
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="check-all" className="w-5 h-5" />
                              <Label htmlFor="check-all" className="text-base font-medium cursor-pointer">
                                Check All
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CCD-EWS */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">CCD-EWS</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="none" className="w-5 h-5" />
                              <Label htmlFor="none" className="text-base font-medium cursor-pointer">
                                None
                              </Label>
                            </div>
                            <Badge variant="secondary">811</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="purely-precautionary" className="w-5 h-5" />
                              <Label htmlFor="purely-precautionary" className="text-base font-medium cursor-pointer">
                                Purely Precautionary
                              </Label>
                            </div>
                            <Badge variant="secondary">10</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="watch-list" className="w-5 h-5" />
                              <Label htmlFor="watch-list" className="text-base font-medium cursor-pointer">
                                Watch List
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="impairment" className="w-5 h-5" />
                              <Label htmlFor="impairment" className="text-base font-medium cursor-pointer">
                                Impairment Facilities
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="conflict" className="w-5 h-5" />
                              <Label htmlFor="conflict" className="text-base font-medium cursor-pointer">
                                Conflict of Interest
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="key-person" className="w-5 h-5" />
                              <Label htmlFor="key-person" className="text-base font-medium cursor-pointer">
                                Key Person
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Checkbox id="money-lender" className="w-5 h-5" />
                              <Label htmlFor="money-lender" className="text-base font-medium cursor-pointer">
                                Money Lender
                              </Label>
                            </div>
                            <Badge variant="secondary">0</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex justify-end space-x-4">
                    <Button variant="outline" size="lg">
                      Delete
                    </Button>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Submit
                    </Button>
                  </div>

                  {/* Data Table */}
                  <Card className="mt-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Data</CardTitle>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="filter">Filter by:</Label>
                            <Select defaultValue="all">
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="loan">Loan</SelectItem>
                                <SelectItem value="deposit">Deposit</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Total Check File: 821 - Total Home Visit: 591
                          </div>
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="sort">Sort by:</Label>
                            <Select defaultValue="smallest">
                              <SelectTrigger className="w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="smallest">Smallest to Largest</SelectItem>
                                <SelectItem value="largest">Largest to Smallest</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12">No</TableHead>
                              <TableHead>Customer</TableHead>
                              <TableHead>Client Name</TableHead>
                              <TableHead className="w-16 hidden md:table-cell">#LD</TableHead>
                              <TableHead>Risk</TableHead>
                              <TableHead className="hidden lg:table-cell">Check</TableHead>
                              <TableHead className="hidden lg:table-cell">Approver</TableHead>
                              <TableHead className="hidden xl:table-cell">Type 1</TableHead>
                              <TableHead className="hidden xl:table-cell">Type 2</TableHead>
                              <TableHead className="hidden xl:table-cell">Type 3</TableHead>
                              <TableHead className="hidden xl:table-cell">Type 4</TableHead>
                              <TableHead className="hidden xl:table-cell">Type 5</TableHead>
                              <TableHead className="w-16 hidden xl:table-cell">T...</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {customerData.map((customer) => (
                              <TableRow key={customer.no}>
                                <TableCell>{customer.no}</TableCell>
                                <TableCell className="font-mono">{customer.customer}</TableCell>
                                <TableCell>{customer.clientName}</TableCell>
                                <TableCell className="hidden md:table-cell">{customer.ld}</TableCell>
                                <TableCell>
                                  <Badge variant={customer.risk === "Very High Risk" ? "destructive" : "secondary"}>
                                    {customer.risk}
                                  </Badge>
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">{customer.check}</TableCell>
                                <TableCell className="hidden lg:table-cell">{customer.approver}</TableCell>
                                <TableCell className="hidden xl:table-cell">{customer.type1}</TableCell>
                                <TableCell className="hidden xl:table-cell">{customer.type2}</TableCell>
                                <TableCell className="hidden xl:table-cell">{customer.type3}</TableCell>
                                <TableCell className="hidden xl:table-cell">{customer.type4}</TableCell>
                                <TableCell className="hidden xl:table-cell">{customer.type5}</TableCell>
                                <TableCell className="hidden xl:table-cell">P...</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>

                      {/* Pagination */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4">
                        <div className="text-sm text-muted-foreground">Showing 1-6 of 821 entries</div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            1
                          </Button>
                          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
                            2
                          </Button>
                          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
                            3
                          </Button>
                          <Button variant="outline" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="mistake-finding"
                className="border border-border rounded-lg bg-white px-6 data-[state=open]:shadow-sm mt-4"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.92_0.02_45)] flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-[oklch(0.5_0.1_45)]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">Check File</h3>
                      <p className="text-sm text-muted-foreground">Report and track issues found during checks</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-6">
                  {/* Header with customer info */}
                  <div className="bg-[#173a67] text-white rounded-lg px-6 py-4 mb-6 flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">No:</span>
                      <span className="text-[#CBAC51] font-semibold">67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">Customer ID:</span>
                      <span className="text-[#CBAC51] font-semibold">3211041</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">Client Name:</span>
                      <span className="text-[#CBAC51] font-semibold">LON MAKARA</span>
                    </div>
                  </div>

                  {/* Two column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left column - Description Mistake Finding */}
                    <Card className="border-2">
                      <CardHeader className="bg-[#173a67] text-white rounded-t-lg py-3">
                        <CardTitle className="text-base flex items-center gap-2">
                          <Wrench className="w-5 h-5 text-[#CBAC51]" />
                          <span className="text-[#CBAC51]">Description Mistake Finding</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6 bg-gray-50">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contract-ld-2" className="text-sm font-medium">
                              Contract LD
                            </Label>
                            <Select defaultValue="ld256000003">
                              <SelectTrigger id="contract-ld-2" className="bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ld256000003">LD256000003</SelectItem>
                                <SelectItem value="ld256000004">LD256000004</SelectItem>
                                <SelectItem value="ld256000005">LD256000005</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="code-issue-2" className="text-sm font-medium">
                              Code Issue
                            </Label>
                            <Input id="code-issue-2" className="bg-white" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="risk-category-2" className="text-sm font-medium">
                              Risk Category
                            </Label>
                            <Select defaultValue="ld256000003">
                              <SelectTrigger id="risk-category-2" className="bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ld256000003">LD256000003</SelectItem>
                                <SelectItem value="high-risk">High Risk</SelectItem>
                                <SelectItem value="medium-risk">Medium Risk</SelectItem>
                                <SelectItem value="low-risk">Low Risk</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="key-risk-indicator-2" className="text-sm font-medium">
                              Key Risk Indicator
                            </Label>
                            <Select>
                              <SelectTrigger id="key-risk-indicator-2" className="bg-white">
                                <SelectValue placeholder="Select indicator" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="payment-delay">Payment Delay</SelectItem>
                                <SelectItem value="documentation">Documentation Issue</SelectItem>
                                <SelectItem value="collateral">Collateral Issue</SelectItem>
                                <SelectItem value="business-decline">Business Decline</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="issue-description-2" className="text-sm font-medium">
                            Issue Description
                          </Label>
                          <Textarea
                            id="issue-description-2"
                            placeholder="Describe the issue in detail..."
                            className="min-h-[100px] resize-none bg-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="unit-2" className="text-sm font-medium">
                              Unit
                            </Label>
                            <Select>
                              <SelectTrigger id="unit-2" className="bg-white">
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ccu">CCU</SelectItem>
                                <SelectItem value="bcc">BCC</SelectItem>
                                <SelectItem value="cau">CAU</SelectItem>
                                <SelectItem value="bca">BCA</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="action-2" className="text-sm font-medium">
                              Action
                            </Label>
                            <Select>
                              <SelectTrigger id="action-2" className="bg-white">
                                <SelectValue placeholder="Select Action" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="follow-up">Follow Up</SelectItem>
                                <SelectItem value="escalate">Escalate</SelectItem>
                                <SelectItem value="resolve">Resolve</SelectItem>
                                <SelectItem value="monitor">Monitor</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="risk-2" className="text-sm font-medium">
                              Risk
                            </Label>
                            <Input id="risk-2" className="bg-white" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="letter-2" className="text-sm font-medium">
                              Letter
                            </Label>
                            <Input id="letter-2" className="bg-white" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="type-of-credit-2" className="text-sm font-medium">
                              Type of Credit
                            </Label>
                            <Select defaultValue="loan">
                              <SelectTrigger id="type-of-credit-2" className="bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="loan">Loan</SelectItem>
                                <SelectItem value="overdraft">Overdraft</SelectItem>
                                <SelectItem value="credit-card">Credit Card</SelectItem>
                                <SelectItem value="trade-finance">Trade Finance</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ccd-ews-2" className="text-sm font-medium">
                              CCD EWS
                            </Label>
                            <Select defaultValue="none">
                              <SelectTrigger id="ccd-ews-2" className="bg-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="purely-precautionary">Purely Precautionary</SelectItem>
                                <SelectItem value="watch-list">Watch List</SelectItem>
                                <SelectItem value="impairment">Impairment Facilities</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="loan-reference-2" className="text-sm font-medium">
                            Loan Reference
                          </Label>
                          <Input id="loan-reference-2" className="bg-white" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Right column - Issue Description */}
                    <Card className="border-2">
                      <CardHeader className="bg-[#173a67] text-white rounded-t-lg py-3">
                        <CardTitle className="text-base flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 text-[#CBAC51]" />
                          <span className="text-[#CBAC51]">Issue Description</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6 pb-6 bg-gray-50">
                        <div className="min-h-[500px] flex flex-col">
                          <div className="flex-1 bg-white rounded-lg border p-6 mb-6">
                            <RadioGroup defaultValue="no-action" className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem
                                  value="no-action"
                                  id="no-action-2"
                                  className="w-4 h-4 border-[#CBAC51] text-[#CBAC51]"
                                />
                                <Label htmlFor="no-action-2" className="text-sm cursor-pointer">
                                  មិនមានសកម្មភាពផ្សេងទៀត
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className="h-9 w-9 bg-transparent">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button size="lg" className="bg-[#173a67] hover:bg-[#173a67]/90 text-white">
                                <FileText className="mr-2 h-4 w-4" />
                                Submit
                              </Button>
                              <Button variant="outline" size="lg">
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Update
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="home-visit"
                className="border border-border rounded-lg bg-white px-6 data-[state=open]:shadow-sm mt-4"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.92_0.02_45)] flex items-center justify-center">
                      <Home className="w-6 h-6 text-[oklch(0.5_0.1_45)]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">Home Visit</h3>
                      <p className="text-sm text-muted-foreground">Report and track home visit activities</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-6">
                  {/* Header with customer info */}
                  <div className="bg-[#173a67] text-white rounded-lg px-6 py-4 mb-6 flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">No :</span>
                      <span className="text-[#CBAC51] font-semibold">67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">Customer ID :</span>
                      <span className="text-[#CBAC51] font-semibold">3211041</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/80">Client Name :</span>
                      <span className="text-[#CBAC51] font-semibold">LON MAKARA</span>
                    </div>
                  </div>

                  {/* Two column layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Description Mistake Finding */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="bg-[#173a67] text-white rounded-t-lg py-3">
                        <CardTitle className="text-base font-medium flex items-center gap-2 text-[#CBAC51]">
                          <Wrench className="h-4 w-4 text-[#CBAC51]" />
                          <span className="text-[#CBAC51]">Description Mistake Finding</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contract-ld-ext">Contract LD</Label>
                            <Select defaultValue="LD256000003">
                              <SelectTrigger id="contract-ld-ext">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="LD256000003">LD256000003</SelectItem>
                                <SelectItem value="LD256000004">LD256000004</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="code-issue-ext">Code Issue</Label>
                            <Input id="code-issue-ext" className="bg-background" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="risk-category-ext">Risk Category</Label>
                            <Select defaultValue="LD256000003">
                              <SelectTrigger id="risk-category-ext">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="LD256000003">LD256000003</SelectItem>
                                <SelectItem value="LD256000004">LD256000004</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="key-risk-ext">Key Risk Indicator</Label>
                            <Select>
                              <SelectTrigger id="key-risk-ext">
                                <SelectValue placeholder="Select indicator" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="issue-desc-ext">Issue Description</Label>
                          <Textarea
                            id="issue-desc-ext"
                            placeholder="Describe the issue in detail..."
                            className="min-h-[120px] resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="unit-ext">Unit</Label>
                            <Select>
                              <SelectTrigger id="unit-ext">
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="unit1">Unit 1</SelectItem>
                                <SelectItem value="unit2">Unit 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="action-ext">Action</Label>
                            <Select>
                              <SelectTrigger id="action-ext">
                                <SelectValue placeholder="Select Action" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="action1">Action 1</SelectItem>
                                <SelectItem value="action2">Action 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="risk-ext">Risk</Label>
                            <Input id="risk-ext" className="bg-background" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="letter-ext">Letter</Label>
                            <Input id="letter-ext" className="bg-background" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="credit-type-ext">Type of Credit</Label>
                            <Select defaultValue="loan">
                              <SelectTrigger id="credit-type-ext">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="loan">Loan</SelectItem>
                                <SelectItem value="credit">Credit</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ccd-ews-ext">CCD EWS</Label>
                            <Select defaultValue="none">
                              <SelectTrigger id="ccd-ews-ext">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="loan-ref-ext">Loan Reference</Label>
                          <Input id="loan-ref-ext" className="bg-background"    />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Right Column - Issue Description */}
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="bg-[#173a67] text-white rounded-t-lg py-3">
                        <CardTitle className="text-base font-medium flex items-center gap-2 text-[#CBAC51]">
                          <AlertTriangle className="h-4 w-4 text-[#CBAC51]" />
                          <span className="text-[#CBAC51]">Issue Description</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-4">
                        {/* Radio button option */}
                        <div className="bg-white border border-border rounded-lg p-4">
                          <RadioGroup defaultValue="option1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option1"
                                id="option1-ext"
                                className="border-[#CBAC51] text-[#CBAC51]"
                              />
                              <Label htmlFor="option1-ext" className="font-normal cursor-pointer">
                                មិនមានសកម្មភាពផ្សេងទៀត
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Additional dropdown fields */}
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <Label htmlFor="unit-check-ext" className="text-sm">
                              អង្គភាពត្រួតពិនិត្យ :
                            </Label>
                            <Select>
                              <SelectTrigger id="unit-check-ext">
                                <SelectValue placeholder="" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="unit1">Unit 1</SelectItem>
                                <SelectItem value="unit2">Unit 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="issue-type-ext" className="text-sm">
                              ប្រភេទបញ្ហាត្រួត :
                            </Label>
                            <Select>
                              <SelectTrigger id="issue-type-ext">
                                <SelectValue placeholder="" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="type1">Type 1</SelectItem>
                                <SelectItem value="type2">Type 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="check-result-ext" className="text-sm">
                              លទ្ធផលបញ្ហាត្រួតពិនិត្យ :
                            </Label>
                            <Select>
                              <SelectTrigger id="check-result-ext">
                                <SelectValue placeholder="" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="result1">Result 1</SelectItem>
                                <SelectItem value="result2">Result 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="internal-cause-ext" className="text-sm">
                              មូលហេតុផ្ទៃក្នុង :
                            </Label>
                            <Select>
                              <SelectTrigger id="internal-cause-ext">
                                <SelectValue placeholder="" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cause1">Cause 1</SelectItem>
                                <SelectItem value="cause2">Cause 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="org-action-ext" className="text-sm">
                              សកម្មភាពមូលហេតុក្នុងស្ថាប័ :
                            </Label>
                            <Select>
                              <SelectTrigger id="org-action-ext">
                                <SelectValue placeholder="" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="action1">Action 1</SelectItem>
                                <SelectItem value="action2">Action 2</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <Button variant="outline" className="h-9 px-4 bg-transparent">
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button className="bg-[#173a67] hover:bg-[#173a67]/90 text-white h-9 px-4">
                            <Check className="h-4 w-4 mr-2" />
                            Submit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="report-management"
                className="border border-border rounded-lg bg-white px-6 data-[state=open]:shadow-sm mt-4"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.92_0.02_45)] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[oklch(0.5_0.1_45)]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">Report Management</h3>
                      <p className="text-sm text-muted-foreground">Generate and manage authorized reports</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 pb-6">
                  <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
                    {/* Left Sidebar - Action Cards */}
                    <div className="space-y-4">
                      {/* Generate Report Card */}
                      <Card className="border border-border">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-base font-medium flex items-center gap-2 text-[#CBAC51]">
                            <FileText className="h-4 w-4" />
                            Generate Report
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Button className="w-full bg-[#173a67] hover:bg-[#173a67]/90 text-white">
                            <Check className="h-4 w-4 mr-2" />
                            Commit
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            <FileDown className="h-4 w-4 mr-2 text-green-600" />
                            Export
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Report to Database Card */}
                      <Card className="border border-border">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-base font-medium flex items-center gap-2 text-[#CBAC51]">
                            <Database className="h-4 w-4" />
                            Report to Database
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="report-date" className="text-sm font-medium">
                              Number of date :
                            </Label>
                            <Select defaultValue="2025-07-30">
                              <SelectTrigger id="report-date">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2025-07-30">30-Jul-2025</SelectItem>
                                <SelectItem value="2025-07-29">29-Jul-2025</SelectItem>
                                <SelectItem value="2025-07-28">28-Jul-2025</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="w-full bg-[#CBAC51] hover:bg-[#CBAC51]/90 text-[#173a67] font-medium">
                            <Upload className="h-4 w-4 mr-2" />
                            Send Report
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Side - Authorized Reports Table */}
                    <Card className="border border-border">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded border-2 border-[#173a67] flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-[#173a67]" />
                          </div>
                          <div>
                            <CardTitle className="text-base font-semibold text-[#173a67]">Authorized Reports</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                              Reports that have been approved and authorized
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border border-border overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-[#173a67] hover:bg-[#173a67]">
                                <TableHead className="text-white font-medium">Who</TableHead>
                                <TableHead className="text-white font-medium">ID Card</TableHead>
                                <TableHead className="text-white font-medium">Section</TableHead>
                                <TableHead className="text-white font-medium">Branch</TableHead>
                                <TableHead className="text-white font-medium">Subject</TableHead>
                                <TableHead className="text-white font-medium">Date Report</TableHead>
                                <TableHead className="text-white font-medium">Data Time</TableHead>
                                <TableHead className="text-white font-medium">Progress</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Lim Meng</TableCell>
                                <TableCell>000792</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>CDD</TableCell>
                                <TableCell>Facility Review</TableCell>
                                <TableCell>02/Jun/2025</TableCell>
                                <TableCell>13:30:57</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">Approved</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Lun Chakriya</TableCell>
                                <TableCell>14798</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>BTI</TableCell>
                                <TableCell>Working Paper</TableCell>
                                <TableCell>24/Jun/2025</TableCell>
                                <TableCell>10:27:50</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">Approved</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Lim Meng</TableCell>
                                <TableCell>000792</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>CDD</TableCell>
                                <TableCell>Facility Review</TableCell>
                                <TableCell>02/Jun/2025</TableCell>
                                <TableCell>13:30:57</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">Approved</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Lun Chakriya</TableCell>
                                <TableCell>14798</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>BTI</TableCell>
                                <TableCell>Working Paper</TableCell>
                                <TableCell>24/Jun/2025</TableCell>
                                <TableCell>10:27:50</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">Approved</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Lim Meng</TableCell>
                                <TableCell>000792</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>CDD</TableCell>
                                <TableCell>Facility Review</TableCell>
                                <TableCell>02/Jun/2025</TableCell>
                                <TableCell>13:30:57</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">Approved</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Lun Chakriya</TableCell>
                                <TableCell>14798</TableCell>
                                <TableCell>BCC</TableCell>
                                <TableCell>BTI</TableCell>
                                <TableCell>Working Paper</TableCell>
                                <TableCell>24/Jun/2025</TableCell>
                                <TableCell>10:27:50</TableCell>
                                <TableCell>
                                  <span className="text-[#CBAC51] font-medium">Rejected</span>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

    </div>
  )
}
