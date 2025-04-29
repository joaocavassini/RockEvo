import Link from "next/link"
import Image from "next/image"
import {
  Home,
  Users,
  MessageCircle,
  Settings,
  PlusSquare,
  Grid3X3,
  Bookmark,
  MapPin,
  Calendar,
  Mail,
  Globe,
  ArrowLeft,
  Edit,
  Camera,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const posts = [
    {
      id: 1,
      image: "/images/language-session.jpg",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      image: "/images/student1.jpg",
      likes: 36,
      comments: 5,
    },
    {
      id: 3,
      image: "/images/tutor3.jpg",
      likes: 28,
      comments: 3,
    },
    {
      id: 4,
      image: "/images/tutor4.jpg",
      likes: 19,
      comments: 2,
    },
    {
      id: 5,
      image: "/images/tutor5.jpg",
      likes: 54,
      comments: 7,
    },
    {
      id: 6,
      image: "/images/tutor6.jpg",
      likes: 31,
      comments: 4,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/community" className="flex items-center text-sm">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Link>
        <h1 className="font-semibold mx-auto">Profile</h1>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <div className="flex-1 container mx-auto px-0 md:px-4 pb-16 md:pb-6 max-w-4xl">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-32 md:h-48 bg-gradient-to-r from-rockevo-blue/80 to-blue-400 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 bg-white/20 backdrop-blur-sm text-white h-8 w-8 rounded-full"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute -bottom-16 left-4 md:left-8">
            <div className="relative">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white">
                <AvatarImage src="/images/student2.jpg" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 bottom-0 bg-white text-gray-700 h-8 w-8 rounded-full shadow"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="absolute right-4 bottom-2 flex gap-2">
            <Button size="sm" variant="outline" className="bg-white">
              <Edit className="h-4 w-4 mr-1" />
              Edit Profile
            </Button>
            <Button size="sm">
              <Mail className="h-4 w-4 mr-1" />
              Message
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-20 px-4 md:px-8">
          <h1 className="text-xl md:text-2xl font-bold">John Doe</h1>
          <p className="text-sm text-gray-500">@john_doe</p>

          <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1 text-gray-500" />
              <span>Brazil → Canada</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1 text-gray-500" />
              <span>Joined March 2023</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Globe className="h-4 w-4 mr-1 text-gray-500" />
              <span>Speaks Portuguese, English</span>
            </div>
          </div>

          <p className="mt-4 text-sm">
            Software developer, language enthusiast, and new to Toronto. Originally from São Paulo, Brazil. Looking to
            connect with fellow immigrants and share experiences about adapting to life in Canada.
          </p>

          <div className="flex gap-4 mt-4">
            <div>
              <span className="font-semibold">128</span> <span className="text-gray-500 text-sm">Posts</span>
            </div>
            <div>
              <span className="font-semibold">256</span> <span className="text-gray-500 text-sm">Following</span>
            </div>
            <div>
              <span className="font-semibold">189</span> <span className="text-gray-500 text-sm">Followers</span>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">About</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">From</h3>
                <p className="text-sm">São Paulo, Brazil</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Current City</h3>
                <p className="text-sm">Toronto, Canada</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Work</h3>
                <p className="text-sm">Software Developer at TechCorp</p>
              </div>
              <div className="bg-white p-3 rounded-lg border">
                <h3 className="text-sm font-medium text-gray-500">Education</h3>
                <p className="text-sm">University of São Paulo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="mt-6">
          <Tabs defaultValue="posts">
            <TabsList className="w-full grid grid-cols-3 bg-transparent border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="posts"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-rockevo-blue data-[state=active]:shadow-none py-3"
              >
                <Grid3X3 className="h-5 w-5 mr-2" />
                Posts
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-rockevo-blue data-[state=active]:shadow-none py-3"
              >
                <Bookmark className="h-5 w-5 mr-2" />
                Saved
              </TabsTrigger>
              <TabsTrigger
                value="tagged"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-rockevo-blue data-[state=active]:shadow-none py-3"
              >
                <Users className="h-5 w-5 mr-2" />
                Tagged
              </TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-0">
              <div className="grid grid-cols-3 gap-1">
                {posts.map((post) => (
                  <div key={post.id} className="aspect-square relative group">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`Post ${post.id}`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 fill-white" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1 fill-white" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="saved" className="mt-0">
              <div className="p-8 text-center text-gray-500">
                <Bookmark className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <h3 className="font-medium">No saved posts yet</h3>
                <p className="text-sm mt-1">Items you save will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="tagged" className="mt-0">
              <div className="p-8 text-center text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                <h3 className="font-medium">No tagged posts</h3>
                <p className="text-sm mt-1">Posts you're tagged in will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-14 z-10">
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
          <Link href="/community">
            <Home className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
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
        <Button variant="ghost" size="icon" className="h-12 w-12 text-rockevo-blue" asChild>
          <Link href="/community/profile">
            <Avatar className="h-7 w-7 border-2 border-rockevo-blue">
              <AvatarImage src="/images/student2.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Link>
        </Button>
      </div>
    </div>
  )
}
