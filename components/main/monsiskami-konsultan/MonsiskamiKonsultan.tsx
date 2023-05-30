import InstansiList from "../InstansiList"
import ButtonMain from "../utils/ButtonMain"
import SectionTitleAlt from "../utils/SectionTitleAlt"

export default function MonsiskamiKonsultan() {
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
            <div>
              <h3>Konsultan Manajemen Mutu :</h3>
              <p className="leading-loose">
                - Sertifikasi ISO 9001: 2015 <br />
                Manajemen mutu yang optimal dengan sertifikasi ISO 9001 Lebih
                dari satu juta perusahaan telah mendapatkan manfaat dari sistem
                manajemen mutu yang telah disertifikasi menurut ISO 9001,
                menikmati kinerja tertinggi dari proses dan keunggulan bersaing
                di tingkat internasional. Sertifikasi ISO 9001 memastikan bahwa
                orientasi mutu akan melekat pada setiap karyawan Anda di setiap
                harinya.
              </p>
            </div>
            <ButtonMain text="Pelejari Lebih Lanjut" />
            <InstansiList />
          </div>
        </div>
      </div>
    </section>
  )
}
