import Image from "next/image";

import { ASSET_PATHS } from "@/app/lib/assetUrls";

import Logo from "./icons/Logo";
import ClawIcon from "./icons/ClawIcon";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[84px] bg-background/95 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-4 md:px-8 lg:px-[50px]">
        <div className="flex h-10 items-center">
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
          <div className="flex h-10 items-center gap-2.5 rounded-[7px] bg-surface px-3 py-1.5 md:px-4">
            <Image
              src={ASSET_PATHS.coinIcon}
              alt="Coins"
              width={15}
              height={12}
              className="h-3 w-[15px]"
            />
            <span className="text-sm font-medium text-white">$190</span>
          </div>

          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={ASSET_PATHS.profileImage}
              alt="Profile"
              fill
              className="object-cover"
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
      className={`flex h-10 items-center gap-1.5 rounded-[5px] px-5 py-2.5 text-base font-medium transition-colors ${
        active
          ? "text-gradient-gold"
          : "text-white hover:bg-surface-dark/50"
      }`}
    >
      {active && <ClawIcon className="h-4 w-4" />}
      {label}
    </a>
  );
}
