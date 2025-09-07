"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  AlertTriangle, 
  Phone, 
  Clock, 
  Shield, 
  Users, 
  FileText,
  PhoneCall,
  Zap,
  CheckCircle
} from "lucide-react";

export function EmergencyResponseSection() {
  const handleEmergencyCall = () => {
    window.location.href = "tel:6085933";
  };

  const emergencyTypes = [
    "Break-ins and unauthorized access",
    "Workplace violence or threats", 
    "Personal safety emergencies",
    "Property damage and vandalism",
    "Medical emergencies at secured locations",
    "Fire and natural disaster response"
  ];

  const responseSteps = [
    {
      step: 1,
      title: "Immediate Assessment",
      description: "Quick evaluation of the situation and threat level",
      icon: AlertTriangle,
      timeframe: "< 1 minute"
    },
    {
      step: 2,
      title: "Resource Deployment", 
      description: "Dispatch of appropriate security personnel and equipment",
      icon: Users,
      timeframe: "3-5 minutes"
    },
    {
      step: 3,
      title: "Authority Coordination",
      description: "Communication with police, fire, or medical services as needed",
      icon: Phone,
      timeframe: "As required"
    },
    {
      step: 4,
      title: "Incident Management",
      description: "Professional handling of the situation until resolved",
      icon: Shield,
      timeframe: "Until resolution"
    },
    {
      step: 5,
      title: "Follow-up Reporting",
      description: "Complete documentation and recommendations for prevention",
      icon: FileText,
      timeframe: "24 hours"
    }
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Emergency Alert Header */}
        <div className="text-center mb-12">
          <Alert className="bg-red-100 border-red-300 mb-6 max-w-2xl mx-auto">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-700 font-medium">
              <strong>EMERGENCY SECURITY SITUATIONS:</strong> Call 6085933 immediately for urgent response
            </AlertDescription>
          </Alert>
          
          <Badge variant="destructive" className="mb-4 emergency-pulse">
            24/7 Emergency Response
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            24/7 Emergency Security Response
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Security emergencies require immediate professional response. Our emergency response team 
            is available around the clock to handle urgent security situations and coordinate with 
            local authorities when necessary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Emergency Situations */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Emergency Situations We Handle
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Immediate response for critical security incidents
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {emergencyTypes.map((situation, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{situation}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-red-800">Average Response Time</span>
                  </div>
                  <div className="text-2xl font-bold text-red-700 mb-1">3-5 Minutes</div>
                  <div className="text-sm text-red-600">From call to security deployment</div>
                </div>

                <Button 
                  onClick={handleEmergencyCall}
                  className="w-full bg-red-600 hover:bg-red-700 text-white emergency-pulse text-lg py-6"
                >
                  <PhoneCall className="h-5 w-5 mr-2" />
                  EMERGENCY: Call 6085933
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Response Process */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Our Emergency Response Process
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Professional protocol for immediate security response
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {responseSteps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{step.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {step.timeframe}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Coverage */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm border">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Complete Emergency Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600">
                Our emergency response team is staffed around the clock, 365 days a year.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Trained Professionals</h4>
              <p className="text-gray-600">
                Emergency response specialists with law enforcement and military backgrounds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Coordinated Response</h4>
              <p className="text-gray-600">
                Direct coordination with local police, fire, and medical emergency services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900 rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              For Emergency Security Situations
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-red-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">6085933</div>
                  <div className="text-sm text-gray-300">24/7 Emergency Line</div>
                </div>
              </div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-300">
                <div className="font-medium">Response Time: 3-5 minutes</div>
                <div className="text-sm">Professional security deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}