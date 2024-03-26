import Link from "next/link";

import Styles from "./main-header.module.css"

import logoImg from '@/assets/logo.png'
import Image from "next/image";
import HeaderBG from "./main-header-bg";
import NavLink from "./nav-link";

export default function Header() {

  return (
    <>
      <HeaderBG />
      <header className={Styles.header}>
        <Link className={Styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={Styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            <li>
              <NavLink href="/share">Share it</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}