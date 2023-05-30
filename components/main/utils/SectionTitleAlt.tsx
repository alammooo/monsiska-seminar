import { SectionTitleProps } from "@/interface/MainPageInterface/SectionTitleProps"

export default function SectionTitleAlt({
  subTitle,
  title,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-blue-600 font-semibold uppercase">{subTitle}</h3>
      <h2 className="font-bold text-4xl text-slate-600">{title}</h2>
    </div>
  )
}
