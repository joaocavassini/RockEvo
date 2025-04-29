import Link from "next/link"
import { Menu, ArrowLeft, DollarSign, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PaymentSettingsPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tutor-dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tutor-dashboard/sessions">
            Sessions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/tutor-dashboard/students">
            Students
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-rockevo-blue"
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

      <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/tutor-dashboard" className="inline-flex items-center text-sm mr-4 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl md:text-2xl font-bold">Payment Settings</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Payment Summary</CardTitle>
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
                  <div>
                    <p className="text-sm text-gray-500">Total earned (lifetime)</p>
                    <p className="text-lg">$1,560.00</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Withdraw Funds
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Payment Schedule</CardTitle>
                <CardDescription>Choose when you receive your payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-withdraw">Automatic withdrawals</Label>
                      <p className="text-xs text-gray-500">Automatically withdraw funds when they reach $100</p>
                    </div>
                    <Switch id="auto-withdraw" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="instant-payout">Instant payouts</Label>
                      <p className="text-xs text-gray-500">
                        Receive funds immediately after session completion (1.5% fee)
                      </p>
                    </div>
                    <Switch id="instant-payout" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="paypal">
              <TabsList className="w-full grid grid-cols-2 mb-6">
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
                <TabsTrigger value="bank">Bank Account</TabsTrigger>
              </TabsList>

              <TabsContent value="paypal">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>PayPal Account</CardTitle>
                        <CardDescription>Connect your PayPal account to receive payments</CardDescription>
                      </div>
                      <img src="/images/paypal-logo.png" alt="PayPal Logo" className="h-8 w-auto" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Alert className="mb-6 bg-blue-50 border-blue-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      <AlertTitle className="text-blue-600">PayPal account connected</AlertTitle>
                      <AlertDescription className="text-blue-600">
                        Your PayPal account (sarah.johnson@example.com) is connected and ready to receive payments.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="paypal-email">PayPal Email</Label>
                        <Input id="paypal-email" value="sarah.johnson@example.com" className="mt-1" />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg border">
                        <h3 className="font-medium mb-2">Payment Details</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Payment split:</span>
                            <span className="font-medium">80% to you, 20% to RockEvo</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Payment processing time:</span>
                            <span className="font-medium">1-2 business days</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Minimum withdrawal amount:</span>
                            <span className="font-medium">$20.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Disconnect Account</Button>
                    <Button>Update PayPal Settings</Button>
                  </CardFooter>
                </Card>

                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
                  <div className="bg-white rounded-lg border overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-4 border-b font-medium text-sm">
                      <div>Date</div>
                      <div>Description</div>
                      <div>Status</div>
                      <div className="text-right">Amount</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>Apr 1, 2024</div>
                        <div>Session with Michael T.</div>
                        <div className="text-green-600">Completed</div>
                        <div className="text-right">$40.00</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>Mar 28, 2024</div>
                        <div>Session with Emma L.</div>
                        <div className="text-green-600">Completed</div>
                        <div className="text-right">$80.00</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>Mar 25, 2024</div>
                        <div>Session with David K.</div>
                        <div className="text-amber-600">Pending</div>
                        <div className="text-right">$40.00</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>Mar 22, 2024</div>
                        <div>Withdrawal to PayPal</div>
                        <div className="text-green-600">Completed</div>
                        <div className="text-right">-$200.00</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                        <div>Mar 20, 2024</div>
                        <div>Session with Anna P.</div>
                        <div className="text-green-600">Completed</div>
                        <div className="text-right">$40.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline">View All Transactions</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bank">
                <Card>
                  <CardHeader>
                    <CardTitle>Bank Account</CardTitle>
                    <CardDescription>Connect your bank account for direct deposits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>No bank account connected</AlertTitle>
                      <AlertDescription>
                        Connect your bank account to enable direct deposits. This may take 2-3 business days to verify.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="account-holder">Account Holder Name</Label>
                        <Input id="account-holder" placeholder="Your full name" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="account-number">Account Number</Label>
                        <Input id="account-number" placeholder="Your account number" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="routing-number">Routing Number</Label>
                        <Input id="routing-number" placeholder="Your routing number" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="bank-name">Bank Name</Label>
                        <Input id="bank-name" placeholder="Your bank name" className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Connect Bank Account</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">Payment Policies</h2>
          <div className="space-y-4 text-sm">
            <p>
              <strong>Payment Split:</strong> For each session, you receive 80% of the payment, while RockEvo retains
              20% as a platform fee.
            </p>
            <p>
              <strong>Payment Processing:</strong> Payments are processed after the session is completed and the student
              has confirmed attendance. Funds are typically available within 24 hours.
            </p>
            <p>
              <strong>Cancellation Policy:</strong> If a student cancels more than 24 hours before the session, no
              payment is processed. For cancellations within 24 hours, you receive 50% of the session fee.
            </p>
            <p>
              <strong>Withdrawals:</strong> You can withdraw your available balance at any time, provided it meets the
              minimum withdrawal amount of $20.
            </p>
            <p>
              <strong>Tax Information:</strong> You are responsible for reporting income earned through RockEvo
              according to your local tax laws. We provide annual earnings statements for your records.
            </p>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="text-sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Full Payment Terms
            </Button>
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
