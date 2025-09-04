'use client';

import Link from "next/link";
import { useState } from "react";
import DemoWrapper from "@/components/DemoWrapper";
import SocialMediaWrapper from "@/components/SocialMediaWrapper";
import ResumeScreenerWrapper from "@/components/ResumeScreenerWrapper";

// Force this page to be dynamic (not statically generated)
export const dynamic = 'force-dynamic';

type DemoTab = 'invoice' | 'social' | 'resume';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>('invoice');
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
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Try AI Automation Yourself
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Experience how AI can transform your business processes with these interactive demos
          </p>
          <Link href="/solutions" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Solutions
          </Link>
        </div>

        {/* Demo Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center space-x-1 mb-8">
            <button 
              onClick={() => setActiveTab('invoice')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'invoice' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              Invoice Data Extraction
            </button>
            <button 
              onClick={() => setActiveTab('social')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'social' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              Social Media Generator
            </button>
            <button 
              onClick={() => setActiveTab('resume')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'resume' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              Resume Screener
            </button>
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            {activeTab === 'invoice' && 'Extract data from invoices, receipts, and bills using AI'}
            {activeTab === 'social' && 'Generate engaging social media content for multiple platforms'}
            {activeTab === 'resume' && 'Screen resumes and get AI-powered candidate assessments'}
          </p>
        </div>

        {/* Dynamic Demo Content */}
        {activeTab === 'invoice' && <DemoWrapper />}
        {activeTab === 'social' && <SocialMediaWrapper />}
        {activeTab === 'resume' && <ResumeScreenerWrapper />}

        {/* How It Works - Dynamic based on active tab */}
        {activeTab === 'invoice' && (
          <section className="mt-16 bg-slate-100 dark:bg-slate-800 py-12 -mx-6 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
                How Invoice Processing Works in Your Business
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Email Integration</h3>
                  <p className="text-slate-600 dark:text-slate-300">Automatically monitors your email for incoming invoices from vendors</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI Processing</h3>
                  <p className="text-slate-600 dark:text-slate-300">Extracts all data fields with 99%+ accuracy, learns your vendor patterns</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Auto-Entry</h3>
                  <p className="text-slate-600 dark:text-slate-300">Data flows directly into QuickBooks, Xero, or your preferred accounting system</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Real Client Result: Accounting Firm
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    &ldquo;We went from 20 hours per week of manual data entry to just 2 hours of review time. The accuracy is incredible.&rdquo;
                  </p>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-green-600">90%</div>
                      <div className="text-slate-500">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">99.2%</div>
                      <div className="text-slate-500">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$297</div>
                      <div className="text-slate-500">Monthly Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'social' && (
          <section className="mt-16 bg-slate-100 dark:bg-slate-800 py-12 -mx-6 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
                How Social Media Automation Works in Your Business
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Business Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-300">AI analyzes your industry, audience, and goals to create targeted content strategy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Content Generation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Creates platform-specific posts, hashtags, and engagement strategies automatically</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Auto-Publishing</h3>
                  <p className="text-slate-600 dark:text-slate-300">Schedules and publishes content across all platforms at optimal engagement times</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Real Client Result: Marketing Agency
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    &ldquo;Our social media engagement increased 300% and we cut content creation time from 12 hours to 2 hours per week.&rdquo;
                  </p>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-slate-500">Engagement Boost</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">83%</div>
                      <div className="text-slate-500">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$497</div>
                      <div className="text-slate-500">Monthly Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'resume' && (
          <section className="mt-16 bg-slate-100 dark:bg-slate-800 py-12 -mx-6 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
                How AI Resume Screening Works in Your Business
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Job Requirements Setup</h3>
                  <p className="text-slate-600 dark:text-slate-300">Define position requirements, skills, experience, and company culture preferences</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-300">Advanced AI screens resumes, scores candidates, and identifies skills gaps automatically</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Smart Recommendations</h3>
                  <p className="text-slate-600 dark:text-slate-300">Get ranked candidates with interview questions and hiring recommendations</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    Real Client Result: Tech Startup
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    &ldquo;We reduced initial screening time from 4 hours to 20 minutes per role, with 85% more accurate candidate matching.&rdquo;
                  </p>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-slate-500">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <div className="text-slate-500">Better Matches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$197</div>
                      <div className="text-slate-500">Monthly Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section - Dynamic based on active tab */}
        <section className="text-center py-16">
          {activeTab === 'invoice' && (
            <>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Automate Your Invoice Processing?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Get this exact solution set up for your business in just 3 days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#assessment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Free Assessment
                </Link>
                <Link href="/solutions#operations" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Full Case Study
                </Link>
              </div>
            </>
          )}
          
          {activeTab === 'social' && (
            <>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Automate Your Social Media?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Get AI-powered content generation and scheduling set up in under a week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#assessment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Free Social Media Audit
                </Link>
                <Link href="/solutions#sales-customer" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Social Media Case Studies
                </Link>
              </div>
            </>
          )}
          
          {activeTab === 'resume' && (
            <>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Automate Your Hiring Process?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Get AI-powered resume screening and candidate ranking set up in just 2 days
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#assessment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Free HR Assessment
                </Link>
                <Link href="/solutions#hr-recruiting" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View HR Automation Case Studies
                </Link>
              </div>
            </>
          )}
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