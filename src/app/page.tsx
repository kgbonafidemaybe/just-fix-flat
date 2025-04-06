import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { RealResults } from "@/components/real-results";
import { VanShowcase } from "@/components/van-showcase";
import { TestimonialSection } from "@/components/testimonial-section";
import { CtaSection } from "@/components/cta-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <RealResults />
        <VanShowcase />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
