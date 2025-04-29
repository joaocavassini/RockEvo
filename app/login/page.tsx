import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Link href="/" className="mb-6 md:mb-8 flex items-center">
          <img src="/logo.png" alt="RockEvo Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold text-lg md:text-xl">RockEvo</span>
        </Link>
        <Card className="w-full max-w-sm md:max-w-md">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-xl md:text-2xl">Log in</CardTitle>
            <CardDescription>Enter your email and password to access your account</CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm md:text-base">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm md:text-base">
                      Password
                    </label>
                    <Link href="/forgot-password" className="text-xs md:text-sm underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Log in
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
            <div className="text-xs md:text-sm text-center w-full">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
