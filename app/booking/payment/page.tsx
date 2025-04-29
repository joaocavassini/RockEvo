import Link from "next/link"
import { ArrowLeft, Calendar, Clock, CreditCard, Shield, CheckCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function BookingPaymentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.png" alt="RockEvo Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold">RockEvo</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <Link href="/booking" className="inline-flex items-center text-sm mb-4 md:mb-6 hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to booking details
        </Link>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 order-2 md:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Payment Method</CardTitle>
                <CardDescription>Choose how you'd like to pay for your session</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="paypal" className="space-y-4">
                  <div className="flex items-center space-x-3 border rounded-md p-4">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center flex-1 cursor-pointer">
                      <img src="/images/paypal-logo.png" alt="PayPal" className="h-6 md:h-8 w-auto" />
                      <span className="ml-2 text-sm md:text-base">PayPal</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-md p-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center flex-1 cursor-pointer">
                      <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                      <span className="ml-2 text-sm md:text-base">Credit or Debit Card</span>
                    </Label>
                  </div>
                </RadioGroup>

                <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-800">Secure Payment</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Your payment information is encrypted and secure. We never store your full credit card details.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-3">PayPal Checkout</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You'll be redirected to PayPal to complete your payment securely. You can use your PayPal balance,
                    bank account, or credit card.
                  </p>
                  <div className="flex items-center justify-center p-6 border rounded-md bg-gray-50">
                    <Button className="w-full md:w-auto">
                      <img src="/images/paypal-logo.png" alt="PayPal Checkout" className="h-5 w-auto" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Free cancellation up to 24 hours before</h3>
                    <p className="text-gray-600 mt-1">
                      You can cancel for free up to 24 hours before your scheduled session for a full refund.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-3 mt-1">
                    <Info className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Late cancellation policy</h3>
                    <p className="text-gray-600 mt-1">
                      Cancellations within 24 hours of the scheduled session are subject to a 50% fee to compensate the
                      tutor for their reserved time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1 order-1 md:order-2">
            <Card className="sticky top-20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <img
                      alt="Sarah Johnson"
                      className="rounded-full h-10 w-10 md:h-12 md:w-12 mr-3"
                      src="/images/tutor1.jpg"
                    />
                    <div>
                      <h3 className="font-medium text-sm md:text-base">Sarah Johnson</h3>
                      <p className="text-xs md:text-sm text-gray-500">English, Spanish</p>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-gray-500" />
                      <span className="text-xs md:text-sm">April 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2 text-gray-500" />
                      <span className="text-xs md:text-sm">11:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs md:text-sm">Session (60 min)</span>
                      <span className="text-xs md:text-sm">$25.00</span>
                    </div>
                    <div className="flex justify-between mb-2 text-xs md:text-sm text-gray-500">
                      <span>Service fee</span>
                      <span>$2.50</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold pt-2 text-sm md:text-base">
                      <span>Total</span>
                      <span>$27.50</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <p className="text-xs text-gray-500 mb-3">
                    By proceeding with payment, you agree to our Terms of Service and acknowledge our Privacy Policy.
                  </p>
                  <Button className="w-full">Complete Payment</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-auto flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6 bg-white">
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
