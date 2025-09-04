'use client';

import { useState } from 'react';
import Link from "next/link";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="container mx-auto px-6 py-4 relative z-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Asterivo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/solutions" 
            className={`transition-colors ${isActive('/solutions') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            AI Automation
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Services
          </Link>
          <Link 
            href="/pricing" 
            className={`transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/case-studies" 
            className={`transition-colors ${isActive('/case-studies') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Case Studies
          </Link>
          <Link 
            href="/#how-it-works" 
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            How It Works
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 text-slate-600 transition-transform ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="py-4 space-y-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 mt-4">
          <Link 
            href="/solutions"
            onClick={closeMenu}
            className={`block px-4 py-3 transition-colors ${isActive('/solutions') ? 'text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            AI Automation
          </Link>
          <Link 
            href="/services"
            onClick={closeMenu}
            className={`block px-4 py-3 transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            Services
          </Link>
          <Link 
            href="/pricing"
            onClick={closeMenu}
            className={`block px-4 py-3 transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/case-studies"
            onClick={closeMenu}
            className={`block px-4 py-3 transition-colors ${isActive('/case-studies') ? 'text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            Case Studies
          </Link>
          <Link 
            href="/#how-it-works"
            onClick={closeMenu}
            className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            How It Works
          </Link>
          <Link 
            href="/about"
            onClick={closeMenu}
            className={`block px-4 py-3 transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold bg-blue-50 dark:bg-blue-900/20' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            About
          </Link>
          <div className="px-4 py-2">
            <Link 
              href="/contact"
              onClick={closeMenu}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}