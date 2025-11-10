import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, SITE_CONFIG } from '../../lib/constants';
import { Button } from '../ui/shadcn/button';
import { Sparkles, Menu, X } from 'lucide-react';
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
        isScrolled ? 'header-scrolled glass backdrop-blur-2xl border-b border-purple-500/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="logo text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Sparkles className="w-8 h-8 text-purple-400 relative" />
          </div>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="default" className="shadow-xl shadow-purple-500/50 hover:shadow-purple-500/70">
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 relative p-2 rounded-lg hover:bg-purple-500/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-purple-400" />
          ) : (
            <Menu className="w-6 h-6 text-purple-400" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden fixed inset-0 glass z-40 pt-24 px-6 backdrop-blur-2xl animate-fadeIn">
          <ul className="flex flex-col space-y-6 animate-slideDown">
            {NAVIGATION_LINKS.map((link, index) => (
              <li key={link.name} style={{ animationDelay: `${index * 50}ms` }} className="animate-slideDown">
                <a
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all block py-2 border-b border-purple-500/20 hover:border-purple-500/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <Button size="lg" className="w-full shadow-xl shadow-purple-500/50">
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
