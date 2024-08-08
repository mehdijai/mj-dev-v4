"use client";

import Image from "next/image";
import "./style.scss";
import clsx from "clsx";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function PageBG() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.to(".bg .overlay", {
      opacity: 1,
    }).to(
      ".bg .blob",
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=0.5"
    );
  });
  return (
    <div className="bg">
      <div className="overlay"></div>
      <div className={clsx("blob", "blob-purple")}>
        <Image width={1000} height={1000} alt="blob" src="/blob-purple.svg" />
      </div>
      <div className={clsx("blob", "blob-orange")}>
        <Image width={1000} height={1000} alt="blob" src="/blob-orange.svg" />
      </div>
    </div>
  );
}
