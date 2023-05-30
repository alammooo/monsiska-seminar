import { AkreditasiLayout } from "@/components/akreditasi/Layout/AkreditasiLayout"
import { ReactElement } from "react"

const Akreditasi = () => {
  return (
    <section>
      <h1>Hallo</h1>
    </section>
  )
}

export default Akreditasi

Akreditasi.getLayout = function getLayout(page: ReactElement) {
  return <AkreditasiLayout>{page}</AkreditasiLayout>
}
