"use client";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-justfix-blue text-white overflow-hidden py-20">
      {/* Electric comic-style background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-justfix-darkblue via-justfix-blue to-justfix-blue opacity-40" />
        <div className="absolute inset-0 rotate-3 bg-repeat opacity-30" style={{ backgroundImage: 'url("/images/comic-lines.svg")' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading tracking-tight leading-tight text-white">
            JUSTFIXPRO
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold flex items-center">
            <span className="text-3xl mr-2">👋</span> YOUR TRUSTED HOME REPAIR EXPERTS
          </h2>
          <ul className="list-disc list-inside space-y-1 text-lg">
            <li>Licensed, insured pros</li>
            <li>Flat-rate, no surprises</li>
            <li>Emergency ready</li>
          </ul>

          {/* Avatars */}
          <div className="flex items-center mt-4 space-x-3">
            <Image src="/avatars/1.jpg" alt="User 1" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="/avatars/2.jpg" alt="User 2" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src="/avatars/3.jpg" alt="User 3" width={40} height={40} className="rounded-full border-2 border-white" />
            <span className="text-sm text-white/80">10,000+ fixes and counting</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-justfix-orange text-white px-6 py-3 rounded-md text-lg font-semibold shadow hover:bg-orange-600 transition">
              Get a Free Quote
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-justfix-blue transition">
              Call Now
            </button>
          </div>
        </div>

        {/* RIGHT: Handyman Illustration */}
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