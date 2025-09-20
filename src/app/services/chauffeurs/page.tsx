"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Car,
  Shield,
  User,
  Phone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function ChauffeursPage() {
  const handleCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleBook = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Armed or unarmed chauffeur options",
    "Premium vehicles for executive travel",
    "Security-trained professionals at your service",
    "Discreet and reliable for business or personal use",
    "Available for single trips or ongoing contracts"
  ];

  const whyPoints = [
    {
      icon: Shield,
      title: "Security Built-In",
      description:
        "High-profile clients deserve more than a driver. Our chauffeurs are trained in professional security."
    },
    {
      icon: Car,
      title: "Luxury Experience",
      description:
        "Premium vehicles and white-glove service ensure comfort without compromising safety."
    },
    {
      icon: User,
      title: "Discreet & Professional",
      description:
        "Low-profile presence that blends into your lifestyle, business, or travel needs."
    },
    {
      icon: CheckCircle,
      title: "Flexible Arrangements",
      description:
        "Available for single trips, special events, or recurring executive schedules."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  Chauffeur Protection
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Luxury Travel with Built-In Security
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Chauffeurs who provide more than just driving—they deliver peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleBook}
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    👉 Book Your Chauffeur
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleCall}
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call 6085933
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Armed and Unarmed Chauffeurs"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                High-profile clients deserve more than a driver. Our chauffeurs are trained in both luxury service and professional security, giving you comfort with protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyPoints.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Travel in style and safety
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                🛡️ Travel in style and safety. Call 6085933 to hire your chauffeur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBook}
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  👉 Book Your Chauffeur
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={handleCall}
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 6085933
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


