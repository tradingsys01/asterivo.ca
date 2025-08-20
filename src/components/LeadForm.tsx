'use client';

import { useState } from 'react';

interface LeadFormProps {
  source?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function LeadForm({ 
  source = 'unknown',
  title = "Get Your Free AI Assessment",
  subtitle = "See how much time you could save with AI automation",
  buttonText = "Get My Free Assessment"
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    source: source
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    const isGuideDownload = source === 'guide-download' || source === 'guide';
    
    return (
      <div className="max-w-2xl mx-auto text-center bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h2>
        
        {isGuideDownload ? (
          <>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Your AI Quick Wins Guide is ready! Click the button below to download your free PDF.
            </p>
            <div className="mb-6">
              <a
                href="/ai-quick-wins-guide.pdf"
                download="5-AI-Quick-Wins-Guide.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Your Free Guide (PDF)
              </a>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What's in the guide:</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 text-left">
                <li>• 5 proven AI strategies with step-by-step instructions</li>
                <li>• Ready-to-use templates and prompts</li>
                <li>• Implementation checklists</li>
                <li>• Expected time savings for each strategy</li>
                <li>• Bonus: Next steps for advanced automation</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              Need help implementing these strategies? We'll also send you a personalized implementation roadmap within 24 hours.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              We've received your request and will get back to you within 24 hours with your personalized AI assessment.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What happens next?</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 text-left">
                <li>• We'll analyze your business needs</li>
                <li>• Identify your biggest automation opportunities</li>
                <li>• Prepare a custom roadmap with ROI projections</li>
                <li>• Schedule a brief call to discuss your options</li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                placeholder="Smith"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              placeholder="Your Company Inc."
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
              placeholder="(555) 123-4567"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors text-lg"
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </form>

        <div className="mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Privacy respected
            </div>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            By submitting this form, you agree to receive marketing communications from Asterivo. 
            You can opt out at any time.
          </p>
        </div>
      </div>
    </div>
  );
}