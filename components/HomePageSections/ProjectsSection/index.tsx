"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import React, { useEffect } from "react";
import "./style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.inOut" },
      scrollTrigger: {
        trigger: ".projects",
        once: true,
      },
    });
    tl.fromTo(
      ".projects h2",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
    ScrollTrigger.batch(".project-card", {
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
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          overwrite: true,
        }),
    });
  });
  return (
    <section className="projects section" id="projects">
      <h2>Projects</h2>
      <article className="projects-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </article>
    </section>
  );
}
