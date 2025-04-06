"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-justfix-blue text-white py-20 overflow-hidden">
      {/* Background stripes */}
      <div className="absolute inset-0 -z-10 rotate-6 opacity-10">
        <div className="h-full w-[200%] bg-gradient-to-r from-justfix-yellow to-justfix-orange" />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bangers tracking-tight leading-tight">
            <span className="text-white">JUST</span>
            <span className="text-justfix-yellow">FIX</span>
            <span className="text-justfix-orange">PRO</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-marker">
            <span className="text-3xl mr-2">👋</span>
            YOUR TRUSTED HOME REPAIR EXPERTS
          </h2>
          <ul className="list-disc list-inside space-y-1 text-lg font-comic">
            <li>Licensed, insured pros</li>
            <li>Flat-rate, no surprises</li>
            <li>Emergency ready</li>
          </ul>

          {/* Avatars */}
          <div className="flex items-center mt-6 space-x-3">
            <Image
              src="/avatars/1.jpg"
              alt="Happy customer"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/avatars/2.jpg"
              alt="Happy customer"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/avatars/3.jpg"
              alt="Happy customer"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <span className="text-sm font-light text-white/80">
              10,000+ fixes and counting
            </span>
          </div>
        </div>

        {/* Right Side - SVG Illustration */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <Image
            src="/images/handyman.svg"
            alt="Handyman illustration"
            width={400}
            height={400}
            priority
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}; 