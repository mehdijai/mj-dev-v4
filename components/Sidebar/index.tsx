"use client";

import Image from "next/image";
import "./style.scss";
import clsx from "clsx";
import { useEffect } from "react";
import gsap from "gsap";

const socialMediaLinks: SMLink[] = [
  {
    name: "Github",
    url: "https://github.com/mehdijai",
    logo: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/mehdijai",
    logo: "/icons/linkedin.svg",
  },
];

export default function Sidebar() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
    });
    tl.fromTo(
      ".line-1",
      {
        opacity: 0,
        y: -5,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
      .fromTo(
        ".line-2",
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=0.4"
      )
      .to(
        ".sidebar .sm-icon",
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
        },
        "-=0.3"
      );
  });

  return (
    <ul className={"sidebar"}>
      <li className={clsx("line", "line-1")}></li>
      {socialMediaLinks.map((sm) => (
        <li className={"sm-icon"} key={sm.name}>
          <a href={sm.url}>
            <Image
              width={30}
              height={30}
              src={sm.logo}
              alt={sm.name + " Logo"}
            />
          </a>
        </li>
      ))}
      <li className={clsx("line", "line-2")}></li>
    </ul>
  );
}
