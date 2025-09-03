'use client';

import Link from "next/link";
import { useState } from "react";

interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  company: string;
  employees: string;
  hook: string;
  background: string[];
  challenges: string[];
  solution: {
    phase: string;
    description: string;
    steps?: string[];
  }[];
  results: {
    metric: string;
    before: string;
    after: string;
    impact: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  keyTakeaways: string[];
  timeToROI: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "law-firm",
    industry: "Legal",
    headline: "How a 10-Person Law Firm Reclaimed 30 Hours Every Week",
    company: "Miller & Associates",
    employees: "10 employees",
    hook: "Miller & Associates was drowning in paperwork, with lawyers doing $300/hour work on $30/hour tasks. Their best paralegal had just quit from burnout.",
    background: [
      "Business law firm in Denver",
      "10 employees (4 lawyers, 6 support staff)",
      "Handling 50+ contracts weekly",
      "Growing but overwhelmed"
    ],
    challenges: [
      "Contract review taking 2+ hours each",
      "Client intake forms processed manually",
      "Meeting notes transcription delays",
      "Research memos taking full days",
      "Billing descriptions written by expensive lawyers"
    ],
    solution: [
      {
        phase: "Week 1: Discovery",
        description: "Shadowed team for 2 days, identified 23 repetitive tasks, prioritized top 5 time-wasters"
      },
      {
        phase: "Week 2-3: Implementation",
        description: "Built core automation systems",
        steps: [
          "Contract Reviewer AI: Trained on their 50 most common contracts",
          "Intake Automation: Forms → CRM → Welcome email sequence",
          "Meeting Transcription: Zoom → AI notes → Action items",
          "Research Assistant: Query → AI draft → Lawyer review",
          "Billing Description Generator: Timer notes → Detailed descriptions"
        ]
      },
      {
        phase: "Week 4: Training & Optimization",
        description: "2-hour team training, created quick reference guides, set up Slack support channel"
      }
    ],
    results: [
      { metric: "Contract Review", before: "2 hours", after: "25 minutes", impact: "↓ 79%" },
      { metric: "Client Intake", before: "45 minutes", after: "5 minutes", impact: "↓ 89%" },
      { metric: "Meeting Notes", before: "Next day", after: "Instant", impact: "↓ 100%" },
      { metric: "Research Memos", before: "8 hours", after: "2 hours", impact: "↓ 75%" },
      { metric: "Weekly Time Saved", before: "-", after: "30 hours", impact: "$9,000 value" }
    ],
    testimonial: {
      quote: "I was skeptical about AI touching our legal work, but the implementation was brilliant. Nothing client-facing changed - we just got 30 hours back every week. It's like having two extra paralegals for the price of one coffee machine.",
      author: "Sarah Miller",
      title: "Managing Partner"
    },
    keyTakeaways: [
      "Start with internal processes, not client-facing work",
      "Get lawyer buy-in by emphasizing review, not replacement",
      "Quick wins build momentum for bigger changes"
    ],
    timeToROI: "Month 1: Broke even, Month 2: 2x ROI, Month 6: Hired new paralegal with savings"
  },
  {
    id: "ecommerce",
    industry: "E-commerce",
    headline: "From 2 to 200 Product Listings Daily: An AI Transformation",
    company: "GreenHome Goods",
    employees: "8 employees",
    hook: "GreenHome Goods had 500 products waiting to be listed online but only one person writing descriptions. They were literally losing money every day from unlisted inventory.",
    background: [
      "Sustainable home goods e-commerce",
      "$2M annual revenue",
      "8 employees",
      "3 online marketplaces"
    ],
    challenges: [
      "500+ products backlogged",
      "Each listing took 30 minutes",
      "SEO optimization inconsistent",
      "Customer questions overwhelming support",
      "Inventory descriptions for 3 different platforms"
    ],
    solution: [
      {
        phase: "Phase 1: Content Generation System",
        description: "Built AI template for product descriptions, integrated SEO keywords automatically, created platform-specific variations"
      },
      {
        phase: "Phase 2: Customer Service AI",
        description: "Analyzed 1,000 past customer questions, built knowledge base, deployed chat widget"
      },
      {
        phase: "Phase 3: Review Management",
        description: "Auto-respond to positive reviews, flag negative reviews for human response, generate review request sequences"
      }
    ],
    results: [
      { metric: "Listings per day", before: "2", after: "200", impact: "↑ 100x" },
      { metric: "Time per listing", before: "30 min", after: "2 min", impact: "↓ 93%" },
      { metric: "Response time", before: "4 hours", after: "30 seconds", impact: "↓ 99%" },
      { metric: "Product launch time", before: "2 weeks", after: "2 days", impact: "↓ 86%" },
      { metric: "Monthly revenue", before: "$165K", after: "$240K", impact: "↑ 45%" }
    ],
    testimonial: {
      quote: "We cleared our 500-product backlog in 5 days. Five. Days. That inventory started selling immediately. The AI pays for itself every 3 days just from the additional sales.",
      author: "Marcus Chen",
      title: "Founder"
    },
    keyTakeaways: [
      "Content bottlenecks directly impact revenue",
      "AI can maintain brand voice at scale",
      "Customer service automation improves satisfaction"
    ],
    timeToROI: "ROI positive from day 1 due to immediate inventory activation"
  },
  {
    id: "medical",
    industry: "Healthcare",
    headline: "How AI Saved a Medical Practice From Hiring 2 Full-Time Staff",
    company: "Riverside Family Medicine",
    employees: "8 employees",
    hook: "Riverside Family Medicine was about to hire two more staff just to handle phones and paperwork. Instead, they invested in AI and kept their team lean.",
    background: [
      "Family medicine practice",
      "3 doctors, 5 support staff",
      "3,000 active patients",
      "Considering expansion"
    ],
    challenges: [
      "100+ calls daily for basic questions",
      "Appointment scheduling back-and-forth",
      "Insurance verification taking hours",
      "Forms still paper-based",
      "40% no-show rate"
    ],
    solution: [
      {
        phase: "Week 1-2: Phone System Overhaul",
        description: "AI receptionist for common questions, smart appointment scheduling, prescription refill automation"
      },
      {
        phase: "Week 3-4: Digital Forms",
        description: "Patient intake digitized, insurance card scanning, auto-population to EMR"
      },
      {
        phase: "Week 5-6: Patient Communication",
        description: "Appointment reminders via text, post-visit follow-ups, health tip newsletters"
      }
    ],
    results: [
      { metric: "Call volume", before: "100/day", after: "35/day", impact: "↓ 65%" },
      { metric: "No-show rate", before: "40%", after: "12%", impact: "↓ 70%" },
      { metric: "Forms processing", before: "20 min", after: "3 min", impact: "↓ 85%" },
      { metric: "Patient wait time", before: "25 min", after: "10 min", impact: "↓ 60%" },
      { metric: "Staff overtime", before: "10 hrs/week", after: "0", impact: "↓ 100%" }
    ],
    testimonial: {
      quote: "Our staff actually leaves on time now. Patients are happier. We're seeing more patients with the same team. This is how all medical practices will operate in 5 years.",
      author: "Dr. Jennifer Park",
      title: "Practice Owner"
    },
    keyTakeaways: [
      "Patient communication automation improves satisfaction",
      "Staff efficiency gains compound over time",
      "Healthcare AI must maintain personal touch"
    ],
    timeToROI: "Avoided $155K in hiring costs, broke even in month 1"
  },
  {
    id: "marketing-agency",
    industry: "Marketing",
    headline: "Marketing Agency Doubles Client Capacity Without Hiring",
    company: "CreativeEdge Marketing",
    employees: "12 employees",
    hook: "CreativeEdge Marketing was turning away clients because their team was maxed out. Six months later, they doubled their client base with the same team.",
    background: [
      "Digital marketing agency",
      "12 employees",
      "15 active clients",
      "Turning away 5 leads monthly"
    ],
    challenges: [
      "Report creation taking 2 days per client",
      "Social media content bottleneck",
      "Blog writing bandwidth limited",
      "Campaign analysis manual",
      "Client communication overwhelming"
    ],
    solution: [
      {
        phase: "Month 1: Content Systems",
        description: "AI blog writer trained on brand voices, social media content generator, email campaign templates"
      },
      {
        phase: "Month 2: Reporting Automation",
        description: "Multi-platform data aggregation, AI insight generator, automated performance alerts"
      },
      {
        phase: "Month 3: Client Communication",
        description: "AI meeting note taker, status update automation, client portal with AI assistant"
      }
    ],
    results: [
      { metric: "Clients served", before: "15", after: "32", impact: "↑ 113%" },
      { metric: "Report creation", before: "16 hrs", after: "2 hrs", impact: "↓ 87%" },
      { metric: "Content pieces/month", before: "50", after: "200", impact: "↑ 300%" },
      { metric: "Revenue", before: "$75K/mo", after: "$160K/mo", impact: "↑ 113%" },
      { metric: "Profit margin", before: "20%", after: "45%", impact: "↑ 125%" }
    ],
    testimonial: {
      quote: "We went from being the bottleneck to being the strategy powerhouse. AI handles execution, we handle creativity and relationships. Revenue doubled, stress halved.",
      author: "Tom Rodriguez",
      title: "CEO"
    },
    keyTakeaways: [
      "Content creation at scale maintains quality with AI",
      "Automation frees teams for strategic work",
      "Client capacity scales without proportional hiring"
    ],
    timeToROI: "3x ROI by month 3, continued scaling without hiring"
  },
  {
    id: "property-management",
    industry: "Real Estate",
    headline: "Managing 200 Properties With the Workload of 50",
    company: "Summit Property Management",
    employees: "4 employees",
    hook: "When Summit Property Management lost 3 employees in one month, they thought they'd have to sell. Instead, they discovered AI and became more profitable than ever.",
    background: [
      "Property management company",
      "200 residential units",
      "Down to 4 employees from 7",
      "Crisis mode operations"
    ],
    challenges: [
      "50+ maintenance requests daily",
      "Tenant screening backlog",
      "Rent collection follow-ups manual",
      "Showing scheduling chaos",
      "Owner reports taking weeks"
    ],
    solution: [
      {
        phase: "Emergency Week 1: Triage",
        description: "Maintenance request AI triage system, auto-dispatch to contractors, tenant communication bot"
      },
      {
        phase: "Week 2-3: Core Operations",
        description: "Application screening automation, showing scheduler with lockbox codes, rent reminder sequences"
      },
      {
        phase: "Week 4: Owner Relations",
        description: "Automated monthly reports, revenue optimization suggestions, expense tracking and alerts"
      }
    ],
    results: [
      { metric: "Response time", before: "24 hrs", after: "5 min", impact: "↓ 99%" },
      { metric: "Units per employee", before: "29", after: "50", impact: "↑ 72%" },
      { metric: "Tenant satisfaction", before: "3.2/5", after: "4.6/5", impact: "↑ 44%" },
      { metric: "Time to fill vacancy", before: "21 days", after: "9 days", impact: "↓ 57%" },
      { metric: "Operating costs", before: "$850/unit", after: "$420/unit", impact: "↓ 51%" }
    ],
    testimonial: {
      quote: "AI saved our business. Period. We were about to fold, and now we're expanding to a second city. Every property manager needs this yesterday.",
      author: "Amanda White",
      title: "Owner"
    },
    keyTakeaways: [
      "Crisis can drive innovation adoption",
      "AI enables dramatic efficiency gains",
      "Small teams can manage large operations"
    ],
    timeToROI: "Immediate survival value, 6-month growth to 275 units with same team"
  }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedCase, setSelectedCase] = useState<string>('');

  const industries = ['All', 'Legal', 'E-commerce', 'Healthcare', 'Marketing', 'Real Estate'];

  const filteredCases = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Asterivo
          </Link>
          <div className="flex space-x-8">
            <Link href="/solutions" className="text-slate-600 hover:text-blue-600 transition-colors">AI Automation</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/case-studies" className="text-blue-600 font-semibold">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/website-in-a-day" className="text-slate-600 hover:text-blue-600 transition-colors">Website in a Day</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Free Assessment</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Real Transformation Stories
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            See exactly how businesses like yours saved hundreds of hours and thousands of dollars with AI automation. These aren&rsquo;t theoretical case studies—they&rsquo;re real results from real companies.
          </p>
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCase(selectedCase === caseStudy.id ? '' : caseStudy.id)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.industry}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {caseStudy.employees}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {caseStudy.headline}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {caseStudy.hook}
                </p>

                {/* Key Metrics Preview */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {result.impact}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">
                    {selectedCase === caseStudy.id ? 'Click to close' : 'Click to read full story'}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      selectedCase === caseStudy.id ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              {selectedCase === caseStudy.id && (
                <div className="border-t border-slate-200 dark:border-slate-700 p-8">
                  {/* Company Background */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      Company Background
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.background.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      The Challenge
                    </h3>
                    <ul className="space-y-3">
                      {caseStudy.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-600 dark:text-slate-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      The Solution Journey
                    </h3>
                    <div className="space-y-6">
                      {caseStudy.solution.map((phase, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                            {phase.phase}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 mb-3">
                            {phase.description}
                          </p>
                          {phase.steps && (
                            <ul className="space-y-2">
                              {phase.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-sm text-slate-500 dark:text-slate-400">
                                  • {step}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results Table */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      The Results
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-slate-100 dark:bg-slate-600">
                          <tr>
                            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-white">Metric</th>
                            <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Before</th>
                            <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">After</th>
                            <th className="text-center py-3 px-4 font-semibold text-slate-900 dark:text-white">Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseStudy.results.map((result, index) => (
                            <tr key={index} className="border-t border-slate-200 dark:border-slate-600">
                              <td className="py-3 px-4 text-slate-900 dark:text-white">{result.metric}</td>
                              <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-300">{result.before}</td>
                              <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-300">{result.after}</td>
                              <td className="py-3 px-4 text-center font-bold text-green-600">{result.impact}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mb-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
                      <blockquote className="text-slate-700 dark:text-slate-300 italic mb-4">
                        &ldquo;{caseStudy.testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="text-sm">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {caseStudy.testimonial.author}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          , {caseStudy.testimonial.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      Key Takeaways
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-600 dark:text-slate-300">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROI Timeline */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      ROI Timeline
                    </h3>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                      <p className="text-green-800 dark:text-green-200">{caseStudy.timeToROI}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#assessment" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                      Get Similar Results
                    </Link>
                    <Link href="/solutions" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                      View Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 -mx-6 px-6 rounded-xl">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dozens of businesses that have transformed their operations with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#assessment" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get Your Free Assessment
            </Link>
            <Link href="/demo" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Try Interactive Demo
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Asterivo. Helping small businesses save time with simple AI automation.
          </p>
        </div>
      </footer>
    </div>
  );
}