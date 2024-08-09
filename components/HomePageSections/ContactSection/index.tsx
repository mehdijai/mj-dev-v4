"use client";

import "./style.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialMediaLinks } from "@/lib/info";
import Link from "next/link";
import Image from "next/image";
import { content } from "@/lib/content";

export default function ContactSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".contact",
        once: true,
      },
    });
    tl.fromTo(
      ".contact h2",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
      }
    )
      .fromTo(
        ".contact p",
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5"
      )
      .fromTo(
        ".contact .link",
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
    ScrollTrigger.batch(".sm li", {
      once: true,
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        }),
      // onLeaveBack: (elements) =>
      //   gsap.set(elements, {
      //     opacity: 0,
      //     y: 50,
      //     overwrite: true,
      //   }),
    });
  });
  return (
    <section className="contact section" id="contact">
      <h2>Let’s Get In Touch</h2>
      <p>
        I’m currently open for work as VueJS/NodeJS frontend developer
        opportunity.
      </p>
      <p>
        Check out my resume for more details{" "}
        <Link href="/_resume.pdf" target="_blank" className="link">
          Resume
        </Link>
      </p>
      <a className="link" href={"mailto:" + content.mailBox}>
        {content.mailBox}
      </a>
      <ul className="sm">
        {socialMediaLinks.map((sm) => (
          <li key={sm.name}>
            <a href={sm.url}>
              <Image
                width={40}
                height={40}
                src={sm.logo}
                alt={sm.name + " Logo"}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
