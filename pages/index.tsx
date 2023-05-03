import { ReactElement } from "react"
import HomeLayout from "@/components/homeLayout/HomeLayout"
import { navLinks } from "@/data/navLink"
import Link from "next/link"
import Hero from "@/components/MainPage/Hero"
import About from "@/components/MainPage/About"
import Feature from "@/components/MainPage/Feature/Feature"
import WorkProcess from "@/components/MainPage/WorkProcess/WorkProcess"
import Portofolio from "@/components/MainPage/Portofolio/Portofolio"
import NextProject from "@/components/MainPage/NextProject/NextProject"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <WorkProcess />
      <Portofolio />
      <NextProject />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export default Home
