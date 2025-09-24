import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const service = String(body.service || '').trim();
    const urgency = String(body.urgency || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO || 'wasifdevelopsite@gmail.com';

    const subject = `New Consultation Request from ${name}`;
    const html = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Urgency:</strong> ${urgency || 'normal'}</p>
      <p><strong>Message:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br/>') : 'N/A'}</p>
      <hr/>
      <p>Submitted: ${new Date().toLocaleString()}</p>
    `;

    console.log('Sending email to', toEmail);
    console.log('Subject:', subject);
    console.log('HTML:', html);
    console.log('Text:', `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nUrgency: ${urgency}\nMessage: ${message}`);

    await sendMail({
      to: toEmail,
      subject,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nUrgency: ${urgency}\nMessage: ${message}`,
    });

    console.log('Email sent successfully');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('CONTACT_SUBMIT_ERROR', error);
    return NextResponse.json({ success: false, message: 'Failed to submit' }, { status: 500 });
  }
}


