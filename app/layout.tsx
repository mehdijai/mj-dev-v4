import type { Metadata } from "next";
import { Montserrat, Press_Start_2P } from "next/font/google";
import clsx from "clsx";
import "./global.scss";
import MainNav from "@/components/MainNav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press_start_2p",
});

export const metadata: Metadata = {
  title: "Mehdi Jai | Lead Fullstack Developer",
  description:
    "Mehdi Jai, Lead Fullstack developer. Specialized in VueJS, NodeJS and LaravelPHP",
  authors: {
    name: "Mehdi Jai",
    url: "https://mehdijai.com",
  },
  applicationName: "MJDev",
  keywords: [
    "Mehdi Jai",
    "Lead Fullstack Developer",
    "VueJS",
    "NodeJS",
    "LaravelPHP",
    "ReactJS",
    "NextJS",
  ],
  creator: "Mehdi Jai",
  publisher: "Mehdi Jai",
  openGraph: {
    title: "Mehdi Jai | Lead Fullstack Developer",
    description:
      "Mehdi Jai, Lead Fullstack developer. Specialized in VueJS, NodeJS and LaravelPHP",
    url: "https://mehdijai.com",
    siteName: "MJDev",
    type: "website",
    emails: "contact@mehdijai.com",
    locale: "en",
    images: "https://mehdijai.com/cover.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(pressStart2P.variable, montserrat.variable)}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
