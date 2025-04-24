import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lendsqr - Home",
  description: "Lendsqr Home page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>


        {children}

    </div>
  )
}
