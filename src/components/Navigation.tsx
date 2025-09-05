import Link from "next/link";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="container mx-auto px-6 py-4 relative z-20">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Asterivo
        </Link>

        {/* Mobile-first Navigation - Shows all links on mobile as horizontal scroll */}
        <div className="flex overflow-x-auto space-x-4 md:space-x-8 py-2 md:py-0 w-full md:w-auto mt-4 md:mt-0">
          <Link 
            href="/solutions" 
            className={`whitespace-nowrap transition-colors ${isActive('/solutions') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            AI Automation
          </Link>
          <Link 
            href="/services" 
            className={`whitespace-nowrap transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Services
          </Link>
          <Link 
            href="/pricing" 
            className={`whitespace-nowrap transition-colors ${isActive('/pricing') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Pricing
          </Link>
          <Link 
            href="/case-studies" 
            className={`whitespace-nowrap transition-colors ${isActive('/case-studies') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            Case Studies
          </Link>
          <Link 
            href="/#how-it-works" 
            className="whitespace-nowrap text-slate-600 hover:text-blue-600 transition-colors"
          >
            How It Works
          </Link>
          <Link 
            href="/about" 
            className={`whitespace-nowrap transition-colors ${isActive('/about') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}