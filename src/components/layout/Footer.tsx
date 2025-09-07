"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award,
  CheckCircle,
  PhoneCall
} from "lucide-react";

export function Footer() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:secure4587";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Armed Security Guards",
    "Unarmed Security Guards", 
    "Executive Bodyguards",
    "Cash in Transit",
    "24/7 Monitoring",
    "Secure Transportation"
  ];

  const industries = [
    "Corporate & Executive",
    "Retail & Commercial",
    "Healthcare & Medical",
    "Financial Institutions",
    "Residential Communities",
    "Entertainment & Events"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Emergency Contact Bar */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="emergency-pulse">
                24/7 Emergency
              </Badge>
              <span className="font-semibold">Need immediate security response?</span>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleEmergencyCall}
                variant="secondary"
                size="sm"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                Call 6085933
              </Button>
              <Button
                onClick={handleEmailContact}
                variant="outline"
                size="sm"
                className="border-white text-black hover:bg-white hover:text-blue-600"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">BK Security</span>
                <span className="text-sm text-blue-400">Services</span>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Security Solutions You Can Trust. Protecting what matters most to you with experienced, licensed, and insured security professionals.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Licensed & Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Industries We Serve</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry}>
                  <button
                    onClick={() => scrollToSection("industries")}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                  >
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Emergency Line</p>
                  <button
                    onClick={handleEmergencyCall}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    6085933
                  </button>
                  <p className="text-xs text-gray-400">24/7 Response</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <button
                    onClick={handleEmailContact}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    secure4587
                  </button>
                  <p className="text-xs text-gray-400">General Inquiries</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Availability</p>
                  <p className="text-gray-300">24/7 Emergency Response</p>
                  <p className="text-gray-300">24/7 Consultations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 BK Security Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-blue-400 transition-colors">Licensing</button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Award className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-gray-400">
              Licensed Security Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}