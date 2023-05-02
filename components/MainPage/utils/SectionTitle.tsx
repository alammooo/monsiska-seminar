import { SectionTitleProps } from "@/interface/MainPageInterface/SectionTitleProps"

const SectionTitle = ({ subTitle, title }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-blue-600 font-semibold uppercase">{subTitle}</h3>
      <h2 className="font-bold text-2xl">{title}</h2>
    </div>
  )
}

export default SectionTitle
