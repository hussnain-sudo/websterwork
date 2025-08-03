'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const splashVideoRef = useRef<HTMLVideoElement | null>(null);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const splashVideo = splashVideoRef.current;
    const bgVideo = bgVideoRef.current;

    if (splashVideo) {
      splashVideo.muted = true;
      splashVideo.playsInline = true;
      splashVideo.autoplay = true;

      const playPromise = splashVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) =>
          console.warn('Splash autoplay failed:', err)
        );
      }

      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 6000); // match your intro video duration

      splashVideo.onended = () => {
        setShowSplash(false);
      };

      return () => clearTimeout(timeout);
    }

    if (bgVideo) {
      const bgPlay = bgVideo.play();
      if (bgPlay !== undefined) {
        bgPlay.catch((err) =>
          console.warn('Background video autoplay failed:', err)
        );
      }
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

      {/* MAIN WEBSITE CONTENT */}
      <main className={`${showSplash ? 'hidden' : 'block'}`}>
        <div className="relative h-screen w-full overflow-hidden text-center items-center content-center">
          {/* Background Video */}
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

          {/* Page Content */}
          <div className="flex flex-col relative z-10 text-white p-8 text-center justify-center items-center content-center gap-2">
            <h1 className="text-4xl font-aquarium">AI-Powered Software Development</h1>
            <h2 className="text-lg md:text-xl text-gray-300 mt-2">
              Smarter Code. Faster Results. Powered by AI.
            </h2>
            <div className="flex max-w-3xl mt-4">
              <p className="text-white text-base md:text-lg">
                We build intelligent, scalable software using cutting-edge AI technologies — tailored to automate workflows, accelerate growth, and drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
