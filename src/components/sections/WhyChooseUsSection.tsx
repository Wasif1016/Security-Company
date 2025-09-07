"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Clock, 
  Settings, 
  Trophy, 
  Shield, 
  MapPin,
  Award,
  CheckCircle,
  Star
} from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: boolean;
}

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Experienced Professionals",
      description: "Our team consists of highly trained security experts with backgrounds in law enforcement, military service, and specialized security operations. Every team member undergoes rigorous background checks and comprehensive training.",
      highlight: true
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Security threats don't keep regular hours, and neither do we. Our team is available around the clock for emergency response, consultations, and ongoing security operations."
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "We understand that every security challenge is unique. That's why we take the time to assess your specific needs and develop tailored security plans that fit your requirements and budget."
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Years of successful security operations have built our reputation as a trusted partner for individuals and businesses who demand the highest standards of protection."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified, licensed, and bonded for your protection. We maintain comprehensive insurance coverage and all required certifications to give you additional peace of mind."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "We know the area, understand local challenges, and have built strong relationships with law enforcement and emergency services to ensure coordinated response when needed."
    }
  ];

  const stats: Stat[] = [
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Response Time", value: 3, suffix: " min" },
    { label: "Security Incidents Prevented", value: 99, suffix: "%" },
    { label: "Years of Experience", value: 15, suffix: "+" }
  ];

  const certifications = [
    "Licensed Security Provider",
    "Bonded & Insured",
    "Background Checked Staff",
    "Emergency Response Certified",
    "Military & Law Enforcement Veterans"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Businesses and Families Trust BK Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With years of experience protecting what matters most, we've earned the trust of hundreds 
            of clients through our commitment to excellence, professionalism, and results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`h-full transition-all hover:shadow-lg ${
                  feature.highlight 
                    ? "ring-2 ring-blue-600 bg-blue-50" 
                    : "bg-white border-gray-200"
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    feature.highlight 
                      ? "bg-blue-600 text-white" 
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Our Performance Speaks for Itself
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="mt-3">
                  <Progress 
                    value={stat.value > 50 ? stat.value : stat.value * 10} 
                    className="h-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-200 mr-3" />
                <h3 className="text-2xl font-semibold">Licensed & Certified</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                We maintain all required certifications and licenses to provide professional 
                security services. Our commitment to compliance and excellence ensures you 
                receive the highest quality protection.
              </p>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-blue-100">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6">
                <Star className="h-12 w-12 text-yellow-300" />
              </div>
              <h4 className="text-xl font-semibold mb-2">5-Star Service</h4>
              <p className="text-blue-200 mb-4">
                Consistently rated as the top security provider in our area
              </p>
              <div className="flex justify-center lg:justify-end space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900">Fully Licensed</div>
            <div className="text-sm text-gray-600">State Certified</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900">Bonded & Insured</div>
            <div className="text-sm text-gray-600">Full Coverage</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900">Expert Team</div>
            <div className="text-sm text-gray-600">Trained Professionals</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900">24/7 Available</div>
            <div className="text-sm text-gray-600">Always Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}