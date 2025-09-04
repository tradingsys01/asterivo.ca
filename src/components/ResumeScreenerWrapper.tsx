'use client';

import dynamic from 'next/dynamic';

const ResumeScreenerDemo = dynamic(() => import('./ResumeScreenerDemo'), {
  loading: () => (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          AI Resume Screener
        </div>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Loading interactive demo...
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  ),
  ssr: false
});

export default function ResumeScreenerWrapper() {
  return <ResumeScreenerDemo />;
}