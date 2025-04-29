import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RockEvo Community",
  description: "Connect with fellow immigrants, share experiences, and build your network",
}

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen flex flex-col">{children}</div>
}
