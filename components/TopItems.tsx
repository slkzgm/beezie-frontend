"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { topItems } from "@/app/lib/mockData";
import { ASSET_PATHS } from "@/app/lib/assetUrls";

export default function TopItems() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-[20px] bg-surface p-4 shadow-soft md:p-6 lg:p-8">
      <div className="mb-4 flex justify-center md:mb-6">
        <div className={`group flex items-center gap-1 rounded-full bg-surface-dark px-6 py-2 transition-all duration-300 ease-smooth md:px-8 ${isVisible ? 'stagger-entrance' : 'opacity-0 translate-y-4'}`}>
          <Image
            src={ASSET_PATHS.badges.star}
            alt="Star"
            width={17}
            height={17}
            className="h-[17px] w-[17px] icon-rotate-hover"
          />
          <span className="text-center text-sm font-medium text-white md:text-base">
            Top Items
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {topItems.map((item, index) => {
          const delayClass = `stagger-entrance-delay-${Math.min(index + 1, 6)}`;
          return (
            <div
              key={item.id}
              className={`group relative aspect-square overflow-hidden rounded-[10px] bg-surface-dark shadow-soft card-hover-smooth ${isVisible ? `stagger-entrance ${delayClass}` : 'opacity-0 translate-y-4'}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover image-fade-in"
                sizes="(max-width: 768px) 30vw, (max-width: 1024px) 12rem, 14rem"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/90 to-transparent p-2 opacity-0 transition-all duration-300 ease-smooth group-hover:opacity-100 md:p-4">
                <p className="text-center text-[10px] font-medium text-white line-clamp-2 md:text-xs">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
