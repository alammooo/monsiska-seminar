import { navLinks } from "@/data/navLink"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white py-5 hidden">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <span className="text-xl font-bold tracking-wider">Monsiska</span>
        <div className="flex gap-5 capitalize">
          {navLinks.map((el, i) => (
            <Link
              key={i}
              href={el.link}
              className="text-blue-950 hover:text-blue-500">
              {el.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
