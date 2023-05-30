import { ReactElement } from "react"
import Hero from "@/components/main/Hero"
import About from "@/components/main/About"
import Feature from "@/components/main/Feature/Feature"
import WorkProcess from "@/components/main/WorkProcess/WorkProcess"
import Portofolio from "@/components/main/Portofolio/Portofolio"
import NextProject from "@/components/main/NextProject/NextProject"
import HomeLayout from "@/components/main/Layout/MainLayout"
import PelatihanAkreditasi from "@/components/main/pelatihan-akreditasi/PelatihanAkreditasi"
import MonsiskamiKonsultan from "@/components/main/monsiskami-konsultan/MonsiskamiKonsultan"
import SistemInformasi from "@/components/main/sistem-informasi/SistemInformasi"
import MonsiskamiPelatihan from "@/components/main/monsiskami-pelatihan/MonsiskamiPelatihan"
import ThesisDisertasi from "@/components/main/thesis-disertasi/ThesisDisertasi"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <PelatihanAkreditasi />
      <MonsiskamiKonsultan />
      <SistemInformasi />
      <MonsiskamiPelatihan />
      <ThesisDisertasi />
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
