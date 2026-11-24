import Image from "next/image"
import Link from "next/link"

export const MinimalistNavBar = () => {
    return (
        <nav className="fixed bg-gray-300 dark:bg-blue-950 px-6 py-2 z-10 w-full top-0">
            <div className="flex justify-between items-center">
                <Image 
                    src={"/pokemon-png-logo.webp"} 
                    alt="Logo"
                    width={100}
                    height={40}
                    loading="eager"
                    style = {{
                        width: "auto",
                        height: "auto"
                    }} 
                />
                <ul className="flex gap-[25px] pb-[10px] pr-[15px] absolute bottom-0 right-0">
                    <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/">Home</Link></li>
                    <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/about">About</Link></li>
                    <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/">Contact</Link></li>
                    <li><Link className="text-white transition duration-500 ease-in-out hover:text-gray-400" href="/support">Support</Link></li>
                </ul>
            </div>
        </nav>
    )
}