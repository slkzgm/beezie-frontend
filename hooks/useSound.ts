import { useCallback, useEffect, useRef, useMemo } from 'react';

/**
 * Custom hook for playing sound effects with optimized performance
 * @param src - Path to the audio file
 * @param volume - Volume level (0.0 to 1.0), default 0.3
 * @returns Object with play function
 */
export function useSound(src: string, volume = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create and configure audio element only once
    const audio = new Audio(src);
    audio.volume = Math.max(0, Math.min(1, volume)); // Clamp between 0-1
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      // Cleanup: stop and remove audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [src, volume]);

  const play = useCallback(() => {
    if (audioRef.current) {
      // Reset to start if already playing
      audioRef.current.currentTime = 0;
      // Play with error handling (user interaction required)
      audioRef.current.play().catch((error) => {
        // Silent fail - browsers may block autoplay
        console.debug('Sound play prevented:', error);
      });
    }
  }, []);

  // Memoize return object to prevent triggering dependent useEffects
  return useMemo(() => ({ play }), [play]);
}

