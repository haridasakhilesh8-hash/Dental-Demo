import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <>
        <p className="text-text-light leading-relaxed">
          Smile Care Dental Clinic<br />
          123, Road No. 10, Banjara Hills<br />
          Hyderabad, Telangana 500034
        </p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-3 hover:gap-3 transition-all"
        >
          <Navigation className="w-4 h-4" />
          Get Directions
        </a>
      </>
    ),
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <div className="space-y-2">
        <a href="tel:+919876543210" className="block text-text-light hover:text-primary transition-colors font-medium">
          +91 98765 43210
        </a>
        <a href="tel:+914023456789" className="block text-text-light hover:text-primary transition-colors font-medium">
          +91 40 2345 6789
        </a>
        <p className="text-sm text-secondary font-semibold mt-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full pulse-dot"></span>
          24/7 Emergency Line
        </p>
      </div>
    ),
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:info@smilecarehyderabad.com" className="text-text-light hover:text-primary transition-colors font-medium flex items-center gap-2">
        info@smilecarehyderabad.com
        <ExternalLink className="w-4 h-4" />
      </a>
    ),
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text-light">Monday - Friday</span>
          <span className="font-semibold text-text">9:00 AM - 8:00 PM</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-light">Saturday</span>
          <span className="font-semibold text-text">9:00 AM - 6:00 PM</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-light">Sunday</span>
          <span className="font-semibold text-text">10:00 AM - 2:00 PM</span>
        </div>
      </div>
    ),
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function ClinicInfo() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface"></div>
      <div className="absolute inset-0 pattern-grid opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
            Visit Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5 rich-text-heading">
            Our Clinic Location
          </h2>
          <p className="text-text-light text-lg leading-relaxed">
            Conveniently located in the heart of Hyderabad with easy parking and accessibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-elevated h-[450px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2968!2d78.4867!3d17.4399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzIzLjYiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map overlay card */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto glass rounded-2xl p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-text">Smile Care Dental</p>
                  <p className="text-sm text-text-light">Banjara Hills, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className="group gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover card-interactive border border-border/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${card.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-text mb-3">{card.title}</h3>
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parking info */}
        <div className="mt-10 glass rounded-2xl p-6 shadow-soft flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {[
            { emoji: '🅿️', text: 'Free Parking Available' },
            { emoji: '♿', text: 'Wheelchair Accessible' },
            { emoji: '🚇', text: '5 min from Metro Station' },
            { emoji: '🏥', text: 'Near Apollo Hospital' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-text-light">
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
