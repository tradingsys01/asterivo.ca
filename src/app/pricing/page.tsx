import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Pricing - Transparent, SMB-Friendly Plans | Asterivo",
  description: "Simple, transparent pricing for AI automation services. From Quick Wins to Full AI Operations - find the perfect plan for your small business needs.",
  keywords: "AI automation pricing, small business AI costs, AI implementation pricing, automation service plans",
  openGraph: {
    title: "AI Automation Pricing - Transparent, SMB-Friendly Plans | Asterivo",
    description: "Simple, transparent pricing for AI automation services. Find the perfect plan for your business needs.",
    url: "https://asterivo.ca/pricing",
  },
};

export default function Pricing() {
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
            <Link href="/pricing" className="text-blue-600 font-semibold">Pricing</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/website-in-a-day" className="text-slate-600 hover:text-blue-600 transition-colors">Website in a Day</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Free Assessment</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Choose the AI automation plan that fits your business size and goals. All plans include implementation, training, and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No setup fees
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                30-day ROI guarantee
              </div>
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </section>


        {/* AI Automation Pricing Tiers */}
        <section className="container mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">AI Automation Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Ongoing automation and AI implementation for established businesses</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">"Quick Wins"</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$2,000</span>
                  <span className="text-slate-600 dark:text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Perfect for 5-15 employee companies</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">1-2 AI tool implementations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Basic automation setup</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">5 hours monthly support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Team training included</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Email & chat support</span>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">Save 10+ hours/week</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Typical ROI: 300%+</div>
                </div>
              </div>

              <Link 
                href="/contact?source=pricing-starter"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
              >
                Start Quick Wins Plan
              </Link>
            </div>

            {/* Growth Plan - Popular */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-blue-500 p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Growth</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">"Workflow Transformation"</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$4,200</span>
                  <span className="text-slate-600 dark:text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Perfect for 15-50 employee companies</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">3-5 integrated AI solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Custom automation workflows</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">10 hours monthly support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Quarterly team training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Priority phone support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Monthly optimization reviews</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Save 25+ hours/week</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Typical ROI: 400%+</div>
                </div>
              </div>

              <Link 
                href="/contact?source=pricing-growth"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
              >
                Start Growth Plan
              </Link>
            </div>

            {/* Scale Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Scale</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">"Full AI Operations"</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$9,800</span>
                  <span className="text-slate-600 dark:text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Perfect for 50+ employee companies</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Unlimited AI implementations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Enterprise-grade integrations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Dedicated support channel</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Monthly team training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Quarterly optimization reviews</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Custom AI development</span>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Save 40+ hours/week</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Typical ROI: 500%+</div>
                </div>
              </div>

              <Link 
                href="/contact?source=pricing-scale"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
              >
                Start Scale Plan
              </Link>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="bg-slate-100 dark:bg-slate-800 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">See Your Potential ROI</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
                Calculate how much time and money you could save with AI automation
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15 hours</div>
                  <div className="text-slate-600 dark:text-slate-300">Average weekly time saved</div>
                </div>
                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">$12,000</div>
                  <div className="text-slate-600 dark:text-slate-300">Monthly value created*</div>
                </div>
                <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3.2x</div>
                  <div className="text-slate-600 dark:text-slate-300">Average ROI multiple</div>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                *Based on average $50/hour value of employee time across our client base
              </p>
              
              <Link 
                href="/contact?source=pricing-roi-calculator"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Calculate My Specific ROI
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">What's included in the monthly fee?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Everything you need: AI tool setup, custom workflow creation, team training, ongoing support, and regular optimization. No hidden fees or surprise charges.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">How quickly will I see results?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Most clients see immediate time savings within the first 2 weeks. Full ROI is typically achieved within 30-45 days of implementation.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Can I change plans or cancel anytime?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Yes, you can upgrade, downgrade, or cancel with 30 days notice. We're confident in our value, so we don't lock you into long-term contracts.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">What if AI doesn't work for my specific industry?</h4>
                  <p className="text-slate-600 dark:text-slate-300">We've successfully implemented AI across 50+ industries. If we can't deliver meaningful results within 30 days, we'll refund your money - no questions asked.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">Do you provide training for my team?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Absolutely. All plans include comprehensive team training. Higher-tier plans get more frequent training sessions and ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website in a Day Service */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Need a Website Fast? 🚀</h2>
              <p className="text-xl mb-6 opacity-90">Professional website with AI features built and launched in a single day</p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">Launch Day</div>
                  <div className="text-3xl font-bold">$997</div>
                  <div className="text-sm opacity-90">3 pages + AI chatbot</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">Business Day</div>
                  <div className="text-3xl font-bold">$2,497</div>
                  <div className="text-sm opacity-90">5 pages + AI + automation</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-2">AI-Powered Day</div>
                  <div className="text-3xl font-bold">$4,997</div>
                  <div className="text-sm opacity-90">10 pages + advanced AI</div>
                </div>
              </div>
              <Link href="/website-in-a-day" className="inline-block bg-white text-purple-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Website in a Day →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Choose Your Plan?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start with a free consultation to find the perfect fit for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?source=pricing-consultation"
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="/guide"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Download Free AI Guide
              </Link>
            </div>
            <p className="text-sm opacity-75 mt-4">Get a custom recommendation based on your specific needs</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Asterivo. Helping small businesses save time with simple AI automation.
          </p>
        </div>
      </footer>
    </div>
  );
}