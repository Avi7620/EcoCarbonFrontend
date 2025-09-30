import React from 'react';
import { Leaf, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        'Carbon Offsets',
        'Sustainability Consulting',
        'Corporate Programs',
        'Project Verification',
        'Carbon Marketplace',
        'Green Technology'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Impact Reports',
        'Case Studies',
        'Carbon Calculator',
        'Knowledge Base',
        'Webinars',
        'Blog'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Press',
        'Partners',
        'Investors'
      ]
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Us',
        'API Documentation',
        'System Status',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">EcoCarbon Solutions</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the global transition to a sustainable future through
                verified carbon credits and innovative environmental solutions.
              </p>

              {/* Small contact form for mobile screens */}
              <form className="block md:hidden bg-gray-800 p-3 rounded-lg space-y-2 mt-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-2 py-1 rounded bg-gray-900 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs"
                />
                <textarea
                  placeholder="Message"
                  className="w-full px-2 py-1 rounded bg-gray-900 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs"
                  rows={2}
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-1 rounded font-medium transition-colors text-xs"
                >
                  Send
                </button>
              </form>

              {/* Let's Connect section */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Let's Connect</h4>
                <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-gray-300 text-[11px] sm:text-sm">
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4 text-green-400" />
                    <span>contact@ecocarbon.com</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4 text-green-400" />
                    <span>+91 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-green-400">Address:</span>
                    <span>Konark Apha , Kharadi , Pune</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-green-400">Hours:</span>
                    <span>Mon-Fri 9am-6pm</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button className="text-gray-300 hover:text-green-400 transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated on Climate Action
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on carbon markets, sustainability trends, and project updates
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 EcoCarbon Solutions. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm text-gray-400">
                <button className="hover:text-green-400 transition-colors">Privacy Policy</button>
                <button className="hover:text-green-400 transition-colors">Terms of Service</button>
                <button className="hover:text-green-400 transition-colors">Cookie Policy</button>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;