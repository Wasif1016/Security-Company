"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Building2,
  Home,
  User
} from "lucide-react";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  category: "business" | "residential" | "executive";
  service: string;
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      content: "BK Security has been protecting our retail locations for over two years. Their guards are professional, well-trained, and have significantly reduced theft and incidents at our stores. We couldn't be happier with their service.",
      author: "Sarah Johnson",
      role: "Regional Retail Manager",
      company: "Metro Shopping Centers",
      rating: 5,
      category: "business",
      service: "Retail Security"
    },
    {
      id: "2", 
      content: "After some concerning incidents in our neighborhood, we hired BK Security for residential protection. Their team is discreet, professional, and has given our family complete peace of mind.",
      author: "Michael Chen",
      role: "Homeowner",
      company: "Westside Estates",
      rating: 5,
      category: "residential",
      service: "Residential Protection"
    },
    {
      id: "3",
      content: "As a business executive, I need security that doesn't interfere with my work. BK Security's bodyguard services are exactly what I was looking for - professional, discreet, and highly effective.",
      author: "David Rodriguez",
      role: "CEO",
      company: "TechCorp Industries",
      rating: 5,
      category: "executive",
      service: "Executive Protection"
    },
    {
      id: "4",
      content: "The cash in transit service from BK Security has been flawless. Their armed guards and secure vehicles give us confidence that our daily bank deposits are always safe.",
      author: "Jennifer Walsh",
      role: "Operations Manager",
      company: "Downtown Restaurants Group",
      rating: 5,
      category: "business",
      service: "Cash in Transit"
    },
    {
      id: "5",
      content: "When we needed emergency security response during a break-in attempt, BK Security was on-site within 4 minutes. Their professionalism and quick response prevented what could have been a major incident.",
      author: "Robert Kim",
      role: "Facility Manager",
      company: "Industrial Complex",
      rating: 5,
      category: "business",
      service: "Emergency Response"
    },
    {
      id: "6",
      content: "The 24/7 monitoring service has been invaluable for our medical facility. The team responds immediately to any alerts and coordinates seamlessly with our staff and emergency services.",
      author: "Dr. Amanda Foster",
      role: "Chief Administrator",
      company: "Regional Medical Center",
      rating: 5,
      category: "business",
      service: "24/7 Monitoring"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "business":
        return Building2;
      case "residential":
        return Home;
      case "executive":
        return User;
      default:
        return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "business":
        return "bg-blue-100 text-blue-800";
      case "residential":
        return "bg-green-100 text-green-800";
      case "executive":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const IconComponent = getCategoryIcon(currentTestimonial.category);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say About BK Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses and families say about 
            our professional security services and commitment to excellence.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
            
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-6 w-6 ${
                        star <= currentTestimonial.rating 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-blue-600 text-white text-lg font-semibold">
                      {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center md:text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {currentTestimonial.role}
                    </div>
                    {currentTestimonial.company && (
                      <div className="text-sm text-gray-500">
                        {currentTestimonial.company}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge className={getCategoryColor(currentTestimonial.category)}>
                    <IconComponent className="h-3 w-3 mr-1" />
                    {currentTestimonial.service}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? "bg-blue-600" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Clients Protected</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Emergency Response</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same professional security service that has earned us 
              5-star reviews from businesses and families across the region.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}