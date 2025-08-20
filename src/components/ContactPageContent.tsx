'use client';

import { useSearchParams } from 'next/navigation';
import LeadForm from '@/components/LeadForm';

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source') || 'contact-page';

  // Customize form based on source
  let formProps = {
    source: source,
    title: "Get Your Free AI Assessment",
    subtitle: "See how much time you could save with AI automation",
    buttonText: "Get My Free Assessment"
  };

  // Customize based on source
  if (source === 'assessment') {
    formProps = {
      ...formProps,
      title: "Start Your Free AI Assessment",
      subtitle: "We'll identify your biggest automation opportunities and create a custom roadmap",
      buttonText: "Start My Assessment"
    };
  } else if (source === 'strategy-session') {
    formProps = {
      ...formProps,
      title: "Book Your Strategy Session",
      subtitle: "Let's discuss your automation needs and create a custom implementation plan",
      buttonText: "Book My Strategy Session"
    };
  } else if (source === 'solve-problem') {
    formProps = {
      ...formProps,
      title: "Let's Solve Your Problem",
      subtitle: "Tell us about your specific challenge and we'll provide targeted solutions",
      buttonText: "Get My Solution"
    };
  } else if (source === 'consultation') {
    formProps = {
      ...formProps,
      title: "Book Your Free Consultation",
      subtitle: "No sales pitch - just helpful advice about your specific automation opportunities",
      buttonText: "Book Free Consultation"
    };
  } else if (source === 'homepage-hero') {
    formProps = {
      ...formProps,
      title: "Get Your Free AI Assessment",
      subtitle: "Let's identify your biggest time-wasters and prioritize quick wins for your business",
      buttonText: "Get My Free Assessment"
    };
  } else if (source === 'discovery-call') {
    formProps = {
      ...formProps,
      title: "Book Your Free Discovery Call",
      subtitle: "No sales pitch - just 15 minutes of helpful advice about your specific situation",
      buttonText: "Book Discovery Call"
    };
  } else if (source === 'ai-strategy') {
    formProps = {
      ...formProps,
      title: "Get Your AI Strategy Consultation",
      subtitle: "Develop a comprehensive AI roadmap tailored to your business objectives",
      buttonText: "Book Strategy Consultation"
    };
  } else if (source === 'custom-ai') {
    formProps = {
      ...formProps,
      title: "Discuss Your Custom AI Solution",
      subtitle: "Let's build bespoke AI solutions for your unique business processes",
      buttonText: "Start Custom Development Discussion"
    };
  } else if (source === 'automation') {
    formProps = {
      ...formProps,
      title: "Start Your Process Automation Assessment",
      subtitle: "Streamline operations and eliminate manual tasks with intelligent automation",
      buttonText: "Get Automation Assessment"
    };
  } else if (source === 'analytics') {
    formProps = {
      ...formProps,
      title: "Explore Your Analytics Solutions",
      subtitle: "Transform raw data into actionable insights with AI-powered analytics",
      buttonText: "Discuss Analytics Needs"
    };
  } else if (source === 'services-footer' || source === 'services-nav') {
    formProps = {
      ...formProps,
      title: "Schedule Your Business Transformation Consultation",
      subtitle: "Let's discuss how AI can revolutionize your operations and drive growth",
      buttonText: "Schedule Consultation"
    };
  } else if (source === 'guide-download' || source === 'guide') {
    formProps = {
      ...formProps,
      title: "Download Your Free AI Quick Wins Guide",
      subtitle: "Get instant access to 5 proven strategies that take less than a day to implement",
      buttonText: "Download Free Guide Now"
    };
  } else if (source === 'solutions-nav' || source === 'solutions-hero') {
    formProps = {
      ...formProps,
      title: "Get Your Custom AI Solution",
      subtitle: "Let's identify the perfect automation strategy for your specific business needs",
      buttonText: "Get My Custom Solution"
    };
  } else if (source === 'lead-response-system') {
    formProps = {
      ...formProps,
      title: "Implement Instant Lead Response",
      subtitle: "Stop losing leads to slow response times. Get your AI-powered lead response system",
      buttonText: "Get Lead Response System"
    };
  } else if (source === 'quote-automation') {
    formProps = {
      ...formProps,
      title: "Automate Your Quote Generation",
      subtitle: "Turn quote requests into closed deals faster with AI-powered automation",
      buttonText: "Get Quote Automation"
    };
  } else if (source === 'invoice-processing') {
    formProps = {
      ...formProps,
      title: "Automate Invoice Processing",
      subtitle: "Eliminate manual data entry and speed up your accounting workflows",
      buttonText: "Get Invoice Automation"
    };
  } else if (source === 'report-generation') {
    formProps = {
      ...formProps,
      title: "Automate Report Generation",
      subtitle: "Transform hours of manual report creation into minutes of automated insights",
      buttonText: "Get Report Automation"
    };
  } else if (source === 'social-media-automation') {
    formProps = {
      ...formProps,
      title: "Automate Social Media Content",
      subtitle: "Create consistent, engaging content across all platforms with AI assistance",
      buttonText: "Get Social Media Automation"
    };
  } else if (source === 'blog-content-system') {
    formProps = {
      ...formProps,
      title: "Implement Blog Content System",
      subtitle: "Scale your content creation with AI-powered blog writing and optimization",
      buttonText: "Get Blog Content System"
    };
  } else if (source === 'legal-document-review') {
    formProps = {
      ...formProps,
      title: "Get Legal Document Review AI",
      subtitle: "Speed up contract review and reduce legal risks with AI-powered analysis",
      buttonText: "Get Document Review System"
    };
  } else if (source === 'patient-communication') {
    formProps = {
      ...formProps,
      title: "Implement Patient Communication System",
      subtitle: "Reduce no-shows and improve patient engagement with automated communications",
      buttonText: "Get Patient Communication System"
    };
  } else if (source === 'solutions-assessment' || source === 'solutions-consultation') {
    formProps = {
      ...formProps,
      title: "Get Your Solutions Assessment",
      subtitle: "Discover which AI solutions will deliver the biggest impact for your business",
      buttonText: "Get My Assessment"
    };
  } else if (source === 'pricing-starter') {
    formProps = {
      ...formProps,
      title: "Start Your Quick Wins Plan",
      subtitle: "Get 1-2 AI implementations and start saving 10+ hours per week",
      buttonText: "Start Quick Wins Plan"
    };
  } else if (source === 'pricing-growth') {
    formProps = {
      ...formProps,
      title: "Start Your Growth Plan",
      subtitle: "Transform your workflows with 3-5 integrated AI solutions",
      buttonText: "Start Growth Plan"
    };
  } else if (source === 'pricing-scale') {
    formProps = {
      ...formProps,
      title: "Start Your Scale Plan",
      subtitle: "Unlimited AI implementations for enterprise-level automation",
      buttonText: "Start Scale Plan"
    };
  } else if (source === 'pricing-roi-calculator') {
    formProps = {
      ...formProps,
      title: "Calculate Your Specific ROI",
      subtitle: "Get a custom ROI analysis based on your business size and processes",
      buttonText: "Get My ROI Analysis"
    };
  } else if (source === 'pricing-consultation') {
    formProps = {
      ...formProps,
      title: "Book Your Free Pricing Consultation",
      subtitle: "Get a custom recommendation for the perfect plan based on your needs",
      buttonText: "Book Free Consultation"
    };
  }

  return <LeadForm {...formProps} />;
}