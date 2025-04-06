import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { RealResults } from "@/components/real-results";
import { VanShowcase } from "@/components/van-showcase";
import { TestimonialSection } from "@/components/testimonial-section";
import { CtaSection } from "@/components/cta-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Section wrapper component for consistent section styling
const SectionWrapper = ({ 
  children, 
  className = "", 
  fullWidth = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  fullWidth?: boolean;
}) => {
  return (
    <section className={`relative ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          {children}
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-justfix-blue">
      <Navbar />
      <main className="flex-grow">
        {/* The hero section uses its own container */}
        <SectionWrapper fullWidth className="overflow-hidden">
          <HeroSection />
        </SectionWrapper>
        
        {/* Services section with wrapper */}
        <SectionWrapper className="bg-slate-100 rounded-lg my-8 mx-4 md:mx-8">
          <ServicesSection />
        </SectionWrapper>
        
        {/* Real results section with wrapper */}
        <SectionWrapper className="bg-justfix-blue/10 rounded-lg my-8 mx-4 md:mx-8">
          <RealResults />
        </SectionWrapper>
        
        {/* Van showcase section with wrapper */}
        <SectionWrapper className="bg-gradient-to-b from-justfix-yellow/20 to-white/90 rounded-lg my-8 mx-4 md:mx-8">
          <VanShowcase />
        </SectionWrapper>
        
        {/* Testimonial section with wrapper */}
        <SectionWrapper className="bg-justfix-blue rounded-lg my-8 mx-4 md:mx-8">
          <TestimonialSection />
        </SectionWrapper>
        
        {/* CTA section with wrapper */}
        <SectionWrapper className="bg-justfix-yellow rounded-lg my-8 mx-4 md:mx-8">
          <CtaSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
