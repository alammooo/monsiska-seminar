import Image from "next/image"
import ButtonMain from "./utils/ButtonMain"
import AboutImg from "@/assets/svg/about-img.svg"
import SectionTitle from "./utils/SectionTitle"
const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-50">
      <div className="grid md:grid-cols-2 max-w-5xl mx-auto py-24 gap-x-20">
        <div className="">
          <Image
            src={AboutImg}
            alt="about-img"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <SectionTitle
            title="Who Are We ?"
            subTitle="Our Company Story"
          />
          <p className="text-slate-500">
            Dunia standar dan regulasi, akreditasi, tes dan sertifikasi tidak
            sesederhana itu. Tapi mereka membuat hidup dan bisnis jauh lebih
            efisien dan aman. Bagaimana Monsiska MI menguji? Apa yang diperiksa
            oleh Monsiska MI? Siapa yang menguji penguji? Dan siapa pengujinya?
            Anda akan menemukan banyak jawaban di sini.
          </p>
          <ButtonMain text="View Portofolio" />
        </div>
      </div>
    </section>
  )
}

export default About
