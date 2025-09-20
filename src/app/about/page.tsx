"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, CheckCircle, Award, MapPin, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                BK Security Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                For over 15 years, we’ve protected businesses, families, and individuals with trusted, tailored security solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded on the belief that safety is a necessity, not a privilege, BK Security Services has grown into a
                  trusted partner for 500+ clients—from corporate offices and retail to residential communities and high-profile individuals.
                </p>
                <p className="text-lg text-gray-700">
                  Our team is composed of highly trained professionals with backgrounds in law enforcement, military service, and
                  specialized security operations. Every member undergoes strict background checks, licensing, and continuous training.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-gray-900 flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-blue-600" />
                      <span>Licensed & Insured</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Fully certified, bonded, and insured for complete peace of mind.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-gray-900 flex items-center space-x-2">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span>Expert Personnel</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Staffed by trained professionals from law enforcement and military backgrounds.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-gray-900 flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <span>24/7 Readiness</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Rapid emergency response with average 3–5 minute dispatch.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-gray-900 flex items-center space-x-2">
                      <Award className="h-6 w-6 text-blue-600" />
                      <span>15+ Years</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">A proven track record serving clients across the region.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">Our Values</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What We Stand For</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Trust & Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Honest, dependable service with complete transparency.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Professionalism</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We uphold the highest standards in conduct and operations.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Preparedness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Available 24/7 with rapid response when it matters most.</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Customization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tailored solutions that fit your needs and budget.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Clients Choose Us - Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">Why Clients Choose Us</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Proven. Reliable. Local.</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">Licensed</div>
                <div className="text-gray-600">Bonded & Insured</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">3–5 min</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">Local</div>
                <div className="text-gray-600">Law Partnerships</div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Your peace of mind is our top priority. Whether you require ongoing protection, emergency response, or
                  specialized services, we’re ready to respond—anytime, anywhere.
                </p>
                <p className="text-lg text-gray-700">
                  We don’t just provide security—we provide confidence, safety, and peace of mind.
                </p>
              </div>
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold flex items-center">
                    <Star className="h-6 w-6 text-yellow-300 mr-2" /> Trusted by Businesses & Families
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100">Clients Protected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-blue-100">On-Call Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-blue-100">Licensed Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">3–5 min</div>
                      <div className="text-blue-100">Avg Response</div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={() => {
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100"
                    >
                      Talk to Our Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


