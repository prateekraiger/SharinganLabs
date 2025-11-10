import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, SITE_CONFIG } from '../../lib/constants';
import Button from '../ui/Button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300 flex items-center gap-2 group">
          <svg className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2"/>
            <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="url(#gradient)"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="var(--color-primary)"/>
                <stop offset="100%" stopColor="var(--color-accent)"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-gradient" style={{"--gradient-from": "var(--color-primary)", "--gradient-to": "var(--color-accent)"}}>
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Start a Project</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{SITE_CONFIG.name}</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {NAVIGATION_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <SheetFooter>
                <Button className="w-full">Start a Project</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
