// Navbar.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

type NavItem = { name: string; href: string };

const navigation: NavItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  // { name: "Admin", href: "/admin" },
];

const servicesDropdown: NavItem[] = [
  { name: "Carbon Offsetting", href: "/services#carbon-offsetting" },
  { name: "Renewable Energy", href: "/services#renewable-energy" },
  { name: "Forest Conservation", href: "/services#forest-conservation" },
  { name: "Sustainability Consulting", href: "/services#consulting" },
  { name: "Solar Energy Solutions", href: "/services#solar-energy" },
  { name: "Community Programs", href: "/services#community" },
];

const projectsDropdown: NavItem[] = [
  { name: "All Projects", href: "/projects" },
  { name: "Renewable Energy", href: "/projects#1" },
  { name: "Forest Conservation", href: "/projects?filter=forest" },
  { name: "Solar Projects", href: "/projects?filter=solar" },
  { name: "Wind Power", href: "/projects?filter=wind" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 18;
      setNavSolid(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname === href;

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${navSolid
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gradient-to-br from-green-500 to-teal-400 shadow-md flex items-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-gray-900">
              EcoCarbon
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              <NavLinkSimple to="/" label="Home" active={isActive("/")} />

              {/* ---------- Services Dropdown ---------- */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`group inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive("/services")
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                    }`}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((s) => !s)}
                >
                  <span className="relative z-10">Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-xl overflow-hidden z-50 border border-gray-200"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <div className="p-2">
                        {servicesDropdown.map((s) => (
                          <Link
                            key={s.name}
                            to={s.href}
                            className="group block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-green-50 transition"
                          >
                            <div className="flex items-center justify-between">
                              <span>{s.name}</span>
                              <span className="ml-2 text-xs text-gray-400 group-hover:text-green-600">
                                →
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ---------- Projects Dropdown ---------- */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  className={`group inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${location.pathname.includes("/projects")
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                    }`}
                  onClick={() => setProjectsOpen((s) => !s)}
                >
                  <span className="relative z-10">Projects</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </button>

                <AnimatePresence>
                  {projectsOpen && (
                    <motion.div
                      className="absolute left-0 mt-3 w-52 rounded-xl bg-white shadow-lg overflow-hidden z-50 border border-gray-200"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <div className="p-2">
                        {projectsDropdown.map((p) => (
                          <Link
                            key={p.name}
                            to={p.href}
                            className="group block rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-green-50 transition"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {navigation.map((item) => (
                <NavLinkSimple
                  key={item.name}
                  to={item.href}
                  label={item.name}
                  active={isActive(item.href)}
                />
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="relative inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white transition group"
            >
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 blur opacity-70 transition group-hover:opacity-100"></span>
              <span className="relative z-10 bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm">
                <span className="relative z-20 text-white">Get Started</span>
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -30, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 20, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-6 w-6 text-gray-800" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 10, opacity: 0, scale: 0.9 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -10, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-6 w-6 text-gray-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden"
            >
              <div className="mx-3 my-3 rounded-xl border border-white/20 bg-white/40 backdrop-blur-md shadow-lg overflow-hidden">
                <div className="px-4 py-4 space-y-1">
                  <MobileNavLink to="/services" label="Services" onClick={() => setIsOpen(false)} />
                  <MobileNavLink to="/projects" label="Projects" onClick={() => setIsOpen(false)} />
                  {navigation.map((n) => (
                    <MobileNavLink key={n.name} to={n.href} label={n.name} onClick={() => setIsOpen(false)} />
                  ))}
                  <div className="pt-3">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center rounded-full px-4 py-2 font-semibold bg-gradient-to-r from-green-500 to-teal-400 text-white"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated glowing bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 shadow-[0_0_12px_rgba(56,178,172,0.7)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: navSolid ? 1 : 0, opacity: navSolid ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </nav>
  );
}

/* ---------- Small reusable components ---------- */

function NavLinkSimple({
  to,
  label,
  active,
}: {
  to: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link to={to} className="relative group inline-block">
      <motion.span
        whileHover={{ y: -2 }}
        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${active ? "text-green-600" : "text-gray-700 hover:text-green-600"
          }`}
      >
        {label}
      </motion.span>

      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 rounded"
        initial={{ scaleX: 0 }}
        animate={active ? { scaleX: 1 } : { scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{ transformOrigin: "left" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <span className="absolute -inset-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="block w-full h-full rounded-md bg-gradient-to-r from-green-300 via-teal-300 to-blue-300 blur-sm opacity-20"></span>
      </span>
    </Link>
  );
}

function MobileNavLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/50 transition"
    >
      {label}
    </Link>
  );
}
