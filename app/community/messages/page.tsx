import Link from "next/link"
import {
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  PlusSquare,
  ArrowLeft,
  Send,
  Paperclip,
  ImageIcon,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      user: {
        name: "Maria Rodriguez",
        avatar: "/images/tutor1.jpg",
        isOnline: true,
      },
      lastMessage: "Thanks for the advice about the visa process!",
      time: "2m ago",
      unread: 2,
    },
    {
      id: 2,
      user: {
        name: "Ahmed Hassan",
        avatar: "/images/tutor2.jpg",
        isOnline: false,
      },
      lastMessage: "Are you coming to the cultural festival this weekend?",
      time: "1h ago",
      unread: 0,
    },
    {
      id: 3,
      user: {
        name: "Yuki Tanaka",
        avatar: "/images/tutor3.jpg",
        isOnline: true,
      },
      lastMessage: "I can help you with the permanent residency application.",
      time: "3h ago",
      unread: 0,
    },
    {
      id: 4,
      user: {
        name: "Sofia Mendez",
        avatar: "/images/tutor4.jpg",
        isOnline: false,
      },
      lastMessage: "How's your experience in Toronto so far?",
      time: "1d ago",
      unread: 0,
    },
    {
      id: 5,
      user: {
        name: "Li Wei",
        avatar: "/images/tutor6.jpg",
        isOnline: false,
      },
      lastMessage: "Let's meet for coffee next week!",
      time: "2d ago",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "other",
      text: "Hi John! How are you settling in Toronto?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hey Maria! It's been quite an adjustment, but I'm loving it so far. The city is so diverse!",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "other",
      text: "That's great to hear! Have you figured out the public transportation system yet? It took me weeks to get comfortable with it.",
      time: "10:35 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "I'm still getting used to it! The subway is pretty straightforward, but I get confused with the streetcar routes sometimes.",
      time: "10:38 AM",
    },
    {
      id: 5,
      sender: "other",
      text: "I totally understand. I remember getting on the wrong streetcar and ending up in a completely different neighborhood my first month here!",
      time: "10:40 AM",
    },
    {
      id: 6,
      sender: "other",
      text: "By the way, I wanted to ask if you need any help with the visa process? I know you mentioned you're on a temporary work permit.",
      time: "10:41 AM",
    },
    {
      id: 7,
      sender: "me",
      text: "Actually, yes! I'm looking into applying for permanent residency through the Express Entry system. Have you gone through that?",
      time: "10:45 AM",
    },
    {
      id: 8,
      sender: "other",
      text: "Yes, I completed my PR process last year. It's quite detailed but straightforward if you have all your documents in order. I'd be happy to share my experience and some resources that helped me.",
      time: "10:48 AM",
    },
    {
      id: 9,
      sender: "me",
      text: "That would be incredibly helpful! I've been feeling a bit overwhelmed with all the requirements.",
      time: "10:50 AM",
    },
    {
      id: 10,
      sender: "other",
      text: "No problem at all! I remember how stressful it can be. Let's meet for coffee this weekend and I can walk you through the process and share some tips that worked for me.",
      time: "10:52 AM",
    },
    {
      id: 11,
      sender: "me",
      text: "That sounds perfect. Thank you so much for offering to help!",
      time: "10:55 AM",
    },
    {
      id: 12,
      sender: "other",
      text: "That's what this community is for! We immigrants need to support each other. How about Saturday at 2pm at that coffee shop near Yonge and Dundas?",
      time: "10:58 AM",
    },
    {
      id: 13,
      sender: "me",
      text: "Works for me! I'll see you then. Thanks for the advice about the visa process!",
      time: "11:00 AM",
    },
    {
      id: 14,
      sender: "other",
      text: "Looking forward to it! 😊",
      time: "11:01 AM",
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
        <h1 className="font-semibold mx-auto md:mx-0 md:ml-4">Messages</h1>
        <div className="hidden md:flex ml-auto items-center gap-1 md:gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/community/connections">
              <Users className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-rockevo-blue" asChild>
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

      <div className="flex-1 container mx-auto px-0 md:px-4 pb-16 md:pb-6 max-w-6xl">
        <div className="flex h-[calc(100vh-3.5rem)]">
          {/* Conversations List - Hidden on mobile when viewing a conversation */}
          <div className="w-full md:w-1/3 md:border-r bg-white">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input className="pl-9 h-9" placeholder="Search messages..." />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-3.5rem)]">
              {conversations.map((conversation, index) => (
                <Link
                  key={conversation.id}
                  href={`/community/messages/${conversation.id}`}
                  className={`flex items-center p-3 border-b hover:bg-gray-50 ${index === 0 ? "bg-gray-50" : ""}`}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                      <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {conversation.user.isOnline && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{conversation.user.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && <Badge className="ml-2 bg-rockevo-blue">{conversation.unread}</Badge>}
                </Link>
              ))}
            </div>
          </div>

          {/* Conversation Detail */}
          <div className="hidden md:flex flex-col w-2/3 bg-white">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/tutor1.jpg" alt="Maria Rodriguez" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <h3 className="font-medium">Maria Rodriguez</h3>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    {message.sender === "other" && (
                      <Avatar className="h-8 w-8 mr-2 mt-1">
                        <AvatarImage src="/images/tutor1.jpg" alt="Maria Rodriguez" />
                        <AvatarFallback>MR</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] ${message.sender === "me" ? "bg-rockevo-blue text-white" : "bg-white"} rounded-lg p-3 shadow-sm`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === "me" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 border-t bg-white">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Input className="h-10" placeholder="Type a message..." />
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button size="icon" className="h-9 w-9 bg-rockevo-blue">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
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
        <Button variant="ghost" size="icon" className="h-12 w-12 text-rockevo-blue" asChild>
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
