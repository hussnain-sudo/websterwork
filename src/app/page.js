'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const splashVideoRef = useRef(null);
  const bgVideoRef = useRef(null);

  useEffect(() => {
    // Ensure this runs only on client
    if (typeof window === 'undefined') return;

    const splashVideo = splashVideoRef.current;
    const bgVideo = bgVideoRef.current;

    // Play splash video
    if (splashVideo) {
      splashVideo.muted = true;
      splashVideo.playsInline = true;

      splashVideo.play().catch((err) => {
        console.warn('Splash autoplay failed:', err);
      });

      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 6000);

      splashVideo.onended = () => {
        setShowSplash(false);
      };

      return () => clearTimeout(timeout);
    }

    // Play background video
    if (bgVideo) {
      bgVideo.play().catch((err) => {
        console.warn('Background video autoplay failed:', err);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* SPLASH VIDEO SCREEN */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            ref={splashVideoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={(e) => console.error('Splash video error:', e)}
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className={`${showSplash ? 'hidden' : 'block'}`}>
        <div className="relative h-screen w-full overflow-hidden text-center flex items-center justify-center">
          {/* BACKGROUND VIDEO */}
          <video
            ref={bgVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            onError={(e) => console.error('Background video error:', e)}
          >
            <source src="/videos/binarycode.mp4" type="video/mp4" />
          </video>

          {/* TEXT CONTENT */}
          <div className="relative z-10 text-white p-8 text-center gap-2 max-w-3xl">
            <h1 className="text-4xl font-aquarium">AI-Powered Software Development</h1>
            <h2 className="text-lg md:text-xl text-gray-300 mt-2">
              Smarter Code. Faster Results. Powered by AI.
            </h2>
            <p className="text-white text-base md:text-lg mt-4">
              We build intelligent, scalable software using cutting-edge AI technologies —
              tailored to automate workflows, accelerate growth, and drive digital transformation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
