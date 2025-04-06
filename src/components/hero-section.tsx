import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-justfix-blue py-12 overflow-hidden">
      {/* Background stripes - comic style */}
      <div className="absolute inset-0 flex">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="flex-1 transform rotate-12 bg-justfix-darkblue opacity-40"
            style={{ marginLeft: i % 2 ? '20px' : '0' }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Welcome greeting */}
        <div className="mb-2 text-justfix-yellow flex items-center">
          <span className="text-2xl mr-2">👋</span>
          <span className="text-xl font-medium">Hello Homeowner!</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
              <span className="text-white">JUST</span>
              <span className="text-justfix-orange">FIX</span>
              <span className="text-white text-3xl md:text-4xl align-text-top">PRO</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-justfix-yellow mb-4">
              YOUR TRUSTED<br />
              HOME REPAIR EXPERTS
            </h2>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-justfix-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl">Fix it once. Fix it right.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-justfix-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl">Guaranteed.</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-justfix-orange hover:bg-justfix-orange/90 text-white font-bold text-lg rounded-md">
                GET A FREE QUOTE
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white/10">
                CALL NOW
              </Button>
            </div>
            
            {/* Reviews section */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex -space-x-2">
                {/* Avatar circles - replace with actual avatar images */}
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                    <div className="relative w-full h-full">
                      <Image 
                        src={`/avatar-${index}.jpg`} 
                        alt={`Customer ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex text-justfix-yellow">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center ml-2">
                    <svg viewBox="0 0 24 24" width="18" height="18" className="mr-1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4285F4"/>
                      <path d="M10 16.5l6-4.5-6-4.5v9z" fill="#4285F4"/>
                    </svg>
                    <span className="text-white text-sm">from 250+ reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Repairman Character */}
          <div className="md:w-1/2 relative">
            {/* Placeholder for your repairman image */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Replace with your actual image path */}
              <Image 
                src="/repairman.svg" 
                alt="JustFix Pro Handyman"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 