"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface RevealItem {
  id: string;
  imageUrl: string;
  title: string;
  swapPrice: number;
  isSelected: boolean;
  isSwapped: boolean;
}

interface RevealModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: RevealItem[];
  expirationMinutes?: number;
  expirationSeconds?: number;
}

export default function RevealModal({
  isOpen,
  onClose,
  items: initialItems,
  expirationMinutes = 4,
  expirationSeconds = 29,
}: RevealModalProps) {
  const [items, setItems] = useState<RevealItem[]>(initialItems);
  const [minutes, setMinutes] = useState(expirationMinutes);
  const [seconds, setSeconds] = useState(expirationSeconds);
  const [isVisible, setIsVisible] = useState(false);
  const [swappedItems, setSwappedItems] = useState<Set<string>>(new Set());
  const [useProgressiveReveal, setUseProgressiveReveal] = useState(true);
  const [revealedItems, setRevealedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!isOpen) return;

    // Trigger entrance animations
    const entranceTimer = setTimeout(() => setIsVisible(true), 100);
    
    // Trigger sequential items reveal after modal is fully visible
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < items.length; i++) {
      const timer = setTimeout(() => {
        setRevealedItems(prev => new Set([...prev, i]));
      }, 600 + (i * 400)); // 600ms base + 400ms per item
      timers.push(timer);
    }

    return () => {
      clearTimeout(entranceTimer);
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isOpen, items.length]);

  // Separate countdown timer effect
  useEffect(() => {
    if (!isOpen) return;

    const countdownTimer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, [isOpen, minutes, seconds]);

  // Reset progressive reveal when modal opens
  useEffect(() => {
    if (isOpen) {
      setUseProgressiveReveal(true);
      setRevealedItems(new Set());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    setItems(initialItems);
    setMinutes(expirationMinutes);
    setSeconds(expirationSeconds);
  }, [initialItems, isOpen, expirationMinutes, expirationSeconds]);

  if (!isOpen) return null;

  const selectedItems = items.filter((item) => item.isSelected && !item.isSwapped);
  const selectedCount = selectedItems.length;
  const totalSwapValue = selectedItems.reduce((sum, item) => sum + item.swapPrice, 0);

  const handleToggleItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && !item.isSwapped
          ? { ...item, isSelected: !item.isSelected }
          : item
      )
    );
  };

  const handleSelectAll = () => {
    const allSelected = items.every((item) => item.isSelected || item.isSwapped);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.isSwapped ? item : { ...item, isSelected: !allSelected }
      )
    );
  };

  const handleClearAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.isSwapped ? item : { ...item, isSelected: false }
      )
    );
  };

  const handleSwapSelected = () => {
    if (selectedCount === 0) return;
    
    const selectedIds = items.filter(item => item.isSelected && !item.isSwapped).map(item => item.id);
    setSwappedItems(prev => new Set([...prev, ...selectedIds]));
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.isSelected && !item.isSwapped
          ? { ...item, isSelected: false, isSwapped: true }
          : item
      )
    );
  };

  const handleSwapSingle = (id: string) => {
    setSwappedItems(prev => new Set([...prev, id]));
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: false, isSwapped: true } : item
      )
    );
  };

  const handleDownloadPull = (id: string) => {
    // TODO: Implement actual download functionality
    // console.log("Downloading pull for item:", id);
  };

  const isTimerWarning = minutes === 0 && seconds <= 30;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ${isVisible ? 'reveal-backdrop' : 'opacity-0 backdrop-blur-none'}`}
      onClick={onClose}
    >
      <div
        className={`bg-[#131313] relative w-full h-full md:max-w-[90vw] md:max-h-[90vh] md:rounded-[20px] overflow-hidden flex flex-col ${isVisible ? 'reveal-modal-content' : 'opacity-0 scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 md:right-4 md:top-4 z-10 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:scale-110 hover:rotate-90 active:scale-95 transition-all duration-300 ease-smooth"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex-1 overflow-y-auto pb-28 md:pb-32">
          <div className="flex flex-col items-center gap-6 md:gap-8 px-4 md:px-8 pt-14 md:pt-14 pb-6">
            <h1 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[24px] md:text-[32px] text-white leading-[32px] md:leading-[38px] text-center">
              Congratulations!
            </h1>

            {selectedCount === 0 && items.every((item) => !item.isSwapped) && (
              <p className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] md:text-[16px] text-[#acadae] leading-[22px] md:leading-[26px] text-center -mt-4">
                You just pulled {items.length} Claw Pulls of Multi-Category Claw
              </p>
            )}

            <div className="w-full max-w-[1340px] backdrop-blur-[5px] bg-[rgba(19,19,19,0.25)] rounded-[10px] overflow-hidden pb-8 md:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 p-3 md:p-4">
                {items.map((item, index) => {
                  const isRevealed = revealedItems.has(index);
                  const animationClass = useProgressiveReveal 
                    ? 'reveal-item-progressive' 
                    : 'reveal-item';
                  return (
                    <div
                    key={item.id}
                    className={`bg-[#1a1a1a] rounded-[10px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] flex flex-col transition-all duration-300 ease-smooth hover:scale-[1.02] hover:shadow-lg ${isRevealed ? animationClass : 'opacity-0 translate-y-12 scale-90'}`}
                  >
                    <div
                      className={`relative aspect-square overflow-hidden ${
                        item.isSwapped ? "" : "cursor-pointer"
                      }`}
                      onClick={() => {
                        if (!item.isSwapped) {
                          handleToggleItem(item.id);
                        }
                      }}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      
                      {item.isSwapped ? (
                        <div className={`absolute right-2 top-2 backdrop-blur-[3.1px] bg-[rgba(26,26,26,0.9)] rounded-[5px] px-2 md:px-2.5 py-1 md:py-1.5 flex items-center gap-1 md:gap-1.5 ${swappedItems.has(item.id) ? 'badge-appear' : ''}`}>
                          <div className="w-3 h-3 relative">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="#ffd54f"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[10px] md:text-[12px] text-[#ffd54f] whitespace-nowrap">
                            Item Swapped
                          </span>
                        </div>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            handleToggleItem(item.id);
                          }}
                          className={`absolute right-2 top-2 w-5 h-5 md:w-6 md:h-6 selection-button flex items-center justify-center shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] rounded-full ${
                            item.isSelected 
                              ? 'bg-[#ffca28]' 
                              : 'bg-white'
                          }`}
                          type="button"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="icon-transition"
                          >
                            {item.isSelected ? (
                              <path
                                d="M11 4L5.5 9.5L3 7"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon-transition"
                              />
                            ) : (
                              <path
                                d="M7 3.5V10.5M3.5 7H10.5"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="icon-transition"
                              />
                            )}
                          </svg>
                        </button>
                      )}

                      {!item.isSwapped && (
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            handleDownloadPull(item.id);
                          }}
                          className="absolute left-2 bottom-2 bg-white rounded-[4px] p-1 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.15)] download-button"
                          type="button"
                        >
                          <div className="w-4 h-4 relative">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8 10.5V2M8 10.5L5.5 8M8 10.5L10.5 8M14 11V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V11"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 p-2 md:p-2.5">
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] md:text-[14px] text-white leading-[18px] md:leading-[22px] line-clamp-2 min-h-[36px] md:min-h-[44px]">
                        {item.title}
                      </p>

                      {item.isSwapped ? (
                        <button
                          onClick={() => handleDownloadPull(item.id)}
                          className="bg-[#3a3a3a] h-[36px] md:h-[40px] rounded-[7px] flex items-center justify-center gap-2 download-button"
                        >
                          <div className="w-4 h-4 relative">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8 10.5V2M8 10.5L5.5 8M8 10.5L10.5 8M14 11V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V11"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="font-['Inter:Medium',_sans-serif] font-medium text-[13px] md:text-[14px] text-white">
                            Download Pull
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSwapSingle(item.id)}
                          className="bg-[#ffca28] h-[36px] md:h-[40px] rounded-[7px] flex items-center justify-center swap-button-hover"
                        >
                          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[12px] md:text-[14px] text-black">
                            Swap for ${item.swapPrice}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[2px] bg-[rgba(19,19,19,0.98)] border-t border-[#3a3a3a]">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between px-4 md:px-12 py-4 md:py-5 gap-4">
            <div className="flex items-start md:items-center justify-between md:justify-start gap-3 md:gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                <p className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] md:text-[16px] text-[#b4b4b4] whitespace-nowrap">
                  {selectedCount === 0 ? "No items selected" : `${selectedCount} items selected`}
                </p>
                <button
                  onClick={selectedCount > 0 ? handleClearAll : handleSelectAll}
                  className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] md:text-[16px] text-white hover:text-[#ffca28] transition-colors duration-300 ease-smooth whitespace-nowrap text-left"
                >
                  {selectedCount > 0 ? "Clear all" : "Select all"}
                </button>
              </div>

              <div className="flex md:hidden flex-col items-end gap-2">
                <p className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#b4b4b4] whitespace-nowrap">
                  Expires in:
                </p>
                <div className={`flex items-center gap-1 timer-pulse ${isTimerWarning ? 'warning' : ''}`}>
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-white">
                      {minutes}
                    </span>
                    <span className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#b4b4b4]">
                      min
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-white">
                      {seconds}
                    </span>
                    <span className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#b4b4b4]">
                      sec
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden md:flex items-end gap-2 py-1">
                <p className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#b4b4b4]">
                  Expires in:
                </p>
                <div className={`flex items-center gap-2 timer-pulse ${isTimerWarning ? 'warning' : ''}`}>
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-white">
                      {minutes}
                    </span>
                    <span className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] text-[#b4b4b4]">
                      min
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-white">
                      {seconds}
                    </span>
                    <span className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] text-[#b4b4b4]">
                      sec
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSwapSelected}
                disabled={selectedCount === 0}
                className={`h-[52px] md:h-[45px] px-8 md:px-16 rounded-[10px] flex items-center justify-center transition-all duration-300 ease-smooth flex-1 md:flex-none ${
                  selectedCount > 0
                    ? "bg-gradient-gold shadow-[0px_0px_10px_0px_rgba(255,176,0,0.35)] hover:shadow-[0px_0px_15px_0px_rgba(255,176,0,0.5)] hover:scale-105 active:scale-95"
                    : "bg-gradient-gold opacity-40 cursor-not-allowed"
                }`}
              >
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] text-black whitespace-nowrap">
                  {selectedCount > 0 ? `Swap for $${totalSwapValue}` : "Swap"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
