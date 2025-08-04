import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
  return (
    <header className="bg-[url('/pikachu_roupaMarinheiro.jpg')]
      bg-cover bg-no-repeat h-[300px] bg-center"
    >
      <nav className="flex justifyBetween p[15px] h-full bg-[rgba(0,0,0,0.639)] relative">
        <Link href={"/"}>
          <Image 
            src={"/pokemon-png-logo.webp"} 
            alt="Logo"
            width={100}
            height={40} 
          />
        </Link>
        <ul className="flex gap-[25px] pb-[10px] pr-[15px] absolute bottom-0 right-0">
          <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/">Home</Link></li>
          <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/about">About</Link></li>
          <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/">Contact</Link></li>
          <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/">Support</Link></li>
        </ul>
        </nav>
    </header>
  )
}
