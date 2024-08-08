import Image from "next/image";
import style from "./style.module.scss";
import clsx from "clsx";

const socialMediaLinks: SMLink[] = [
  {
    name: "Github",
    url: "https://github.com/mehdijai",
    logo: "/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/mehdijai",
    logo: "/linkedin.svg",
  },
];

export default function Sidebar() {
  return (
    <ul className={style.sidebar}>
      <li className={clsx(style.line, style["line-1"])}></li>
      {socialMediaLinks.map((sm) => (
        <li className={style["sm-icon"]} key={sm.name}>
          <a href="sm.url">
            <Image
              width={30}
              height={30}
              src={sm.logo}
              alt={sm.name + " Logo"}
            />
          </a>
        </li>
      ))}
      <li className={clsx(style.line, style["line-2"])}></li>
    </ul>
  );
}
