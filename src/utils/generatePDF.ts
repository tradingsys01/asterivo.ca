import jsPDF from 'jspdf';

export const generateAIQuickWinsGuide = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = 40;

  // Helper function to add text with line wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 11) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * fontSize * 0.5);
  };

  // Helper function to add a new page if needed
  const checkPageBreak = (additionalHeight: number) => {
    if (yPosition + additionalHeight > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
  };

  // Cover Page
  doc.setFillColor(59, 130, 246); // Blue background
  doc.rect(0, 0, pageWidth, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('5 AI Quick Wins', pageWidth / 2, 35, { align: 'center' });
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'normal');
  doc.text('Every Small Business Can Implement This Week', pageWidth / 2, 55, { align: 'center' });

  doc.setTextColor(0, 0, 0);
  yPosition = 120;
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('What You\'ll Learn:', margin, yPosition);
  yPosition += 20;

  const coverPoints = [
    'Smart Email Templates - Handle 80% of inquiries automatically',
    'Meeting Summary Magic - Convert notes to professional summaries',
    'Social Media Autopilot - Generate content from single pieces',
    'Invoice & Report Automation - Extract data without manual typing',
    'Smart Calendar Management - AI handles scheduling conflicts'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  coverPoints.forEach(point => {
    doc.text('• ' + point, margin + 10, yPosition);
    yPosition += 15;
  });

  yPosition += 30;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('By Asterivo - AI Automation for Small Business', pageWidth / 2, yPosition, { align: 'center' });

  // Page 2 - Introduction
  doc.addPage();
  yPosition = margin;
  
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Introduction', margin, yPosition);
  yPosition += 20;

  const introText = `Stop waiting for the "perfect" AI strategy. The businesses winning with AI right now aren't using complicated enterprise solutions - they're implementing simple, practical tools that deliver immediate results.

This guide shows you 5 proven AI strategies that:
• Take less than 1 hour each to implement
• Work with free or low-cost tools
• Deliver results within 24-48 hours
• Don't require technical expertise
• Have been tested by 100+ small businesses

Each strategy includes step-by-step instructions, screenshots, and templates you can copy and paste.`;

  yPosition = addWrappedText(introText, margin, yPosition, contentWidth, 11);

  // Quick Win #1
  checkPageBreak(60);
  yPosition += 30;
  doc.setFillColor(34, 197, 94); // Green background
  doc.rect(margin, yPosition - 10, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Quick Win #1: Smart Email Templates', margin + 10, yPosition + 5);
  
  yPosition += 35;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Problem:', margin, yPosition);
  yPosition += 15;

  const problem1 = `You spend 2-3 hours daily answering the same customer questions over and over. Common inquiries about pricing, availability, policies, and basic information eat up time you could spend growing your business.`;

  yPosition = addWrappedText(problem1, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Solution:', margin, yPosition);
  yPosition += 15;

  const solution1 = `Create AI-powered email templates that automatically detect inquiry types and suggest personalized responses. Tools like Grammarly, ChatGPT, or Claude can analyze incoming emails and generate appropriate responses in your brand voice.`;

  yPosition = addWrappedText(solution1, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Step-by-Step Implementation:', margin, yPosition);
  yPosition += 15;

  const steps1 = [
    '1. Collect your 20 most common customer emails',
    '2. Use ChatGPT to create template responses for each type',
    '3. Set up Gmail filters or Outlook rules to categorize emails',
    '4. Create quick-reply templates in your email client',
    '5. Train team members to use and customize templates'
  ];

  steps1.forEach(step => {
    yPosition = addWrappedText(step, margin + 10, yPosition, contentWidth - 10, 11);
    yPosition += 10;
  });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Expected Results: Save 10-15 hours per week', margin, yPosition);

  // Quick Win #2
  doc.addPage();
  yPosition = margin;
  
  doc.setFillColor(147, 51, 234); // Purple background
  doc.rect(margin, yPosition, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Quick Win #2: Meeting Summary Magic', margin + 10, yPosition + 15);
  
  yPosition += 45;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Problem:', margin, yPosition);
  yPosition += 15;

  const problem2 = `You spend 30-60 minutes after each meeting typing up notes, action items, and follow-ups. With multiple meetings per day, this administrative work consumes hours of productive time.`;

  yPosition = addWrappedText(problem2, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Solution:', margin, yPosition);
  yPosition += 15;

  const solution2 = `Use AI transcription and summarization tools to automatically convert meeting recordings into professional summaries with action items, decisions, and next steps highlighted.`;

  yPosition = addWrappedText(solution2, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Step-by-Step Implementation:', margin, yPosition);
  yPosition += 15;

  const steps2 = [
    '1. Use Otter.ai, Rev.com, or Zoom\'s built-in transcription',
    '2. Record all meetings (with permission)',
    '3. Copy transcript to ChatGPT with this prompt:',
    '   "Summarize this meeting transcript with: Key decisions, Action items, Next steps"',
    '4. Edit and send summary to attendees within 2 hours'
  ];

  steps2.forEach(step => {
    yPosition = addWrappedText(step, margin + 10, yPosition, contentWidth - 10, 11);
    yPosition += 10;
  });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Expected Results: Save 5-8 hours per week', margin, yPosition);

  // Quick Win #3
  doc.addPage();
  yPosition = margin;
  
  doc.setFillColor(16, 185, 129); // Teal background
  doc.rect(margin, yPosition, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Quick Win #3: Social Media Autopilot', margin + 10, yPosition + 15);
  
  yPosition += 45;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Problem:', margin, yPosition);
  yPosition += 15;

  const problem3 = `Creating fresh social media content daily feels impossible. You either post inconsistently or spend hours brainstorming, writing, and scheduling posts across platforms.`;

  yPosition = addWrappedText(problem3, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Solution:', margin, yPosition);
  yPosition += 15;

  const solution3 = `Transform one piece of content into a week's worth of social media posts using AI content multiplication strategies.`;

  yPosition = addWrappedText(solution3, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Step-by-Step Implementation:', margin, yPosition);
  yPosition += 15;

  const steps3 = [
    '1. Write one detailed blog post or case study',
    '2. Use ChatGPT to extract 7 key insights',
    '3. Create LinkedIn posts, Twitter threads, and Facebook updates',
    '4. Generate Instagram captions and story ideas',
    '5. Schedule everything using Buffer or Hootsuite'
  ];

  steps3.forEach(step => {
    yPosition = addWrappedText(step, margin + 10, yPosition, contentWidth - 10, 11);
    yPosition += 10;
  });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Expected Results: Save 6-10 hours per week', margin, yPosition);

  // Quick Win #4
  doc.addPage();
  yPosition = margin;
  
  doc.setFillColor(249, 115, 22); // Orange background
  doc.rect(margin, yPosition, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Quick Win #4: Invoice & Report Automation', margin + 10, yPosition + 15);
  
  yPosition += 45;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Problem:', margin, yPosition);
  yPosition += 15;

  const problem4 = `Manual data entry from receipts, invoices, and documents is tedious and error-prone. Creating reports from scattered information takes hours of copying and pasting.`;

  yPosition = addWrappedText(problem4, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Solution:', margin, yPosition);
  yPosition += 15;

  const solution4 = `Use AI document processing tools to extract data automatically and generate professional reports with minimal manual input.`;

  yPosition = addWrappedText(solution4, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Step-by-Step Implementation:', margin, yPosition);
  yPosition += 15;

  const steps4 = [
    '1. Use tools like Docsumo, Nanonets, or ChatGPT Vision',
    '2. Scan or photograph documents',
    '3. Extract key data points automatically',
    '4. Export to Excel or Google Sheets',
    '5. Create report templates that auto-populate'
  ];

  steps4.forEach(step => {
    yPosition = addWrappedText(step, margin + 10, yPosition, contentWidth - 10, 11);
    yPosition += 10;
  });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Expected Results: Save 4-6 hours per week', margin, yPosition);

  // Quick Win #5
  doc.addPage();
  yPosition = margin;
  
  doc.setFillColor(239, 68, 68); // Red background
  doc.rect(margin, yPosition, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Quick Win #5: Smart Calendar Management', margin + 10, yPosition + 15);
  
  yPosition += 45;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Problem:', margin, yPosition);
  yPosition += 15;

  const problem5 = `Scheduling conflicts, meeting prep, and follow-up tasks create constant interruptions. Managing multiple calendars and time zones becomes overwhelming.`;

  yPosition = addWrappedText(problem5, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('The Solution:', margin, yPosition);
  yPosition += 15;

  const solution5 = `Implement AI-powered scheduling assistants and automated calendar management to handle routine scheduling tasks.`;

  yPosition = addWrappedText(solution5, margin, yPosition, contentWidth, 11);
  yPosition += 20;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Step-by-Step Implementation:', margin, yPosition);
  yPosition += 15;

  const steps5 = [
    '1. Set up Calendly or Acuity Scheduling with AI suggestions',
    '2. Use Motion.ai or Reclaim.ai for smart time blocking',
    '3. Create automated meeting prep and follow-up workflows',
    '4. Set up ChatGPT to draft agenda templates',
    '5. Use Zapier to connect calendar with other tools'
  ];

  steps5.forEach(step => {
    yPosition = addWrappedText(step, margin + 10, yPosition, contentWidth - 10, 11);
    yPosition += 10;
  });

  yPosition += 15;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Expected Results: Save 3-5 hours per week', margin, yPosition);

  // Final page - Next Steps
  doc.addPage();
  yPosition = margin;
  
  doc.setFillColor(59, 130, 246); // Blue background
  doc.rect(margin, yPosition, contentWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Next Steps', margin + 10, yPosition + 15);
  
  yPosition += 45;
  doc.setTextColor(0, 0, 0);
  
  const nextStepsText = `Congratulations! You now have 5 proven strategies to save 25-40 hours per week using simple AI tools.

Start with just ONE strategy this week. Pick the one that addresses your biggest pain point right now.

Implementation Checklist:
□ Week 1: Implement your chosen quick win
□ Week 2: Measure time saved and add second strategy  
□ Week 3: Train team members on new processes
□ Week 4: Add third strategy and optimize workflows

Need Help Getting Started?

Asterivo specializes in helping small businesses implement AI automation without the complexity or enterprise price tag.

✓ Free 30-minute consultation
✓ Custom implementation roadmap
✓ 30-day ROI guarantee
✓ Ongoing support and training

Contact us at:
Website: asterivo.ca
Email: hello@asterivo.ca

Ready to transform your business with AI automation that actually works?

Book your free consultation today.`;

  addWrappedText(nextStepsText, margin, yPosition, contentWidth, 11);

  return doc;
};

export default generateAIQuickWinsGuide;