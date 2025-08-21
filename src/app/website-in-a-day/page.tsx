import Link from "next/link";

export default function WebsiteInADay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 relative z-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Asterivo
          </Link>
          <div className="flex space-x-8">
            <Link href="/solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/website-in-a-day" className="text-blue-600 font-semibold">Website in a Day</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Your Business <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Online by Tonight</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Professional AI-powered website built and launched in a single day
            </p>
          </div>

          {/* Value Proposition */}
          <section className="mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Stop Waiting Weeks for Your Website</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 text-center text-lg">While other agencies take 6-8 weeks, we get your business online today with AI-powered features that start working immediately.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">❌ Traditional Agencies</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">6-8 weeks waiting time</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">$5,000-$15,000 cost</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Static website only</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Lost leads while waiting</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Website in a Day</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Live website by 5 PM today</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Starting at $997</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">AI chatbot & automation included</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">Start capturing leads immediately</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Packages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Three-Tier Website Packages</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Starter Package */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Launch Day</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">$997</div>
                  <p className="text-slate-600 dark:text-slate-300">Perfect for solopreneurs, consultants</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Delivery: 6 hours</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    3-page website (Home, About, Contact)
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile responsive design
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic AI chatbot
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact form automation
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Same-day delivery
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    7-day support
                  </div>
                </div>
                <Link href="/contact?source=website-starter" className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center">
                  Start Launch Day
                </Link>
              </div>

              {/* Professional Package */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border-2 border-blue-500 p-8 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Business Day</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$2,497</div>
                  <p className="text-slate-600 dark:text-slate-300">Perfect for small businesses, agencies</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Delivery: 8 hours</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    5-page custom design
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI chatbot trained on FAQs
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Booking system integrated
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email automation setup
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic SEO optimization
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    CRM integration
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day support
                  </div>
                </div>
                <Link href="/contact?source=website-professional" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center">
                  Start Business Day
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI-Powered Day</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">$4,997</div>
                  <p className="text-slate-600 dark:text-slate-300">Perfect for growing companies</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Delivery: Full day + follow-up</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in Professional PLUS:
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10 pages total
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced AI integrations
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom automation workflows
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Content generation system
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lead scoring setup
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    90-day support + monthly calls
                  </div>
                </div>
                <Link href="/contact?source=website-premium" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center">
                  Start AI-Powered Day
                </Link>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Your Website Day Timeline</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">8:00 AM</div>
                  <div className="text-lg font-semibold mb-2">Kickoff Call</div>
                  <div className="text-sm opacity-90">Review your vision, content, and goals</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">12:00 PM</div>
                  <div className="text-lg font-semibold mb-2">Site Built</div>
                  <div className="text-sm opacity-90">Your website is live for review and feedback</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">3:00 PM</div>
                  <div className="text-lg font-semibold mb-2">AI Added</div>
                  <div className="text-sm opacity-90">Chatbot, forms, and automations integrated</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">5:00 PM</div>
                  <div className="text-lg font-semibold mb-2">Go Live!</div>
                  <div className="text-sm opacity-90">Your business is online and ready for customers</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-xl font-bold">From idea to live website in one business day</div>
                <div className="text-sm opacity-90 mt-2">Plus 30-day support to ensure everything runs smoothly</div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Why Businesses Choose Website in a Day</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Lightning Fast</h3>
                <p className="text-slate-600 dark:text-slate-300">While competitors take months, we deliver a professional website in hours. Start capturing leads today, not next quarter.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI-Powered</h3>
                <p className="text-slate-600 dark:text-slate-300">Every website includes smart chatbots, automated forms, and AI features that work 24/7 to convert visitors into customers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Proven ROI</h3>
                <p className="text-slate-600 dark:text-slate-300">Our clients typically break even with 2-3 new customers. The website pays for itself while you sleep.</p>
              </div>
            </div>
          </section>

          {/* ROI Calculator */}
          <section className="mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Your Investment Return</h2>
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">Investment: $2,497</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">No 6-week agency timeline:</span>
                    <span className="font-semibold text-green-600">$5,000 value</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Immediate online presence:</span>
                    <span className="font-semibold text-green-600">2-5 leads/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">AI chat prevents lost leads:</span>
                    <span className="font-semibold text-green-600">$500/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Time saved on DIY:</span>
                    <span className="font-semibold text-green-600">40 hours ($2,000)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Professional vs amateur:</span>
                    <span className="font-semibold text-green-600">2x conversion rate</span>
                  </div>
                </div>
                <div className="text-center mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Break-even: Usually 2-3 new customers</div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Your Business Online Today?</h2>
              <p className="text-xl mb-8 opacity-90">
                Stop losing customers to competitors. Get your professional website with AI features live by tonight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact?source=website-in-a-day" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Your Website Today
                </Link>
                <Link href="/demo" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                  See Examples
                </Link>
              </div>
              <div className="mt-6 text-sm opacity-90">
                <p>✓ Same-day delivery guaranteed</p>
                <p>✓ 30-day support included</p>
                <p>✓ Pay only when you're 100% satisfied</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Asterivo. Helping small businesses save time with simple AI automation.
          </p>
        </div>
      </footer>
    </div>
  );
}