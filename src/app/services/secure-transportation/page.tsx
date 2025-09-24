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
  Plane,
  AlertTriangle
} from "lucide-react";

export default function SecureTransportationPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleConsultation = () => {
    window.location.href = "/#contact";
  };

  const serviceFeatures = [
    "Armored and bulletproof vehicle options",
    "Security-trained professional drivers",
    "Real-time threat assessment and route planning",
    "Emergency response and medical support",
    "Discreet and unmarked vehicles available"
  ];

  const transportationTypes = [
    {
      title: "Armored Vehicles",
      description: "Military-grade protection with bulletproof glass, reinforced bodywork, and advanced security systems for high-risk situations.",
      icon: Shield,
      image: "/high-angle-guard-woman-watching-area.jpg",
      features: [
        "Ballistic protection up to Level B7",
        "Run-flat tires and self-sealing fuel tanks",
        "Emergency communication systems",
        "Smoke screen and countermeasures",
        "Medical equipment and first aid"
      ]
    },
    {
      title: "VIP Executive Transport", 
      description: "Luxury vehicles with integrated security features for executives, dignitaries, and high-profile individuals requiring discreet protection.",
      icon: User,
      image: "/professional-safeguards-team-work.jpg",
      features: [
        "High-end luxury sedans and SUVs",
        "Tinted windows and privacy partitions",
        "GPS tracking and monitoring systems",
        "Professional security drivers",
        "Concierge-level service"
      ]
    },
    {
      title: "Emergency Evacuation",
      description: "Rapid response vehicles for emergency situations, medical evacuations, and crisis management with specialized equipment.",
      icon: AlertTriangle,
      image: "/high-angle-security-man-working.jpg",
      features: [
        "Rapid deployment capabilities",
        "Medical equipment and supplies",
        "Emergency communication systems",
        "Multi-passenger capacity",
        "24/7 standby availability"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Military-Grade Protection",
      description: "Our vehicles meet the highest security standards with advanced armor and countermeasure systems."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock secure transportation services with immediate response capabilities."
    },
    {
      icon: Award,
      title: "Trained Professionals",
      description: "Drivers with military, law enforcement, and security backgrounds with extensive training."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick deployment and emergency evacuation capabilities when every second counts."
    }
  ];

  const serviceAreas = [
    {
      icon: MapPin,
      title: "Local Transport",
      description: "Secure daily transportation for work, meetings, and local activities with route optimization."
    },
    {
      icon: Plane,
      title: "Airport Services",
      description: "Secure pickup and drop-off services to and from airports with advance security coordination."
    },
    {
      icon: Briefcase,
      title: "Business Events",
      description: "Transportation for corporate events, conferences, and high-profile business meetings."
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Home-to-work transportation with residential security integration and monitoring."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 pt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                  Secure Transportation
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Secure Transportation Services
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  Military-grade protection on wheels. From armored vehicles to VIP transport, we provide secure transportation for any threat level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleConsultation}
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    onClick={handleEmergencyCall}
                    size="lg" 
                    variant="outline"
                    className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/elegant-uber-driver-giving-taxi-ride.jpg"
                  alt="Secure Transportation Services"
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
                When your safety depends on secure transportation, you need more than just a vehicle. Our fleet includes armored cars, luxury VIP transport, and emergency response vehicles—all operated by security-trained professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center p-2 hover:shadow-lg transition-shadow">
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

        {/* Transportation Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Transportation Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide specialized secure transportation for different threat levels and requirements.
              </p>
            </div>

            <div className="space-y-16">
              {transportationTypes.map((service, index) => (
                <div 
                  key={service.title}
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
                      onClick={handleEmergencyCall}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Contact Us
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Coverage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our secure transportation services cover all aspects of your travel and security needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                      <area.icon className="h-8 w-8 text-blue-600" />
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

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Security Features
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our secure transportation services provide comprehensive protection for all your travel needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Armored Protection
                  </h3>
                  <p className="text-gray-600">
                    Military-grade ballistic protection with reinforced bodywork and bulletproof glass.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600">
                    Round-the-clock secure transportation with immediate response capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-gray-600">
                    GPS tracking, threat assessment, and continuous monitoring throughout your journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Emergency Response
                  </h3>
                  <p className="text-gray-600">
                    Immediate emergency response with medical support and crisis management capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                    <Lock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Discreet Service
                  </h3>
                  <p className="text-gray-600">
                    Unmarked vehicles and professional discretion for sensitive transportation needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Trained Professionals
                  </h3>
                  <p className="text-gray-600">
                    Security-trained drivers with military and law enforcement backgrounds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Secure Transportation?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Call +592 608 5933 or click below to schedule your Free Security Consultation. Our team will assess your transportation needs and provide a customized security solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  onClick={handleEmergencyCall}
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Button>
                <Button 
                  onClick={handleConsultation}
                  size="lg" 
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-900"
                >
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" color="blue" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Clock className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-blue-100">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">Armored</div>
                  <div className="text-sm text-blue-100">Vehicles</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-100">Clients Served</div>
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
