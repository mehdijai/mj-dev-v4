"use client";

import Image from "next/image";
import "./style.scss";
import TypeWriter from "@/components/TypeWriter";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
    });
    tl.to(".bg-img", {
      opacity: 0.8,
      x: 0,
    })
      .to(".hero h1", {
        opacity: 1,
        x: 0,
      })
      .to(
        ".hero h2",
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5"
      );
  });
  return (
    <section className="hero">
      <div className="bg">
        <Image
          alt="bg"
          width={1000}
          height={1000}
          className="bg-img"
          src="/assets/bg.jpeg"
        />
      </div>
      <TypeWriter />
      <h1>Mehdi Jai</h1>
      <h2>Full-stack Web Developer</h2>
    </section>
  );
}
