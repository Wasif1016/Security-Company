"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Shield, 
  Phone, 
  Mail, 
  PhoneCall,
  X
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:secure4587";
  };

  const navigationItems = [
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Company Name */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${
                isScrolled ? "text-black" : "text-white"
              }`}>
                BK Security
              </span>
              <span className={`text-xs font-medium ${
                isScrolled ? "text-blue-600" : "text-blue-200"
              }`}>
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEmailContact}
              className={`${
                isScrolled 
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50" 
                  : "border-white/30 text-black hover:bg-white/10"
              }`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            
            <Button
              onClick={handleEmergencyCall}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white emergency-pulse"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`lg:hidden ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-black">BK Security</span>
                      <span className="text-xs text-blue-600">Services</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="py-6 border-b">
                  <Badge variant="destructive" className="mb-3 emergency-pulse">
                    24/7 Emergency
                  </Badge>
                  <Button
                    onClick={handleEmergencyCall}
                    className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call 6085933
                  </Button>
                  <Button
                    onClick={handleEmailContact}
                    variant="outline"
                    className="w-full"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    secure4587
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <ul className="space-y-4">
                    {navigationItems.map((item) => (
                      <li key={item.label}>
                        <button
                          onClick={() => scrollToSection(item.href.substring(1))}
                          className="w-full text-left p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Footer */}
                <div className="pt-6 border-t text-center">
                  <p className="text-sm text-gray-600">
                    Licensed • Insured • Bonded
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Available 24/7
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}