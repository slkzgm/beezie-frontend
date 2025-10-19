import Image from "next/image";

import { ASSET_PATHS } from "@/app/lib/assetUrls";

export default function ClawIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <Image
      src={ASSET_PATHS.clawIcon}
      alt="Claw"
      width={16}
      height={16}
      className={className}
    />
  );
}
