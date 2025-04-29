import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Become a Tutor
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
        </nav>
        <div className="hidden md:flex ml-4 items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <Link href="/tutor-profile" className="inline-flex items-center text-sm mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to tutor profile
        </Link>
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Book a Session with Sarah Johnson</h1>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 order-2 md:order-1">
            <Tabs defaultValue="date">
              <TabsList className="grid w-full grid-cols-3 mb-4 md:mb-6">
                <TabsTrigger value="date">1. Date</TabsTrigger>
                <TabsTrigger value="time">2. Time</TabsTrigger>
                <TabsTrigger value="payment">3. Payment</TabsTrigger>
              </TabsList>

              <TabsContent value="date">
                <Card>
                  <CardHeader className="p-4 md:p-6 pb-0 md:pb-0">
                    <CardTitle className="text-lg md:text-xl">Select a Date</CardTitle>
                    <CardDescription>Choose a date for your session with Sarah</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid grid-cols-7 gap-1 text-center mb-4">
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Sun</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Mon</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Tue</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Wed</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Thu</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Fri</div>
                      <div className="text-xs md:text-sm font-medium text-gray-500 py-1">Sat</div>

                      {/* Empty cells for days before the 1st */}
                      <div></div>
                      <div></div>

                      {/* Calendar days */}
                      {Array.from({ length: 30 }, (_, i) => (
                        <div
                          key={i}
                          className={`
                    p-1 md:p-2 rounded-md text-xs md:text-sm cursor-pointer hover:bg-gray-100
                    ${i === 14 ? "bg-rockevo-blue text-white" : ""}
                    ${[0, 6, 13, 20, 27].includes(i) ? "text-gray-300" : ""}
                  `}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 md:pt-0 flex justify-end">
                    <Button>
                      Continue to Time
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="time">
                <Card>
                  <CardHeader className="p-4 md:p-6 pb-0 md:pb-0">
                    <CardTitle className="text-lg md:text-xl">Select a Time</CardTitle>
                    <CardDescription>Choose a time slot for April 15, 2024</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map(
                        (time) => (
                          <div
                            key={time}
                            className={`
                    p-2 md:p-3 border rounded-md text-center cursor-pointer hover:border-primary
                    ${time === "11:00 AM" ? "bg-rockevo-blue text-white border-rockevo-blue" : ""}
                  `}
                          >
                            <div className="flex items-center justify-center">
                              <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                              <span className="text-xs md:text-sm">{time}</span>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 md:pt-0 flex justify-between">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Date
                    </Button>
                    <Button size="sm">
                      Continue to Payment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader className="p-4 md:p-6 pb-0 md:pb-0">
                    <CardTitle className="text-lg md:text-xl">Payment Details</CardTitle>
                    <CardDescription>Complete your booking for April 15, 2024 at 11:00 AM</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h3 className="font-medium mb-2 text-sm md:text-base">Session Duration</h3>
                        <RadioGroup defaultValue="60">
                          <div className="flex flex-col space-y-2 md:space-y-3">
                            <div className="flex items-center space-x-3 border rounded-md p-2 md:p-3">
                              <RadioGroupItem value="30" id="duration-30" />
                              <Label htmlFor="duration-30" className="flex-1">
                                <div className="font-medium text-sm md:text-base">30 minutes</div>
                                <div className="text-xs md:text-sm text-gray-500">$15</div>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 border rounded-md p-2 md:p-3 border-rockevo-blue bg-rockevo-blue/5">
                              <RadioGroupItem value="60" id="duration-60" />
                              <Label htmlFor="duration-60" className="flex-1">
                                <div className="font-medium text-sm md:text-base">60 minutes</div>
                                <div className="text-xs md:text-sm text-gray-500">$25</div>
                              </Label>
                            </div>
                            <div className="flex items-center space-x-3 border rounded-md p-2 md:p-3">
                              <RadioGroupItem value="90" id="duration-90" />
                              <Label htmlFor="duration-90" className="flex-1">
                                <div className="font-medium text-sm md:text-base">90 minutes</div>
                                <div className="text-xs md:text-sm text-gray-500">$35</div>
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="pt-4 border-t">
                        <h3 className="font-medium mb-3 text-sm md:text-base">Payment Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Session (60 min)</span>
                            <span className="text-sm">$25.00</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>Service fee</span>
                            <span>$2.50</span>
                          </div>
                          <div className="flex justify-between font-bold pt-2 border-t mt-2">
                            <span>Total</span>
                            <span>$27.50</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            <p>80% of the session fee ($20.00) goes directly to the tutor.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 md:pt-0 flex flex-col sm:flex-row justify-between gap-2">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Time
                    </Button>
                    <Button size="sm" className="w-full sm:w-auto" asChild>
                      <Link href="/booking/payment">
                        Continue to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1 order-1 md:order-2">
            <Card>
              <CardHeader className="p-4 md:p-6 pb-0 md:pb-0">
                <CardTitle className="text-base md:text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Image
                      alt="Sarah Johnson"
                      className="rounded-full h-10 w-10 md:h-12 md:w-12 mr-3"
                      src="/images/tutor1.jpg"
                      height={48}
                      width={48}
                    />
                    <div>
                      <h3 className="font-medium text-sm md:text-base">Sarah Johnson</h3>
                      <p className="text-xs md:text-sm text-gray-500">English, Spanish</p>
                    </div>
                  </div>
                  <div className="border-t pt-3 md:pt-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2 text-gray-500" />
                      <span className="text-xs md:text-sm">April 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-2 text-gray-500" />
                      <span className="text-xs md:text-sm">11:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                  <div className="border-t pt-3 md:pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs md:text-sm">Session (60 min)</span>
                      <span className="text-xs md:text-sm">$25.00</span>
                    </div>
                    <div className="flex justify-between mb-2 text-xs md:text-sm text-gray-500">
                      <span>Service fee</span>
                      <span>$2.50</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t mt-2 text-sm md:text-base">
                      <span>Total</span>
                      <span>$27.50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
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
