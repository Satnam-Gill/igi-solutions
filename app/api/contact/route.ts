import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;

if (!apiKey) {
    console.error("Missing SENDGRID_API_KEY environment variable");
} else {
    sgMail.setApiKey(apiKey);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, company, jobTitle, email, phone, message } = body;

        // Validate inputs (basic check)
        if (!fullName || !email || !message || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Construct the email content
        const msg = {
            to: process.env.SENDGRID_TO_EMAIL || 'kbushan100@gmail.com', // Recipient
            from: process.env.SENDGRID_FROM_EMAIL || 'igi.freightservices@gmail.com', // Verified sender
            subject: `New Contact Form Submission from ${fullName}`,
            text: `
        Name: ${fullName}
        Company: ${company}
        Job Title: ${jobTitle}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        if (!apiKey) {
            // Fallback or mock response if API key is not set (e.g. during development before key is added)
            console.warn("Email simulation: SendGrid API Key is missing. Email would have been sent:", msg);
            return NextResponse.json(
                { message: 'Email simulation successful (API Key missing)' },
                { status: 200 }
            );
        }

        await sgMail.send(msg);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);

        if (error.response) {
            console.error(error.response.body);
        }

        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
