import { navLinks } from "@/data/navLink"
import Link from "next/link"
import ButtonMain from "./utils/ButtonMain"

const Hero = () => {
  return (
    <section
      className="bg-blue-900 text-white"
      id="hero">
      <nav className="w-full pt-5">
        <div className="flex justify-between max-w-6xl mx-auto items-center">
          <span className="text-xl font-bold tracking-wider">Monsiska</span>
          <div className="flex gap-5 capitalize">
            {navLinks.map((el, i) => (
              <Link
                key={i}
                href={el.link}
                className="text-slate-100 hover:text-blue-500">
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-10 pt-44 pb-64">
        <h1 className="font-semibold text-5xl text-center">
          Monsiskami, <br /> Konsultan Manajemen Indonesia
        </h1>
        <span className="max-w-lg mx-auto flex text-center text-slate-200">
          Jasa Konsultan dan Manajemen Web Rumah Sakit dan Sekolah, melayani
          dengan profesional dengan performa maximal untuk kebutuhan tercepat
          client
        </span>
        <ButtonMain
          centered={true}
          text="Lebih Lanjut"
        />
      </div>
    </section>
  )
}

export default Hero
