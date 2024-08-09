import clsx from "clsx";
import Link from "next/link";
import React from "react";

export interface INavLink {
  name: string;
  url: string;
  logo?: boolean;
  external?: boolean;
}

export default function NavLink({ link }: { link: INavLink }) {
  return (
    <Link
      className={clsx("nav-link", link.external && "external")}
      href={link.url}
      target={link.external ? "_blank" : undefined}
    >
      {link.name}
    </Link>
  );
}
