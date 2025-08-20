'use client';

import ContactPageContent from '@/components/ContactPageContent';

export default function GuideForm() {
  // Always set the source as guide-download for this component
  const mockSearchParams = new URLSearchParams();
  mockSearchParams.set('source', 'guide-download');
  
  // Override the global search params for this specific form
  const originalGet = URLSearchParams.prototype.get;
  URLSearchParams.prototype.get = function(key: string) {
    if (key === 'source') return 'guide-download';
    return originalGet.call(this, key);
  };
  
  return <ContactPageContent />;
}