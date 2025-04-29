import Link from "next/link"
import {
  Menu,
  Calendar,
  Clock,
  DollarSign,
  Users,
  ChevronRight,
  BarChart3,
  BookOpen,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function TutorDashboardPage() {
  const upcomingSessions = [
    {
      id: 1,
      student: {
        name: "Michael Thompson",
        avatar: "/images/student1.jpg",
      },
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      language: "English",
      level: "Intermediate",
      status: "confirmed",
    },
    {
      id: 2,
      student: {
        name: "Emma Lee",
        avatar: "/images/student2.jpg",
      },
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      language: "Spanish",
      level: "Beginner",
      status: "confirmed",
    },
    {
      id: 3,
      student: {
        name: "David Kim",
        avatar: "/images/student3.jpg",
      },
      date: "Apr 15, 2024",
      time: "2:00 PM - 3:00 PM",
      language: "English",
      level: "Advanced",
      status: "pending",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.png" alt="RockEvo Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold">RockEvo</span>
        </Link>
        <div className="ml-auto md:hidden">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-rockevo-blue"
            href="/tutor-dashboard"
          >
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tutor-dashboard/sessions">
            Sessions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tutor-dashboard/students">
            Students
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/tutor-dashboard/payment-settings"
          >
            Payments
          </Link>
        </nav>
        <div className="hidden md:flex ml-4 items-center gap-2">
          <Link href="/community">
            <Button variant="outline" size="sm">
              Community
            </Button>
          </Link>
          <Link href="/profile">
            <Button size="sm">My Profile</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Sarah</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your tutoring business</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Session
            </Button>
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-blue-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-rockevo-blue" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">Earnings this month</p>
                <h2 className="text-2xl font-bold">$480.00</h2>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">Sessions this month</p>
                <h2 className="text-2xl font-bold">16</h2>
                <p className="text-xs text-green-600 mt-1">+4 from last month</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">Active students</p>
                <h2 className="text-2xl font-bold">8</h2>
                <p className="text-xs text-green-600 mt-1">+2 new this month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled sessions for the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                    >
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={session.student.avatar} alt={session.student.name} />
                          <AvatarFallback>{session.student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-sm">{session.student.name}</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{session.date}</span>
                            <span className="mx-1">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{session.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge className="mr-2" variant={session.status === "confirmed" ? "default" : "outline"}>
                          {session.status === "confirmed" ? "Confirmed" : "Pending"}
                        </Badge>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Sessions
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Your recent earnings from completed sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg border">
                    <div className="col-span-2">
                      <p className="text-sm font-medium">Session with Michael T.</p>
                      <p className="text-xs text-gray-500">Apr 1, 2024</p>
                    </div>
                    <div className="text-sm text-green-600">Completed</div>
                    <div className="text-sm font-medium text-right">$40.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg border">
                    <div className="col-span-2">
                      <p className="text-sm font-medium">Session with Emma L.</p>
                      <p className="text-xs text-gray-500">Mar 28, 2024</p>
                    </div>
                    <div className="text-sm text-green-600">Completed</div>
                    <div className="text-sm font-medium text-right">$80.00</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg border">
                    <div className="col-span-2">
                      <p className="text-sm font-medium">Session with David K.</p>
                      <p className="text-xs text-gray-500">Mar 25, 2024</p>
                    </div>
                    <div className="text-sm text-amber-600">Pending</div>
                    <div className="text-sm font-medium text-right">$40.00</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/tutor-dashboard/payment-settings">View Payment History</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Available for withdrawal</p>
                    <p className="text-2xl font-bold">$240.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pending payments</p>
                    <p className="text-lg">$120.00</p>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Session earnings</p>
                      <p className="text-sm">$450.00</p>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-gray-500">Platform fee (20%)</p>
                      <p className="text-sm text-gray-500">-$90.00</p>
                    </div>
                    <div className="flex justify-between items-center font-medium">
                      <p className="text-sm">Your earnings (80%)</p>
                      <p className="text-sm">$360.00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/tutor-dashboard/payment-settings">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Withdraw Funds
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle>Messages</CardTitle>
                <CardDescription>Recent messages from students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg border">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="/images/student1.jpg" alt="Michael Thompson" />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">Michael Thompson</h3>
                      <p className="text-xs text-gray-500 truncate">Looking forward to our session today!</p>
                    </div>
                    <Badge className="ml-2">New</Badge>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg border">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="/images/student2.jpg" alt="Emma Lee" />
                      <AvatarFallback>EL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">Emma Lee</h3>
                      <p className="text-xs text-gray-500 truncate">Can we focus on conversation practice tomorrow?</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  View All Messages
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-auto flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2024 RockEvo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
