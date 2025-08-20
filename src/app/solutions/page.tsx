import Link from "next/link";

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Asterivo
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/solutions" className="text-blue-600 font-semibold">Solutions</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact?source=solutions-nav" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Real Solutions, Real Results
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            See exactly how we&rsquo;ve helped businesses like yours save hundreds of hours with proven AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/demo" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Try Interactive Demo
            </Link>
            <Link href="/contact?source=solutions-hero" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Get My Custom Solution
            </Link>
          </div>
        </div>

        {/* Solution Categories */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="#sales-customer" className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3v-1M17 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Sales & Customer Service</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Lead response, quote generation, customer support automation</p>
            </a>

            <a href="#operations" className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Operations & Admin</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Invoice processing, report generation, data entry automation</p>
            </a>

            <a href="#marketing" className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Marketing & Content</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Social media, blog writing, content calendar automation</p>
            </a>

            <a href="#hr-recruiting" className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">HR & Recruiting</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Resume screening, onboarding, employee communication</p>
            </a>
          </div>
        </section>

        {/* Sales & Customer Service Solutions */}
        <section id="sales-customer" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">Sales & Customer Service Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Instant Lead Response */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Kitchen Remodeling • 12 employees</span>
                </div>
                <span className="text-2xl font-bold text-green-600">+55%</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Instant Lead Response System</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> Losing 40% of leads due to slow response times during busy hours.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The Solution:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• AI chatbot on website using Chatbase</li>
                  <li>• Trained on 50 FAQs about pricing, timeline, service areas</li>
                  <li>• Connected to Calendly for automatic scheduling</li>
                  <li>• Integrated with CRM via Zapier</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;Response time went from 14 hours to 30 seconds. We&rsquo;re booking 55% more consultations now.&rdquo;
                </p>
                <p className="text-xs text-slate-500 mt-1">- Sarah, Owner</p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 1 week</span>
                <span>Cost: $397/month</span>
                <span>ROI: 300%+</span>
              </div>

              <Link href="/contact?source=lead-response-system" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>

            {/* Quote Generation */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Insurance Agency • 25 employees</span>
                </div>
                <span className="text-2xl font-bold text-green-600">+30%</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Quote Generation Automation</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> Taking 2-3 days to send quotes, losing deals to faster competitors.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The Solution:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• AI quote generator using existing Excel models</li>
                  <li>• Email templates with variable fields</li>
                  <li>• Approval workflow for quotes over $10K</li>
                  <li>• Auto-follow-up scheduling</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;Quote delivery went from 3 days to 2 hours. Our win rate is up 30%.&rdquo;
                </p>
                <p className="text-xs text-slate-500 mt-1">- Mike, Agency Owner</p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 2 weeks</span>
                <span>Cost: $750/month</span>
                <span>ROI: 250%+</span>
              </div>

              <Link href="/contact?source=quote-automation" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>
          </div>
        </section>

        {/* Operations & Admin Solutions */}
        <section id="operations" className="mb-20 bg-slate-100 dark:bg-slate-800 py-20 -mx-6 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">Operations & Admin Solutions</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Invoice Processing */}
              <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">Accounting Firm • 8 employees</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">90% saved</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Invoice Processing Autopilot</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  <strong>Challenge:</strong> Spending 20 hours/week on manual invoice data entry across 50+ clients.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-600 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The Workflow:</strong></p>
                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                    <div>Invoice arrives → AI extracts fields → Matches vendor →</div>
                    <div>Applies codes → Flags anomalies → Enters QuickBooks</div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4 mb-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                    &ldquo;20 hours reduced to 2 hours of review. 99% accuracy rate.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span>Setup: 3 days</span>
                  <span>Cost: $297/month</span>
                </div>

                <Link href="/contact?source=invoice-processing" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                  Get This Solution
                </Link>
              </div>

              {/* Report Generation */}
              <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">Marketing Agency • 15 employees</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">95% faster</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Multi-Source Report Generator</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  <strong>Challenge:</strong> Spending full day monthly creating client reports from 6+ platforms.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-600 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The Solution:</strong></p>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• APIs pull data from all sources</li>
                    <li>• AI analyzes trends and writes insights</li>
                    <li>• Automated graph generation</li>
                    <li>• Branded PDF with commentary</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4 mb-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                    &ldquo;Report creation from 8 hours to 30 minutes. Clients love the insights.&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span>Setup: 1 week</span>
                  <span>Cost: $497/month</span>
                </div>

                <Link href="/contact?source=report-generation" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                  Get This Solution
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing & Content Solutions */}
        <section id="marketing" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">Marketing & Content Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Social Media Factory */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Restaurant Group • 5 locations</span>
                </div>
                <span className="text-2xl font-bold text-green-600">+40%</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Social Media Content Factory</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> Struggling to maintain active social presence for 5 locations.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The System:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Content calendar AI with location-specific posts</li>
                  <li>• Image bank with AI-suggested captions</li>
                  <li>• Approval workflow via Slack</li>
                  <li>• Auto-posting to all platforms</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;From 5 hours per location to 30 minutes total. Engagement up 40%.&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 4 days</span>
                <span>Cost: $597/month</span>
              </div>

              <Link href="/contact?source=social-media-automation" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>

            {/* Blog Content System */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">B2B Software • 20 employees</span>
                </div>
                <span className="text-2xl font-bold text-green-600">+125%</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Blog Content System</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> Needed 8 blog posts monthly but could only produce 2.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>The Process:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• AI research assistant finds trending topics</li>
                  <li>• Outline generator based on SEO keywords</li>
                  <li>• Draft writer matching brand voice</li>
                  <li>• Human editor polishes in 30 minutes</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;8 quality posts monthly. Organic traffic up 125% in 6 months.&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 1 week</span>
                <span>Cost: $797/month</span>
              </div>

              <Link href="/contact?source=blog-content-system" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="try-demo" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 -mx-6 px-6 mb-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Try AI Automation Yourself</h2>
            <p className="text-xl mb-12 opacity-90">See how AI can work for your business in these interactive demos</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Invoice Data Extraction</h3>
                <p className="text-sm opacity-90 mb-4">Upload a sample invoice and see AI extract all the data</p>
                <Link href="/demo" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Try Demo
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Social Media Generator</h3>
                <p className="text-sm opacity-90 mb-4">Enter your business info and get sample social posts</p>
                <Link href="/demo" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Try Demo
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Resume Screener</h3>
                <p className="text-sm opacity-90 mb-4">Paste a job description and see AI screening questions</p>
                <Link href="/demo" className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section id="hr-recruiting" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">Industry-Specific Solutions</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Legal Document Reviewer */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Law Firm • 15 employees</span>
                </div>
                <span className="text-2xl font-bold text-green-600">75% faster</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Legal Document Reviewer</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> Spending 10+ hours reviewing standard contracts for basic issues.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>AI Reviews:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Flags unusual terms and missing clauses</li>
                  <li>• Identifies risk areas</li>
                  <li>• Generates summary of key terms</li>
                  <li>• Suggests standard amendments</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;Review time down 75%. Our junior associates focus on higher value work now.&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 2 weeks</span>
                <span>Cost: $1,297/month</span>
              </div>

              <Link href="/contact?source=legal-document-review" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>

            {/* Patient Communication */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Medical Practice • 8 employees</span>
                </div>
                <span className="text-2xl font-bold text-green-600">-80% no-shows</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Patient Communication System</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Challenge:</strong> 40% no-show rate due to poor reminder system.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg mb-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2"><strong>Smart Reminders:</strong></p>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Appointment reminders via text</li>
                  <li>• AI handles rescheduling conversations</li>
                  <li>• Pre-visit forms sent automatically</li>
                  <li>• Post-visit follow-up sequences</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 mb-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                  &ldquo;No-show rate dropped to 8%. Staff saves 15 hours weekly on phone calls.&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span>Setup: 1 week</span>
                <span>Cost: $497/month</span>
              </div>

              <Link href="/contact?source=patient-communication" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center">
                Get This Solution
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-slate-100 dark:bg-slate-800 py-16 -mx-6 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Implement Your Solution?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Get your free assessment and see which solutions will save you the most time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?source=solutions-assessment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Assessment
              </Link>
              <Link href="/contact?source=solutions-consultation" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </Link>
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