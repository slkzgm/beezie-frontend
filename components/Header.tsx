"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { ASSET_PATHS } from "@/app/lib/assetUrls";

import Logo from "./icons/Logo";
import ClawIcon from "./icons/ClawIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`animate-slide-down fixed left-0 right-0 top-0 z-50 h-[84px] backdrop-blur-xl transition-all duration-500 ${
        isScrolled
          ? "bg-background shadow-header-scrolled"
          : "bg-background/95"
      }`}
    >
      <div className="flex h-full items-center justify-between px-4 md:px-8 lg:px-[50px]">
        <div className="interactive-scale flex h-10 items-center">
          <Logo />
        </div>

        <nav className="hidden h-10 items-center gap-0 lg:flex">
          <NavItem href="#" label="Marketplace" />
          <NavItem href="/claw" label="Claw" active />
          <NavItem href="#" label="Leaderboard" />
          <NavItem href="#" label="Resources" />
          <NavItem href="#" label="More" />
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="interactive-scale glow-gold-hover group relative flex h-10 items-center gap-2.5 overflow-hidden rounded-[7px] bg-surface px-3 py-1.5 md:px-4">
            <div className="shimmer-effect animate-shimmer absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={ASSET_PATHS.coinIcon}
              alt="Coins"
              width={15}
              height={12}
              className="icon-rotate-hover relative z-10 h-3 w-[15px]"
            />
            <span className="relative z-10 text-sm font-medium text-white">$190</span>
          </div>

          <div className="interactive-scale-lg group relative h-10 w-10 cursor-pointer overflow-hidden rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/50 to-yellow-300/50 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
            <div className="ring-glow-gold absolute inset-0 rounded-full" />
            <Image
              src={ASSET_PATHS.profileImage}
              alt="Profile"
              fill
              className="relative z-10 object-cover"
              sizes="40px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
}

function NavItem({ href, label, active = false }: NavItemProps) {
  return (
    <a
      href={href}
      className={`group relative flex h-10 items-center gap-1.5 rounded-[5px] px-5 py-2.5 text-base font-medium transition-all duration-300 ${
        active
          ? "text-yellow-400"
          : "interactive-scale text-white hover:bg-surface-dark/50"
      }`}
    >
      {active && (
        <>
          <div className="absolute inset-0 rounded-[5px] bg-yellow-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <ClawIcon className="icon-rotate-hover relative z-10 h-4 w-4 text-yellow-400" />
        </>
      )}
      <span className="relative z-10">{label}</span>
      {!active && <span className="underline-slide" />}
    </a>
  );
}
