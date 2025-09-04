'use client';

import { useState, useRef } from 'react';

interface JobRequirements {
  position: string;
  required_skills: string[];
  preferred_skills: string[];
  experience_level: string;
  education_requirements: string;
  company_description: string;
}

interface ScreeningResult {
  overall_score: number;
  match_percentage: number;
  strengths: string[];
  concerns: string[];
  missing_skills: string[];
  experience_assessment: string;
  education_match: string;
  recommendation: 'Strong Match' | 'Good Match' | 'Partial Match' | 'Poor Match';
  interview_questions: string[];
  summary: string;
}

export default function ResumeScreenerDemo() {
  const [jobRequirements, setJobRequirements] = useState<JobRequirements>({
    position: '',
    required_skills: [],
    preferred_skills: [],
    experience_level: '2-5 years',
    education_requirements: '',
    company_description: ''
  });
  const [isScreening, setIsScreening] = useState(false);
  const [screeningResult, setScreeningResult] = useState<ScreeningResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const experienceLevels = [
    'Entry Level (0-2 years)',
    '2-5 years',
    '5-8 years',
    '8-12 years',
    'Senior (12+ years)'
  ];

  const handleSkillsChange = (value: string, type: 'required_skills' | 'preferred_skills') => {
    const skills = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    setJobRequirements(prev => ({
      ...prev,
      [type]: skills
    }));
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a PDF, JPG, or PNG file');
        return;
      }
      
      // Validate file size (10MB limit)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File size must be under 10MB');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const screenResume = async () => {
    if (!selectedFile) {
      alert('Please select a resume file');
      return;
    }

    if (!jobRequirements.position || jobRequirements.required_skills.length === 0) {
      alert('Please fill in position and at least one required skill');
      return;
    }

    setIsScreening(true);
    setScreeningResult(null);

    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);
      formData.append('jobRequirements', JSON.stringify(jobRequirements));

      const response = await fetch('/api/resume-screen', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to screen resume');
      }

      if (result.success && result.data) {
        setScreeningResult(result.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Resume screening error:', error);
      alert(error instanceof Error ? error.message : 'Failed to screen resume. Please try again.');
    } finally {
      setIsScreening(false);
    }
  };

  const resetForm = () => {
    setJobRequirements({
      position: '',
      required_skills: [],
      preferred_skills: [],
      experience_level: '2-5 years',
      education_requirements: '',
      company_description: ''
    });
    setScreeningResult(null);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    const colors = {
      'Strong Match': 'text-green-600 bg-green-100 border-green-200',
      'Good Match': 'text-blue-600 bg-blue-100 border-blue-200',
      'Partial Match': 'text-yellow-600 bg-yellow-100 border-yellow-200',
      'Poor Match': 'text-red-600 bg-red-100 border-red-200'
    };
    return colors[recommendation as keyof typeof colors] || 'text-gray-600 bg-gray-100 border-gray-200';
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
      {!screeningResult ? (
        <>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              AI Resume Screener
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Upload a resume and define job requirements to get an AI-powered screening analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Job Requirements Form */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Job Requirements
              </h4>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Position Title *
                </label>
                <input
                  type="text"
                  value={jobRequirements.position}
                  onChange={(e) => setJobRequirements(prev => ({...prev, position: e.target.value}))}
                  placeholder="e.g., Senior React Developer, Marketing Manager"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Required Skills * (comma separated)
                </label>
                <textarea
                  value={jobRequirements.required_skills.join(', ')}
                  onChange={(e) => handleSkillsChange(e.target.value, 'required_skills')}
                  placeholder="React, TypeScript, Node.js, AWS, Git"
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Preferred Skills (comma separated)
                </label>
                <textarea
                  value={jobRequirements.preferred_skills.join(', ')}
                  onChange={(e) => handleSkillsChange(e.target.value, 'preferred_skills')}
                  placeholder="Docker, Kubernetes, GraphQL, Agile"
                  rows={2}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Experience Level
                </label>
                <select
                  value={jobRequirements.experience_level}
                  onChange={(e) => setJobRequirements(prev => ({...prev, experience_level: e.target.value}))}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                >
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Education Requirements
                </label>
                <input
                  type="text"
                  value={jobRequirements.education_requirements}
                  onChange={(e) => setJobRequirements(prev => ({...prev, education_requirements: e.target.value}))}
                  placeholder="Bachelor's in Computer Science or equivalent"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>
            </div>

            {/* Resume Upload and Company Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Resume Upload & Company Info
              </h4>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Upload Resume * (PDF, JPG, PNG)
                </label>
                <div className="relative">
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileSelect}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg hover:border-blue-500 transition-colors text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  >
                    {selectedFile ? (
                      <div className="flex items-center justify-center space-x-2">
                        <span>📄</span>
                        <span>{selectedFile.name}</span>
                        <span className="text-sm text-slate-500">({(selectedFile.size / 1024 / 1024).toFixed(2)}MB)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>📎</span>
                        <span>Click to upload resume</span>
                      </div>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Max file size: 10MB. Supported formats: PDF, JPG, PNG
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company Description
                </label>
                <textarea
                  value={jobRequirements.company_description}
                  onChange={(e) => setJobRequirements(prev => ({...prev, company_description: e.target.value}))}
                  placeholder="Brief description of your company, culture, and what makes it unique"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  What you'll get:
                </h5>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>• Overall candidate score and match percentage</li>
                  <li>• Key strengths and potential concerns</li>
                  <li>• Skills gap analysis</li>
                  <li>• Experience and education assessment</li>
                  <li>• Tailored interview questions</li>
                  <li>• Hiring recommendation with detailed reasoning</li>
                </ul>
              </div>

              <button
                onClick={screenResume}
                disabled={isScreening || !selectedFile}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isScreening ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Screening Resume...</span>
                  </>
                ) : (
                  <>
                    <span>🔍</span>
                    <span>Screen Resume with AI</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Screening Results Display */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                Resume Screening Results
              </h4>
              <button
                onClick={resetForm}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Screen Another Resume
              </button>
            </div>

            {/* Overall Assessment */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg text-center">
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(screeningResult.overall_score)}`}>
                  {screeningResult.overall_score}/100
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Overall Score</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg text-center">
                <div className={`text-4xl font-bold mb-2 ${getScoreColor(screeningResult.match_percentage)}`}>
                  {screeningResult.match_percentage}%
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Requirements Match</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg text-center">
                <div className={`text-xl font-bold mb-2 px-4 py-2 rounded-full border ${getRecommendationColor(screeningResult.recommendation)}`}>
                  {screeningResult.recommendation}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Recommendation</div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
              <h5 className="font-semibold text-slate-900 dark:text-white mb-3">
                📋 Executive Summary
              </h5>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {screeningResult.summary}
              </p>
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Strengths */}
              <div className="space-y-4">
                <h5 className="text-xl font-semibold text-green-700 dark:text-green-300">
                  ✅ Key Strengths
                </h5>
                <ul className="space-y-2">
                  {screeningResult.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-slate-700 dark:text-slate-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concerns */}
              <div className="space-y-4">
                <h5 className="text-xl font-semibold text-orange-700 dark:text-orange-300">
                  ⚠️ Areas of Concern
                </h5>
                <ul className="space-y-2">
                  {screeningResult.concerns.map((concern, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span className="text-slate-700 dark:text-slate-300">{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills Gap Analysis */}
            {screeningResult.missing_skills.length > 0 && (
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-red-800 dark:text-red-200 mb-3">
                  🎯 Missing Required Skills
                </h5>
                <div className="flex flex-wrap gap-2">
                  {screeningResult.missing_skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-sm bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Experience & Education Assessment */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  💼 Experience Assessment
                </h5>
                <p className="text-blue-700 dark:text-blue-300">{screeningResult.experience_assessment}</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  🎓 Education Match
                </h5>
                <p className="text-purple-700 dark:text-purple-300">{screeningResult.education_match}</p>
              </div>
            </div>

            {/* Interview Questions */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                💡 Recommended Interview Questions
              </h5>
              <ol className="space-y-3">
                {screeningResult.interview_questions.map((question, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-indigo-700 dark:text-indigo-300">{question}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                Ready to Automate Your Hiring Process?
              </h5>
              <p className="text-green-700 dark:text-green-300 mb-4">
                This is just a sample of what AI can do for your recruitment process. Get automated resume screening, candidate ranking, and interview question generation.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Full HR Automation
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Download Screening Template
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}