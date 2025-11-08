import { SITE_CONFIG, NAVIGATION_LINKS } from '../../lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 border-t border-purple-500/20" data-scroll-section>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" stroke="url(#gradient2)" strokeWidth="2"/>
                <path d="M16 8L20 16L16 24L12 16L16 8Z" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#8B5CF6"/>
                    <stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-3xl font-bold text-gradient-purple">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-3">
              {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 glass-light rounded-xl flex items-center justify-center hover:border-purple-500/60 border border-purple-500/20 transition-all duration-300 group"
                  aria-label={platform}
                >
                  <span className="text-sm text-purple-300 group-hover:text-white transition-colors">{platform.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-purple-300 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-purple-300 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="leading-relaxed">{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-purple-500/20 pt-12 mb-12">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-3 text-white">Stay <span className="text-gradient">Updated</span></h4>
            <p className="text-gray-400 mb-6 text-sm">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl glass-light border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all font-semibold shadow-lg shadow-purple-500/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
