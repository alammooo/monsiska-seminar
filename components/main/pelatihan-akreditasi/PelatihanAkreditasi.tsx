import InstansiList from "../InstansiList"
import SectionTitleAlt from "../utils/SectionTitleAlt"

export default function PelatihanAkreditasi() {
  return (
    <section
      id="pelatihan-akreditasi"
      className="grid grid-cols-2 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <SectionTitleAlt
          title="Pelatihan Dan Pendampingan Implementasi Dokumen Sistem Manajemen Mutu
          Berbasis Akreditasi"
          subTitle="Pelatihan Akreditasi"
        />
        <div className="flex flex-col gap-5 mt-7 text-slate-600">
          <p className="leading-loose">
            Akreditasi bertujuan untuk meningkatkan pengelolaan, pelayanan yang
            pada akhirnya memberikan kepuasan kepada pelanggan.
          </p>
          <p className="leading-loose">
            Kami konsultan manajemen siap menjembatani permasalahan ini dengan
            memberikan kemasan pelatihan yang tepat yaitu “Peningkatan pemahaman
            dan implementasi sistem manajemen mutu berbasis Akreditasi”
            Pelatihan ini sangat bermanfaat untuk mencegah terjadinya lembur
            dokumen dalam setiap akan akreditasi.
          </p>
          <InstansiList />
        </div>
      </div>
    </section>
  )
}
