import React, { ReactNode } from "react"
import Navbar from "../Navbar"
import { Inter } from "next/font/google"
import { LayoutProps } from "@/interface/LayoutProps"

const inter = Inter({ subsets: ["latin"] })

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <main style={inter.style}>
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout