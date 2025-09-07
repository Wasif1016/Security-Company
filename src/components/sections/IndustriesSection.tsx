"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ShoppingCart, 
  Heart, 
  DollarSign, 
  Home, 
  Music,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface Industry {
  id: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  subcategories: string[];
  specialServices: string[];
}

export function IndustriesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const industries: Industry[] = [
    {
      id: "corporate",
      category: "Corporate & Executive Protection",
      icon: Building2,
      description: "Comprehensive security solutions for business leaders and corporate environments",
      subcategories: [
        "Business executives and leadership teams",
        "Corporate headquarters and office buildings",
        "Board meetings and company events",
        "Executive travel and transportation"
      ],
      specialServices: [
        "Executive protection details",
        "Corporate event security",
        "Threat assessment services",
        "Secure transportation"
      ]
    },
    {
      id: "retail",
      category: "Retail & Commercial",
      icon: ShoppingCart,
      description: "Protecting retail spaces, commercial properties, and customer experiences",
      subcategories: [
        "Shopping centers and retail stores",
        "Restaurants and hospitality venues",
        "Auto dealerships and showrooms",
        "Warehouses and distribution centers"
      ],
      specialServices: [
        "Loss prevention programs",
        "Customer safety protocols",
        "Inventory protection",
        "Emergency response planning"
      ]
    },
    {
      id: "healthcare",
      category: "Healthcare & Medical",
      icon: Heart,
      description: "Specialized security for healthcare facilities and medical environments",
      subcategories: [
        "Hospitals and medical facilities",
        "Clinics and urgent care centers",
        "Pharmaceutical companies",
        "Medical transportation services"
      ],
      specialServices: [
        "Patient and staff safety",
        "Controlled substance security",
        "Emergency room protection",
        "Medical equipment security"
      ]
    },
    {
      id: "financial",
      category: "Financial Institutions",
      icon: DollarSign,
      description: "High-security solutions for financial services and banking",
      subcategories: [
        "Banks and credit unions",
        "Investment firms and financial advisors",
        "ATM services and cash handling",
        "Armored car coordination"
      ],
      specialServices: [
        "Cash in transit services",
        "Vault security management",
        "ATM replenishment",
        "Financial data protection"
      ]
    },
    {
      id: "residential",
      category: "Residential Communities",
      icon: Home,
      description: "Protecting homes, families, and residential communities",
      subcategories: [
        "Gated communities and estates",
        "High-rise residential buildings",
        "Private residences and mansions",
        "Family protection services"
      ],
      specialServices: [
        "Perimeter security systems",
        "Access control management",
        "Personal protection services",
        "Emergency response protocols"
      ]
    },
    {
      id: "entertainment",
      category: "Entertainment & Events",
      icon: Music,
      description: "Event security and entertainment venue protection",
      subcategories: [
        "Concerts and festivals",
        "Sporting events and venues",
        "Private parties and celebrations",
        "Celebrity and VIP protection"
      ],
      specialServices: [
        "Crowd control management",
        "VIP protection services",
        "Event planning security",
        "Emergency evacuation procedures"
      ]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Industries We Serve
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Protecting What Matters Most Across All Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our specialized security expertise spans multiple industries, ensuring we understand 
            the unique challenges and requirements of your specific business sector.
          </p>
        </div>

        {/* Industries Tabs */}
        <Tabs defaultValue="corporate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id}
                  className="flex flex-col p-4 h-auto data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <IconComponent className="h-5 w-5 mb-2" />
                  <span className="text-xs font-medium text-center leading-tight">
                    {industry.category.split(" ")[0]}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <TabsContent key={industry.id} value={industry.id} className="mt-8">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">
                          {industry.category}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-2">
                          {industry.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Subcategories */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Areas We Protect
                        </h4>
                        <div className="space-y-3">
                          {industry.subcategories.map((subcategory, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{subcategory}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Special Services */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Specialized Services
                        </h4>
                        <div className="space-y-3 mb-6">
                          {industry.specialServices.map((service, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600">{service}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          onClick={scrollToContact}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Get Industry-Specific Quote
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with businesses across all industries. Our experienced team can develop 
              customized security solutions for any sector or unique business requirements.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Discuss Your Specific Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}