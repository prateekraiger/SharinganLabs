import { SITE_CONFIG, NAVIGATION_LINKS } from '../../lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-primary">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={platform}
                >
                  <span className="text-sm">{platform.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
