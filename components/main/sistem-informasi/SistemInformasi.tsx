import InstansiList from "../InstansiList"
import SectionTitleAlt from "../utils/SectionTitleAlt"

export default function SistemInformasi() {
  return (
    <section
      id="pelatihan-akreditasi"
      className="grid grid-cols-2 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <SectionTitleAlt
          title="Sistem Informasi Sebagai Gerbang Digitalisasi Menyeluruh Instansi"
          subTitle="Sistem Informasi"
        />
        <div className="flex flex-col gap-5 mt-7 text-slate-600">
          <p className="leading-loose">
            Penyediaan suatu integrasi komponen untuk pengumpulan, penyimpanan
            dan pemrosesan data. Data tersebut kemudian digunakan untuk
            menyediakan informasi, berkontribusi pada pengetahuan serta produk
            digital yang memfasilitasi pengambilan keputusan. Sistem Informasi
            juga membantu untuk mengontrol kinerja proses suatu bisnis.
          </p>
          <InstansiList />
        </div>
      </div>
    </section>
  )
}
