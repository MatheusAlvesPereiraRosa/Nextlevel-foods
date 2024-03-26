"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import Styles from "./nav-link.module.css"

export default function NavLink({ href, children }) {
  const pathname = usePathname()
  
  return (
      <Link
        className={`${pathname === href ? `${Styles.link} ${Styles.active}` : `${Styles.link}`}`}
        href={href}
      >
        {children}
      </Link>
  )
}