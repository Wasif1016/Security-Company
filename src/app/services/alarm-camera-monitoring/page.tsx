"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Camera,
  Bell,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  CheckCircle
} from "lucide-react";

export default function AlarmCameraMonitoringPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleConsultation = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whyPoints = [
    {
      icon: Bell,
      title: "Instant Response",
      description:
        "An alarm is only useful if someone responds. Our team reacts within seconds."
    },
    {
      icon: Monitor,
      title: "24/7 Watch",
      description:
        "Dedicated monitoring specialists keep eyes on your property day and night."
    },
    {
      icon: Camera,
      title: "Live Verification",
      description:
        "Real-time camera checks help verify threats and reduce false alarms."
    },
    {
      icon: Shield,
      title: "Coordinated Security",
      description:
        "Direct coordination with law enforcement and on-site responders when required."
    }
  ];

  const features = [
    "24/7 professional monitoring team",
    "Real-time camera surveillance",
    "Immediate emergency response dispatch",
    "Direct coordination with law enforcement",
    "Instant alerts to your phone or email"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  24/7 Monitoring
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  24/7 Alarm & Camera Monitoring
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Instant response to alarms and suspicious activity—so you never miss a threat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleConsultation}
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    👉 Start Monitoring Today
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleEmergencyCall}
                    size="lg" 
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-gray-900"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Alarm and Camera Monitoring"
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
                An alarm is only useful if someone responds. Our monitoring team keeps watch around the clock, ready to react within seconds to protect your property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Keep eyes on your property 24/7
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                📹 Keep eyes on your property 24/7. Call +592 608 5933 or request a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleConsultation}
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  👉 Start Monitoring Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-gray-900"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
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



