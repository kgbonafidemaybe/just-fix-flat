import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <>
      {/* Comic-style background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Action lines */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-justfix-orange/20" 
            style={{
              height: '3px',
              width: `${100 + Math.random() * 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Speech bubbles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full flex items-center justify-center opacity-80">
          <span className="font-marker text-justfix-blue text-lg transform rotate-12">WOW!</span>
        </div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-80">
          <span className="font-marker text-justfix-orange text-lg transform -rotate-6">FIX IT!</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-6 shadow-xl relative">
        {/* Comic-style burst */}
        <div className="absolute -top-8 -right-8 bg-justfix-orange text-white font-bangers p-4 rounded-full transform rotate-12 shadow-lg z-10 flex items-center justify-center" style={{ width: '120px', height: '120px' }}>
          <div className="transform -rotate-12 text-center">
            <div className="text-xl">CALL</div>
            <div className="text-xl">NOW!</div>
          </div>
        </div>
        
        {/* Left side with character image */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <Image 
              src="/repairman-action.svg" 
              alt="JustFix Pro Handyman"
              fill
              className="object-contain drop-shadow-xl"
            />
            
            {/* Comic-style caption */}
            <div className="absolute speech-bubble left-12 -top-10 bg-white border-2 border-justfix-blue p-2 rounded-lg transform -rotate-6 shadow-md">
              <p className="font-comic text-justfix-blue text-sm">I'll fix it fast!</p>
              <div className="absolute w-4 h-4 bg-white border-b-2 border-r-2 border-justfix-blue transform rotate-45 -bottom-2 left-6"></div>
            </div>
          </div>
        </div>
        
        {/* Right side with content */}
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-4xl md:text-5xl font-bangers mb-4 text-justfix-blue leading-tight">
            Got a Honey-Do List<br />
            You've Been Avoiding?
          </h2>
          
          <div className="mb-6">
            <p className="font-comic text-gray-700 text-lg mb-4">
              Stop putting off those repairs! Our team of professionals can tackle your entire list in a single visit with flat-rate pricing.
            </p>
            
            <ul className="space-y-2 font-comic mb-6">
              <li className="flex items-center text-gray-700">
                <span className="text-justfix-orange mr-2">✓</span> 
                Same-day service available
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-justfix-orange mr-2">✓</span> 
                All repairs 100% guaranteed
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-justfix-orange mr-2">✓</span> 
                No surprise pricing - pay only what we quote
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-justfix-blue hover:bg-justfix-blue/90 text-white font-bangers text-xl rounded-md py-6 px-8 shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
              SCHEDULE A SERVICE
            </Button>
            <Button size="lg" className="bg-justfix-orange hover:bg-justfix-orange/90 text-white font-bangers text-xl rounded-md py-6 px-8 shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
              SPEAK TO A PRO
            </Button>
          </div>
          
          <p className="text-xs font-comic text-gray-600 mt-4">
            *Service available same-day in most areas. Call for details.
          </p>
        </div>
      </div>
    </>
  );
} 