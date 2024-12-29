import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Image from "next/image";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter
} from "react-icons/fa";
import "../styles/app.css";
import { Divider, Spacer } from "@nextui-org/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="container mx-auto max-w-7xl pt-16 px-6 flex-grow pb-20">
              <div className="grid gap-10 sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex flex-col">
                  <p className="font-bold text-white">ABOUT</p>
                  <Spacer y={2} />
                  <Link href="https://medium.com/@lumoswap" target="_blank">
                    <p className="text-sm">Blog</p>
                  </Link>
                  <Link href="/Lumoswap Whitepaper.pdf" target="_blank">
                    <p className="text-sm">Whitepaper</p>
                  </Link>
                  <Link href="/comingsoon">
                    <p className="text-sm">Tokenomics</p>
                  </Link>
                  <Link href="https://creatorchain.io/" target="_blank">
                    <p className="text-sm">Creator Chain</p>
                  </Link>
                  <Link href="/comingsoon">
                    <p className="text-sm">Lumos - Lab</p>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white">HELP</p>
                  <Spacer y={2} />
                  <Link
                    href="https://x.com/buildoncreator/status/1864258435669270987?s=46"
                    target="_blank"
                  >
                    <p className="text-sm">Introduction to creator</p>
                  </Link>
                  <Link href="">
                    <p className="text-sm">Lumos Academy</p>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white">DEVELOPER</p>
                  <Spacer y={2} />
                  <Link href="https://github.com/Lumoswap" target="_blank">
                    <p className="text-sm">Github</p>
                  </Link>
                  <Link href="/comingsoon">
                    <p className="text-sm">Documentation</p>
                  </Link>
                  <Link href="https://docs.creatorchain.io/">
                    <p className="text-sm">Creatorchain docs</p>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white">BUSINESS</p>
                  <Spacer y={2} />
                  <Link href="/comingsoon">
                    <p className="text-sm">Partnership</p>
                  </Link>
                  <Link href="/comingsoon">
                    <p className="text-sm">Token Launch</p>
                  </Link>
                  <Link href="/comingsoon">
                    <p className="text-sm">Staking Pools</p>
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/1K2MBYMeGJ334OCXXxgvh01nR9m_g8xZd?usp=drive_link"
                    target="_blank"
                  >
                    <p className="text-sm">Brand Asset</p>
                  </Link>
                </div>

                <div className="flex-col justify-start items-end hidden md:flex">
                  <Image
                    src="/images/lumo.svg"
                    width={71}
                    height={82}
                    alt="logo"
                  />
                  <Divider
                    style={{
                      height: "1px",
                      width: "100%"
                    }}
                    className="my-4 bg-default"
                  />
                  <div className="flex gap-4">
                    <Link href="">
                      <FaDiscord />
                    </Link>
                    <Link href="">
                      <FaGithub />
                    </Link>
                    <Link href="">
                      <FaLinkedin />
                    </Link>
                    <Link href="">
                      <FaTelegram />
                    </Link>
                    <Link href="">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-end md:hidden flex mt-20">
                <Image
                  src="/images/lumo.svg"
                  width={71}
                  height={82}
                  alt="logo"
                />
                <Divider
                  style={{
                    height: "1px",
                    width: "100%"
                  }}
                  className="my-4 bg-default"
                />
                <div className="flex gap-4">
                  <Link href="">
                    <FaDiscord />
                  </Link>
                  <Link href="https://github.com/Lumoswap" target="_blank">
                    <FaGithub />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/lumoswap"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link href="https://t.me/lumoswap" target="_blank">
                    <FaTelegram />
                  </Link>
                  <Link href="https://x.com/lumoswap" target="_blank">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
