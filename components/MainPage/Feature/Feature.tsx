import SectionTitle from "../utils/SectionTitle"
import FeatureCard from "./FeatureCard"

const Feature = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto py-24">
        <div className="grid grid-cols-2 mb-24 ">
          <span className="flex max-w-sm">
            <SectionTitle
              title="Perfect Solution For Your Business"
              subTitle="WHAT WE DO ?"
            />
          </span>
          <span className="flex text-slate-500 self-end">
            Business Launch your campaign and benefit from our expertise on
            designing and managing conversion centered Tailwind CSS html page.
          </span>
        </div>
        <FeatureCard />
      </div>
    </section>
  )
}

export default Feature
