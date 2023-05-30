import ButtonMain from "../utils/ButtonMain"

const NextProject = () => {
  return (
    <section>
      <div className="py-20 bg-zinc-600 flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-center text-white">
          Ready to start your next web project now?
        </h2>
        <p className="text-zinc-400 mx-auto text-center max-w-lg">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p>

        <ButtonMain
          text="Get Started!"
          centered={true}
        />
      </div>
    </section>
  )
}

export default NextProject
