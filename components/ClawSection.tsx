"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";

import { ASSET_PATHS } from "@/app/lib/assetUrls";
import PaymentModal from "./PaymentModal";
import RevealModal from "./RevealModal";
import { mockRevealItems } from "@/app/lib/mockRevealData";
import { useSound } from "@/hooks/useSound";

const heroVideo = ASSET_PATHS.clawHeroVideo;
const heroPoster = ASSET_PATHS.clawHeroPoster;
const clawAssets = ASSET_PATHS.claw;
const confettiIcons = clawAssets.confetti;
const UNIT_PRICE = 30;
const AVERAGE_VALUE = 55;
const POINTS_PER_PULL = 30;
const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function ClawSection() {
  const [quantity, setQuantity] = useState(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isRevealModalOpen, setIsRevealModalOpen] = useState(false);
  const [isPriceAnimating, setIsPriceAnimating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const isFirstRender = useRef(true);

  // Sound effects
  const clickSound = useSound(ASSET_PATHS.sounds.click, 0.2);
  const successSound = useSound(ASSET_PATHS.sounds.success, 0.3);
  const confirmSound = useSound(ASSET_PATHS.sounds.confirm, 0.3);

  const handlePaymentConfirm = () => {
    setIsPaymentModalOpen(false);
    setTimeout(() => {
      setIsRevealModalOpen(true);
    }, 300);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://beezie.io/ref/user123");
    successSound.play();
    setIsCopied(true);
    setIsCelebrating(true);
  };

  useEffect(() => {
    if (!isCopied) return;
    
    const copiedTimer = setTimeout(() => setIsCopied(false), 850);
    const celebrateTimer = setTimeout(() => setIsCelebrating(false), 600);
    
    return () => {
      clearTimeout(copiedTimer);
      clearTimeout(celebrateTimer);
    };
  }, [isCopied]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    setIsPriceAnimating(false);
    const triggerTimer = setTimeout(() => {
      setIsPriceAnimating(true);
    }, 10);
    const resetTimer = setTimeout(() => {
      setIsPriceAnimating(false);
    }, 350);
    return () => {
      clearTimeout(triggerTimer);
      clearTimeout(resetTimer);
    };
  }, [quantity]);

  const isDecreaseDisabled = quantity === 1;
  const totalPrice = UNIT_PRICE * quantity;
  const totalPoints = POINTS_PER_PULL * quantity;
  const totalAverageValue = AVERAGE_VALUE * quantity;
  const revealItems = useMemo(() => {
    if (quantity <= 0) return [];

    return Array.from({ length: quantity }, (_, index) => {
      const baseItem = mockRevealItems[index % mockRevealItems.length];

      return {
        ...baseItem,
        id: `${baseItem.id}-${index + 1}`,
        isSelected: false,
        isSwapped: false,
      };
    });
  }, [quantity]);

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row relative w-full" data-node-id="1:1543">
      <div className="relative rounded-[20px] overflow-hidden w-full aspect-square max-w-[800px] lg:max-w-[800px] lg:max-h-[800px] bg-[#0a0a0a]" data-node-id="1:1544">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroPoster}
          className="pointer-events-none w-full h-full object-cover"
          aria-label="Beezie claw machine in action"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 items-start relative w-full lg:flex-[516]" data-node-id="1:1545">
        <div className="bg-[#1a1a1a] box-border content-stretch flex flex-col gap-5 md:gap-[24px] items-start overflow-clip p-5 md:p-[32px] relative rounded-[20px] shrink-0 w-full" data-node-id="1:1546">
          <div className="content-stretch flex flex-col gap-5 md:gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1547">
            <div className="content-stretch flex flex-col gap-3 md:gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1548">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[20px] md:text-[24px] text-white" data-node-id="1:1549">
                <p className="leading-[normal]">Multi - Category 30</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#7c7c7c] text-[14px] md:text-[16px] w-[min-content]" data-node-id="1:1550">
                <p className="leading-[normal] whitespace-pre-wrap">
                  Open instantly to reveal your collectible and decide whether to hold or SWAP. Each box contains a graded or authenticated item, securely stored in our Brink&apos;s vault.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 md:gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1551">
              <div className="content-stretch flex gap-3 md:gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:1552">
                <div className={`flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] md:text-[28px] text-white whitespace-nowrap ${isPriceAnimating ? 'value-change-animation' : ''}`} data-node-id="1:1553">
                  <p className="leading-[normal]">{usdFormatter.format(totalPrice)}</p>
                </div>
                <div className="group backdrop-blur-[3.1px] backdrop-filter bg-gradient-gold box-border content-stretch flex gap-[5px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 overflow-hidden transition-all duration-300 hover:shadow-gold-glow-sm" data-node-id="1:1554">
                  <div className="shimmer-effect animate-shimmer absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative shrink-0 size-[8px] z-10 transition-transform duration-300 group-hover:rotate-12" data-name="Vector" data-node-id="1:1555">
                    <Image alt="" src={clawAssets.pointsIcon} fill className="object-contain" sizes="8px" />
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap z-10" data-node-id="1:1556">
                    <p className="leading-[normal]">{totalPoints} points</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-3 md:gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1557">
                <div className="bg-[#232323] box-border content-stretch flex gap-4 md:gap-[24px] h-[45px] md:h-[51px] items-center justify-center overflow-clip px-4 md:px-[24px] py-[12px] md:py-[16px] relative rounded-[10px] shrink-0 transition-all duration-300 hover:bg-[#232323]/80" data-name="Buttons" data-node-id="1:1558">
                  <button
                    onClick={() => {
                      clickSound.play();
                      setQuantity(Math.max(1, quantity - 1));
                    }}
                    type="button"
                    disabled={isDecreaseDisabled}
                    className={`relative shrink-0 size-[18px] md:size-[20px] transition-all duration-150 ${
                      isDecreaseDisabled ? "cursor-not-allowed opacity-40" : "hover:opacity-70 hover:scale-110 active:scale-90 active:opacity-50"
                    }`}
                    data-name="Frame"
                    data-node-id="1:1559"
                  >
                    <Image alt="Decrease quantity" src={clawAssets.decrementIcon} fill className="object-contain" sizes="20px" />
                  </button>
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] md:text-[16px] text-center text-white whitespace-nowrap min-w-[20px]" data-node-id="1:1561">
                    <p className="leading-[normal]">{quantity}</p>
                  </div>
                  <button
                    onClick={() => {
                      clickSound.play();
                      setQuantity(quantity + 1);
                    }}
                    type="button"
                    className="relative shrink-0 size-[18px] md:size-[20px] transition-all duration-150 hover:opacity-70 hover:scale-110 active:scale-90 active:opacity-50"
                    data-name="Frame"
                    data-node-id="1:1562"
                  >
                    <Image alt="Increase quantity" src={clawAssets.incrementIcon} fill className="object-contain" sizes="20px" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    confirmSound.play();
                    setIsPaymentModalOpen(true);
                  }}
                  className="group bg-gradient-gold box-border content-stretch flex flex-1 gap-[16px] h-[45px] md:h-[51px] items-center justify-center min-h-px overflow-hidden px-6 md:px-[72px] py-[12px] md:py-[16px] relative rounded-[10px] shadow-glow shrink-0 transition-all duration-300 hover:shadow-[0px_0px_20px_0px_rgba(255,176,0,0.6)] active:scale-[0.98]"
                  data-name="Buttons"
                  data-node-id="1:1564"
                >
                  <div className="shimmer-effect animate-shimmer absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[15px] md:text-[16px] text-black text-center whitespace-nowrap z-10" data-node-id="1:1565">
                    <p className="leading-[normal]">Start Now</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-node-id="1:1566">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <Image alt="" src={clawAssets.divider} fill className="object-cover" sizes="100vw" />
            </div>
          </div>
          <div className="bg-[#232323] box-border content-stretch flex min-h-[45px] md:h-[51px] items-stretch px-0 py-2 md:py-[8px] relative rounded-[10px] shrink-0 w-full" data-node-id="1:1567">
            <div className="box-border content-stretch flex flex-1 flex-col gap-[8px] items-center justify-center px-2 md:px-0 py-2 md:py-[8px] relative rounded-[15px] shrink-0" data-node-id="1:1568">
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] md:text-[16px] text-center text-white" data-node-id="1:1569">
                <p className="leading-[normal]">Average Value: {usdFormatter.format(totalAverageValue)}</p>
              </div>
            </div>
            <button className="group border-[#3a3a3a] border-b-0 border-l border-r-0 border-solid border-t-0 box-border content-stretch flex flex-1 gap-2 md:gap-[8px] items-center justify-center px-2 md:px-0 py-2 md:py-[8px] relative shrink-0 transition-all duration-300 hover:opacity-70 hover:bg-[#232323]/30" data-node-id="1:1570">
              <div className="relative shrink-0 size-[14px] md:size-[16px] transition-transform duration-300 group-hover:scale-110" data-name="Frame" data-node-id="1:1571">
                <Image alt="" src={clawAssets.viewOddsIcon} fill className="object-contain" sizes="16px" />
              </div>
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] md:text-[16px] text-center text-white" data-node-id="1:1573">
                <p className="leading-[normal]">View Odds</p>
              </div>
            </button>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0.28)] border-solid min-h-[160px] md:min-h-[177px] md:h-auto relative rounded-[15px] shrink-0 w-full" data-node-id="1:1574">
          <div className="min-h-[160px] md:min-h-[177px] overflow-clip relative rounded-[inherit] w-full p-5 md:px-6 md:py-6 group" style={{ background: "linear-gradient(96deg, #1A1A1A 2.9%, #232323 37.2%, #2A2A2A 70.9%, #3A3A3A 97.26%)" }}>
            <div className="flex flex-row md:flex-col gap-4 md:gap-[24px] items-start justify-between relative w-full md:w-auto" data-node-id="1:1575">
              <div className="flex flex-col gap-4 md:gap-[24px] items-start flex-1 md:max-w-[60%] lg:max-w-[65%]">
                <div className="content-stretch flex flex-col gap-2 md:gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1576">
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px] md:text-[18px] text-white" data-node-id="1:1577">
                    <p className="leading-[20px]">{`Refer friends & Earn`}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#b4b4b4] text-[13px] md:text-[14px]" data-node-id="1:1578">
                    <p className="leading-[18px] md:leading-[20px]">Refer Beezie to your friends via referral link and earn money everytime they make a transaction</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyLink}
                  className="interactive-scale bg-[#3a3a3a] box-border content-stretch flex gap-[8px] items-center justify-center px-5 md:px-[24px] py-2.5 md:py-[10px] relative rounded-[7px] shrink-0 hover:bg-[#3a3a3a]/80 active:scale-[0.98] transition-all duration-300"
                  data-node-id="1:1579"
                >
                  <div 
                    key={isCopied ? "copied" : "copy"}
                    className={`fade-slide-in flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center whitespace-nowrap ${
                      isCopied ? "text-yellow-400" : "text-white"
                    }`} 
                    data-node-id="1:1580"
                  >
                    <p className="leading-[normal]">{isCopied ? "Link Copied!" : "Copy Referral Link"}</p>
                  </div>
                </button>
              </div>
              <div className={`relative w-[80px] h-[80px] md:absolute md:right-6 md:top-6 md:w-[100px] md:h-[100px] shrink-0 z-10 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${
                isCelebrating ? "celebrate-bounce" : ""
              }`} data-node-id="1:1581">
                <Image alt="Referral illustration" src={clawAssets.ctaIllustration} fill className="object-contain" sizes="(max-width: 768px) 80px, 100px" />
              </div>
            </div>
            <div className="float-animation absolute aspect-[20/20] left-[93.22%] right-[6.39%] top-[calc(50%+-83.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1585">
              <Image alt="" src={confettiIcons[0]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation-delayed absolute aspect-[20/20] left-[97.09%] right-[2.52%] top-[calc(50%+-81.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1586">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation absolute aspect-[20/20] left-[90.7%] right-[8.72%] top-[calc(50%+-76px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1587">
              <Image alt="" src={confettiIcons[2]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation-delayed absolute aspect-[20/20] left-[99.03%] right-[0.58%] top-[calc(50%+-62.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1588">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation absolute aspect-[20/20] left-[95.93%] right-[3.68%] top-[calc(50%+-52.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1589">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation-delayed absolute aspect-[20/20] left-[94.77%] right-[4.84%] top-[calc(50%+-67.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1590">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation absolute aspect-[20/20] left-[97.87%] right-[1.36%] top-[calc(50%+-37.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1591">
              <Image alt="" src={confettiIcons[3]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="float-animation-delayed absolute aspect-[20/20] left-[90.12%] right-[9.11%] top-[calc(50%+-60.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1592">
              <Image alt="" src={confettiIcons[4]} fill className="object-contain" sizes="24px" />
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] box-border content-stretch flex items-center justify-between overflow-clip px-4 md:px-[27px] py-6 md:py-[40px] relative rounded-[15px] shrink-0 w-full gap-2" data-node-id="1:1593">
          <div className="group content-stretch flex flex-col gap-2 md:gap-[10px] items-center relative flex-1" data-node-id="1:1594">
            <div className="relative shrink-0 size-[24px] md:size-[30px] transition-transform duration-300 group-hover:scale-105" data-name="Frame" data-node-id="1:1595">
              <Image alt="Vault icon" src={clawAssets.featureVault} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] md:text-[14px] text-center max-w-full transition-colors duration-300 group-hover:text-white" data-node-id="1:1597">
              <p className="leading-[16px] md:leading-[20px]">Securely vaulted at Brink&apos;s</p>
            </div>
          </div>
          <div className="group content-stretch flex flex-col gap-2 md:gap-[10px] items-center relative flex-1" data-node-id="1:1598">
            <div className="relative shrink-0 size-[24px] md:size-[30px] transition-transform duration-300 group-hover:scale-105" data-name="Frame" data-node-id="1:1599">
              <Image alt="Swap icon" src={clawAssets.featureSwap} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] md:text-[14px] text-center max-w-full transition-colors duration-300 group-hover:text-white" data-node-id="1:1601">
              <p className="leading-[16px] md:leading-[20px]">SWAP up to 90% FMV</p>
            </div>
          </div>
          <div className="group content-stretch flex flex-col gap-2 md:gap-[10px] items-center relative flex-1" data-node-id="1:1602">
            <div className="relative shrink-0 size-[24px] md:size-[30px] transition-transform duration-300 group-hover:scale-105" data-name="Frame" data-node-id="1:1603">
              <Image alt="Redeem icon" src={clawAssets.featureRedeem} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[12px] md:text-[14px] text-center max-w-full transition-colors duration-300 group-hover:text-white" data-node-id="1:1605">
              <p className="leading-[16px] md:leading-[20px]">Redeem anytime, globally</p>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onConfirm={handlePaymentConfirm}
        productName="Multi-Category Claw"
        productImage={ASSET_PATHS.payment.productMultiCategory}
        quantity={quantity}
        unitPrice={UNIT_PRICE}
      />

      <RevealModal
        isOpen={isRevealModalOpen}
        onClose={() => setIsRevealModalOpen(false)}
        items={revealItems}
        expirationMinutes={4}
        expirationSeconds={29}
      />
    </div>
  );
}
