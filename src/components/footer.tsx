import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-justfix-darkblue text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Service Areas */}
        <div className="text-center mb-8">
          <p className="text-white/80 font-medium mb-2">Find us in these cities:</p>
          <p className="font-bold text-white">
            Check our <Link href="/locations" className="underline hover:text-justfix-yellow transition-colors">locations page</Link> for service areas
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-justfix-yellow">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/80 hover:text-justfix-yellow transition-colors">Our Story</Link></li>
              <li><Link href="/team" className="text-white/80 hover:text-justfix-yellow transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-white/80 hover:text-justfix-yellow transition-colors">Careers</Link></li>
              <li><Link href="/why-choose-us" className="text-white/80 hover:text-justfix-yellow transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-justfix-yellow">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/plumbing" className="text-white/80 hover:text-justfix-yellow transition-colors">Plumbing Repairs</Link></li>
              <li><Link href="/services/electrical" className="text-white/80 hover:text-justfix-yellow transition-colors">Electrical Work</Link></li>
              <li><Link href="/services/handyman" className="text-white/80 hover:text-justfix-yellow transition-colors">General Handyman</Link></li>
              <li><Link href="/services/doors-windows" className="text-white/80 hover:text-justfix-yellow transition-colors">Door & Window Fixes</Link></li>
              <li><Link href="/services/emergency" className="text-white/80 hover:text-justfix-yellow transition-colors">Emergency Repairs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-justfix-yellow">Customer Info</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-white/80 hover:text-justfix-yellow transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-justfix-yellow transition-colors">FAQs</Link></li>
              <li><Link href="/testimonials" className="text-white/80 hover:text-justfix-yellow transition-colors">Testimonials</Link></li>
              <li><Link href="/guarantee" className="text-white/80 hover:text-justfix-yellow transition-colors">Our Guarantee</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-justfix-yellow">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-white/80">Phone: (306) 555-1234</li>
              <li className="text-white/80">Email: info@justfixpro.ca</li>
              <li className="text-white/80">Address: 123 Main Street, Regina, SK</li>
              <li className="text-white/80">Hours: Mon-Fri 7am-7pm, Sat 8am-4pm</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-white hover:text-justfix-yellow transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-justfix-yellow transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-justfix-yellow transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} JustFix Pro. All rights reserved. 
            <Link href="/privacy-policy" className="ml-2 hover:text-justfix-yellow transition-colors">Privacy Policy</Link> | 
            <Link href="/terms" className="ml-2 hover:text-justfix-yellow transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 