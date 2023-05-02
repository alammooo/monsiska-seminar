import Image from "next/image"
import SectionTitle from "../utils/SectionTitle"
import WorkProcess1 from "@/assets/svg/workprocess1.svg"
import WorkProcess2 from "@/assets/svg/workprocess2.svg"
import WorkProcess3 from "@/assets/svg/workprocess3.svg"

const WorkProcess = () => {
  return (
    <section id="work-process">
      <div className="mx-auto text-center">
        <SectionTitle
          title="Digital System For Our Business"
          subTitle="Work Process"
        />
        <p className="text-gray-400 max-w-lg text-center mx-auto mt-5">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p>
      </div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto gap-y-16 mt-24 gap-x-7">
        <div className="text-blue-600 flex justify-end">
          <Image
            src={WorkProcess1}
            alt="work-process-1"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-lg text-left">Strategy</h3>
          <p className="leading-loose text-gray-400 font-medium">
            The generated injected humour, or non-characteristic words etc. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis,
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-lg text-right">Development</h3>
          <p className="leading-loose text-gray-400 font-medium text-right">
            The generated injected humour, or non-characteristic words etc. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis,
          </p>
        </div>
        <div className="text-blue-600 flex justify-start">
          <Image
            src={WorkProcess2}
            alt="work-process-1"
          />
        </div>
        <div className="text-blue-600 flex justify-end">
          <Image
            src={WorkProcess3}
            alt="work-process-1"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-lg">Launch</h3>
          <p className="leading-loose text-gray-400 font-medium">
            The generated injected humour, or non-characteristic words etc. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis,
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
