import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Service Areas */}
        <div className="text-center mb-8">
          <p className="text-gray-700 font-medium mb-2">Find us in these cities:</p>
          <p className="font-bold text-justfix-blue">
            Check our <Link href="/locations" className="underline hover:text-justfix-orange transition-colors">locations page</Link> for service areas
          </p>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-justfix-blue transition-colors">Our Story</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-justfix-blue transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-justfix-blue transition-colors">Careers</Link></li>
              <li><Link href="/why-choose-us" className="text-gray-600 hover:text-justfix-blue transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/plumbing" className="text-gray-600 hover:text-justfix-blue transition-colors">Plumbing Repairs</Link></li>
              <li><Link href="/services/electrical" className="text-gray-600 hover:text-justfix-blue transition-colors">Electrical Work</Link></li>
              <li><Link href="/services/handyman" className="text-gray-600 hover:text-justfix-blue transition-colors">General Handyman</Link></li>
              <li><Link href="/services/doors-windows" className="text-gray-600 hover:text-justfix-blue transition-colors">Door & Window Fixes</Link></li>
              <li><Link href="/services/emergency" className="text-gray-600 hover:text-justfix-blue transition-colors">Emergency Repairs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Info</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-gray-600 hover:text-justfix-blue transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-justfix-blue transition-colors">FAQs</Link></li>
              <li><Link href="/testimonials" className="text-gray-600 hover:text-justfix-blue transition-colors">Testimonials</Link></li>
              <li><Link href="/guarantee" className="text-gray-600 hover:text-justfix-blue transition-colors">Our Guarantee</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Phone: (306) 555-1234</li>
              <li className="text-gray-600">Email: info@justfixpro.ca</li>
              <li className="text-gray-600">Address: 123 Main Street, Regina, SK</li>
              <li className="text-gray-600">Hours: Mon-Fri 7am-7pm, Sat 8am-4pm</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-justfix-blue hover:text-justfix-orange transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-justfix-blue hover:text-justfix-orange transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-justfix-blue hover:text-justfix-orange transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} JustFix Pro. All rights reserved. 
            <Link href="/privacy-policy" className="ml-2 hover:text-justfix-blue transition-colors">Privacy Policy</Link> | 
            <Link href="/terms" className="ml-2 hover:text-justfix-blue transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 