import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Asterivo company context for AI assistant
const ASTERIVO_CONTEXT = `You are Asterivo's AI assistant. Asterivo helps small businesses automate repetitive tasks and build professional websites quickly.

SERVICES & PRICING:
Website in a Day:
- Launch Day ($997): 3 pages + AI chatbot, built in 8 hours
- Business Day ($2,497): 5 pages + AI + automation features  
- AI-Powered Day ($4,997): 10 pages + advanced AI integration

AI Automation (Monthly):
- Starter ($497/month): Basic workflow automation
- Growth ($997/month): Advanced automation + integrations
- Scale ($1,997/month): Enterprise-level automation

KEY BENEFITS:
- Save 10+ hours per week through automation
- ROI typically seen within 30 days
- Same-day website delivery (8 hours)
- No enterprise price tags - built for small business

COMMON AUTOMATIONS:
- Lead response and qualification
- Email marketing sequences  
- Data entry and reporting
- Customer support responses
- Social media posting
- Invoice and quote generation

CONTACT: When users ask for consultations, detailed proposals, or want to schedule calls, ALWAYS direct them to the contact form at "asterivo.ca/contact/". Response time within 2 business hours.

WEBSITE LINKS: You can reference these clickable pages:
- asterivo.ca/contact/ (contact form)
- /services (services overview)  
- /pricing (pricing details)
- /website-in-a-day (Website in a Day info)

IMPORTANT INSTRUCTIONS:
- Be helpful, conversational, and focus on how Asterivo can solve their specific business problems
- Ask follow-up questions to understand their needs  
- Keep responses concise but informative
- When users want consultations, proposals, or detailed plans, direct them to asterivo.ca/contact/ immediately
- ALWAYS use "asterivo.ca/contact/" as the contact form URL (with trailing slash)
- You can mention /services, /pricing, or other pages when relevant - they will become clickable links
- Always mention "2 business hours response time" when directing to contact form
- Don't get too deep into technical details - save that for the consultation`;

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export async function POST(req: NextRequest) {
  let requestData;
  
  try {
    // Parse request body once
    requestData = await req.json();
    const { message, conversationHistory } = requestData;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if API key is configured and valid
    if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_claude_api_key_here') {
      console.warn('Claude API key not configured, using fallback responses');
      const response = generateIntelligentResponse(message, [], conversationHistory || []);
      return NextResponse.json({ response });
    }

    // Build conversation context from history
    let conversationContext = '';
    if (conversationHistory && conversationHistory.length > 0) {
      conversationContext = conversationHistory
        .slice(-10) // Keep last 10 messages for context
        .map((msg: any) => `${msg.isBot ? 'Assistant' : 'User'}: ${msg.text}`)
        .join('\n');
    }

    // Create the full prompt
    const fullPrompt = `${ASTERIVO_CONTEXT}

${conversationContext ? `Recent conversation:\n${conversationContext}\n` : ''}

Current user message: ${message}

Please respond as Asterivo's AI assistant:`;

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: fullPrompt
        }
      ]
    });

    const responseText = response.content[0]?.type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I encountered an issue processing your request.';

    return NextResponse.json({ response: responseText });

  } catch (error) {
    console.error('Claude API error:', error);
    
    // Fallback to intelligent pattern matching when API fails
    const message = requestData?.message || 'Hello';
    const conversationHistory = requestData?.conversationHistory || [];
    const fallbackResponse = generateIntelligentResponse(message, [], conversationHistory);
    
    return NextResponse.json({ response: fallbackResponse });
  }
}

