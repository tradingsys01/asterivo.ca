'use client';

import { useEffect, useState } from 'react';
import InvoiceDemo from './InvoiceDemo';

export default function DemoWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log('🔄 DemoWrapper: useEffect running - setting isClient to true');
    setIsClient(true);
    console.log('✅ DemoWrapper: isClient set to true, should render InvoiceDemo now');
  }, []);

  console.log('🏗️ DemoWrapper render - isClient:', isClient);

  if (!isClient) {
    console.log('⏳ DemoWrapper: Showing loading state (client-side not ready)');
    return (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Document Data Extraction Demo
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Loading interactive demo...
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  console.log('🚀 DemoWrapper: Rendering InvoiceDemo component');
  return <InvoiceDemo />;
}