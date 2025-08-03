'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Hide splash screen after video ends
      video.onended = () => {
        setShowSplash(false);
      };

      // Fallback in case 'ended' doesn't fire (e.g., mobile issues)
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 6000); // change to match your video duration

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* SPLASH VIDEO SCREEN */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
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
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/videos/binarycode.mp4" type="video/mp4" />
          </video>

          {/* Page Content */}
          <div className="flex flex-col relative z-10 text-white p-8  text-center justify-center items-center content-center gap-2">
            <h1 className="text-4xl font-aquarium ">AI- Powered Software Development</h1>
            <h2 className="text-lg md:text-xl text-gray-300 mt-2">
              Smarter Code. Faster Results. Powered by AI.
            </h2>
            <div className='flex '>
            <p className=" text-white ">
              We build intelligent, scalable software using cutting-edge AI technologies — tailored to automate workflows, accelerate growth, and drive digital transformation.
            </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
