import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Link href="/" className="mb-6 md:mb-8 flex items-center">
          <img src="/logo.png" alt="RockEvo Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-lg md:text-xl">RockEvo</span>
        </Link>
        <Card className="w-full max-w-sm md:max-w-md">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm md:text-base">
                    Full Name
                  </label>
                  <Input id="name" type="text" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm md:text-base">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password" className="text-sm md:text-base">
                    Password
                  </label>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <div className="text-sm md:text-base">I want to join as:</div>
                  <RadioGroup defaultValue="student">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="text-sm md:text-base">
                        Student (Language Learner)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tutor" id="tutor" />
                      <Label htmlFor="tutor" className="text-sm md:text-base">
                        Tutor (Language Teacher)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full mt-2">
                  Create account
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
            <div className="text-xs md:text-sm text-center w-full">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
