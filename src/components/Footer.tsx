"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, ArrowUp } from "lucide-react";
import Head from "next/head";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Carbon Offsets", href: "/services/carbon-offsets" },
        { name: "Sustainability Consulting", href: "/services/consulting" },
        { name: "Corporate Programs", href: "/services/corporate" },
        { name: "Project Verification", href: "/services/verification" },
        { name: "Carbon Marketplace", href: "/services/marketplace" },
        { name: "Green Technology", href: "/services/technology" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Impact Reports", href: "/resources/reports" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Carbon Calculator", href: "/resources/calculator" },
        { name: "Knowledge Base", href: "/resources/knowledge" },
        { name: "Webinars", href: "/resources/webinars" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Investors", href: "/investors" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Contact Us", href: "/contact" },
        { name: "API Documentation", href: "/docs/api" },
        { name: "System Status", href: "/status" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <>
      {/* SEO Metadata for Footer */}
      <Head>
        <meta
          name="description"
          content="EcoCarbon Solutions - Verified carbon credits, sustainability consulting, corporate programs, and innovative green technology."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EcoCarbon Solutions",
              url: "https://ecocarbon.com",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-XXX-XXX-XXX",
                  contactType: "Customer Support",
                  areaServed: "IN",
                  availableLanguage: ["English"],
                },
              ],
            }),
          }}
        />
      </Head>

      <footer id="footer" className="bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          {/* Main Footer */}
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
              {/* Company Info */}
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-8 w-8 text-green-400" />
                  <span className="text-2xl font-bold">
                    EcoCarbon Solutions
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Leading the global transition to a sustainable future through
                  verified carbon credits and innovative environmental solutions.
                </p>

                {/* Small Contact Form (mobile only) */}
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

                {/* Contact Info */}
                <address className="mt-6 not-italic">
                  <h4 className="text-lg font-semibold mb-2">Let's Connect</h4>
                  <div className="flex flex-col gap-2 text-gray-300 text-xs sm:text-sm">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4 text-green-400" />
                      <a href="mailto:contact@ecocarbon.com">
                        contact@ecocarbon.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4 text-green-400" />
                      <a href="tel:+91XXXXXXXXX">+91 XXX XXX XXX</a>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-green-400">
                        Address:
                      </span>
                      <span>Konark Alpha, Kharadi, Pune</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-green-400">
                        Hours:
                      </span>
                      <span>Mon-Fri 9am-6pm</span>
                    </div>
                  </div>
                </address>
              </div>

              {/* Footer Links */}
              <nav
                className="col-span-2 lg:col-span-4 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                aria-label="Footer Navigation"
              >
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 py-8 md:py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Stay Updated on Climate Action
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Get the latest insights on carbon markets, sustainability trends,
                and project updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email Address"
                  className="flex-1 px-4 py-2 md:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-sm md:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 py-6 md:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} EcoCarbon Solutions. All rights
                reserved.
              </div>

              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="flex space-x-4 text-xs md:text-sm text-gray-400">
                  <Link href="/privacy" className="hover:text-green-400">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-green-400">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-green-400">
                    Cookie Policy
                  </Link>
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
    </>
  );
};

export default Footer;
