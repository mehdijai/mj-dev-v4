"use client";

import "./style.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/info";

export default function AboutSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".about",
        once: true,
      },
    });
    tl.fromTo(
      ".about h2",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(
      ".about p",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=0.5"
    );
    ScrollTrigger.batch(".skill", {
      once: true,
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.1,
        }),
      onLeaveBack: (elements) =>
        gsap.set(elements, {
          opacity: 0,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          overwrite: true,
        }),
    });
  });
  return (
    <section className="about section" id="about">
      <h2>About me</h2>
      <p>
        <strong>
          Mehdi Jai, Lead Fullstack developer. Specialized in VueJS, NodeJS, and
          PHP Laravel.
        </strong>{" "}
        I’m a curious, autonomous developer. I started my journey in 2019
        professionally. The beginning was with building my two majors SaaS;
        Tabarro3.ma, Autodrive.ma. I have a long experience with
        JavaScript/TypeScript, SCSS/SASS, NodeJS, and PHP Laravel, VueJS. Plus,
        ElectronJS, Figma, and other tools, programming languages, and skills.
      </p>
      <p>
        During my carrer, I worked startups and was responsible for developing,
        creating, maintaining and deploying Web Applications. This experience
        led me to acquiring good skill set in tech, from technical skills at
        languages and frameworks, infrastructure and handling production
        projects, to soft skills as team player, leading projects, critical
        thinking, and solution-driven mentality
      </p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
