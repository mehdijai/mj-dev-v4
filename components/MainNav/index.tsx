"use client";

import Link from "next/link";
import style from "./style.module.scss";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Menu } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    url: "/",
    logo: true,
  },
  {
    name: "About me",
    url: "/#about",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Blog",
    url: "https://hashnode.mehdijai.dev",
    external: true,
  },
];

export default function MainNav() {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  return (
    <>
      <nav className={style["main-nav"]}>
        <ul className={style["nav-list"]}>
          <li className={style["logo"]}>
            <Link href="/">
              <Image width={30} height={30} src="/logo.svg" alt="MJDev" />
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                className={clsx(
                  style["nav-link"],
                  link.external && "external",
                  link.external && style["external"]
                )}
                href={link.url}
                target={link.external ? "_blank" : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            className={clsx(style["menu-toggler"], { closed: !openNavMenu })}
            onClick={() => setOpenNavMenu(!openNavMenu)}
          >
            <button className="external">
              <Menu />
            </button>
          </li>
        </ul>
      </nav>
      {openNavMenu && (
        <ul className={style["list-menu"]}>
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                className={clsx(
                  style["nav-link"],
                  link.external && "external",
                  link.external && style["external"]
                )}
                href={link.url}
                target={link.external ? "_blank" : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
