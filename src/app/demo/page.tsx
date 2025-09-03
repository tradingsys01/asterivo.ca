import Link from "next/link";
import DemoWrapper from "@/components/DemoWrapper";

// Force this page to be dynamic (not statically generated)
export const dynamic = 'force-dynamic';

export default function DemoPage() {
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
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/website-in-a-day" className="text-slate-600 hover:text-blue-600 transition-colors">Website in a Day</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Free Assessment</Link>
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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Invoice Data Extraction
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed">
              Social Media Generator
            </button>
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed">
              Resume Screener
            </button>
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            More demos coming soon! For now, try our invoice extraction demo below.
          </p>
        </div>

        {/* Invoice Demo */}
        <DemoWrapper />

        {/* How It Works */}
        <section className="mt-16 bg-slate-100 dark:bg-slate-800 py-12 -mx-6 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              How This Technology Works in Your Business
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

        {/* CTA Section */}
        <section className="text-center py-16">
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