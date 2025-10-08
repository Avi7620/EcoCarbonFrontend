import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';

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
        'Green Technology',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Careers',
        'Press',
        'Partners',
        'Investors',
      ],
    },
  ];

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-10 md:px-16">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-12 relative">
            {/* Company Info + Newsletter */}
            <div className="col-span-2 lg:col-span-2 ml-8 sm:ml-12">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">EcoCarbon Solutions</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the global transition to a sustainable future through
                verified carbon credits and innovative environmental solutions.
              </p>

              {/* Newsletter Signup */}
              <div className="max-w-md mx-auto sm:mx-0">
                <h3 className="text-2xl font-bold mb-4">Stay Updated on Climate Action</h3>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
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

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="ml-8 sm:ml-12">
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
{/* Contact Image (Desktop Only) */}
<div className="hidden lg:flex lg:col-span-2 justify-center items-center">
  <img
    src="/images/s2c.png" // your image path
    alt="Contact Us"
    className="w-80 h-80 object-cover rounded-xl shadow-lg" 
  />
</div>


          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 EcoCarbon Solutions. All rights reserved.
          </div>

          <div className="text-2xl font-bold mb-4">
            <button
              onClick={scrollToTop}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button className="hover:text-green-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-green-400 transition-colors">Terms of Service</button>
            <button className="hover:text-green-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
