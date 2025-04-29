"use client"

import type React from "react"

import Link from "next/link"
import { useState, useRef } from "react"
import {
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  PlusSquare,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  Globe,
  MapPin,
  ImageIcon,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
  const [postContent, setPostContent] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isPosting, setIsPosting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Maria Rodriguez",
        username: "maria_r",
        avatar: "/images/tutor1.jpg",
        location: "Madrid → New York",
        isVerified: true,
      },
      content:
        "Just celebrated my first year in New York! It's been a challenging but rewarding journey. So grateful for all the amazing people I've met through this community who helped me navigate the visa process and find housing. #NewBeginnings #ImmigrantLife",
      image: "/images/language-session.jpg",
      timeAgo: "2 hours ago",
      likes: 42,
      comments: 8,
      shares: 3,
      isLiked: true,
      isBookmarked: false,
    },
    {
      id: 2,
      user: {
        name: "Ahmed Hassan",
        username: "ahmed_h",
        avatar: "/images/tutor2.jpg",
        location: "Cairo → Toronto",
        isVerified: false,
      },
      content:
        "Found an amazing cultural festival in Toronto this weekend! Anyone interested in joining? It's a great opportunity to meet people from different backgrounds and share experiences. I'll be bringing traditional Egyptian desserts to share! 🇪🇬🇨🇦 #CulturalExchange",
      image: null,
      timeAgo: "5 hours ago",
      likes: 28,
      comments: 15,
      shares: 7,
      isLiked: false,
      isBookmarked: true,
    },
    {
      id: 3,
      user: {
        name: "Yuki Tanaka",
        username: "yuki_t",
        avatar: "/images/tutor3.jpg",
        location: "Tokyo → Sydney",
        isVerified: true,
      },
      content:
        "Just received my permanent residency today! 🎉 After 3 years of paperwork, interviews, and uncertainty, it finally happened. For anyone going through the process, stay persistent! Happy to answer questions or provide guidance based on my experience. #ImmigrationJourney #PermanentResidency",
      image: "/images/student1.jpg",
      timeAgo: "1 day ago",
      likes: 156,
      comments: 47,
      shares: 12,
      isLiked: true,
      isBookmarked: true,
    },
  ])

  const suggestedUsers = [
    {
      name: "Sofia Mendez",
      username: "sofia_m",
      avatar: "/images/tutor4.jpg",
      location: "Mexico → Berlin",
      mutualConnections: 4,
    },
    {
      name: "Li Wei",
      username: "li_wei",
      avatar: "/images/tutor6.jpg",
      location: "Beijing → Vancouver",
      mutualConnections: 2,
    },
    {
      name: "Anna Schmidt",
      username: "anna_s",
      avatar: "/images/tutor5.jpg",
      location: "Berlin → London",
      mutualConnections: 5,
    },
  ]

  const upcomingEvents = [
    {
      title: "Newcomers Networking Brunch",
      date: "May 15, 2024",
      location: "Central Park, New York",
      attendees: 28,
    },
    {
      title: "Immigration Workshop: Work Visas",
      date: "May 22, 2024",
      location: "Online",
      attendees: 45,
    },
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handlePostSubmit = () => {
    if (!postContent && !selectedImage) return

    setIsPosting(true)

    // Simulate posting delay
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        user: {
          name: "John Doe",
          username: "john_doe",
          avatar: "/images/student2.jpg",
          location: "Brazil → Canada",
          isVerified: false,
        },
        content: postContent,
        image: selectedImage,
        timeAgo: "Just now",
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        isBookmarked: false,
      }

      setPosts([newPost, ...posts])
      setPostContent("")
      setSelectedImage(null)
      setIsPosting(false)

      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }, 1000)
  }

  const handleLikeToggle = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          }
        }
        return post
      }),
    )
  }

  const handleBookmarkToggle = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isBookmarked: !post.isBookmarked,
          }
        }
        return post
      }),
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.png" alt="RockEvo Logo" className="h-7 w-auto mr-2" />
          <span className="font-bold">RockEvo</span>
        </Link>
        <div className="hidden md:flex mx-auto max-w-md w-full">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-9 h-9" placeholder="Search people, posts, events..." />
          </div>
        </div>
        <nav className="ml-auto flex items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community/connections">
              <Users className="h-5 w-5" />
              <span className="sr-only">Connections</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community/messages">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 relative" asChild>
            <Link href="/community/notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/images/student2.jpg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <div className="flex-1 container mx-auto px-4 py-4 md:py-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-rockevo-blue">
                      <AvatarImage src="/images/student2.jpg" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="font-semibold">John Doe</h2>
                      <p className="text-sm text-gray-500">@john_doe</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center text-sm mb-2">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    <span>Brazil → Canada</span>
                  </div>
                  <p className="text-sm mb-3">
                    Software developer, language enthusiast, and new to Toronto. Looking to connect with fellow
                    immigrants!
                  </p>
                  <div className="grid grid-cols-3 text-center border-t pt-2">
                    <div>
                      <div className="font-semibold">128</div>
                      <div className="text-xs text-gray-500">Posts</div>
                    </div>
                    <div>
                      <div className="font-semibold">256</div>
                      <div className="text-xs text-gray-500">Following</div>
                    </div>
                    <div>
                      <div className="font-semibold">189</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/community/profile">View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <h2 className="font-semibold">Upcoming Events</h2>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b last:border-0 pb-3 last:pb-0">
                      <h3 className="font-medium text-sm">{event.title}</h3>
                      <div className="text-xs text-gray-500 mt-1">{event.date}</div>
                      <div className="text-xs text-gray-500 flex items-center mt-0.5">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                      <div className="text-xs mt-1">{event.attendees} attending</div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Mobile Search */}
            <div className="md:hidden mb-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input className="pl-9 h-9" placeholder="Search..." />
              </div>
            </div>

            {/* Create Post */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/student2.jpg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Input
                    placeholder="Share your experience or ask a question..."
                    className="bg-gray-100"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>

                {selectedImage && (
                  <div className="mt-3 relative">
                    <div className="rounded-md overflow-hidden border">
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Selected"
                        className="w-full max-h-60 object-contain"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 bg-black/50 hover:bg-black/70 text-white rounded-full"
                      onClick={handleRemoveImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex justify-between mt-3">
                  <Button variant="ghost" size="sm" className="text-xs" onClick={() => fileInputRef.current?.click()}>
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Photo
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <Button size="sm" onClick={handlePostSubmit} disabled={isPosting || (!postContent && !selectedImage)}>
                    {isPosting ? "Posting..." : "Post"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feed Tabs */}
            <Tabs defaultValue="all" className="mb-4">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={post.user.avatar} alt={post.user.name} />
                          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold text-sm">{post.user.name}</h3>
                            {post.user.isVerified && (
                              <Badge variant="outline" className="ml-1 h-4 px-1 text-[10px]">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>@{post.user.username}</span>
                            <span className="mx-1">•</span>
                            <span>{post.timeAgo}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500 mt-0.5">
                            <Globe className="h-3 w-3 mr-1" />
                            <span>{post.user.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-3">
                    <p className="text-sm mb-3">{post.content}</p>
                    {post.image && (
                      <div className="rounded-md overflow-hidden mb-3">
                        <img
                          src={typeof post.image === "string" ? post.image : "/placeholder.svg"}
                          alt="Post image"
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{post.likes} likes</span>
                      <span>
                        {post.comments} comments • {post.shares} shares
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 border-t">
                    <div className="grid grid-cols-4 w-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`rounded-none h-10 text-xs ${post.isLiked ? "text-rockevo-blue" : ""}`}
                        onClick={() => handleLikeToggle(post.id)}
                      >
                        <Heart
                          className={`h-4 w-4 mr-1 ${post.isLiked ? "fill-rockevo-blue text-rockevo-blue" : ""}`}
                        />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-none h-10 text-xs">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-none h-10 text-xs">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`rounded-none h-10 text-xs ${post.isBookmarked ? "text-rockevo-blue" : ""}`}
                        onClick={() => handleBookmarkToggle(post.id)}
                      >
                        <Bookmark
                          className={`h-4 w-4 mr-1 ${post.isBookmarked ? "fill-rockevo-blue text-rockevo-blue" : ""}`}
                        />
                        Save
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <h2 className="font-semibold">People You May Know</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  {suggestedUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-sm">{user.name}</h3>
                          <p className="text-xs text-gray-500">{user.location}</p>
                          <p className="text-xs text-gray-500">{user.mutualConnections} mutual connections</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        Follow
                      </Button>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    View More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <h2 className="font-semibold">Popular Communities</h2>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">New in Toronto</h3>
                      <p className="text-xs text-gray-500">3.2k members</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      Join
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">Spanish Speakers NYC</h3>
                      <p className="text-xs text-gray-500">1.8k members</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      Join
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">Immigration Support</h3>
                      <p className="text-xs text-gray-500">5.4k members</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">
                      Join
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full">
                    Explore Communities
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
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
