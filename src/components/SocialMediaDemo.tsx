'use client';

import { useState } from 'react';

interface SocialMediaPost {
  platform: string;
  content: string;
  hashtags: string[];
  engagement_tips: string[];
}

interface GeneratedContent {
  posts: SocialMediaPost[];
  content_strategy: string;
}

export default function SocialMediaDemo() {
  const [businessInfo, setBusinessInfo] = useState({
    industry: '',
    target_audience: '',
    business_type: '',
    tone: 'professional',
    goals: [] as string[]
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Hospitality',
    'Real Estate', 'Education', 'Manufacturing', 'Professional Services', 'Other'
  ];

  const tones = [
    { value: 'professional', label: 'Professional & Formal' },
    { value: 'friendly', label: 'Friendly & Approachable' },
    { value: 'casual', label: 'Casual & Conversational' },
    { value: 'expert', label: 'Expert & Authoritative' },
    { value: 'playful', label: 'Playful & Creative' }
  ];

  const goalOptions = [
    'Brand Awareness', 'Lead Generation', 'Customer Engagement', 
    'Thought Leadership', 'Product Promotion', 'Community Building'
  ];

  const handleGoalChange = (goal: string) => {
    setBusinessInfo(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const generateContent = async () => {
    if (!businessInfo.industry || !businessInfo.target_audience || !businessInfo.business_type) {
      alert('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      const response = await fetch('/api/social-media-generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(businessInfo)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate content');
      }

      if (result.success && result.data) {
        setGeneratedContent(result.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Social media generation error:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setBusinessInfo({
      industry: '',
      target_audience: '',
      business_type: '',
      tone: 'professional',
      goals: []
    });
    setGeneratedContent(null);
  };

  const getPlatformIcon = (platform: string) => {
    const icons = {
      'LinkedIn': '💼',
      'Twitter': '🐦',
      'Facebook': '📘',
      'Instagram': '📷',
      'TikTok': '🎵'
    };
    return icons[platform as keyof typeof icons] || '📱';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
      {!generatedContent ? (
        <>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              AI Social Media Content Generator
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Generate engaging social media content tailored to your business and audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Information Form */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Tell us about your business
              </h4>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Industry *
                </label>
                <select
                  value={businessInfo.industry}
                  onChange={(e) => setBusinessInfo(prev => ({...prev, industry: e.target.value}))}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                >
                  <option value="">Select your industry</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Business Type *
                </label>
                <input
                  type="text"
                  value={businessInfo.business_type}
                  onChange={(e) => setBusinessInfo(prev => ({...prev, business_type: e.target.value}))}
                  placeholder="e.g., Marketing Agency, Restaurant, SaaS Startup"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Target Audience *
                </label>
                <textarea
                  value={businessInfo.target_audience}
                  onChange={(e) => setBusinessInfo(prev => ({...prev, target_audience: e.target.value}))}
                  placeholder="Describe your ideal customers (age, interests, demographics, pain points)"
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Brand Tone
                </label>
                <select
                  value={businessInfo.tone}
                  onChange={(e) => setBusinessInfo(prev => ({...prev, tone: e.target.value}))}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                >
                  {tones.map(tone => (
                    <option key={tone.value} value={tone.value}>{tone.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Marketing Goals */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Marketing Goals
              </h4>

              <div className="space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Select your primary social media objectives:
                </p>
                {goalOptions.map(goal => (
                  <label key={goal} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={businessInfo.goals.includes(goal)}
                      onChange={() => handleGoalChange(goal)}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-slate-700 dark:text-slate-300">{goal}</span>
                  </label>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  What you'll get:
                </h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>• 5 platform-specific social media posts</li>
                  <li>• Optimized hashtags for each platform</li>
                  <li>• Engagement optimization tips</li>
                  <li>• Content strategy recommendations</li>
                  <li>• Platform-specific best practices</li>
                </ul>
              </div>

              <button
                onClick={generateContent}
                disabled={isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating Content...</span>
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    <span>Generate Social Media Content</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Generated Content Display */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Your AI-Generated Social Media Content
              </h4>
              <button
                onClick={resetForm}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Generate New Content
              </button>
            </div>

            {/* Content Strategy */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
              <h5 className="font-semibold text-slate-900 dark:text-white mb-3">
                📈 Recommended Content Strategy
              </h5>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {generatedContent.content_strategy}
              </p>
            </div>

            {/* Social Media Posts */}
            <div className="grid gap-6">
              <h5 className="text-xl font-semibold text-slate-900 dark:text-white">
                Platform-Specific Posts
              </h5>
              
              {generatedContent.posts.map((post, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{getPlatformIcon(post.platform)}</span>
                    <h6 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {post.platform}
                    </h6>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                    <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>

                  {post.hashtags.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        Recommended Hashtags:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.hashtags.map((hashtag, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                          >
                            #{hashtag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {post.engagement_tips.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        💡 Engagement Tips:
                      </p>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        {post.engagement_tips.map((tip, idx) => (
                          <li key={idx}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                Ready to Automate Your Social Media?
              </h5>
              <p className="text-green-700 dark:text-green-300 mb-4">
                This is just a sample of what AI can do for your social media strategy. Get automated content generation, scheduling, and performance optimization.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Full Social Media Automation
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Download Content Calendar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}