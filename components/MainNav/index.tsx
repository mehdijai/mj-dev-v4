"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { gsap } from "gsap";

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
    url: "https://mehdijai.hashnode.dev",
    external: true,
  },
  {
    name: "Resume",
    url: "/_resume.pdf",
    external: true,
  },
];

export default function MainNav() {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
    });
    tl.to(".main-nav", {
      opacity: 1,
    }).fromTo(
      ".nav-list > li",
      {
        y: -5,
        opacity: 0,
        stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      "-=0.3"
    );
  });

  return (
    <>
      <nav className={"main-nav"}>
        <ul className={"nav-list"}>
          <li className={"logo"}>
            <Link href="/">
              <Image width={30} height={30} src="/logo/logo.svg" alt="MJDev" />
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.url}>
              <NavLink link={link} />
            </li>
          ))}
          <li
            className={clsx("menu-toggler", { closed: !openNavMenu })}
            onClick={() => setOpenNavMenu(!openNavMenu)}
          >
            <button className="external">
              <Menu />
            </button>
          </li>
        </ul>
      </nav>
      {openNavMenu && (
        <ul className={"list-menu"}>
          {navLinks.map((link) => (
            <li key={link.url}>
              <NavLink link={link} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
