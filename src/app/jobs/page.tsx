import Link from "next/link";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Join Our Team - Careers at Asterivo",
  description: "Build the future of AI automation with Asterivo. We're looking for talented individuals to help small businesses transform with AI technology.",
  keywords: "careers, jobs, AI automation, sales, implementation, tech careers, remote work",
  openGraph: {
    title: "Join Our Team - Careers at Asterivo",
    description: "Build the future of AI automation with Asterivo. Remote-first culture, cutting-edge projects, competitive compensation.",
    url: "https://asterivo.ca/jobs",
  },
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPath="/jobs" />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 We're Hiring!
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Build the Future of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Automation</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Join our mission to make AI automation accessible to every small business. Work with cutting-edge technology, amazing clients, and a team that's passionate about creating real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#openings" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Open Positions
              </Link>
              <Link href="#culture" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Our Culture
              </Link>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section id="culture" className="bg-white dark:bg-slate-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Why Join Asterivo?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🎯
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Mission-Driven Work</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Every project directly impacts small businesses, helping them save time and grow. Your work creates real, measurable value.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🌍
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Remote-First Culture</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Work from anywhere. We've been remote-first since day one, with tools and processes built for distributed teams.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🚀
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Cutting-Edge Tech</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Work with the latest AI models, automation tools, and modern tech stack. Always learning, always growing.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    💰
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Competitive Package</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Fair compensation, equity participation, comprehensive benefits, and performance bonuses. We invest in our team.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    📈
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Growth Opportunity</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Join an early-stage company with massive potential. Shape the future of AI automation while building your career.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🤝
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Amazing Team</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Work with brilliant, passionate people who care about excellence, learning, and supporting each other's success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Open Positions
              </h2>
              
              <div className="space-y-8">
                {/* Sales Position */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Senior Sales Representative
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                          Remote
                        </span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                          Full-time
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                          $56k-84k + Commission
                        </span>
                      </div>
                    </div>
                    <Link href="#apply" className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </Link>
                  </div>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Drive revenue growth by connecting small businesses with life-changing AI automation solutions. Join a high-performing sales team that's redefining how technology consulting is sold.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What You'll Do:</h4>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• Manage full sales cycle from lead to close</li>
                          <li>• Conduct discovery calls and solution demos</li>
                          <li>• Build relationships with business owners and decision makers</li>
                          <li>• Collaborate with technical team on custom solutions</li>
                          <li>• Hit and exceed monthly/quarterly revenue targets</li>
                          <li>• Represent Asterivo at industry events and webinars</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What You Bring:</h4>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• 3+ years B2B SaaS or tech services sales</li>
                          <li>• Experience selling to small/medium businesses</li>
                          <li>• Track record of meeting/exceeding quotas</li>
                          <li>• Excellent communication and presentation skills</li>
                          <li>• Interest in AI/automation technology</li>
                          <li>• Self-motivated with strong work ethic</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        💰 Compensation: $56k-$84k base + uncapped commission (OTE $105k-$140k) + equity + benefits
                      </p>
                    </div>
                  </div>
                </div>

                {/* Implementation Position */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        AI Automation Implementation Specialist
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                          Remote
                        </span>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                          Full-time
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                          $63k-91k + Bonuses
                        </span>
                      </div>
                    </div>
                    <Link href="#apply" className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </Link>
                  </div>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Transform businesses by implementing cutting-edge AI automation solutions. Work directly with clients to analyze, design, and deploy custom automation systems that save hundreds of hours monthly.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What You'll Do:</h4>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• Analyze client business processes and identify automation opportunities</li>
                          <li>• Design and build custom AI/automation workflows</li>
                          <li>• Integrate systems like CRMs, email platforms, and business tools</li>
                          <li>• Train clients on new systems and provide ongoing support</li>
                          <li>• Work with APIs, webhooks, and no-code/low-code platforms</li>
                          <li>• Document solutions and create implementation playbooks</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What You Bring:</h4>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                          <li>• 2+ years implementing business automation solutions</li>
                          <li>• Experience with platforms like Zapier, Make, Power Automate</li>
                          <li>• Understanding of APIs, webhooks, and system integrations</li>
                          <li>• Basic coding skills (Python, JavaScript preferred)</li>
                          <li>• Strong problem-solving and analytical thinking</li>
                          <li>• Excellent client communication and project management</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <p className="text-purple-800 dark:text-purple-200 font-medium">
                        🛠️ Tech Stack: Claude AI, OpenAI APIs, Zapier, Make, Airtable, various CRMs, custom integrations
                      </p>
                    </div>
                    
                    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        💰 Compensation: $63k-$91k base + performance bonuses + equity + benefits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="apply" className="bg-slate-100 dark:bg-slate-800 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                Ready to Join Us?
              </h2>
              
              <div className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-sm">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                    Our Hiring Process
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We believe in a fair, transparent process that respects your time and showcases your skills.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Application</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Submit your resume and cover letter</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Phone Screen</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">30min chat about you and the role</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Skills Interview</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Role-specific assessment and scenarios</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Team Meet</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Meet your future teammates</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Ready to transform how small businesses work with AI? Send us your application!
                  </p>
                  <div className="flex justify-center">
                    <Link href="/contact?source=jobs" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </Link>
                  </div>
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