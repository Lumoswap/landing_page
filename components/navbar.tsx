"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from "@nextui-org/navbar";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [activeHash, setActiveHash] = useState<string>("home");

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        setActiveHash(window.location.hash.substring(1) ?? "home");
      } else {
        setActiveHash("home");
      }
    };

    // Initial load
    handleHashChange();

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Dependency array does not include `toggle`

  const handleLinkClick = (hash: string) => {
    if (activeHash === hash) return;
    setActiveHash(hash);
    window.location.hash = hash;
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      shouldHideOnScroll={false}
      style={{ zIndex: 10000, position: "fixed", top: 0 }}
    >
      <NavbarBrand>
        <Image
          priority
          src="/images/logo.svg"
          width={140}
          height={50}
          alt="Lumo Logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {["home", "about", "features", "roadmap"].map((hash) => (
          <NavbarItem key={hash} isActive={activeHash === hash}>
            <Link
              color={activeHash === hash ? "primary" : "foreground"}
              href={`#${hash}`}
              onClick={() => handleLinkClick(hash)}
            >
              {hash.charAt(0).toUpperCase() + hash.slice(1)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="solid">
            Launch App
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {["home", "about", "features", "roadmap"].map((hash) => (
          <NavbarItem key={hash} isActive={activeHash === hash}>
            <Link
              color={activeHash === hash ? "primary" : "foreground"}
              href={`#${hash}`}
              onClick={() => handleLinkClick(hash)}
            >
              {hash.charAt(0).toUpperCase() + hash.slice(1)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
