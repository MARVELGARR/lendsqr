import React from "react"
import "../styles/globals.scss"
import type { Metadata } from "next"
import { ReactQueryProvider } from "../providers/reactQueryProvider"

export const metadata: Metadata = {
  title: "Lendsqr - Login",
  description: "Lendsqr login page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReactQueryProvider>

        <body>{children}</body> 
      </ReactQueryProvider>
    </html>
  )
}
