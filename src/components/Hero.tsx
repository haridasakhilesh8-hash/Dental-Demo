import { Phone, Calendar, CheckCircle, Star, Shield } from 'lucide-react';

export default function Hero() {
  const highlights = [
    { icon: CheckCircle, text: 'Painless Treatments' },
    { icon: Shield, text: '15+ Years Experience' },
    { icon: Star, text: '10,000+ Happy Patients' },
  ];

  return (
    <section className="relative pt-24 lg:pt-28 overflow-hidden">
      {/* Rich Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full shadow-card mb-8 border border-border/50">
              <span className="w-2.5 h-2.5 bg-secondary rounded-full pulse-dot"></span>
              <span className="text-sm font-semibold text-text-light">Now accepting new patients</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6 leading-[1.1] rich-text-heading">
              Your Smile Deserves
              <span className="text-gradient block mt-2">Expert Care</span>
            </h1>

            <p className="text-lg lg:text-xl text-text-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience world-class dental care in the heart of Hyderabad. Our team of specialists 
              delivers painless treatments with cutting-edge technology and a gentle touch.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              {highlights.map((item) => (
                <div 
                  key={item.text} 
                  className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-soft border border-border/30"
                >
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-sm text-text">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#appointment"
                className="btn-primary inline-flex items-center justify-center gap-2.5 text-white px-8 py-4 rounded-2xl font-semibold text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="tel:+919876543210"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 text-text px-8 py-4 rounded-2xl font-semibold text-lg"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call Now
              </a>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-5">
              <div className="flex -space-x-3">
                {[
                  'from-blue-400 to-blue-600',
                  'from-teal-400 to-teal-600',
                  'from-green-400 to-green-600',
                  'from-cyan-400 to-cyan-600',
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${gradient} border-3 border-white shadow-md flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {['RK', 'PS', 'AR', 'LD'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold star-glow" />
                  ))}
                </div>
                <p className="text-sm text-text-light font-medium">4.9/5 from 500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow">
              <img
                src="/images/hero-clinic.jpg"
                alt="Modern dental clinic interior"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/20"></div>
            </div>

            {/* Floating Card - Left */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 glass rounded-2xl p-5 shadow-elevated float hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 icon-box-secondary rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-text text-lg">ISO Certified</p>
                  <p className="text-sm text-text-light">Quality Assured</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Right */}
            <div className="absolute -top-4 -right-4 lg:-right-6 glass rounded-2xl p-5 shadow-elevated float-delayed hidden sm:block">
              <div className="text-center">
                <p className="text-4xl font-bold text-gradient">15+</p>
                <p className="text-sm text-text-light font-medium">Years Experience</p>
              </div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border-2 border-dashed border-primary/10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
