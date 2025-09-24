"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  User, 
  FileText, 
  Send, 
  CheckCircle,
  AlertCircle,
  Shield
} from "lucide-react";

export default function EmploymentApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 mt-0">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in joining BK Security Services. We will review your application and contact you within 3-5 business days.
              </p>
              <Button 
                onClick={() => setSubmitStatus('idle')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit Another Application
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-navy-100 text-navy-800 border-navy-200">
            <Shield className="h-4 w-4 mr-2" />
            Employment Application
          </Badge>
          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Join Our Security Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete the form below to apply for a position with BK Security Services. 
            All information provided will be kept confidential and used solely for employment purposes.
          </p>
        </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy-900 font-extrabold text-xl">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="surname" 
                      name="surname" 
                      placeholder="Surname / Apellido *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="First Name / Nombre de Pila *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="middleInitial" 
                      name="middleInitial" 
                      placeholder="Middle Initial / Segundo Nombre" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="dateOfBirth" 
                      name="dateOfBirth" 
                      type="date" 
                      placeholder="Date of Birth (D.O.B) *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="placeOfBirth" 
                      name="placeOfBirth" 
                      placeholder="Place of Birth *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="age" 
                      name="age" 
                      type="number" 
                      placeholder="Age *" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Textarea 
                    id="address" 
                    name="address" 
                    placeholder="Address / Dirección *" 
                    required 
                  />
                </div>

                <div>
                  <Textarea 
                    id="previousAddress" 
                    name="previousAddress" 
                    placeholder="Previous Address / Dirección Anterior" 
                  />
                </div>

                <div>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="E-mail Address / Dirección de Correo Electrónico *" 
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="phoneCell" 
                      name="phoneCell" 
                      type="tel" 
                      placeholder="Cell Phone / Llamada *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="phoneHome" 
                      name="phoneHome" 
                      type="tel" 
                      placeholder="Home Phone / Casa" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="phoneOther" 
                      name="phoneOther" 
                      type="tel" 
                      placeholder="Other Phone / Otro" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm font-medium text-navy-900 mb-2">Gender / Sexo *</div>
                    <RadioGroup name="gender" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male / Hombre</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female / Hembra</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Input 
                      id="maritalStatus" 
                      name="maritalStatus" 
                      placeholder="Marital Status / Estado Civil" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="religion" 
                      name="religion" 
                      placeholder="Religion / Organización Religiosa" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="nationalId" 
                      name="nationalId" 
                      placeholder="National ID # / Identificación Nacional *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="tin" 
                      name="tin" 
                      placeholder="TIN # / Estano" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="passport" 
                      name="passport" 
                      placeholder="Passport No / Número de Pasaporte" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="nationalInsurance" 
                      name="nationalInsurance" 
                      placeholder="National Insurance No / Seguridad Social" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="driversLicense" 
                      name="driversLicense" 
                      placeholder="Driver's License No / Permiso de Conducir" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="vehicleClass" 
                      name="vehicleClass" 
                      placeholder="Vehicle Class (ES) / Clase de Vehículo" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="nextOfKin" 
                      name="nextOfKin" 
                      placeholder="Next of Kin / Parientes Más Cercanos *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="kinRelationship" 
                      name="kinRelationship" 
                      placeholder="Relationship to You / Relación Contigo *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="kinOccupation" 
                      name="kinOccupation" 
                      placeholder="Occupation / Ocupación Militar" 
                    />
                  </div>
                </div>

                <div>
                  <Textarea 
                    id="kinAddress" 
                    name="kinAddress" 
                    placeholder="Address / Dirección" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="kinPhoneCell" 
                      name="kinPhoneCell" 
                      type="tel" 
                      placeholder="Next of Kin Cell Phone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="kinPhoneHome" 
                      name="kinPhoneHome" 
                      type="tel" 
                      placeholder="Next of Kin Home Phone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="kinPhoneOther" 
                      name="kinPhoneOther" 
                      type="tel" 
                      placeholder="Next of Kin Other Phone" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="positionApplying" 
                      name="positionApplying" 
                      placeholder="Position Applying for *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="workExperience" 
                      name="workExperience" 
                      placeholder="Work Experience *" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <Textarea 
                    id="allergies" 
                    name="allergies" 
                    placeholder="Please State any food and Medication you are allergic to" 
                  />
                </div>

                <div>
                  <Textarea 
                    id="illnesses" 
                    name="illnesses" 
                    placeholder="Please State If You Suffering from Any Long Term/ Permanent Illnesses" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Spouse/Partner Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Spouse / Partner Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="spouseName" 
                      name="spouseName" 
                      placeholder="Name of Spouse" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="spouseAge" 
                      name="spouseAge" 
                      type="number" 
                      placeholder="Age of Spouse" 
                    />
                  </div>
                </div>

                <div>
                  <Textarea 
                    id="spouseAddress" 
                    name="spouseAddress" 
                    placeholder="Address" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Input 
                      id="spousePhoneCell" 
                      name="spousePhoneCell" 
                      type="tel" 
                      placeholder="Spouse Cell Phone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="spousePhoneHome" 
                      name="spousePhoneHome" 
                      type="tel" 
                      placeholder="Spouse Home Phone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="spousePhoneOther" 
                      name="spousePhoneOther" 
                      type="tel" 
                      placeholder="Spouse Other Phone" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="spouseEmployed" 
                      name="spouseEmployed" 
                      placeholder="Is Spouse Employed?" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="spouseWorkplace" 
                      name="spouseWorkplace" 
                      placeholder="Place of Employment" 
                    />
                  </div>
                </div>

                <div>
                  <Input 
                    id="spousePosition" 
                    name="spousePosition" 
                    placeholder="Position held by Spouse" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Children/Dependents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Children / Dependents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="child1Name" 
                      name="child1Name" 
                      placeholder="Child 1 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="child1Age" 
                      name="child1Age" 
                      type="number" 
                      placeholder="Child 1 Age" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="child2Name" 
                      name="child2Name" 
                      placeholder="Child 2 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="child2Age" 
                      name="child2Age" 
                      type="number" 
                      placeholder="Child 2 Age" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="child3Name" 
                      name="child3Name" 
                      placeholder="Child 3 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="child3Age" 
                      name="child3Age" 
                      type="number" 
                      placeholder="Child 3 Age" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Background */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Education Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Input 
                      id="school1Name" 
                      name="school1Name" 
                      placeholder="School 1 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school1From" 
                      name="school1From" 
                      type="date" 
                      placeholder="From" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school1To" 
                      name="school1To" 
                      type="date" 
                      placeholder="To" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school1Cert" 
                      name="school1Cert" 
                      placeholder="Certificates Received" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Input 
                      id="school2Name" 
                      name="school2Name" 
                      placeholder="School 2 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school2From" 
                      name="school2From" 
                      type="date" 
                      placeholder="From" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school2To" 
                      name="school2To" 
                      type="date" 
                      placeholder="To" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school2Cert" 
                      name="school2Cert" 
                      placeholder="Certificates Received" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Input 
                      id="school3Name" 
                      name="school3Name" 
                      placeholder="School 3 Name" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school3From" 
                      name="school3From" 
                      type="date" 
                      placeholder="From" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school3To" 
                      name="school3To" 
                      type="date" 
                      placeholder="To" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="school3Cert" 
                      name="school3Cert" 
                      placeholder="Certificates Received" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Employment History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Employment History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <Input 
                      id="job1Place" 
                      name="job1Place" 
                      placeholder="Last Place of Work" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job1Position" 
                      name="job1Position" 
                      placeholder="Position Held" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job1Period" 
                      name="job1Period" 
                      placeholder="Period of Work" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job1Phone" 
                      name="job1Phone" 
                      type="tel" 
                      placeholder="Telephone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job1Reason" 
                      name="job1Reason" 
                      placeholder="Reason for Leaving" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <Input 
                      id="job2Place" 
                      name="job2Place" 
                      placeholder="Previous Place of Work" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job2Position" 
                      name="job2Position" 
                      placeholder="Position Held" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job2Period" 
                      name="job2Period" 
                      placeholder="Period of Work" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job2Phone" 
                      name="job2Phone" 
                      type="tel" 
                      placeholder="Telephone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="job2Reason" 
                      name="job2Reason" 
                      placeholder="Reason for Leaving" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="ref1Name" 
                      name="ref1Name" 
                      placeholder="Reference 1 Name & Phone" 
                    />
                  </div>
                  <div>
                    <Input 
                      id="ref2Name" 
                      name="ref2Name" 
                      placeholder="Reference 2 Name & Phone" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disciplined Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Disciplined Services Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Have you been attached to or worked in any of the disciplined services?</Label>
                  <RadioGroup name="disciplinedServices">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="disciplinedNo" />
                      <Label htmlFor="disciplinedNo">NO</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="disciplinedYes" />
                      <Label htmlFor="disciplinedYes">YES</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="serviceName">Which Service</Label>
                    <Input id="serviceName" name="serviceName" />
                  </div>
                  <div>
                    <Label htmlFor="serviceFrom">From</Label>
                    <Input id="serviceFrom" name="serviceFrom" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="serviceTo">To</Label>
                    <Input id="serviceTo" name="serviceTo" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="highestRank">Highest Rank/Position Attained</Label>
                  <Input id="highestRank" name="highestRank" />
                </div>
              </CardContent>
            </Card>

            {/* Financial Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Financial Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debt1Place">Place Owed 1</Label>
                    <Input id="debt1Place" name="debt1Place" />
                  </div>
                  <div>
                    <Label htmlFor="debt1Status">Particulars & Status</Label>
                    <Input id="debt1Status" name="debt1Status" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debt2Place">Place Owed 2</Label>
                    <Input id="debt2Place" name="debt2Place" />
                  </div>
                  <div>
                    <Label htmlFor="debt2Status">Particulars & Status</Label>
                    <Input id="debt2Status" name="debt2Status" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="debt3Place">Place Owed 3</Label>
                    <Input id="debt3Place" name="debt3Place" />
                  </div>
                  <div>
                    <Label htmlFor="debt3Status">Particulars & Status</Label>
                    <Input id="debt3Status" name="debt3Status" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Substance Use */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Substance Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Alcoholic Drinks</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="alcoholYes" name="alcoholYes" />
                          <Label htmlFor="alcoholYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="alcoholNo" name="alcoholNo" />
                          <Label htmlFor="alcoholNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="When last used" name="alcoholLastUsed" />
                    </div>
                    <div>
                      <Label>Cigarettes, E-Cigarettes, Cigars, Pipes, Hookahs</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cigarettesYes" name="cigarettesYes" />
                          <Label htmlFor="cigarettesYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cigarettesNo" name="cigarettesNo" />
                          <Label htmlFor="cigarettesNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="When last used" name="cigarettesLastUsed" />
                    </div>
                    <div>
                      <Label>Marijuana - Smoked, in Pastry or in tea</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="marijuanaYes" name="marijuanaYes" />
                          <Label htmlFor="marijuanaYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="marijuanaNo" name="marijuanaNo" />
                          <Label htmlFor="marijuanaNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="When last used" name="marijuanaLastUsed" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Heroin Morphine</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="heroinYes" name="heroinYes" />
                          <Label htmlFor="heroinYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="heroinNo" name="heroinNo" />
                          <Label htmlFor="heroinNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="When last used" name="heroinLastUsed" />
                    </div>
                    <div>
                      <Label>Methamphetamines (Ice, Glass, Crank, Crystal Meth)</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="methYes" name="methYes" />
                          <Label htmlFor="methYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="methNo" name="methNo" />
                          <Label htmlFor="methNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="When last used" name="methLastUsed" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Affairs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Legal Affairs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Have you ever been charged by the police for any offence?</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chargedYes" name="chargedYes" />
                          <Label htmlFor="chargedYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chargedNo" name="chargedNo" />
                          <Label htmlFor="chargedNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="Particulars & Status" name="chargedDetails" />
                    </div>
                    <div>
                      <Label>Are any warrants issued against you?</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="warrantsYes" name="warrantsYes" />
                          <Label htmlFor="warrantsYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="warrantsNo" name="warrantsNo" />
                          <Label htmlFor="warrantsNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="Particulars & Status" name="warrantsDetails" />
                    </div>
                    <div>
                      <Label>Have you ever attended court as a victim, witness or otherwise?</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="courtYes" name="courtYes" />
                          <Label htmlFor="courtYes">YES</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="courtNo" name="courtNo" />
                          <Label htmlFor="courtNo">NO</Label>
                        </div>
                      </div>
                      <Input placeholder="Particulars & Status" name="courtDetails" />
                    </div>
                  </div>
                  <div>
                    <Label>Have you any cases pending in court?</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pendingYes" name="pendingYes" />
                        <Label htmlFor="pendingYes">YES</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pendingNo" name="pendingNo" />
                        <Label htmlFor="pendingNo">NO</Label>
                      </div>
                    </div>
                    <Input placeholder="Particulars & Status" name="pendingDetails" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">References</CardTitle>
                <p className="text-sm text-gray-600">
                  These must be prominent members of the community such as: Member of Parliament, Justice of the Peace, 
                  Police Officer (Inspector and above), Military Officer (Captain and above), Minister of Religion, 
                  Head Teacher and Former Employer. They must not be related to you or be former work colleagues.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <Label htmlFor="ref1Name">Name</Label>
                    <Input id="ref1Name" name="ref1Name" />
                  </div>
                  <div>
                    <Label htmlFor="ref1Place">Place of Employment</Label>
                    <Input id="ref1Place" name="ref1Place" />
                  </div>
                  <div>
                    <Label htmlFor="ref1Position">Position Held</Label>
                    <Input id="ref1Position" name="ref1Position" />
                  </div>
                  <div>
                    <Label htmlFor="ref1Phone">Telephone</Label>
                    <Input id="ref1Phone" name="ref1Phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="ref1Years">Years Known</Label>
                    <Input id="ref1Years" name="ref1Years" type="number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <Label htmlFor="ref2Name">Name</Label>
                    <Input id="ref2Name" name="ref2Name" />
                  </div>
                  <div>
                    <Label htmlFor="ref2Place">Place of Employment</Label>
                    <Input id="ref2Place" name="ref2Place" />
                  </div>
                  <div>
                    <Label htmlFor="ref2Position">Position Held</Label>
                    <Input id="ref2Position" name="ref2Position" />
                  </div>
                  <div>
                    <Label htmlFor="ref2Phone">Telephone</Label>
                    <Input id="ref2Phone" name="ref2Phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="ref2Years">Years Known</Label>
                    <Input id="ref2Years" name="ref2Years" type="number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <Label htmlFor="ref3Name">Name</Label>
                    <Input id="ref3Name" name="ref3Name" />
                  </div>
                  <div>
                    <Label htmlFor="ref3Place">Place of Employment</Label>
                    <Input id="ref3Place" name="ref3Place" />
                  </div>
                  <div>
                    <Label htmlFor="ref3Position">Position Held</Label>
                    <Input id="ref3Position" name="ref3Position" />
                  </div>
                  <div>
                    <Label htmlFor="ref3Phone">Telephone</Label>
                    <Input id="ref3Phone" name="ref3Phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="ref3Years">Years Known</Label>
                    <Input id="ref3Years" name="ref3Years" type="number" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Additional Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Textarea 
                    id="tattoos" 
                    name="tattoos" 
                    placeholder="Do you have any distinguishing marks or tattoos?" 
                  />
                </div>
                <div>
                  <Textarea 
                    id="workDays" 
                    name="workDays" 
                    placeholder="Is there any day of the week on which you cannot work? Yes, or No reason" 
                  />
                </div>
                <div>
                  <Textarea 
                    id="shifts" 
                    name="shifts" 
                    placeholder="Can you work on shifts? Yes, or No state reason why not" 
                  />
                </div>
                <div>
                  <Input 
                    id="availableFrom" 
                    name="availableFrom" 
                    type="date" 
                    placeholder="From when will you be available to work?" 
                  />
                </div>
                <div>
                  <Input 
                    id="relativeAtBK" 
                    name="relativeAtBK" 
                    placeholder="Do you have any relative or friend working at BK Security Inc.?" 
                  />
                </div>
                <div>
                  <Input 
                    id="relativeName" 
                    name="relativeName" 
                    placeholder="If yes, Name and relation to you" 
                  />
                </div>
                <div>
                  <Input 
                    id="howDidYouHear" 
                    name="howDidYouHear" 
                    placeholder="How did you become aware of BK Security Inc.?" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Required Documents Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Required Documents Upload</CardTitle>
                <p className="text-sm text-gray-600">
                  Please upload the following required documents. All files should be in PDF, JPG, or PNG format.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="passportPhotos" className="text-navy-900 font-medium">
                      Passport Size Photos (2 required) *
                    </Label>
                    <Input 
                      id="passportPhotos" 
                      name="passportPhotos" 
                      type="file" 
                      multiple 
                      accept="image/*"
                      required 
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload 2 passport size photos</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="recommendationLetters" className="text-navy-900 font-medium">
                      Recommendation Letters (2 required) *
                    </Label>
                    <Input 
                      id="recommendationLetters" 
                      name="recommendationLetters" 
                      type="file" 
                      multiple 
                      accept=".pdf,.doc,.docx"
                      required 
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Less than 6 months old</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="clearance" className="text-navy-900 font-medium">
                      Valid Clearance *
                    </Label>
                    <Input 
                      id="clearance" 
                      name="clearance" 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      required 
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Police clearance or background check</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="birthCertificate" className="text-navy-900 font-medium">
                      Birth Certificate *
                    </Label>
                    <Input 
                      id="birthCertificate" 
                      name="birthCertificate" 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      required 
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Photocopy of birth certificate</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="driversLicense" className="text-navy-900 font-medium">
                      Driver's License (if applicable)
                    </Label>
                    <Input 
                      id="driversLicenseFile" 
                      name="driversLicenseFile" 
                      type="file" 
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Copy of driver's license</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalDocs" className="text-navy-900 font-medium">
                      Additional Documents
                    </Label>
                    <Input 
                      id="additionalDocs" 
                      name="additionalDocs" 
                      type="file" 
                      multiple 
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">Any other relevant documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Declaration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900 font-extrabold text-xl">Declaration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Required Documents:</strong> You are required to produce two (2) passport size pictures, 
                    two (2) recommendation letters less than six (6) months old, a valid clearance, and a photocopy of your birth certificate.
                  </p>
                </div>
                <div className="bg-navy-50 p-4 rounded-lg border border-navy-200">
                  <p className="text-sm text-navy-800 mb-4">
                    I hereby certify that the answers and information given in this and all other documents completed by me 
                    and provided during my interview are true and correct to the best of my knowledge and belief. I have no 
                    objection to the company investigating the information contained in this and any other document which I 
                    have submitted, and acknowledge that any misrepresentation will be justification for refusal of employment 
                    or future dismissal.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      id="applicantSignature" 
                      name="applicantSignature" 
                      placeholder="Applicant's Signature *" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      id="signatureDate" 
                      name="signatureDate" 
                      type="date" 
                      placeholder="Date *" 
                      required 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 text-red-700">
                    <AlertCircle className="h-5 w-5" />
                    <span>There was an error submitting your application. Please try again.</span>
                  </div>
                </div>
              )}
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
