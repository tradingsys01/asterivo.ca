import Link from "next/link";
import { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Free AI Guide: 5 Quick Wins for Small Business | Asterivo",
  description: "Download our free guide: 5 AI Quick Wins Every Small Business Can Implement This Week. Practical, actionable strategies to start saving time immediately.",
  keywords: "AI quick wins, small business AI guide, business automation tips, AI implementation guide, free AI resources",
  openGraph: {
    title: "Free AI Guide: 5 Quick Wins for Small Business | Asterivo",
    description: "Download our free guide: 5 AI Quick Wins Every Small Business Can Implement This Week. Start saving time with proven strategies.",
    url: "https://asterivo.ca/guide",
  },
};

export default function Guide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Asterivo
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎯 FREE GUIDE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                5 AI Quick Wins Every Small Business Can Implement <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">This Week</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Stop waiting for the "perfect" AI strategy. Start with these proven, simple wins that take less than a day to implement and deliver immediate results.
              </p>
            </div>
          </div>
        </section>

        {/* Guide Preview */}
        <section className="bg-white dark:bg-slate-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What You'll Get Inside:</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smart Email Templates</h3>
                        <p className="text-slate-600 dark:text-slate-300">AI-powered email responses that handle 80% of customer inquiries automatically</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Meeting Summary Magic</h3>
                        <p className="text-slate-600 dark:text-slate-300">Turn messy meeting notes into professional summaries and action items in seconds</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Social Media Autopilot</h3>
                        <p className="text-slate-600 dark:text-slate-300">Generate a week's worth of engaging posts from a single piece of content</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-orange-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Invoice & Report Automation</h3>
                        <p className="text-slate-600 dark:text-slate-300">Extract data from documents and create professional reports without manual typing</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Smart Calendar Management</h3>
                        <p className="text-slate-600 dark:text-slate-300">Let AI handle scheduling conflicts, meeting prep, and follow-up tasks automatically</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="w-24 h-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Free 16-Page Guide</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Step-by-step instructions, screenshots, and templates included</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No fluff - just actionable strategies
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Implement in under 1 hour each
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Works with free AI tools
                    </div>
                    <div className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Tested by 100+ small businesses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section id="download" className="py-20">
          <div className="container mx-auto px-6">
            <LeadForm 
              source="guide-download"
              title="Download Your Free AI Quick Wins Guide"
              subtitle="Get instant access to 5 proven strategies that take less than a day to implement"
              buttonText="Download Free Guide Now"
            />
          </div>
        </section>

        {/* What People Are Saying */}
        <section className="bg-slate-100 dark:bg-slate-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                What People Are Saying
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "Implemented the email templates on Monday, saved 6 hours by Friday. This guide pays for itself immediately."
                  </p>
                  <div className="font-semibold text-slate-900 dark:text-white">Sarah Chen</div>
                  <div className="text-sm text-blue-600">Marketing Consultant</div>
                </div>
                
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "Finally, AI advice that's actually practical. No technical jargon, just results."
                  </p>
                  <div className="font-semibold text-slate-900 dark:text-white">Mike Rodriguez</div>
                  <div className="text-sm text-blue-600">Restaurant Owner</div>
                </div>
                
                <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "The meeting summary trick alone has transformed how we handle client calls. Game changer!"
                  </p>
                  <div className="font-semibold text-slate-900 dark:text-white">Jennifer Park</div>
                  <div className="text-sm text-blue-600">Legal Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Do I need technical skills to implement these?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Not at all! Each quick win is designed for non-technical business owners. We provide step-by-step screenshots and simple instructions.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Will this work with my existing tools?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Yes! The strategies work with common business tools like Gmail, Outlook, Google Workspace, and Microsoft 365. No expensive software required.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">How much time will this actually save me?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Our clients typically save 5-15 hours per week after implementing all 5 strategies. Even just one quick win usually saves 2-3 hours weekly.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Is this really free?</h4>
                  <p className="text-slate-600 dark:text-slate-300">Completely free, no strings attached. We believe every small business deserves access to practical AI strategies, regardless of budget.</p>
                </div>
              </div>
            </div>
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