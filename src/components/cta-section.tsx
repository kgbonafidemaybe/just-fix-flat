import Image from 'next/image';
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-12 bg-justfix-yellow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with character image */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              {/* Replace with your actual image path */}
              <Image 
                src="/repairman-action.svg" 
                alt="JustFix Pro Handyman"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Right side with content */}
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got a Honey-Do List<br />
              You've Been Avoiding?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" className="bg-justfix-blue hover:bg-justfix-blue/90 text-white font-bold text-lg rounded-md">
                SCHEDULE A SERVICE
              </Button>
              <Button size="lg" className="bg-justfix-orange hover:bg-justfix-orange/90 text-white font-bold text-lg rounded-md">
                SPEAK TO A PRO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 