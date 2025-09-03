import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();
    const { firstName, lastName, email, company, phone, message, source } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure email transporter
    // Note: In production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'support@asterivo.ca',
        pass: process.env.EMAIL_PASSWORD || '' // This needs to be set as an environment variable
      }
    });

    // Determine the form context based on source
    const getFormContext = (source: string) => {
      switch (source) {
        case 'guide-download':
        case 'guide':
          return { type: 'Guide Download', priority: 'Low', description: 'Downloaded AI Quick Wins Guide' };
        case 'pricing-starter':
        case 'pricing-growth':
        case 'pricing-scale':
          return { type: 'Pricing Inquiry', priority: 'High', description: `Interested in ${source.replace('pricing-', '')} plan` };
        case 'solutions-hero':
        case 'solutions-assessment':
          return { type: 'Solutions Inquiry', priority: 'High', description: 'Interested in custom AI solutions' };
        case 'lead-response-system':
        case 'quote-automation':
        case 'invoice-processing':
        case 'report-generation':
          return { type: 'Specific Solution', priority: 'High', description: `Interested in ${source.replace(/-/g, ' ')}` };
        default:
          return { type: 'General Inquiry', priority: 'Medium', description: 'General contact form submission' };
      }
    };

    const context = getFormContext(source);

    // Email content for notification to Asterivo
    const notificationEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .priority-high { border-left: 4px solid #dc2626; background: #fef2f2; padding: 15px; }
          .priority-medium { border-left: 4px solid #f59e0b; background: #fffbeb; padding: 15px; }
          .priority-low { border-left: 4px solid #059669; background: #ecfdf5; padding: 15px; }
          .details { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .footer { background: #f1f5f9; padding: 15px; text-align: center; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🚀 New Lead from Asterivo.ca</h1>
        </div>
        
        <div class="content">
          <div class="priority-${context.priority.toLowerCase()}">
            <strong>Priority: ${context.priority}</strong> | 
            <strong>Type:</strong> ${context.type} | 
            <strong>Source:</strong> ${source}
          </div>

          <div class="details">
            <h2>Contact Information</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company}</p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>

          <div class="details">
            <h2>Lead Context</h2>
            <p><strong>Interest:</strong> ${context.description}</p>
            <p><strong>Source Page:</strong> ${source}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div class="details">
            <h2>Recommended Next Steps</h2>
            ${context.priority === 'High' ? 
              '<p>⚡ <strong>High Priority Lead</strong> - Respond within 2 hours for best conversion</p>' : ''}
            <ul>
              <li>Send personalized follow-up email within 24 hours</li>
              <li>Schedule discovery call if interested in paid services</li>
              <li>Add to CRM with appropriate tags and source attribution</li>
              ${context.type === 'Guide Download' ? 
                '<li>Send AI Quick Wins implementation guide and offer consultation</li>' : 
                '<li>Prepare custom proposal based on their specific interest area</li>'}
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>This lead was generated from asterivo.ca | Timestamp: ${new Date().toISOString()}</p>
        </div>
      </body>
      </html>
    `;

    // Email content for confirmation to the lead
    const confirmationEmailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .highlight { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Thank you, ${firstName}!</h1>
          <p>We've received your information</p>
        </div>
        
        <div class="content">
          <p>Hi ${firstName},</p>
          
          <p>Thanks for your interest in AI automation for ${company}. We've received your information and will get back to you within 24 hours.</p>

          <div class="highlight">
            <h3>What happens next?</h3>
            <ul>
              <li>We'll review your specific needs and use case</li>
              <li>Prepare a customized recommendation</li>
              <li>Schedule a brief call to discuss your options</li>
              <li>Provide you with a clear implementation roadmap</li>
            </ul>
          </div>

          ${context.type === 'Guide Download' ? 
            '<p>In the meantime, you can <a href="https://asterivo.ca/guide#download">download your AI Quick Wins Guide</a> if you haven\'t already.</p>' : ''}

          <p>If you have any immediate questions, feel free to reply to this email.</p>

          <p>Best regards,<br>
          The Asterivo Team<br>
          <a href="https://asterivo.ca">asterivo.ca</a></p>
        </div>
      </body>
      </html>
    `;

    // Send notification email to Asterivo
    await transporter.sendMail({
      from: `"Asterivo Website" <support@asterivo.ca>`,
      to: 'asterivo.ca@gmail.com',
      subject: `🚀 New ${context.type} Lead: ${firstName} ${lastName} from ${company}`,
      html: notificationEmailContent
    });

    // Send confirmation email to the lead
    await transporter.sendMail({
      from: `"Asterivo" <support@asterivo.ca>`,
      to: email,
      subject: `Thanks for your interest, ${firstName}! We'll be in touch soon.`,
      html: confirmationEmailContent
    });

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}