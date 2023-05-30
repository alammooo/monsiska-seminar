import InstansiList from "../InstansiList"
import SectionTitleAlt from "../utils/SectionTitleAlt"

export default function ThesisDisertasi() {
  return (
    <section
      id="pelatihan-akreditasi"
      className="grid grid-cols-2 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <SectionTitleAlt
          title="Konsultasi Thesis dan Disertasi Dengan Pengalaman Lebih"
          subTitle="Konsultan Thesis dan Disertasi"
        />
        <div className="flex flex-col gap-5 mt-7 text-slate-600">
          <InstansiList />
        </div>
      </div>
    </section>
  )
}
