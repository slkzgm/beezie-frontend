"use client";

import Image from "next/image";
import { useState } from "react";

import { ASSET_PATHS } from "@/app/lib/assetUrls";

const heroImage = ASSET_PATHS.clawHero;
const clawAssets = ASSET_PATHS.claw;
const confettiIcons = clawAssets.confetti;

export default function ClawSection() {
  const [quantity, setQuantity] = useState(1);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://beezie.io/ref/user123");
  };

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row relative w-full" data-node-id="1:1543">
      <div className="relative rounded-[20px] w-full aspect-square lg:aspect-auto lg:flex-[800] lg:h-[800px]" data-node-id="1:1544">
        <Image
          alt="Beezie claw machine"
          src={heroImage}
          fill
          className="pointer-events-none rounded-[20px] object-contain"
          sizes="(max-width: 1024px) 100vw, 800px"
          priority
        />
      </div>
      <div className="flex flex-col gap-6 items-start relative w-full lg:flex-[516]" data-node-id="1:1545">
        <div className="bg-[#1a1a1a] box-border content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[32px] relative rounded-[20px] shrink-0 w-full" data-node-id="1:1546">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1547">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1548">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="1:1549">
                <p className="leading-[normal]">Multi - Category 30</p>
              </div>
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#7c7c7c] text-[16px] w-[min-content]" data-node-id="1:1550">
                <p className="leading-[normal] whitespace-pre-wrap">
                  Open instantly to reveal your collectible and decide whether to hold or SWAP. Each box contains a graded or authenticated item, securely stored in our Brink&apos;s vault.
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1551">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:1552">
                <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap" data-node-id="1:1553">
                  <p className="leading-[normal]">$30</p>
                </div>
                <div className="backdrop-blur-[3.1px] backdrop-filter bg-gradient-gold box-border content-stretch flex gap-[5px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-node-id="1:1554">
                  <div className="relative shrink-0 size-[8px]" data-name="Vector" data-node-id="1:1555">
                    <Image alt="" src={clawAssets.pointsIcon} fill className="object-contain" sizes="8px" />
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap" data-node-id="1:1556">
                    <p className="leading-[normal]">30 points</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-node-id="1:1557">
                <div className="bg-[#232323] box-border content-stretch flex gap-[24px] h-[51px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[10px] shrink-0" data-name="Buttons" data-node-id="1:1558">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
                    data-name="Frame"
                    data-node-id="1:1559"
                  >
                    <Image alt="Decrease quantity" src={clawAssets.decrementIcon} fill className="object-contain" sizes="20px" />
                  </button>
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="1:1561">
                    <p className="leading-[normal]">{quantity}</p>
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="relative shrink-0 size-[20px] hover:opacity-70 transition-opacity"
                    data-name="Frame"
                    data-node-id="1:1562"
                  >
                    <Image alt="Increase quantity" src={clawAssets.incrementIcon} fill className="object-contain" sizes="20px" />
                  </button>
                </div>
                <button className="bg-gradient-gold box-border content-stretch flex flex-[1_0_0] gap-[16px] h-[51px] items-center justify-center min-h-px min-w-[202px] overflow-clip px-[72px] py-[16px] relative rounded-[10px] shadow-[0px_0px_10px_0px_rgba(255,176,0,0.35)] shrink-0 hover:shadow-[0px_0px_15px_0px_rgba(255,176,0,0.5)] active:scale-[0.98] transition-all" data-name="Buttons" data-node-id="1:1564">
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" data-node-id="1:1565">
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
          <div className="bg-[#232323] box-border content-stretch flex h-[51px] items-start px-0 py-[8px] relative rounded-[10px] shrink-0 w-full" data-node-id="1:1567">
            <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative rounded-[15px] shrink-0" data-node-id="1:1568">
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="1:1569">
                <p className="leading-[normal]">Average Value: $55</p>
              </div>
            </div>
            <button className="border-[#3a3a3a] border-b-0 border-l border-r-0 border-solid border-t-0 box-border content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 hover:opacity-70 transition-opacity" data-node-id="1:1570">
              <div className="relative shrink-0 size-[16px]" data-name="Frame" data-node-id="1:1571">
                <Image alt="" src={clawAssets.viewOddsIcon} fill className="object-contain" sizes="16px" />
              </div>
              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="1:1573">
                <p className="leading-[normal]">View Odds</p>
              </div>
            </button>
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0.28)] border-solid h-[177px] relative rounded-[15px] shrink-0 w-full" data-node-id="1:1574">
          <div className="h-[177px] overflow-clip relative rounded-[inherit] w-full" style={{ background: "linear-gradient(96deg, #1A1A1A 2.9%, #232323 37.2%, #2A2A2A 70.9%, #3A3A3A 97.26%)" }}>
            <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[4.65%] top-[13.56%]" data-node-id="1:1575">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-node-id="1:1576">
                <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="1:1577">
                  <p className="leading-[20px]">{`Refer friends & Earn`}</p>
                </div>
                <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#b4b4b4] text-[14px] max-w-[65%]" data-node-id="1:1578">
                  <p className="leading-[20px] whitespace-pre-wrap">Refer Beezie to your friends via referral link and earn money everytime they make a transaction</p>
                </div>
              </div>
              <button
                onClick={handleCopyLink}
                className="bg-[#3a3a3a] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative rounded-[7px] shrink-0 hover:bg-[#3a3a3a]/80 active:scale-[0.98] transition-all"
                data-node-id="1:1579"
              >
                <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="1:1580">
                  <p className="leading-[normal]">Copy Referral Link</p>
                </div>
              </button>
            </div>
            <div className="absolute left-[76.36%] w-[19.57%] aspect-square top-[13.56%]" data-node-id="1:1581">
              <Image alt="" src={clawAssets.ctaIllustration} fill className="object-contain" sizes="(max-width: 768px) 120px, 150px" />
            </div>
            <div className="absolute aspect-[20/20] left-[93.22%] right-[6.39%] top-[calc(50%+-83.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1585">
              <Image alt="" src={confettiIcons[0]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[97.09%] right-[2.52%] top-[calc(50%+-81.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1586">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[90.7%] right-[8.72%] top-[calc(50%+-76px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1587">
              <Image alt="" src={confettiIcons[2]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[99.03%] right-[0.58%] top-[calc(50%+-62.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1588">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[95.93%] right-[3.68%] top-[calc(50%+-52.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1589">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[94.77%] right-[4.84%] top-[calc(50%+-67.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1590">
              <Image alt="" src={confettiIcons[1]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[97.87%] right-[1.36%] top-[calc(50%+-37.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1591">
              <Image alt="" src={confettiIcons[3]} fill className="object-contain" sizes="24px" />
            </div>
            <div className="absolute aspect-[20/20] left-[90.12%] right-[9.11%] top-[calc(50%+-60.5px)] translate-y-[-50%]" data-name="Vector" data-node-id="1:1592">
              <Image alt="" src={confettiIcons[4]} fill className="object-contain" sizes="24px" />
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] box-border content-stretch flex items-center justify-between overflow-clip px-[27px] py-[40px] relative rounded-[15px] shrink-0 w-full" data-node-id="1:1593">
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-node-id="1:1594">
            <div className="relative shrink-0 size-[30px]" data-name="Frame" data-node-id="1:1595">
              <Image alt="Vault icon" src={clawAssets.featureVault} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[14px] text-center w-[117px]" data-node-id="1:1597">
              <p className="leading-[20px] whitespace-pre-wrap">Securely vaulted at Brink&apos;s</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-node-id="1:1598">
            <div className="relative shrink-0 size-[30px]" data-name="Frame" data-node-id="1:1599">
              <Image alt="Swap icon" src={clawAssets.featureSwap} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[14px] text-center w-[117px]" data-node-id="1:1601">
              <p className="leading-[20px] whitespace-pre-wrap">SWAP up to 90% FMV</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-node-id="1:1602">
            <div className="relative shrink-0 size-[30px]" data-name="Frame" data-node-id="1:1603">
              <Image alt="Redeem icon" src={clawAssets.featureRedeem} fill className="object-contain" sizes="30px" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b4] text-[14px] text-center w-[117px]" data-node-id="1:1605">
              <p className="leading-[20px] whitespace-pre-wrap">Redeem anytime, globally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
