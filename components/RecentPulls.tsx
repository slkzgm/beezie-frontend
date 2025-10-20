"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { recentPulls } from "@/app/lib/mockData";
import { ASSET_PATHS } from "@/app/lib/assetUrls";

export default function RecentPulls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-[20px] bg-surface p-4 shadow-soft md:p-6 lg:p-8">
      <div className="mb-4 flex justify-center md:mb-6">
        <div className={`group flex items-center gap-1 rounded-full bg-surface-dark px-6 py-2 transition-all duration-300 ease-smooth md:px-8 ${isVisible ? 'stagger-entrance' : 'opacity-0 translate-y-4'}`}>
          <Image
            src={ASSET_PATHS.badges.arrow}
            alt="Arrow"
            width={17}
            height={17}
            className="h-[17px] w-[17px] icon-rotate-hover"
          />
          <span className="text-center text-sm font-medium text-white md:text-base">
            Recent Pulls
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {recentPulls.map((pull, index) => {
          const delayClass = `stagger-entrance-delay-${Math.min(index + 1, 6)}`;
          return (
            <div
              key={pull.id}
              className={`flex items-center gap-3 rounded-[10px] bg-surface-darker p-2 shadow-soft transition-all duration-300 ease-smooth hover:bg-surface-darker/80 hover:scale-[1.01] md:gap-4 ${isVisible ? `stagger-entrance ${delayClass}` : 'opacity-0 translate-y-4'}`}
            >
              <div className="relative h-[64px] w-[64px] flex-shrink-0 overflow-hidden rounded-[10px] bg-surface-dark md:h-[84px] md:w-[84px]">
                <Image
                  src={pull.imageUrl}
                  alt={pull.title}
                  fill
                  className="object-cover image-fade-in"
                  sizes="(max-width: 768px) 64px, 84px"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1.5 md:gap-2">
                <h3 className="text-sm font-semibold leading-normal text-white line-clamp-2 md:text-base">
                  {pull.title}
                </h3>
                <div className="flex items-center gap-1 text-xs font-normal leading-normal md:text-sm">
                  <span className="text-white">By</span>
                  <span className="text-accent-gold username-highlight">{pull.username}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
