import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#doctors', label: 'Our Doctors' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-elevated py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 5.5 4.5 5.5 8.5c0 2.5 1 4.5 2.5 6l4 5 4-5c1.5-1.5 2.5-3.5 2.5-6C18.5 4.5 15.5 2 12 2zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
              </svg>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-text block leading-tight">Smile Care</span>
              <span className="text-xs text-text-light font-medium tracking-wide">DENTAL CLINIC</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-text-light hover:text-primary transition-colors font-medium text-sm group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-text-light hover:text-primary transition-colors group"
            >
              <span className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </span>
              <span className="font-semibold">+91 98765 43210</span>
            </a>
            <a
              href="#appointment"
              className="btn-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-surface text-text-light hover:text-text hover:bg-primary-light transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-6 px-4 glass rounded-2xl shadow-elevated">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-light hover:text-primary hover:bg-primary-light px-4 py-3 rounded-xl font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-border my-3"></div>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 px-4 py-3 text-text-light"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>
              <a
                href="#appointment"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-white px-6 py-3.5 rounded-xl font-semibold text-center mt-2"
              >
                Book Appointment
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
