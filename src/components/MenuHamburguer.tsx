"use client"

import { useState } from "react"
import "../styles/menuHamburguer.css"
import Link from "next/link";

export const MenuHamburguer = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(true);
    return (
        <>
            <div id="menu__hamburguer"
            className="z-30"
                onClick={(e) => 
                    {
                        e.currentTarget.classList.toggle("active");
                        setToggleMenu(!toggleMenu);
                    }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`flex gap-6 justify-center items-center bg-gray-300 dark:bg-blue-950 w-full h-20 left-0 absolute transition-all duration-700 ease-in-out translate-y-17
                ${toggleMenu ? "-translate-x-full opacity-0 invisible" : "translate-y-17 opcacity-100 visible"}`}
            >
                <li><Link className="text-white hover:text-gray-400" href="/">Home</Link></li>
                <li><Link className="text-white hover:text-gray-400" href="/about">About</Link></li>
                <li><Link className="text-white hover:text-gray-400" href="/">Contact</Link></li>
                <li><Link className="text-white hover:text-gray-400" href="/support">Support</Link></li>
            </ul>
        </>
        
    )
}