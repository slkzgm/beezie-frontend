"use client";

import Image from "next/image";
import { useState } from "react";
import { ASSET_PATHS } from "@/app/lib/assetUrls";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
}

type PaymentMethod = "wallet" | "card" | "crypto";

export default function PaymentModal({
  isOpen,
  onClose,
  onConfirm,
  productName,
  productImage,
  quantity,
  unitPrice,
}: PaymentModalProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("wallet");
  const totalPrice = unitPrice * quantity;
  const totalPoints = totalPrice;
  const walletBalance = 1000;

  const paymentAssets = ASSET_PATHS.payment;
  const clawAssets = ASSET_PATHS.claw;

  if (!isOpen) return null;

  const handleConfirm = () => {
    console.log("Payment confirmed with:", selectedPayment);
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 ease-smooth"
      onClick={onClose}
    >
      <div
        className="bg-[#131313] border border-[#313131] md:border-[#313131] border-t-[#302e2e] rounded-t-[20px] md:rounded-[20px] w-full max-w-full md:max-w-[650px] md:mx-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-4 md:zoom-in-90 duration-[350ms] ease-smooth"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-5 md:gap-6 px-5 py-6 md:px-8 md:py-8">
          <div className="flex items-center justify-between md:justify-end w-full mb-2 md:mb-0">
            <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-white md:hidden">
              Buy a Claw Pull
            </p>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 relative hover:scale-110 hover:rotate-90 active:scale-95"
            >
              <Image
                alt="Close"
                src={paymentAssets.closeIcon}
                fill
                className="object-contain"
              />
            </button>
          </div>

          <div className="flex flex-col gap-5 md:gap-8 w-full">
            <div className="bg-[#1a1a1a] rounded-[10px] p-3 md:p-4 flex items-center justify-between gap-3 min-h-[82px] md:min-h-0">
              <div className="flex gap-2 md:gap-3 items-center flex-1 min-w-0">
                <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-[10px] overflow-hidden shrink-0">
                  <Image
                    alt={productName}
                    src={productImage}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <p className="font-['Inter:Medium',_sans-serif] font-medium text-[15px] md:text-[18px] text-white leading-[20px] md:leading-[22px] truncate">
                    {productName}
                  </p>
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] md:text-[14px] text-[#b4b4b4]">
                    Quantity: {quantity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end shrink-0">
                <p className="font-['Inter:Medium',_sans-serif] md:font-['Inter:Semi_Bold',_sans-serif] font-medium md:font-semibold text-[16px] md:text-[18px] text-white leading-[22px] whitespace-nowrap">
                  ${totalPrice}
                </p>
                <div className="group backdrop-blur-[3.1px] bg-gradient-gold flex gap-[5px] items-center justify-center px-1 md:px-2 py-0.5 md:py-1 rounded-[4px] whitespace-nowrap overflow-hidden relative transition-all duration-300 hover:shadow-gold-glow-sm">
                  <div className="shimmer-effect absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="w-2 h-2 relative shrink-0 z-10 transition-transform duration-300 group-hover:rotate-12">
                    <Image
                      alt=""
                      src={clawAssets.pointsIcon}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-['Inter:Medium',_sans-serif] font-medium text-[12px] text-black z-10">
                    {totalPoints} points
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <p className="font-['Inter:Semi_Bold',_sans-serif] md:font-['Inter:Medium',_sans-serif] font-semibold md:font-medium text-[16px] text-[#b4b4b4]">
                Payment methods
              </p>

              <div className="flex flex-col gap-3.5 md:gap-4 w-full">
                <button
                  onClick={() => setSelectedPayment("wallet")}
                  className={`bg-[#1a1a1a] rounded-[10px] min-h-[84px] md:h-[70px] flex items-center justify-between gap-4 px-4 md:px-5 py-5 md:py-4 transition-all duration-300 hover:bg-[#1a1a1a]/80 active:scale-[0.99] ${
                    selectedPayment === "wallet"
                      ? "border border-[#ffca28] shadow-gold-glow-sm"
                      : "border border-transparent hover:border-[#3a3a3a]"
                  }`}
                >
                  <div className="flex gap-4 items-center flex-1 min-w-0">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-400 ease-smooth" style={{
                      borderColor: selectedPayment === "wallet" ? "#ffca28" : "#b4b4b4"
                    }}>
                      {selectedPayment === "wallet" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffca28] animate-in zoom-in-75 duration-300 ease-smooth" />
                      )}
                    </div>
                    <div className="flex flex-col gap-2 items-start min-w-0">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-white">
                        Wallet
                      </p>
                      <p className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#b4b4b4] md:hidden">
                        Balance: ${walletBalance}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col gap-1 items-end text-[14px] text-[#b4b4b4]">
                    <p className="font-['Inter:Medium',_sans-serif] font-medium">
                      Balance:
                    </p>
                    <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">
                      ${walletBalance}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPayment("card")}
                  className={`bg-[#1a1a1a] rounded-[10px] min-h-[84px] md:h-[70px] flex items-center justify-between gap-4 px-4 md:px-5 py-5 md:py-6 transition-all duration-300 hover:bg-[#1a1a1a]/80 active:scale-[0.99] ${
                    selectedPayment === "card"
                      ? "border border-[#ffca28] shadow-gold-glow-sm"
                      : "border border-transparent hover:border-[#3a3a3a]"
                  }`}
                >
                  <div className="flex gap-4 items-center flex-1 min-w-0">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-400 ease-smooth" style={{
                      borderColor: selectedPayment === "card" ? "#ffca28" : "#b4b4b4"
                    }}>
                      {selectedPayment === "card" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffca28] animate-in zoom-in-75 duration-300 ease-smooth" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 items-start min-w-0">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-white">
                        Credit / Debit Card
                      </p>
                      <p className="font-['Inter:Medium_Italic',_sans-serif] font-medium italic text-[12px] text-[#7c7c7c]">
                        Processing fees apply
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 md:gap-[5px] items-center shrink-0">
                    <div className="w-[22px] h-[15px] md:w-[27px] md:h-[19px] relative">
                      <Image
                        alt="Visa"
                        src={paymentAssets.cards.visa}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-[22px] h-[15px] md:w-[27px] md:h-[19px] relative">
                      <Image
                        alt="Mastercard"
                        src={paymentAssets.cards.mastercard}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-[22px] h-[15px] md:w-[27px] md:h-[19px] relative">
                      <Image
                        alt="Google Pay"
                        src={paymentAssets.cards.googlepay}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="w-[22px] h-[15px] md:w-[27px] md:h-[19px] relative">
                      <Image
                        alt="Apple Pay"
                        src={paymentAssets.cards.applepay}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPayment("crypto")}
                  className={`bg-[#1a1a1a] rounded-[10px] min-h-[78px] md:h-[70px] flex items-center justify-between gap-4 px-4 md:px-5 py-5 md:py-3 transition-all duration-300 hover:bg-[#1a1a1a]/80 active:scale-[0.99] ${
                    selectedPayment === "crypto"
                      ? "border border-[#ffca28] shadow-gold-glow-sm"
                      : "border border-transparent hover:border-[#3a3a3a]"
                  }`}
                >
                  <div className="flex gap-4 items-center flex-1 min-w-0">
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-400 ease-smooth" style={{
                      borderColor: selectedPayment === "crypto" ? "#ffca28" : "#b4b4b4"
                    }}>
                      {selectedPayment === "crypto" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffca28] animate-in zoom-in-75 duration-300 ease-smooth" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 items-start min-w-0">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-white">
                        Crypto
                      </p>
                      <p className="font-['Inter:Medium_Italic',_sans-serif] font-medium italic text-[12px] text-[#7c7c7c]">
                        Pay with ETH, SOL, USDC<span className="hidden md:inline"> across networks</span>.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 md:gap-[5px] items-center shrink-0">
                    <div className="w-5 h-5 md:w-6 md:h-6 relative rounded-full shadow-[3px_20px_24px_-4px_rgba(3,3,3,0.08),0px_8px_8px_-4px_rgba(3,3,3,0.03)]">
                      <Image
                        alt="Ethereum"
                        src={paymentAssets.crypto.eth}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 relative">
                      <Image
                        alt="Solana"
                        src={paymentAssets.crypto.solana}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 relative rounded-full shadow-[3px_20px_24px_-4px_rgba(3,3,3,0.08),0px_8px_8px_-4px_rgba(3,3,3,0.03)]">
                      <Image
                        alt="USDC"
                        src={paymentAssets.crypto.usdc}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="w-5 h-5 md:w-6 md:h-6 relative rounded-full shadow-[3px_20px_24px_-4px_rgba(3,3,3,0.08),0px_8px_8px_-4px_rgba(3,3,3,0.03)]">
                      <Image
                        alt="Tether"
                        src={paymentAssets.crypto.tether}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="group bg-gradient-gold h-[45px] md:h-[51px] flex items-center justify-center rounded-[10px] shadow-glow hover:shadow-[0px_0px_20px_0px_rgba(255,176,0,0.6)] active:scale-[0.98] transition-all w-full overflow-hidden relative"
            >
              <div className="shimmer-effect animate-shimmer absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-black relative z-10">
                Confirm
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

