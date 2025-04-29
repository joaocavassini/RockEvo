"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Filter, Star, Clock, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TutorsPage() {
  const tutors = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/images/tutor1.jpg",
      languages: ["English", "Spanish"],
      specialties: ["Conversation", "Business"],
      rating: 4.9,
      reviews: 48,
      sessions: 120,
      price: 25,
      availability: "Weekdays and evenings",
      bio: "Certified English and Spanish teacher with 5+ years of experience. I specialize in conversation practice and business language. Let's achieve your language goals together!",
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      image: "/images/tutor2.jpg",
      languages: ["Spanish", "Portuguese"],
      specialties: ["Conversation", "Grammar"],
      rating: 4.8,
      reviews: 36,
      sessions: 98,
      price: 22,
      availability: "Evenings and weekends",
      bio: "Native Spanish speaker with a passion for teaching. I focus on practical conversation skills and proper grammar. My sessions are fun, engaging, and tailored to your needs.",
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      image: "/images/tutor3.jpg",
      languages: ["Japanese", "English"],
      specialties: ["Pronunciation", "Culture"],
      rating: 4.7,
      reviews: 29,
      sessions: 75,
      price: 28,
      availability: "Mornings and weekends",
      bio: "Japanese language instructor with experience teaching students of all levels. I can help with pronunciation, everyday conversation, and understanding Japanese culture.",
    },
    {
      id: 4,
      name: "Pierre Dubois",
      image: "/images/tutor4.jpg",
      languages: ["French", "English"],
      specialties: ["Conversation", "Exam Prep"],
      rating: 4.9,
      reviews: 42,
      sessions: 110,
      price: 30,
      availability: "Flexible schedule",
      bio: "Professional French teacher with 8+ years of experience. I can help you prepare for exams or simply improve your conversational skills. My approach is structured yet flexible.",
    },
    {
      id: 5,
      name: "Anna Schmidt",
      image: "/images/tutor5.jpg",
      languages: ["German", "English"],
      specialties: ["Business", "Pronunciation"],
      rating: 4.8,
      reviews: 31,
      sessions: 85,
      price: 26,
      availability: "Weekdays",
      bio: "Certified German language instructor specializing in business German and pronunciation. I create personalized lesson plans to help you reach your specific language goals.",
    },
    {
      id: 6,
      name: "Li Wei",
      image: "/images/tutor6.jpg",
      languages: ["Chinese", "English"],
      specialties: ["Conversation", "Culture"],
      rating: 4.9,
      reviews: 38,
      sessions: 92,
      price: 27,
      availability: "Evenings and weekends",
      bio: "Native Mandarin speaker with a degree in language education. I make learning Chinese fun and accessible, with a focus on practical conversation skills and cultural context.",
    },
  ]

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
      <div className="flex-1 container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Tutor</h1>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Search by name, language, or specialty" />
            </div>
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => document.getElementById("mobile-filters")?.classList.toggle("hidden")}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div
          id="mobile-filters"
          className="hidden md:block mb-6 p-4 border rounded-lg bg-white md:bg-transparent md:p-0 md:border-0"
        >
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {["English", "Spanish", "French", "German", "Chinese", "Japanese", "Portuguese"].map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox id={`language-${language.toLowerCase()}`} />
                    <Label htmlFor={`language-${language.toLowerCase()}`}>{language}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Price Range (per hour)</h3>
              <div className="px-2">
                <Slider defaultValue={[25]} max={100} step={1} />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>$5</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Availability</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {["Weekdays", "Weekends", "Evenings", "Mornings"].map((time) => (
                  <div key={time} className="flex items-center space-x-2">
                    <Checkbox id={`time-${time.toLowerCase()}`} />
                    <Label htmlFor={`time-${time.toLowerCase()}`}>{time}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Specialties</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {["Conversation", "Business", "Exam Prep", "Pronunciation", "Grammar", "Culture"].map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox id={`specialty-${specialty.toLowerCase()}`} />
                    <Label htmlFor={`specialty-${specialty.toLowerCase()}`}>{specialty}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:hidden pt-2 flex justify-end">
              <Button size="sm" onClick={() => document.getElementById("mobile-filters")?.classList.add("hidden")}>
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="p-4 md:p-6 flex flex-row md:flex-col items-center md:w-1/4 md:bg-gray-50">
                    <Image
                      alt={`Tutor ${tutor.name}`}
                      className="rounded-full object-cover h-16 w-16 md:h-24 md:w-24 mr-4 md:mr-0 md:mb-3"
                      src={tutor.image || "/placeholder.svg"}
                      height={96}
                      width={96}
                    />
                    <div className="md:text-center">
                      <h3 className="font-bold text-base md:text-lg">{tutor.name}</h3>
                      <div className="flex items-center mt-1 mb-1 md:justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 md:h-4 md:w-4 fill-rockevo-blue text-rockevo-blue" />
                        ))}
                        <span className="ml-1 text-xs md:text-sm">({tutor.reviews})</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500">{tutor.sessions}+ sessions</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 md:w-3/4 border-t md:border-t-0 md:border-l">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tutor.languages.map((language) => (
                        <Badge key={language} className="text-xs">
                          {language}
                        </Badge>
                      ))}
                      {tutor.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="mb-4 text-sm">{tutor.bio}</p>
                    <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                      <Clock className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                      <span>Available {tutor.availability}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="text-lg md:text-xl font-bold">
                        ${tutor.price} <span className="text-xs md:text-sm font-normal">/ hour</span>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Link href={tutor.id === 1 ? "/tutor-profile" : "#"} className="w-1/2 sm:w-auto">
                          <Button variant="outline" size="sm" className="w-full">
                            Profile
                          </Button>
                        </Link>
                        <Link href={tutor.id === 1 ? "/booking" : "#"} className="w-1/2 sm:w-auto">
                          <Button size="sm" className="w-full">
                            Book
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 md:mt-8 flex justify-center">
          <div className="flex items-center gap-1 md:gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
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
