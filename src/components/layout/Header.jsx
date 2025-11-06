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
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-scrolled' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="logo text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          {SITE_CONFIG.name}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link text-dark hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="medium">
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
          <ul className="flex flex-col space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-2xl font-semibold text-dark hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button variant="primary" size="large" className="w-full">
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
