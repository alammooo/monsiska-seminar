import { FeatureCardData } from "@/data/FeatureCardData"
import Image from "next/image"
import Link from "next/link"

const FeatureCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-x-6 gap-y-16">
      {FeatureCardData.map((el, i) => (
        <div
          className={`rounded-3xl flex flex-col gap-5 p-6 ${
            i % 2 !== 0 ? "border border-slate-100 shadow-lg" : ""
          }`}>
          <div className="p-5 max-w-fit text-blue-700 bg-blue-300 rounded-lg mb-2">{el.imgLink}</div>
          <h3 className="font-semibold text-lg">{el.title}</h3>
          <p className="text-slate-400">{el.text}</p>
          <Link
            href={el.link}
            className="text-sm font-medium">
            Read More {`->`}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default FeatureCard