function generateIntelligentResponse(message: string, context: string, history: ChatMessage[]): string {
  const lowerMessage = message.toLowerCase();
  
  // Direct requests to speak with someone
  if (lowerMessage.includes('speak to someone') || lowerMessage.includes('talk to human') || 
      lowerMessage.includes('real person') || lowerMessage.includes('sales team') ||
      lowerMessage.includes('expert') || lowerMessage.includes('specialist')) {
    return `Absolutely! Our team would love to speak with you directly.

🎯 **Connect with our experts:**
• **Best option:** [Fill out our contact form](/contact)
• **Response time:** Within 2 business hours  
• **What to expect:** Free consultation about your specific needs
• **Who you'll speak with:** Our AI automation specialists

Just mention you came from the AI chat and we'll prioritize your request!

Is there anything I can help you with in the meantime?`;
  }
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hi! I'm Asterivo's AI assistant. I can help you learn about our AI automation services and Website in a Day offering. How can I assist you today?";
  }

  // Services inquiry
  if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
    return `We offer several services to help small businesses save time and grow:

**Website in a Day:**
• Launch Day ($997) - 3 pages + AI chatbot, delivered in 8 hours
• Business Day ($2,497) - 5 pages + AI + automation features  
• AI-Powered Day ($4,997) - 10 pages + advanced AI integration

**AI Automation (Monthly):**
• Starter ($497/month) - Basic workflow automation
• Growth ($997/month) - Advanced automation + integrations
• Scale ($1,997/month) - Enterprise-level automation

Which service interests you most? I can provide more details about any of these!`;
  }

  // Pricing inquiries
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('$') || lowerMessage.includes('pricing')) {
    return `Here's our pricing structure:

**Website in a Day:**
• Launch Day: $997 (3 pages + AI chatbot)
• Business Day: $2,497 (5 pages + AI + automation)
• AI-Powered Day: $4,997 (10 pages + advanced AI)

**AI Automation (Monthly):**
• Starter: $497/month (basic automation)
• Growth: $997/month (advanced features)
• Scale: $1,997/month (enterprise-level)

All our clients typically see ROI within 30 days. Would you like details about any specific package?`;
  }

  // Website specific
  if (lowerMessage.includes('website') || lowerMessage.includes('web') || lowerMessage.includes('day')) {
    return `Our Website in a Day service gets your business online FAST! Here's how it works:

✅ **8-Hour Delivery Promise** - Your website goes live the same business day
✅ **Professional Design** - Custom-built, not templates
✅ **AI Integration** - Smart chatbots and automation included
✅ **Mobile Optimized** - Looks perfect on all devices

**Three Options:**
• Launch Day ($997) - Perfect for getting started quickly
• Business Day ($2,497) - Includes automation features
• AI-Powered Day ($4,997) - Full AI integration

Want to see how this could work for your business?`;
  }

  // Automation specific
  if (lowerMessage.includes('automat') || lowerMessage.includes('ai') || lowerMessage.includes('process') || lowerMessage.includes('save time')) {
    return `Our AI automation helps you save 10+ hours per week by automating:

🤖 **Lead Management** - Instant response and qualification
📧 **Email Marketing** - Automated sequences and follow-ups
📊 **Data Entry & Reporting** - No more manual input
💬 **Customer Support** - AI-powered response system
📱 **Social Media** - Automated posting and engagement
💰 **Invoicing** - Auto-generate quotes and invoices

Most clients see ROI within 30 days. What processes are taking up most of your time right now?`;
  }

  // Contact/getting started
  if (lowerMessage.includes('contact') || lowerMessage.includes('get started') || lowerMessage.includes('call') || lowerMessage.includes('email') || lowerMessage.includes('consultation')) {
    return `Great! I'd love to help you get started. Here's the best way to connect:

🎯 **Free Consultation** - [Fill out our contact form here](/contact)
⚡ **Quick Response** - We respond within 2 business hours
💡 **Custom Solution** - We'll discuss your specific needs
📈 **ROI Planning** - See exactly how we'll save you time

What type of service interests you most? I can help guide you to the right solution before you reach out!`;
  }

  // ROI/results questions
  if (lowerMessage.includes('roi') || lowerMessage.includes('results') || lowerMessage.includes('save') || lowerMessage.includes('worth it')) {
    return `Our clients typically see amazing results:

📈 **ROI Timeline:** 30 days average
⏱️ **Time Savings:** 10+ hours per week
💰 **Cost Reduction:** 50-70% vs hiring employees
🚀 **Growth:** 3x faster lead response times

**Real Examples:**
• Law firm automated client intake - saved 15 hours/week
• Restaurant automated reservations - 40% more bookings
• Consultant automated proposals - closed deals 2x faster

What's your biggest time-consuming task right now? I can show you exactly how we'd automate it!`;
  }

  // Timeline questions
  if (lowerMessage.includes('how long') || lowerMessage.includes('timeline') || lowerMessage.includes('when') || lowerMessage.includes('time')) {
    return `Here are our implementation timelines:

⚡ **Website in a Day:** 8 hours (same business day!)
🤖 **AI Automation Setup:** 1-2 weeks 
📚 **Team Training:** 2-4 hours
📊 **ROI Achieved:** Within 30 days typically

**Today's Timeline Example:**
• 9 AM: Kickoff call and requirements
• 12 PM: Design approval 
• 4 PM: Content and features complete
• 5 PM: Your website is LIVE!

What's your ideal timeline for getting started?`;
  }

  // Competition/alternatives
  if (lowerMessage.includes('vs') || lowerMessage.includes('compare') || lowerMessage.includes('alternative') || lowerMessage.includes('better')) {
    return `Here's why businesses choose Asterivo over alternatives:

**vs Traditional Web Agencies:**
✅ 8 hours vs 8 weeks delivery
✅ $997-$4,997 vs $10,000+ costs
✅ AI-powered vs static websites

**vs DIY Solutions:**
✅ Professional vs amateur look
✅ AI integration vs basic templates  
✅ Ongoing support vs figure-it-out-yourself

**vs Enterprise Solutions:**
✅ Small business pricing vs enterprise costs
✅ Personal service vs account managers
✅ Quick implementation vs months of setup

What specific comparison were you thinking about?`;
  }

  // Check if question is too specific/complex for general responses
  if (lowerMessage.includes('custom') || lowerMessage.includes('specific') || lowerMessage.includes('my business') || 
      lowerMessage.includes('industry') || lowerMessage.includes('unique') || lowerMessage.includes('tailored') ||
      lowerMessage.includes('integration') || lowerMessage.includes('api') || lowerMessage.includes('complex')) {
    return `That's a great question that would benefit from a personalized discussion! 

While I can provide general information about our services, your specific situation sounds like it needs a custom approach. 

🎯 **Let's connect you with our team:**
• [Fill out our contact form here](/contact)
• We'll respond within 2 business hours
• Get a free consultation tailored to your needs
• Discuss custom solutions for your specific situation

In the meantime, is there anything general about our Website in a Day or AI Automation services I can help explain?`;
  }

  // Default response when uncertain
  return `I'd be happy to help! While I can provide information about our main services, your question might benefit from speaking directly with our team for the most accurate answer.

**Quick Service Overview:**
• **Website in a Day** ($997-$4,997) - Professional websites in 8 hours
• **AI Automation** ($497-$1,997/month) - Save 10+ hours per week

**For detailed questions like yours:**
🎯 **[Contact our team here](/contact)** - We respond within 2 business hours and can give you specific answers tailored to your situation.

Is there anything general about our services I can help explain while you're here?`;
}