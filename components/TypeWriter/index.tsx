"use client";

import { SteppedEase, gsap } from "gsap";
import "./style.scss";
import { useEffect } from "react";

export default function TypeWriter() {
  useEffect(() => {
    const breakpointsMatch = {
      md: window.matchMedia("(max-width: 768px) and (min-width: 427px)")
        .matches,
      sm: window.matchMedia("(max-width: 427px) and (min-width: 350px)")
        .matches,
      xs: window.matchMedia("(max-width: 350px)").matches,
    };

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: SteppedEase.config(20) },
    });

    if (breakpointsMatch.xs == true || breakpointsMatch.sm === true) {
      tl.fromTo(
        ".anim-typewriter",
        {
          width: 0,
        },
        {
          width: 235,
        }
      );
    }
    if (
      breakpointsMatch.md === true ||
      Object.values(breakpointsMatch).every((match) => match === false) === true
    ) {
      tl.fromTo(
        ".anim-typewriter",
        {
          width: 0,
        },
        {
          width: 340,
        }
      );
    }
    tl.fromTo(
      ".anim-typewriter",
      {
        duration: 0.5,
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
      }
    );
  });

  return <p className="type-writer font-game anim-typewriter">“HELLO”</p>;
}
