"use client"  

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Play, 
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  timeline: string;
  highlight: string;
}

export function ProcessSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: "Free Consultation",
      description: "Comprehensive security assessment and risk evaluation tailored to your specific needs.",
      icon: MessageSquare,
      timeline: "30-60 min",
      highlight: "No Obligation"
    },
    {
      step: 2,
      title: "Customized Plan",
      description: "Tailored security solution designed to address your unique challenges and budget.",
      icon: FileText,
      timeline: "24-48 hrs",
      highlight: "Personalized"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Seamless deployment with staff training and minimal operational disruption.",
      icon: Play,
      timeline: "1-3 days",
      highlight: "Fast Setup"
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "24/7 monitoring, regular reviews, and continuous security optimization.",
      icon: Headphones,
      timeline: "Always",
      highlight: "24/7 Support"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We Deliver Professional Security Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures you receive the most effective security solution 
            tailored to your specific needs, implemented seamlessly and supported continuously.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <Card key={step.step} className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  {/* Step Number & Icon */}
                  <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">{step.step}</span>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <Badge variant="secondary" className="mb-3 text-xs bg-blue-50 text-blue-700 border-blue-200">
                    {step.timeline}
                  </Badge>

                  {/* Title */}
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </CardTitle>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Highlight */}
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {step.highlight}
                    </span>
                  </div>
                </CardContent>

                {/* Connecting Arrow (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-blue-600" />
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Take the first step towards better security. Schedule your free consultation today 
              and let us show you how we can protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = "tel:6085933"}
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                Call 6085933 Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}