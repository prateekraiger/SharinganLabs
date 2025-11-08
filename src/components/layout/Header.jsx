import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, SITE_CONFIG } from '../../lib/constants';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'header-scrolled glass' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="logo text-2xl font-bold text-gradient-purple hover:scale-105 transition-transform duration-300 flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2"/>
            <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="url(#gradient)"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#8B5CF6"/>
                <stop offset="100%" stopColor="#EC4899"/>
              </linearGradient>
            </defs>
          </svg>
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="medium" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-lg shadow-purple-500/50">
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line bg-purple-400 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`hamburger-line bg-purple-400 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`hamburger-line bg-purple-400 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden fixed inset-0 glass z-40 pt-24 px-6 backdrop-blur-2xl">
          <ul className="flex flex-col space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-2xl font-semibold text-white hover:text-gradient-purple transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button variant="primary" size="large" className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                Start a Project
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
