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
  AlertTriangle,
  Eye,
  Lock,
  Zap
} from "lucide-react";

export default function ArmedUnarmedSecurityPage() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+5926085933";
  };

  const handleConsultation = () => {
    window.location.href = "/#contact";
  };

  const armedFeatures = [
    "Licensed and background-checked professionals",
    "Armed or unarmed options based on your needs", 
    "24/7 availability for short or long-term assignments",
    "On-site presence for businesses, events, and residential areas",
    "Immediate emergency response"
  ];

  const serviceTypes = [
    {
      title: "Armed Security Guards",
      description: "Highly trained professionals equipped with firearms for high-risk situations requiring maximum protection.",
      icon: Shield,
      image: "Armed Security Guard.jpg",
      features: [
        "Firearms training and certification",
        "Threat assessment and neutralization",
        "High-risk environment protection",
        "Emergency response protocols",
        "Continuous training updates"
      ]
    },
    {
      title: "Unarmed Security Guards", 
      description: "Professional security personnel providing visible deterrence and protection through presence and communication.",
      icon: User,
      image: "front-view-guard-men-team-work.jpg",
      features: [
        "Conflict resolution training",
        "Access control and monitoring",
        "Customer service oriented",
        "Event and crowd management",
        "Surveillance and reporting"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "All our guards are fully licensed, background-checked, and continuously trained to meet the highest industry standards."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock protection with flexible scheduling for short-term events or long-term assignments."
    },
    {
      icon: Shield,
      title: "Experienced Professionals",
      description: "Our team brings years of experience in various security environments and threat scenarios."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Immediate emergency response capabilities with direct communication to local authorities when needed."
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
                  Professional Security
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Armed & Unarmed Security Guards
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                  Protect your business, property, or event with professional guards who are fully licensed, reliable, and available 24/7.
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
                    className="border-white text-navy-600 hover:bg-white hover:text-blue-600"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="front-view-guard-men-team-work.jpg"
                  alt="Professional Security Guards"
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
                Not every situation needs the same level of security. That's why we offer both armed and unarmed personnel. Whether you need a visible presence to deter threats or highly trained protection against serious risks, our guards are ready to step in.
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

        {/* Service Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You Get
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive security solutions are tailored to meet your specific needs and risk level.
              </p>
            </div>

            <div className="space-y-16">
              {serviceTypes.map((service, index) => (
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

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Security Coverage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our armed and unarmed security services provide comprehensive protection for all your security needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Licensed Professionals
                  </h3>
                  <p className="text-gray-600">
                    All guards are fully licensed, background-checked, and continuously trained to meet industry standards.
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
                    Round-the-clock protection with flexible scheduling for any duration of assignment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    On-Site Presence
                  </h3>
                  <p className="text-gray-600">
                    Visible security presence for businesses, events, and residential areas to deter potential threats.
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
                    Immediate response to security incidents with direct communication to emergency services.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                    <Lock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Flexible Options
                  </h3>
                  <p className="text-gray-600">
                    Armed or unarmed personnel based on your specific security requirements and risk assessment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Highly trained security professionals with extensive experience in various security environments.
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
                Ready to Secure Your Property?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Call +592 608 5933 or click below to schedule your Free Security Consultation. Our team will assess your needs and provide a customized security solution.
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
                  <div className="text-2xl font-bold text-white">Licensed</div>
                  <div className="text-sm text-blue-100">& Insured</div>
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
