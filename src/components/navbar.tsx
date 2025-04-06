import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg"
                alt="JustFix Pro Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link href="/services" className="font-medium hover:text-justfix-blue transition-colors">
                Services
              </Link>
              <Link href="/about" className="font-medium hover:text-justfix-blue transition-colors">
                About Us
              </Link>
              
              {/* Locations Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center font-medium hover:text-justfix-blue transition-colors outline-none">
                  Locations
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/regina-handyman" className="w-full">
                      Regina and Area
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href="/saskatoon-handyman" className="w-full">
                      Saskatoon and Area
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/testimonials" className="font-medium hover:text-justfix-blue transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="font-medium hover:text-justfix-blue transition-colors">
                Contact
              </Link>
            </div>
            
            {/* Call Button */}
            <Button className="bg-justfix-blue hover:bg-justfix-blue/90 text-white">
              <Phone className="mr-2 h-4 w-4" />
              <span className="font-bold">(306) 555-1234</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 