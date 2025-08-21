import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <OptimizedImage
          src="/images/hero-team.jpg"
          alt="Professional team collaboration"
          width={1920}
          height={1080}
          priority={true}
          className="w-full h-full"
        />
      </div>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 relative z-20">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Asterivo
          </div>
          <div className="flex space-x-8">
            <Link href="/solutions" className="text-slate-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="/website-in-a-day" className="text-slate-600 hover:text-blue-600 transition-colors">Website in a Day</Link>
            <Link href="/case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">How It Works</a>
            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Cut 10+ Hours of Busy Work Every Week with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Simple AI Tools</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We help small businesses automate repetitive tasks without the enterprise price tag
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact?source=homepage-hero"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your Free AI Assessment
              </Link>
              <Link
                href="/solutions"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                See Real Examples →
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-20">
              15+ Years Software Experience | 30-Day ROI Guarantee | No Long-Term Contracts
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="bg-slate-100 dark:bg-slate-800 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
                You&rsquo;re Losing Time on Tasks AI Can Handle
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-slate-600 dark:text-slate-300">Your team spends hours on data entry and document processing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-slate-600 dark:text-slate-300">Customer emails pile up waiting for responses</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-slate-600 dark:text-slate-300">Reports take days to compile from multiple sources</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-slate-600 dark:text-slate-300">You know AI could help but don&rsquo;t know where to start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                How We Help
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/service-automation.jpg"
                    alt="AI Automation Services"
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Quick Wins Package</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">Start seeing results in 2 weeks</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Perfect for businesses ready to automate their first processes</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/service-analytics.jpg"
                    alt="AI Analytics Services"
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Workflow Transformation</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">Automate your core operations</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Complete overhaul of your most time-consuming processes</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/service-training.jpg"
                    alt="AI Training Services"
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Team Training</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">Get your team AI-confident</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Hands-on training so your team can maximize AI benefits</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/hero-team.jpg"
                    alt="Website in a Day Service"
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Website in a Day</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">Professional website live by tonight</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">AI-powered website built and launched in a single business day</p>
                  <div className="mt-4">
                    <Link href="/website-in-a-day" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Starting at $997 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Carousel */}
        <section className="bg-slate-100 dark:bg-slate-800 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Real Results from Real Businesses
              </h2>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Case Studies →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link href="/solutions#operations" className="block bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/case-study-office.jpg"
                    alt="Marketing Agency Case Study"
                    width={600}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">Local Marketing Agency • 12 employees</div>
                    <div className="text-2xl font-bold text-green-400">Saved 15 hours/week</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Automated client reporting process</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Reports that took 8 hours now generate automatically from multiple data sources</p>
                  <div className="text-xs text-blue-600 mt-2">View full case study →</div>
                </div>
              </Link>
              
              <Link href="/solutions#hr-recruiting" className="block bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/case-study-meeting.jpg"
                    alt="Law Firm Case Study"
                    width={600}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">Law Firm • 25 employees</div>
                    <div className="text-2xl font-bold text-green-400">75% faster processing</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">AI-powered document review</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">Contract analysis that used to take days now completes in hours</p>
                  <div className="text-xs text-blue-600 mt-2">View full case study →</div>
                </div>
              </Link>
              
              <Link href="/solutions#sales-customer" className="block bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/case-study-success.jpg"
                    alt="E-commerce Case Study"
                    width={600}
                    height={400}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-semibold mb-1">E-commerce Store • 8 employees</div>
                    <div className="text-2xl font-bold text-green-400">Response time cut by 90%</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Automated customer support</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">AI handles 80% of support tickets, team focuses on complex issues</p>
                  <div className="text-xs text-blue-600 mt-2">View full case study →</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Simple 3-Step Process
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Free Assessment</h3>
                <p className="text-slate-600 dark:text-slate-300">We identify your biggest time-wasters and prioritize quick wins</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Custom Plan</h3>
                <p className="text-slate-600 dark:text-slate-300">Get a roadmap with clear ROI projections and implementation timeline</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Implementation</h3>
                <p className="text-slate-600 dark:text-slate-300">We set it up, train your team, and ensure successful adoption</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-slate-100 dark:bg-slate-800 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Trusted by Growing Businesses</h2>
                
                {/* Success Metrics */}
                <div className="grid grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-slate-600 dark:text-slate-400">Hours Saved Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-slate-600 dark:text-slate-400">Tasks Automated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">95%</div>
                    <div className="text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Tool Logos */}
              <div className="text-center">
                <p className="text-slate-600 dark:text-slate-400 mb-6">We integrate with tools you already use:</p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <span className="text-slate-500 font-semibold">ChatGPT</span>
                  <span className="text-slate-500 font-semibold">Claude</span>
                  <span className="text-slate-500 font-semibold">Zapier</span>
                  <span className="text-slate-500 font-semibold">Make</span>
                  <span className="text-slate-500 font-semibold">Google Workspace</span>
                  <span className="text-slate-500 font-semibold">Microsoft 365</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <section id="assessment" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                See How Much Time You Could Save
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Download our free guide: &ldquo;5 AI Quick Wins Every Small Business Can Implement This Week&rdquo;
              </p>
              
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What You'll Learn:</h3>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Smart email templates that handle 80% of inquiries
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI-powered meeting summaries and action items
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Automated social media content generation
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Document processing and report automation
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Smart calendar and scheduling management
                  </div>
                </div>
                
                <Link 
                  href="/guide#download"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors text-center text-lg"
                >
                  Get Your Free AI Quick Wins Guide →
                </Link>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                  16-page guide with step-by-step instructions • Completely free
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Stop Wasting Time on Repetitive Tasks?</h2>
            <p className="text-xl mb-8 opacity-90">Let&rsquo;s identify your biggest automation opportunities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?source=consultation" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Free Consultation
              </Link>
              <Link href="/guide" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download AI Quick Wins Guide
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
