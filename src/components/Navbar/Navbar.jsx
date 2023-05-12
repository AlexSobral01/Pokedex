import Link from "next/link";
import styles from "./Navbar.module.css"
import Image from "next/image";
import imgLogo from "../../../public/pokemon-png-logo.webp"

export default function Navbar() {
  return (
    <header className={ styles.header }>
      <nav className={ styles.nav }>
        <div>
          <Image
          src={imgLogo}
          alt="logo"
          width={100}
          height={40} />
        </div>
        <ul className={ styles.nav_itens }>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/support">Support</Link></li>
        </ul>
      </nav>
    </header>
  )
}