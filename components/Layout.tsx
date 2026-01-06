
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const links = [
    { label: 'Evidence', path: '/evidence' },
    { label: 'Framework', path: '/framework' },
    { label: 'Writing', path: '/writing' },
    { label: 'Resume', path: '/resume' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`sticky top-0 z-[60] transition-all duration-300 border-b-0.5 ${
          scrolled || isMenuOpen 
            ? 'bg-ricePaper border-hankoRust/20 py-2' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-12">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 hover:opacity-80 transition-opacity text-sumiInk relative z-[70]">
            <Logo size="md" className="-ml-4" />
            <span className="hidden md:inline-block font-serif text-lg font-semibold tracking-tight text-sumiInk">Jason K Hanani</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {location.pathname !== '/' && (
              <Link
                to="/"
                className={`text-sm tracking-wide transition-colors text-sumiInk hover:text-foxOrange`}
              >
                Home
              </Link>
            )}
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-hankoRust font-semibold' 
                    : 'text-sumiInk hover:text-foxOrange'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-hankoRust/20 mx-2" />
            <a 
              href="https://www.linkedin.com/in/jasonkhanani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-sumiInk hover:text-foxOrange inline-flex items-center"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-sumiInk hover:text-hankoRust transition-colors relative z-[70]"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 bg-ricePaper z-50 transition-all duration-500 md:hidden flex flex-col
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        <div className="flex flex-col justify-center items-center flex-grow p-8 space-y-10 text-center">
          {location.pathname !== '/' && (
            <Link
              to="/"
              onClick={closeMenu}
              className={`text-4xl font-serif transition-all duration-500 delay-0ms ${
                'text-sumiInk hover:text-foxOrange'
              } ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Home
            </Link>
          )}
          {links.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-4xl font-serif transition-all duration-500 delay-[${idx * 100}ms] ${
                location.pathname === link.path 
                  ? 'text-hankoRust scale-110' 
                  : 'text-sumiInk hover:text-foxOrange'
              } ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-hankoRust/20" />
          <a 
            href="https://www.linkedin.com/in/jasonkhanani/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={`inline-flex items-center justify-center text-sm tracking-[0.3em] uppercase font-bold text-sumiInk/60 hover:text-foxOrange transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <Linkedin size={28} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
        {/* Decorative element at bottom of menu */}
        <div className="p-12 text-center opacity-10">
          <Logo size="lg" />
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = 'contact@jasonkhanani.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer className="bg-sumiInk text-ricePaper pt-24 pb-12 px-6 relative z-10 min-h-[500px] h-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Logo size="lg" className="text-ricePaper -ml-6 mb-8 opacity-80" />
            <h3 className="text-4xl font-serif mb-6 leading-tight">Where is the bottleneck?</h3>
            <p className="text-ricePaper/70 max-w-md mb-8 text-lg leading-relaxed">
              Let's skip the small talk and look at the root cause. What is the one thing holding your team back right now?
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <a 
                  href={`mailto:${email}`}
                  className="inline-block text-2xl md:text-3xl font-serif hover:text-foxOrange transition-all pb-1"
                >
                  {email}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="relative p-3 border-0.5 border-ricePaper/20 hover:border-foxOrange hover:bg-foxOrange/10 transition-all duration-300 group"
                  aria-label="Copy email to clipboard"
                >
                  {copySuccess ? (
                    <svg className="w-5 h-5 text-foxOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {copySuccess && (
                    <span className="absolute -top-8 right-0 text-xs bg-foxOrange text-ricePaper px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              <div className="flex flex-col md:items-end space-y-3 pt-8 border-t border-ricePaper/10">
                <a href="https://www.linkedin.com/in/jasonkhanani/" className="hover:text-foxOrange transition-colors text-sm">LinkedIn</a>
                <Link to="/evidence" className="hover:text-foxOrange transition-colors text-sm">Evidence Vault</Link>
                <Link to="/framework" className="hover:text-foxOrange transition-colors text-sm">Framework</Link>
                <Link to="/resume" className="hover:text-foxOrange transition-colors text-sm">Resume</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t-0.5 border-ricePaper/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase opacity-40">
          <p>&copy; {new Date().getFullYear()} Jason Kester Hanani</p>
          <p>Tactile Precision &bull; Systems Design</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen selection:bg-foxOrange/20">
      {/* Texture Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999]" />
      
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
