import InstansiList from "../InstansiList"
import ButtonMain from "../utils/ButtonMain"
import SectionTitleAlt from "../utils/SectionTitleAlt"

export default function MonsiskamiPelatihan() {
  return (
    <section
      id="pelatihan-akreditasi"
      className="bg-slate-50 py-24 my-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div className="w-full"></div>
        <div className="max-w-2xl">
          <SectionTitleAlt
            title="Konsultasi Manajemen Mutu, Pembelakalan & Pembiayaan Sumber Daya Manusia"
            subTitle="Monsiskami Konsultan"
          />
          <div className="flex flex-col gap-5 mt-7 text-slate-600">
            <p className="leading-loose">
              Audit Internal adalah merupakan alat yang penting, karena akan
              memberikan gambaran penilaian organisasi yang independen dan
              objektif. Kinerja organisasi akan menjadi efektif dan effisien
              manakala dilakukan audit secara berkala dan hasil-hasilnya
              dimanfaatkan untuk pengembangan organisasi.
            </p>
            <p className="leading-loose">
              Pelatihan ini dimaksudkan untuk bagaimana peserta mampu melakukan
              audit sendiri untuk instrospeksi diri dengan dengan standar ganda
              yaitu ISO 9001 dan Standar akreditasi BAN yang bersifat independen
              yang akhirnya mampu untuk dilakukan audit eksternal seperti
              akreditasi maupun sertifikasi internasional.
            </p>

            <ButtonMain text="Pelejari Lebih Lanjut" />
            <InstansiList />
          </div>
        </div>
      </div>
    </section>
  )
}
