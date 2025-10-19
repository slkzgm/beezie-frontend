import Image from "next/image";

import { ASSET_PATHS } from "@/app/lib/assetUrls";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "h-10 w-[93.88px]", priority = false }: LogoProps) {
  return (
    <Image
      src={ASSET_PATHS.logo}
      alt="Beezie"
      width={94}
      height={40}
      className={className}
      priority={priority}
    />
  );
}
