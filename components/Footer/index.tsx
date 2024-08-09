"use client";

import { useEffect } from "react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".footer",
        once: true,
        start: "bottom bottom",
      },
    });
    tl.fromTo(
      ".footer",
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: "100%",
      }
    );
  });
  return (
    <footer className={"footer"}>
      <p>MJDev v4.0 | Designed & Created by Mehdi Jai</p>
    </footer>
  );
}
