"use client";

import { useState } from "react";
import RevealModal from "@/components/RevealModal";
import { mockRevealItems } from "@/app/lib/mockRevealData";

export default function RevealDemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#131313] flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-4">
        <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[32px] md:text-[48px] text-white">
          Reveal Modal Demo
        </h1>
        <p className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] md:text-[18px] text-[#acadae]">
          Test the reveal modal with different states
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-gold h-[45px] md:h-[51px] px-12 flex items-center justify-center rounded-[10px] shadow-[0px_0px_10px_0px_rgba(255,176,0,0.35)] hover:shadow-[0px_0px_15px_0px_rgba(255,176,0,0.5)] active:scale-[0.98] transition-all"
        >
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-black">
            Open Reveal Modal
          </span>
        </button>
      </div>

      <div className="max-w-2xl text-center space-y-2">
        <p className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#7c7c7c]">
          The modal includes:
        </p>
        <ul className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#7c7c7c] space-y-1">
          <li>✓ Responsive grid (2 cols mobile, 4 cols desktop)</li>
          <li>✓ Item selection with checkboxes</li>
          <li>✓ Individual and bulk swap actions</li>
          <li>✓ Countdown timer</li>
          <li>✓ Swapped items with download buttons</li>
        </ul>
      </div>

      <RevealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={mockRevealItems}
        expirationMinutes={4}
        expirationSeconds={29}
      />
    </div>
  );
}

