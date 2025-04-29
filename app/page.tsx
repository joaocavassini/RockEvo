import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.png" alt="RockEvo Logo" className="h-8 w-auto mr-2" />
          <span className="font-bold">RockEvo</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Become a Tutor
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/community">
            Community
          </Link>
        </nav>
        {/* Mobile navigation */}
        <div className="ml-auto md:hidden flex items-center">
          <Link href="/community" className="text-sm font-medium px-2">
            Community
          </Link>
        </div>
        <div className="ml-4 flex items-center gap-2">
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

      {/* Mobile navigation menu */}
      <div className="md:hidden flex justify-center border-b">
        <div className="flex space-x-4 py-2 px-4 overflow-x-auto w-full">
          <Link className="text-sm whitespace-nowrap font-medium" href="#">
            How It Works
          </Link>
          <Link className="text-sm whitespace-nowrap font-medium" href="#">
            Become a Tutor
          </Link>
          <Link className="text-sm whitespace-nowrap font-medium" href="#">
            Pricing
          </Link>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Connect with Language Tutors Worldwide
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    RockEvo connects you with experienced language tutors for personalized 1-on-1 sessions. Learn at
                    your own pace, on your schedule.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/tutors">
                    <Button className="px-8">
                      Find a Tutor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button variant="outline">Create an Account</Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rockevo-blue" />
                    <span>Verified Tutors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rockevo-blue" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-rockevo-blue" />
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <img
                  alt="Language Session"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  height={400}
                  src="/images/language-session.jpg"
                  width={600}
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-bold">4.9</span>
                    <span className="text-gray-500">(2,500+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How RockEvo Works</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  Our platform makes it easy to connect with language tutors and start learning right away.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rockevo-blue/10 text-rockevo-blue">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Find Your Tutor</h3>
                <p className="text-gray-500">
                  Browse profiles of qualified tutors, filter by language, price, and availability to find your perfect
                  match.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rockevo-blue/10 text-rockevo-blue">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Book a Session</h3>
                <p className="text-gray-500">
                  Schedule a session at a time that works for you. Secure payment through PayPal ensures tutors receive
                  80% of your payment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rockevo-blue/10 text-rockevo-blue">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Start Learning</h3>
                <p className="text-gray-500">
                  Connect with your tutor via video call for personalized instruction tailored to your learning goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Tutors</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                  Meet some of our top-rated language tutors ready to help you achieve fluency.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="p-4 flex flex-col items-center bg-gray-50">
                        <img
                          alt={`Tutor ${i}`}
                          className="rounded-full object-cover h-20 w-20 mb-3"
                          src={`/images/tutor${i}.jpg`}
                          height={80}
                          width={80}
                        />
                        <h3 className="font-bold text-lg">
                          {i === 1 ? "Sarah Johnson" : i === 2 ? "Miguel Rodriguez" : "Yuki Tanaka"}
                        </h3>
                        <div className="flex items-center mt-1 mb-1 justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-rockevo-blue text-rockevo-blue" />
                          ))}
                          <span className="ml-1 text-sm">(48)</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          {i === 1 ? "English, Spanish" : i === 2 ? "Spanish, Portuguese" : "Japanese, English"}
                        </p>
                      </div>
                      <div className="p-4 border-t">
                        <p className="text-sm mb-4">
                          {i === 1
                            ? "Certified English and Spanish teacher with 5+ years of experience. I specialize in conversation practice and business language."
                            : i === 2
                              ? "Native Spanish speaker with a passion for teaching. I focus on practical conversation skills and proper grammar."
                              : "Japanese language instructor with experience teaching students of all levels. I can help with pronunciation and cultural context."}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="text-lg font-bold">
                            ${i === 1 ? "25" : i === 2 ? "22" : "28"}{" "}
                            <span className="text-sm font-normal">/ hour</span>
                          </div>
                          <Link href={i === 1 ? "/tutor-profile" : "#"}>
                            <Button size="sm">View Profile</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/tutors">
                <Button variant="outline">View All Tutors</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-rockevo-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
                  <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Connect with fellow language learners, share experiences, and build meaningful connections in our
                    immigrant-focused community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/community">
                    <Button className="bg-white text-rockevo-blue hover:bg-white/90">
                      Explore Community
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-4">
                <img
                  alt="Community Member 1"
                  className="rounded-lg object-cover w-full h-40"
                  src="/images/student1.jpg"
                  height={160}
                  width={200}
                />
                <img
                  alt="Community Member 2"
                  className="rounded-lg object-cover w-full h-40 mt-8"
                  src="/images/student2.jpg"
                  height={160}
                  width={200}
                />
                <img
                  alt="Community Member 3"
                  className="rounded-lg object-cover w-full h-40"
                  src="/images/student3.jpg"
                  height={160}
                  width={200}
                />
                <img
                  alt="Community Member 4"
                  className="rounded-lg object-cover w-full h-40 mt-8"
                  src="/images/tutor4.jpg"
                  height={160}
                  width={200}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
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

function Calendar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
