"use client";
import { ArrowUp } from "lucide-react";
import style from "./style.module.scss";
import { useEffect } from "react";

function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default function ToTopFab() {
  useEffect(() => {
    const fabButton = document.getElementById("fabButton");

    document.addEventListener("scroll", () => {
      const docScroll = document.documentElement.scrollTop;
      if (fabButton) {
        if (document.body.scrollTop > 200 || docScroll > 200) {
          fabButton.style.display = "block";
        } else {
          fabButton.style.display = "none";
        }
      }
    });
  });
  return (
    <button id="fabButton" className={style.fab} onClick={scrollUp}>
      <span>
        <ArrowUp />
      </span>
    </button>
  );
}
