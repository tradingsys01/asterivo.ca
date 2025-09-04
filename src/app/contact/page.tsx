import Link from "next/link";
import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free AI Assessment | Asterivo",
  description: "Ready to automate your business processes? Get your free AI assessment and see how much time you could save. No commitment required.",
  keywords: "contact asterivo, AI assessment, business automation consultation, free AI analysis",
  openGraph: {
    title: "Contact Us - Get Your Free AI Assessment | Asterivo",
    description: "Ready to automate your business processes? Get your free AI assessment and see how much time you could save.",
    url: "https://asterivo.ca/contact",
  },
};

export default function Contact() {

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

      <main>
        <section className="container mx-auto px-6 py-20">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactPageContent />
          </Suspense>
        </section>

        {/* Trust Indicators */}
        <section className="bg-slate-100 dark:bg-slate-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Why Choose Asterivo?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Proven Results</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">15+ years experience, 500+ hours saved monthly for our clients</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">ROI Guarantee</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">See ROI within 30 days or we work for free until you do</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Small Business Focus</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Solutions designed specifically for SMB budgets and needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Join 50+ Businesses Already Saving Time</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">"Cut our reporting time from 8 hours to 30 minutes. Game changer for our agency."</p>
                  <div className="font-semibold text-slate-900 dark:text-white">Marketing Agency</div>
                  <div className="text-sm text-blue-600">12 employees</div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">"AI handles 80% of our support tickets. Our team can focus on what matters."</p>
                  <div className="font-semibold text-slate-900 dark:text-white">E-commerce Store</div>
                  <div className="text-sm text-blue-600">8 employees</div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">"Document review that took days now happens in hours. Incredible ROI."</p>
                  <div className="font-semibold text-slate-900 dark:text-white">Law Firm</div>
                  <div className="text-sm text-blue-600">25 employees</div>
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