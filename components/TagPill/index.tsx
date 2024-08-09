import React, { CSSProperties } from "react";
import "./style.scss";

interface TagPillCSS extends CSSProperties {
  "--bg": string;
  "--color": string;
}

export default function TagPill({ tag }: { tag: ITag }) {
  return (
    <span
      className="tag"
      style={{ "--bg": tag.bg, "--color": tag.color } as TagPillCSS}
    >
      {tag.title}
    </span>
  );
}
