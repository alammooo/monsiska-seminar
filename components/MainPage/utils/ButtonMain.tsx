import { MainButtonProps } from "@/interface/MainPageInterface/MainButtonProps"

const ButtonMain = ({ text, centered }: MainButtonProps) => {
  return (
    <button
      className={`bg-rose-600 block max-w-fit px-5 py-2 rounded text-white ${
        centered ? "mx-auto" : ""
      }`}>
      {text}
    </button>
  )
}
export default ButtonMain
