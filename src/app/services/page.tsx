"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Shield, 
  User, 
  Car, 
  Monitor, 
  Truck, 
  Users,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Award
} from "lucide-react";

export default function ServicesPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleConsultation = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      id: "armed-unarmed",
      title: "Armed & Unarmed Security",
      subtitle: "Professional protection for businesses, events, and residences.",
      description: "Our licensed guards act as both deterrents and rapid responders. Whether armed or unarmed, they are highly trained to handle threats, safeguard assets, and provide peace of mind around the clock.",
      icon: Shield,
      image: "/front-view-guard-men-team-work.jpg",
      url: "/services/armed-unarmed-security",
      features: [
        "Licensed and certified security personnel",
        "24/7 on-site protection",
        "Threat assessment and prevention",
        "Access control and monitoring",
        "Emergency response protocols"
      ]
    },
    {
      id: "executive-bodyguard",
      title: "Executive Bodyguard Services",
      subtitle: "Discreet personal protection for executives and families.",
      description: "We specialize in close protection, threat assessment, and secure travel planning. Our bodyguards ensure your safety in public and private settings—without disrupting your lifestyle.",
      icon: User,
      image: "/young-male-being-uber-driver-female-client.jpg",
      url: "/services/executive-bodyguard",
      features: [
        "Personal protection specialists",
        "Threat assessment and planning",
        "Secure travel coordination",
        "Low-profile operations",
        "24/7 availability"
      ]
    },
    {
      id: "cash-transit",
      title: "Cash in Transit",
      subtitle: "Secure and reliable transport for valuables.",
      description: "With armed escorts and reinforced vehicles, our cash-in-transit service protects your money, documents, and assets during transfers. Every operation is covered with strict protocols and insurance for maximum security.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/cash-in-transit",
      features: [
        "Armored vehicle transport",
        "Armed escort services",
        "GPS tracking and monitoring",
        "Insurance coverage",
        "Secure route planning"
      ]
    },
    {
      id: "monitoring",
      title: "Alarm & Camera Monitoring",
      subtitle: "24/7 surveillance with instant response.",
      description: "Our monitoring team keeps eyes on your property day and night. From alarm alerts to live camera feeds, we provide real-time oversight and rapid emergency dispatch when needed.",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services/alarm-camera-monitoring",
      features: [
        "24/7 monitoring center",
        "Real-time alert response",
        "Live camera surveillance",
        "Emergency dispatch",
        "Monthly reporting"
      ]
    },
    {
      id: "secure-transport",
      title: "Secure Transportation",
      subtitle: "Safe and reliable travel for high-profile clients.",
      description: "Whether for business or personal needs, our secure transportation combines safety, efficiency, and discretion. Security-trained drivers follow route planning strategies to minimize risks and ensure smooth journeys.",
      icon: Car,
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/services",
      features: [
        "Security-trained drivers",
        "Route risk assessment",
        "Luxury vehicle fleet",
        "Real-time tracking",
        "Emergency protocols"
      ]
    },
    {
      id: "chauffeurs",
      title: "Armed & Unarmed Chauffeurs",
      subtitle: "Luxury travel with built-in protection.",
      description: "Our chauffeurs are trained in both driving and security, giving you the confidence of safe travel with the comfort of premium vehicles. Armed or unarmed options are available based on your needs.",
      icon: Users,
      image: "/parking-valet-helping-woman-park-her-car.jpg",
      url: "/services/chauffeurs",
      features: [
        "Dual-trained chauffeurs",
        "Luxury vehicle options",
        "Personal protection skills",
        "Discretionary service",
        "Flexible arrangements"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Comprehensive Security Solutions
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                At BK Security Services, we deliver tailored security solutions to keep you, your assets, and your property safe. Explore our professional services below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  variant="outline"
                  className="border-white text-blue-900 hover:bg-white hover:text-blue-900"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 6085933
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Service Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {service.title}
                      </Badge>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-blue-600 font-medium mb-6">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={service.url}>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Service Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Protect What Matters Most?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Your safety deserves more than a quick fix—it requires a trusted partner. At BK Security Services, we provide tailored solutions backed by experience, professionalism, and 24/7 support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call us now at 6085933
                </Button>
                <Button 
                  onClick={handleConsultation}
                  size="lg" 
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">Licensed</div>
                  <div className="text-sm text-gray-600">& Insured</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}