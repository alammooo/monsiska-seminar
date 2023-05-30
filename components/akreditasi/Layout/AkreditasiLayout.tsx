import { LayoutProps } from "@/interface/MainPageInterface/LayoutProps"
import AkreditasiSidebar from "../AkreditasiSidebar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const AkreditasiLayout = ({ children }: LayoutProps) => {
  return (
    <main style={inter.style}>
      <AkreditasiSidebar />
      {children}
    </main>
  )
}
