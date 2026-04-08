import { Award, Shield, Clock, IndianRupee, Microscope, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Doctors',
    description: 'Our specialists bring 15+ years of expertise in advanced dental procedures.',
  },
  {
    icon: Microscope,
    title: 'Modern Equipment',
    description: 'State-of-the-art technology including digital X-rays and laser treatments.',
  },
  {
    icon: Shield,
    title: 'Strict Hygiene',
    description: 'Hospital-grade sterilization protocols for your complete safety.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Quality dental care at competitive prices with flexible payment options.',
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for urgent dental problems.',
  },
  {
    icon: HeartPulse,
    title: 'Painless Procedures',
    description: 'Advanced anesthesia techniques for comfortable, anxiety-free treatments.',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '5K+', label: 'Implants Done' },
  { value: '4.9', label: 'Google Rating' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 rich-text-heading">
              Trusted by Thousands in{' '}
              <span className="text-gradient">Hyderabad</span>
            </h2>
            <p className="text-text-light text-lg mb-12 leading-relaxed">
              At Smile Care Dental Clinic, we combine expertise, technology, and compassion to deliver 
              exceptional dental care. Here's why patients choose us:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 icon-box rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            {/* Main stats card */}
            <div className="gradient-primary rounded-[2rem] p-8 lg:p-12 text-white shadow-glow relative overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-10">Our Track Record</h3>
                
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <p className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">{stat.value}</p>
                      <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-5 h-5 text-gold fill-gold" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white/80 text-sm">4.9/5</span>
                  </div>
                  <p className="text-lg font-semibold">"Best dental experience ever!"</p>
                  <p className="text-white/70 text-sm mt-1">— Rated #1 Dental Clinic in Hyderabad on Google</p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 gradient-secondary rounded-2xl shadow-lg flex items-center justify-center float hidden lg:flex">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
