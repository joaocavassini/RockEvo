import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Calendar, MessageCircle, Video, Flag, ChevronLeft, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TutorProfilePage() {
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
      <div className="container mx-auto px-4 py-6 md:py-8">
        <Link href="/tutors" className="inline-flex items-center text-sm mb-4 md:mb-6 hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to tutors
        </Link>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col items-center">
                  <Image
                    alt="Sarah Johnson"
                    className="rounded-full object-cover h-24 w-24 md:h-32 md:w-32 mb-4"
                    src="/images/tutor1.jpg"
                    height={128}
                    width={128}
                  />
                  <h1 className="text-xl md:text-2xl font-bold">Sarah Johnson</h1>
                  <div className="flex items-center mt-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-rockevo-blue text-rockevo-blue" />
                    ))}
                    <span className="ml-1 text-sm">(48 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 my-3 justify-center">
                    <Badge>English</Badge>
                    <Badge>Spanish</Badge>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mb-3">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>120+ sessions completed</span>
                  </div>
                  <div className="text-xl font-bold mb-4">
                    $25 <span className="text-sm font-normal">/ hour</span>
                  </div>
                  <Link href="/booking" className="w-full">
                    <Button className="w-full mb-2">Book a Session</Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 md:mt-6 md:block">
              <CardContent className="p-4 md:p-6">
                <h2 className="font-semibold mb-3">Availability</h2>
                <div className="text-sm">
                  <div className="flex justify-between py-1 border-b">
                    <span>Monday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Tuesday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Wednesday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Thursday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sunday</span>
                    <span>Unavailable</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-4 md:space-y-6">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-3">About Me</h2>
                    <p className="text-sm md:text-base mb-4">
                      Hello! I'm Sarah, a certified language teacher with over 5 years of experience teaching English
                      and Spanish. I have a passion for helping students improve their conversation skills and build
                      confidence in speaking.
                    </p>
                    <p className="text-sm md:text-base mb-4">
                      My teaching style is communicative and student-centered. I believe in creating a comfortable
                      environment where you can practice speaking without fear of making mistakes. I tailor my lessons
                      to your specific needs and interests to make our sessions engaging and effective.
                    </p>
                    <p className="text-sm md:text-base">
                      Whether you're a beginner looking to build basic conversation skills or an advanced learner aiming
                      to refine your fluency, I'm here to help you achieve your language goals!
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3">Specialties</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Conversation Practice</Badge>
                      <Badge variant="outline">Business English</Badge>
                      <Badge variant="outline">Pronunciation</Badge>
                      <Badge variant="outline">Interview Preparation</Badge>
                      <Badge variant="outline">Travel Spanish</Badge>
                    </div>
                    <h3 className="font-medium mb-2">Teaching Levels</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Beginner</Badge>
                      <Badge variant="secondary">Intermediate</Badge>
                      <Badge variant="secondary">Advanced</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3">What to Expect</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 bg-rockevo-blue/10 p-2 rounded-full">
                          <MessageCircle className="h-5 w-5 text-rockevo-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium">Personalized Approach</h3>
                          <p className="text-sm text-gray-500">
                            I'll tailor our sessions to your specific needs, goals, and interests.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 bg-rockevo-blue/10 p-2 rounded-full">
                          <Video className="h-5 w-5 text-rockevo-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium">Interactive Sessions</h3>
                          <p className="text-sm text-gray-500">
                            Engaging conversations with real-time feedback and corrections.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 mt-1 bg-rockevo-blue/10 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-rockevo-blue" />
                        </div>
                        <div>
                          <h3 className="font-medium">Flexible Scheduling</h3>
                          <p className="text-sm text-gray-500">
                            Book sessions at times that work for you, with easy rescheduling if needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="experience">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Master's in TESOL</h3>
                        <p className="text-sm text-gray-500">University of California, 2018</p>
                      </div>
                      <div>
                        <h3 className="font-medium">CELTA Certification</h3>
                        <p className="text-sm text-gray-500">Cambridge University, 2017</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Bachelor's in Spanish</h3>
                        <p className="text-sm text-gray-500">University of Washington, 2016</p>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-6 mb-4">Work Experience</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Online Language Tutor</h3>
                        <p className="text-sm text-gray-500">RockEvo, 2020 - Present</p>
                        <p className="text-sm mt-1">
                          Providing one-on-one language instruction to students of all levels.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">English Teacher</h3>
                        <p className="text-sm text-gray-500">International Language School, 2018 - 2020</p>
                        <p className="text-sm mt-1">Taught group and individual English classes to adult learners.</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Spanish Teaching Assistant</h3>
                        <p className="text-sm text-gray-500">University of Washington, 2015 - 2016</p>
                        <p className="text-sm mt-1">Assisted professors with undergraduate Spanish courses.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Student Reviews</h2>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">4.9</span>
                        <span className="text-gray-500 ml-1">(48 reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="border-b pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center">
                              <Image
                                alt={`Student ${i}`}
                                className="rounded-full h-10 w-10 mr-3"
                                src={`/images/student${i}.jpg`}
                                height={40}
                                width={40}
                              />
                              <div>
                                <h3 className="font-medium">Michael Thompson</h3>
                                <p className="text-xs text-gray-500">English Student • 12 sessions</p>
                              </div>
                            </div>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm">
                            Sarah is an amazing teacher! She's patient, knowledgeable, and makes our sessions fun and
                            engaging. My English has improved significantly since I started working with her. I
                            especially appreciate how she tailors our conversations to my interests in business and
                            technology.
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-xs text-gray-500">March 15, 2024</span>
                            <Button variant="ghost" size="sm" className="h-8 text-xs">
                              <Flag className="h-3 w-3 mr-1" />
                              Report
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline">View All Reviews</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
