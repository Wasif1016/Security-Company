"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  User, 
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Users,
  Eye,
  Lock,
  Zap,
  MapPin,
  Briefcase,
  Home,
  Plane
} from "lucide-react";

export default function ExecutiveBodyguardPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const handleConsultation = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceFeatures = [
    "Threat assessment before every assignment",
    "Discreet close protection that blends into your lifestyle",
    "Secure travel planning and escort",
    "Protection for family members when needed",
    "Experienced professionals from military & law enforcement backgrounds"
  ];

  const protectionTypes = [
    {
      title: "Executive Protection",
      description: "Comprehensive security for high-level executives, CEOs, and business leaders during work hours and business travel.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Corporate event security",
        "Business travel protection",
        "Office and meeting security",
        "Client confidentiality",
        "Risk assessment and planning"
      ]
    },
    {
      title: "VIP & Celebrity Protection", 
      description: "Discreet personal security for public figures, celebrities, and high-profile individuals requiring privacy-focused protection.",
      icon: User,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Media and paparazzi management",
        "Event and appearance security",
        "Public space protection",
        "Privacy maintenance",
        "Crowd control and management"
      ]
    },
    {
      title: "Family Protection",
      description: "Comprehensive security services for families, including protection for spouses, children, and elderly family members.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Home security coordination",
        "School and activity protection",
        "Family travel security",
        "Personal safety training",
        "Emergency response planning"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Discreet Protection",
      description: "Our bodyguards blend seamlessly into your lifestyle while maintaining constant vigilance and security."
    },
    {
      icon: Eye,
      title: "Threat Assessment",
      description: "Comprehensive risk evaluation before every assignment to ensure appropriate security measures."
    },
    {
      icon: Award,
      title: "Military & Law Enforcement",
      description: "Experienced professionals with backgrounds in special forces, military, and law enforcement."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Immediate threat neutralization and emergency response capabilities when seconds count."
    }
  ];

  const serviceAreas = [
    {
      icon: MapPin,
      title: "Local Protection",
      description: "Daily security for work, home, and local activities with seamless integration into your routine."
    },
    {
      icon: Plane,
      title: "Travel Security",
      description: "International and domestic travel protection with advance planning and on-site security."
    },
    {
      icon: Briefcase,
      title: "Business Events",
      description: "Security for meetings, conferences, and corporate events with professional discretion."
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Home protection and family security with 24/7 monitoring and response capabilities."
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
                  Executive Protection
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Executive Bodyguard Services
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  Discreet Personal Protection You Can Rely On. Trusted bodyguards for executives, VIPs, and families who demand safety without compromise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleConsultation}
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Book Your Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleEmergencyCall}
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Executive Bodyguard Protection"
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
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                High-profile individuals face unique risks. Our close protection agents ensure you stay safe whether you're at home, at work, or traveling abroad—all while respecting your privacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
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
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You Get
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our executive protection services are tailored to meet the unique security needs of high-profile individuals and their families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Protection Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Protection Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide specialized bodyguard services for different types of clients and situations.
              </p>
            </div>

            <div className="space-y-16">
              {protectionTypes.map((service, index) => (
                <div 
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Service Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <Badge variant="outline" className="text-gray-900 border-gray-900">
                        {service.title}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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

                    <Button 
                      onClick={handleConsultation}
                      className="bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
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

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Protection Wherever You Go
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our executive protection services cover all aspects of your personal and professional life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4">
                      <area.icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
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
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Safe Wherever You Go
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Call 6085933 to discuss your protection needs. Our team will provide a comprehensive security assessment and customized protection plan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 6085933
                </Button>
                <Button 
                  onClick={handleConsultation}
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Book Your Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">Discreet</div>
                  <div className="text-sm text-gray-300">Protection</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">Military</div>
                  <div className="text-sm text-gray-300">Trained</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">VIP</div>
                  <div className="text-sm text-gray-300">Experience</div>
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
