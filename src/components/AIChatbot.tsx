"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Asterivo company context for AI assistant
const ASTERIVO_CONTEXT = `You are Asterivo's AI assistant. Asterivo helps small businesses automate repetitive tasks and build professional websites quickly.

SERVICES & PRICING:
Website in a Day:
- Launch Day ($997): 3 pages + AI chatbot, built in 8 hours
- Business Day ($2,497): 5 pages + AI + automation features  
- AI-Powered Day ($4,997): 10 pages + advanced AI integration

AI Automation (Monthly):
- Starter ($497/month): Basic workflow automation
- Growth ($997/month): Advanced automation + integrations
- Scale ($1,997/month): Enterprise-level automation

KEY BENEFITS:
- Save 10+ hours per week through automation
- ROI typically seen within 30 days
- Same-day website delivery (8 hours)
- No enterprise price tags - built for small business

COMMON AUTOMATIONS:
- Lead response and qualification
- Email marketing sequences  
- Data entry and reporting
- Customer support responses
- Social media posting
- Invoice and quote generation

CONTACT: Direct users to /contact form for consultations. Response time within 2 business hours.

Be helpful, conversational, and focus on how Asterivo can solve their specific business problems. Ask follow-up questions to understand their needs.`;

// Fallback responses for when API is unavailable
const fallbackResponses: { [key: string]: string } = {
  "hello": "Hi! I'm Asterivo's AI assistant. I can help you learn about our AI automation services and Website in a Day offering. How can I assist you today?",
  "services": "We offer Website in a Day ($997-$4,997) and AI Automation services ($497-$1,997/month). What interests you most?",
  "default": "I'd be happy to help with information about our services, pricing, or getting started. What would you like to know?"
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Asterivo's intelligent AI assistant. I can understand your questions and provide personalized help with our services. What would you like to know about AI automation or our Website in a Day offering?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Real AI response using free Google Gemini API
  const getAIResponse = async (userMessage: string, conversationHistory: Message[]): Promise<string> => {
    try {
      // Use Google AI Studio free API (no key needed for basic use)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context: ASTERIVO_CONTEXT,
          history: conversationHistory.slice(-6) // Last 6 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('AI API error:', error);
      // Fallback to simple keyword matching
      return getFallbackResponse(userMessage);
    }
  };

  // Fallback response function
  const getFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return fallbackResponses.hello;
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return fallbackResponses.services;
    }
    
    return fallbackResponses.default;
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowQuickActions(false);

    // Get AI response
    const responseText = await getAIResponse(textToSend, messages);
    
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const quickActions = [
    { text: "Our Services", action: "services" },
    { text: "Website Pricing", action: "website" },
    { text: "AI Automation", action: "automation" },
    { text: "Contact Expert", action: "I have specific questions about my business needs" }
  ];

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[9999] bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ 
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '64px',
            height: '64px',
            backgroundColor: '#2563eb',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          aria-label="Open AI Chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {/* Notification Pulse */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] w-96 h-[500px] bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">🤖 Powered by AI • Always learning</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                    message.isBot
                      ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        '<a href="$2" target="_blank" class="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-medium">$1</a>'
                      )
                    }}
                  />
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            {showQuickActions && !isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Quick questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleSendMessage(action.action)}
                        className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-left"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about our services..."
                className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}