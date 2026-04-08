import { useState } from 'react';
import { Calendar, Phone, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  'General Checkup',
  'Dental Implants',
  'Root Canal Treatment',
  'Braces & Aligners',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Oral Surgery',
  'Other',
];

const benefits = [
  {
    icon: Calendar,
    title: 'Easy Online Booking',
    description: 'Book anytime, anywhere in 2 minutes',
  },
  {
    icon: Clock,
    title: 'Quick Confirmation',
    description: 'Get confirmed within 30 minutes',
  },
  {
    icon: Phone,
    title: 'Free Consultation Call',
    description: 'Discuss your concerns before visiting',
  },
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', service: '', date: '' });
  };

  return (
    <section id="appointment" className="relative py-24 overflow-hidden">
      {/* Rich Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 pattern-dots opacity-40"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
              Book Now
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 rich-text-heading">
              Schedule Your{' '}
              <span className="text-gradient">Appointment</span>{' '}
              Today
            </h2>
            <p className="text-text-light text-lg mb-10 leading-relaxed">
              Take the first step towards a healthier smile. Book your appointment online and 
              we'll confirm within 30 minutes.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="flex items-center gap-5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-elevated transition-shadow">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-text">{benefit.title}</p>
                    <p className="text-sm text-text-light">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {['No Waiting', 'Same Day Appointments', 'Insurance Accepted'].map((badge) => (
                <span key={badge} className="badge text-primary text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {/* Form card */}
            <div className="glass rounded-[2rem] p-8 lg:p-10 shadow-glow border border-white/50 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
              
              {submitted ? (
                <div className="text-center py-12 relative">
                  <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text mb-3">Thank You!</h3>
                  <p className="text-text-light text-lg">We'll contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text text-lg">Book Your Visit</h3>
                      <p className="text-sm text-text-light">Fill in your details below</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field w-full px-5 py-4 rounded-xl text-text"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field w-full px-5 py-4 rounded-xl text-text"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-text mb-2">
                      Select Service
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="input-field w-full px-5 py-4 rounded-xl text-text bg-white"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-text mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="input-field w-full px-5 py-4 rounded-xl text-text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-sm text-text-light pt-2">
                    Or call us directly at{' '}
                    <a href="tel:+919876543210" className="text-primary font-bold hover:underline">
                      +91 98765 43210
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass px-5 py-3 rounded-2xl shadow-elevated float hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-bold text-text text-sm">Quick Response</p>
                <p className="text-xs text-text-light">Within 30 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
