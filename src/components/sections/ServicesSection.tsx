"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Shield, 
  User, 
  Truck, 
  Camera, 
  Car,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface ServiceCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
  url: string;
}

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services: ServiceCard[] = [
    {
      id: "armed-security",
      icon: Shield,
      title: "Security Guards",
      description: "Professional armed & unarmed security personnel for businesses, events, and residential properties.",
      features: [
        "Trained & licensed professionals",
        "Armed or unarmed options",
        "24/7 availability",
        "Immediate response"
      ],
      url: "/services/armed-unarmed-security"
    },
    {
      id: "bodyguard",
      icon: User,
      title: "Executive Protection",
      description: "Discreet personal protection for high-profile individuals and their families.",
      features: [
        "Threat assessment",
        "Close protection",
        "Travel security",
        "Family protection"
      ],
      highlight: true,
      url: "/services/executive-bodyguard"
    },
    {
      id: "cash-transit",
      icon: Truck,
      title: "Cash in Transit",
      description: "Secure transportation of valuables with armed escorts and reinforced vehicles.",
      features: [
        "Armed escorts",
        "Bank transfers",
        "High-value transport",
        "Insurance coverage"
      ],
      url: "/services/cash-in-transit"
    },
    {
      id: "monitoring",
      icon: Camera,
      title: "24/7 Monitoring",
      description: "Advanced alarm and camera monitoring with instant emergency response.",
      features: [
        "Professional monitoring",
        "Instant response",
        "Camera surveillance",
        "Real-time alerts"
      ],
      url: "/services/alarm-camera-monitoring"
    },
    {
      id: "transportation",
      icon: Car,
      title: "Secure Transportation",
      description: "Security-trained chauffeurs and armored options for executive and high-risk transportation.",
      features: [
        "Security-trained drivers",
        "Armed options available",
        "Luxury & armored vehicles",
        "Route planning"
      ],
      url: "/services/secure-transportation"
    }
  ];

  // Split services into two rows: first 3, then last 2
  const firstRowServices = services.slice(0, 3);
  const secondRowServices = services.slice(3, 5);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Services
          </Badge>
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Complete Security Solutions
            </h2>
            <Link href="/services" className="hidden md:inline-flex text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-4">
              View all services
            </Link>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Modern, reliable and scalable protection—delivered by licensed professionals across on-site, mobile and remote services.
          </p>
          <div className="mt-4 md:hidden">
            <Link href="/services" className="text-sm font-medium text-blue-600 hover:text-blue-700 underline underline-offset-4">
              View all services
            </Link>
          </div>
        </div>

        {/* Services Grid - 3-2 Layout */}
        <div className="space-y-12 mb-16">
          {/* First Row - 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRowServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className={`group hover:shadow-xl transition-all duration-300 border-0 h-full w-full rounded-2xl ${
                    service.highlight 
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white" 
                      : "bg-white/60 backdrop-blur-sm hover:bg-white"
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    {/* Icon */}
                    <div className="mx-auto mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ${
                        service.highlight 
                          ? "bg-white/20" 
                          : "bg-blue-100"
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          service.highlight ? "text-white" : "text-blue-600"
                        }`} />
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {service.highlight && (
                      <Badge className="mb-3 bg-white text-blue-600 text-xs mx-auto">
                        Most Popular
                      </Badge>
                    )}

                    {/* Title */}
                    <CardTitle className={`text-lg font-semibold mb-3 text-center group-hover:tracking-tight transition-all ${
                      service.highlight ? "text-white" : "text-gray-900"
                    }`}>
                      <Link href={service.url} className={`hover:text-blue-600 ${service.highlight ? "hover:text-white/90" : ""}`}>
                        {service.title}
                      </Link>
                    </CardTitle>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-4 text-center ${
                      service.highlight ? "text-blue-100" : "text-gray-600"
                    }`}>
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0 text-center">
                    {/* Features */}
                    <div className="space-y-2 mb-6 flex flex-col items-center">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          <CheckCircle className={`h-3 w-3 flex-shrink-0 ${
                            service.highlight ? "text-green-300" : "text-green-500"
                          }`} />
                          <span className={`text-xs text-center ${
                            service.highlight ? "text-blue-100" : "text-gray-600"
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                      <Link href={service.url}>
                      <Button 
                        variant={service.highlight ? "secondary" : "outline"}
                        size="sm"
                        className={`w-full text-xs ${
                          service.highlight 
                            ? "bg-white text-blue-600 hover:bg-gray-100" 
                            : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        }`}
                      >
                        View Service
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Second Row - 2 Services Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {secondRowServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className={`group hover:shadow-xl transition-all duration-300 border-0 h-full w-full rounded-2xl ${
                      service.highlight 
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white" 
                        : "bg-white/60 backdrop-blur-sm hover:bg-white"
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      {/* Icon */}
                      <div className="mx-auto mb-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ${
                          service.highlight 
                            ? "bg-white/20" 
                            : "bg-blue-100"
                        }`}>
                          <IconComponent className={`h-8 w-8 ${
                            service.highlight ? "text-white" : "text-blue-600"
                          }`} />
                        </div>
                      </div>

                      {/* Popular Badge */}
                      {service.highlight && (
                        <Badge className="mb-3 bg-white text-blue-600 text-xs mx-auto">
                          Most Popular
                        </Badge>
                      )}

                      {/* Title */}
                      <CardTitle className={`text-lg font-semibold mb-3 text-center group-hover:tracking-tight transition-all ${
                        service.highlight ? "text-white" : "text-gray-900"
                      }`}>
                        <Link href={service.url} className={`hover:text-blue-600 ${service.highlight ? "hover:text-white/90" : ""}`}>
                          {service.title}
                        </Link>
                      </CardTitle>

                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-4 text-center ${
                        service.highlight ? "text-blue-100" : "text-gray-600"
                      }`}>
                        {service.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0 text-center">
                      {/* Features */}
                      <div className="space-y-2 mb-6 flex flex-col items-center">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center justify-center space-x-2">
                            <CheckCircle className={`h-3 w-3 flex-shrink-0 ${
                              service.highlight ? "text-green-300" : "text-green-500"
                            }`} />
                            <span className={`text-xs text-center ${
                              service.highlight ? "text-blue-100" : "text-gray-600"
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <Link href={service.url}>
                        <Button 
                          variant={service.highlight ? "secondary" : "outline"}
                          size="sm"
                          className={`w-full text-xs ${
                            service.highlight 
                              ? "bg-white text-blue-600 hover:bg-gray-100" 
                              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          }`}
                        >
                          View Service
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Security?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Every security challenge is unique. Let us assess your needs and develop 
              a tailored security plan that fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = "tel:+5926085933"}
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}