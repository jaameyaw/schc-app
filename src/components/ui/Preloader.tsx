'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [stage, setStage] = useState<'loading' | 'fading' | 'hidden'>('loading');

  useEffect(() => {
    // Show preloader for a short, smooth duration
    const timer = setTimeout(() => {
      setStage('fading');
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (stage === 'hidden') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-light-bg transition-opacity duration-700 ease-in-out
        ${stage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
      onTransitionEnd={() => {
        if (stage === 'fading') setStage('hidden');
      }}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Loading mark rings */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer spinning ring (teal) */}
          <div className="absolute inset-0 rounded-full border-[3px] border-teal/20 border-t-primary motion-safe:animate-[spin_1s_linear_infinite] motion-reduce:hidden"></div>
          {/* Inner spinning ring (primary) */}
          <div className="absolute inset-2 rounded-full border-[3px] border-primary/20 border-b-teal motion-safe:animate-[spin_1.5s_linear_infinite_reverse] motion-reduce:hidden"></div>
          
          {/* Logo container */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden motion-safe:animate-pulse">
            <Image 
              src="/favicon-schc.png" 
              alt="SCHC Logo" 
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
        </div>
        
        {/* Text branding */}
        <div className="mt-6 flex flex-col items-center gap-1.5 motion-safe:animate-pulse">
          <h2 className="text-primary font-bold tracking-[0.15em] text-lg">SCHC</h2>
          <p className="text-dark-text/50 text-[0.65rem] font-semibold tracking-[0.25em] uppercase">Child Health Corner</p>
        </div>
      </div>
    </div>
  );
}
