import Image from "next/image"
import SectionTitle from "../utils/SectionTitle"
import placeImage from "@/assets/images/693745.jpg"

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div className="bg-zinc-50 py-28">
        <div className="text-center">
          <SectionTitle
            title="Our Works & Projects"
            subTitle="portofolio"
          />
        </div>
        <p className="text-center mt-5 text-slate-400 max-w-lg mx-auto">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p>
        <div className="grid md:grid-cols-4 max-w-6xl gap-6 mt-8 mx-auto">
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md h-48 relative group">
            <Image
              className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-105 duration-500"
              src={placeImage}
              alt="pict"
            />
            <div className="absolute w-full h-full flex flex-col p-5 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 text-white inset-0 group-hover:bg-zinc-800 duration-500">
              <i></i>
              <p className="text-lg font-semibold">Mockup Collection</p>
              <p>Branding</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portofolio
