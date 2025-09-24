import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const data: Record<string, any> = {};
    const files: File[] = [];
    
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files.push(value);
        data[key] = value.name;
      } else {
        data[key] = value;
      }
    }
    
    // Log application data
    console.log('New employment application received:', {
      timestamp: new Date().toISOString(),
      applicantName: `${data.firstName} ${data.surname}`,
      position: data.positionApplying,
      email: data.email,
      phone: data.phoneCell,
      files: files.map(f => f.name)
    });

    // Generate PDF content (simplified version)
    const pdfContent = generateApplicationPDF(data);
    
    // Prepare email attachments
    const attachments = [];
    
    // Add PDF of application form
    attachments.push({
      filename: `Employment_Application_${data.surname}_${data.firstName}.pdf`,
      content: pdfContent,
      contentType: 'application/pdf'
    });
    
    // Add uploaded files as attachments
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type
      });
    }

    // Send email
    const to = process.env.APPLICATIONS_TO || 'wasifdevelopsite@gmail.com';
    const subject = `New Employment Application - ${data.firstName} ${data.surname}`;
    const html = `
        <h2>New Employment Application Received</h2>
        <p><strong>Applicant:</strong> ${data.firstName} ${data.surname}</p>
        <p><strong>Position:</strong> ${data.positionApplying}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phoneCell}</p>
        <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Work Experience:</strong> ${data.workExperience}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        
        <h3>Attached Documents:</h3>
        <ul>
          ${files.map(f => `<li>${f.name}</li>`).join('')}
        </ul>
        
        <p>Please find the complete application form and all supporting documents attached.</p>
      `;

    await sendMail({
      to,
      subject,
      html,
      attachments,
    });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully and email sent' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('APPLICATION_SUBMIT_ERROR', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process application' 
      },
      { status: 500 }
    );
  }
}

function generateApplicationPDF(data: Record<string, any>): string {
  // This is a simplified PDF generation
  // In a real application, you'd use a proper PDF library like puppeteer or jsPDF
  const pdfContent = `
    EMPLOYMENT APPLICATION - BK SECURITY SERVICES
    
    PERSONAL INFORMATION
    Name: ${data.surname}, ${data.firstName} ${data.middleInitial || ''}
    Date of Birth: ${data.dateOfBirth}
    Place of Birth: ${data.placeOfBirth}
    Age: ${data.age}
    Address: ${data.address}
    Email: ${data.email}
    Phone: ${data.phoneCell}
    Gender: ${data.gender}
    Marital Status: ${data.maritalStatus || 'N/A'}
    Religion: ${data.religion || 'N/A'}
    
    IDENTIFICATION
    National ID: ${data.nationalId}
    TIN: ${data.tin || 'N/A'}
    Passport: ${data.passport || 'N/A'}
    Driver's License: ${data.driversLicense || 'N/A'}
    
    POSITION APPLYING FOR
    Position: ${data.positionApplying}
    Work Experience: ${data.workExperience}
    
    NEXT OF KIN
    Name: ${data.nextOfKin}
    Relationship: ${data.kinRelationship}
    Occupation: ${data.kinOccupation || 'N/A'}
    Address: ${data.kinAddress || 'N/A'}
    Phone: ${data.kinPhoneCell || 'N/A'}
    
    ADDITIONAL INFORMATION
    Allergies: ${data.allergies || 'None reported'}
    Illnesses: ${data.illnesses || 'None reported'}
    Tattoos/Marks: ${data.tattoos || 'None reported'}
    Available from: ${data.availableFrom || 'N/A'}
    How did you hear about us: ${data.howDidYouHear || 'N/A'}
    
    DECLARATION
    Applicant Signature: ${data.applicantSignature}
    Date: ${data.signatureDate}
    
    Submitted on: ${new Date().toLocaleString()}
  `;
  
  return pdfContent;
}
