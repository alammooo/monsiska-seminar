import React from "react"
import Navbar from "../Navbar"
import { Inter } from "next/font/google"
import { LayoutProps } from "@/interface/MainPageInterface/LayoutProps"

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
