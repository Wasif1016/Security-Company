"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Truck,
  Lock,
  FileText,
  CheckCircle,
  Phone,
  ArrowRight,
  DollarSign
} from "lucide-react";

export default function CashInTransitPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleSecureTransfer = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "Armed escorts with tactical training",
    "Reinforced vehicles for high-value transfers",
    "Secure bank deposits and withdrawals",
    "Payroll and confidential document protection",
    "Full insurance coverage for every transfer"
  ];

  const whyPoints = [
    {
      icon: Shield,
      title: "Risk Removed",
      description:
        "Moving money or valuables is high risk. We eliminate it with strict protocols and professional escorts."
    },
    {
      icon: Truck,
      title: "Hardened Transport",
      description:
        "Reinforced vehicles and trained drivers keep assets protected from pickup to drop-off."
    },
    {
      icon: Lock,
      title: "Chain of Custody",
      description:
        "Documented handoffs and sealed containers ensure integrity throughout the transfer."
    },
    {
      icon: FileText,
      title: "Insured Operations",
      description:
        "Every movement is insurance-backed for maximum peace of mind."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  Cash in Transit
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Secure Transportation of Cash & Valuables
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  Protect your money and high-value assets with armed escorts and reinforced vehicles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleSecureTransfer}
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    Get a Secure Transfer
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleEmergencyCall}
                    size="lg" 
                    variant="outline"
                    className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call 6085933
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Cash in Transit Security"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-2">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Moving money or valuables is always a high-risk task. We remove that risk with professional armed escorts, strict protocols, and insurance-backed coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyPoints.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-blue-600" />
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


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don’t leave your assets unprotected.
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                💰 Don’t leave your assets unprotected. Call 6085933 now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleSecureTransfer}
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  👉 Get a Secure Transfer
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
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


