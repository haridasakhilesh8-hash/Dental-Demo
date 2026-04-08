import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Dental Implants',
  'Root Canal',
  'Braces & Aligners',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Oral Surgery',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 5.5 4.5 5.5 8.5c0 2.5 1 4.5 2.5 6l4 5 4-5c1.5-1.5 2.5-3.5 2.5-6C18.5 4.5 15.5 2 12 2zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-xl block">Smile Care</span>
                <span className="text-xs text-slate-400 font-medium tracking-wide">DENTAL CLINIC</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive dental care in Hyderabad. 
              Experience world-class treatment with a gentle touch.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-400 text-sm">
                  123, Road No. 10, Banjara Hills<br />
                  Hyderabad, Telangana 500034
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:info@smilecarehyderabad.com" className="text-slate-400 hover:text-white transition-colors text-sm break-all">
                  info@smilecarehyderabad.com
                </a>
              </div>
            </div>

            {/* Hours badge */}
            <div className="mt-6 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-white font-semibold text-sm mb-2">Working Hours</p>
              <p className="text-slate-400 text-xs">Mon-Fri: 9AM-8PM</p>
              <p className="text-slate-400 text-xs">Sat: 9AM-6PM | Sun: 10AM-2PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-shadow"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
