import Link from "next/link"
import {
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  PlusSquare,
  ArrowLeft,
  UserPlus,
  Filter,
  Globe,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConnectionsPage() {
  const suggestedConnections = [
    {
      id: 1,
      name: "Sofia Mendez",
      username: "sofia_m",
      avatar: "/images/tutor4.jpg",
      location: "Mexico → Berlin",
      bio: "Graphic designer and digital nomad. Moved to Berlin 6 months ago and loving the creative scene here!",
      mutualConnections: 4,
    },
    {
      id: 2,
      name: "Li Wei",
      username: "li_wei",
      avatar: "/images/tutor6.jpg",
      location: "Beijing → Vancouver",
      bio: "Software engineer and photography enthusiast. Recently moved to Vancouver for work and exploring the beautiful Canadian outdoors.",
      mutualConnections: 2,
    },
    {
      id: 3,
      name: "Anna Schmidt",
      username: "anna_s",
      avatar: "/images/tutor5.jpg",
      location: "Berlin → London",
      bio: "Marketing professional with a passion for languages. Relocated to London last year and enjoying the multicultural environment.",
      mutualConnections: 5,
    },
    {
      id: 4,
      name: "Pierre Dubois",
      username: "pierre_d",
      avatar: "/images/tutor4.jpg",
      location: "Paris → Montreal",
      bio: "Chef and culinary instructor. Moved to Montreal to explore the fusion of French and Canadian cuisine.",
      mutualConnections: 3,
    },
    {
      id: 5,
      name: "Raj Patel",
      username: "raj_p",
      avatar: "/images/student3.jpg",
      location: "Mumbai → Sydney",
      bio: "Financial analyst and cricket enthusiast. Recently relocated to Sydney for career growth opportunities.",
      mutualConnections: 1,
    },
    {
      id: 6,
      name: "Elena Petrova",
      username: "elena_p",
      avatar: "/images/student1.jpg",
      location: "Moscow → Barcelona",
      bio: "Architect and urban designer. Moved to Barcelona to experience the unique architectural landscape and Mediterranean lifestyle.",
      mutualConnections: 0,
    },
  ]

  const myConnections = [
    {
      id: 1,
      name: "Maria Rodriguez",
      username: "maria_r",
      avatar: "/images/tutor1.jpg",
      location: "Madrid → New York",
      isOnline: true,
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      username: "ahmed_h",
      avatar: "/images/tutor2.jpg",
      location: "Cairo → Toronto",
      isOnline: false,
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      username: "yuki_t",
      avatar: "/images/tutor3.jpg",
      location: "Tokyo → Sydney",
      isOnline: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="md:hidden flex items-center text-sm" href="/community">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Link>
        <Link className="hidden md:flex items-center justify-center" href="/">
          <img src="/logo.png" alt="RockEvo Logo" className="h-7 w-auto mr-2" />
          <span className="font-bold">RockEvo</span>
        </Link>
        <h1 className="font-semibold mx-auto md:mx-0 md:ml-4">Connections</h1>
        <div className="hidden md:flex ml-auto items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-rockevo-blue" asChild>
            <Link href="/community/connections">
              <Users className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community/messages">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 relative" asChild>
            <Link href="/community/notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Link>
          </Button>
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/images/student2.jpg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-4 md:py-6 pb-16 md:pb-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-9 h-10" placeholder="Search connections..." />
          </div>
          <Button variant="outline" className="md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Friends
          </Button>
        </div>

        <Tabs defaultValue="suggested">
          <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
            <TabsTrigger value="myConnections">My Connections</TabsTrigger>
          </TabsList>

          <TabsContent value="suggested">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedConnections.map((connection) => (
                <Card key={connection.id}>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={connection.avatar} alt={connection.name} />
                        <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{connection.name}</h3>
                        <p className="text-sm text-gray-500">@{connection.username}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-3">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Globe className="h-3.5 w-3.5 mr-1 text-gray-500" />
                      <span>{connection.location}</span>
                    </div>
                    <p className="text-sm mb-3 line-clamp-2">{connection.bio}</p>
                    {connection.mutualConnections > 0 && (
                      <div className="text-xs text-gray-500">
                        {connection.mutualConnections} mutual connection{connection.mutualConnections > 1 ? "s" : ""}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button className="flex-1">Connect</Button>
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="myConnections">
            <div className="space-y-4">
              {myConnections.map((connection) => (
                <Card key={connection.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={connection.avatar} alt={connection.name} />
                            <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {connection.isOnline && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{connection.name}</h3>
                          <p className="text-sm text-gray-500">@{connection.username}</p>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{connection.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/community/messages/${connection.id}`}>
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {myConnections.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="font-medium text-lg mb-2">No connections yet</h3>
                  <p className="text-gray-500 mb-6">Start connecting with other immigrants to build your network</p>
                  <Button>Find People</Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-14 z-10">
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
          <Link href="/community">
            <Home className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 text-rockevo-blue" asChild>
          <Link href="/community/connections">
            <Users className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12 bg-rockevo-blue/10 text-rockevo-blue rounded-full">
          <PlusSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
          <Link href="/community/messages">
            <MessageCircle className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
          <Link href="/community/profile">
            <Avatar className="h-7 w-7">
              <AvatarImage src="/images/student2.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
      </div>
    </div>
  )
}
