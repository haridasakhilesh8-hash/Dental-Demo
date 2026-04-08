import { Stethoscope, Sparkles, SmilePlus, Baby, Syringe, Crown, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with natural-looking implants. Restore your smile with our advanced implant technology.',
    gradient: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Root Canal Treatment',
    description: 'Painless root canal procedures to save your natural teeth. Modern techniques ensure comfort throughout.',
    gradient: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: SmilePlus,
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with traditional braces or invisible aligners. Customized treatment plans for all ages.',
    gradient: 'from-violet-500 to-violet-600',
    bgLight: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening for a brighter, confident smile. Safe and effective treatments with lasting results.',
    gradient: 'from-amber-500 to-amber-600',
    bgLight: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care for children in a friendly environment. Building healthy habits from an early age.',
    gradient: 'from-pink-500 to-pink-600',
    bgLight: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: Syringe,
    title: 'Oral Surgery',
    description: 'Expert surgical procedures including wisdom tooth extraction. Performed with precision and minimal discomfort.',
    gradient: 'from-teal-500 to-teal-600',
    bgLight: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface"></div>
      <div className="absolute inset-0 pattern-grid"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5 rich-text-heading">
            Comprehensive Dental Care
          </h2>
          <p className="text-text-light text-lg leading-relaxed">
            From routine check-ups to advanced procedures, we offer a full range of dental services 
            to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group gradient-card rounded-3xl p-7 shadow-card hover:shadow-card-hover card-interactive border border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light leading-relaxed mb-5">
                  {service.description}
                </p>
                
                {/* Link */}
                <a 
                  href="#appointment" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#appointment"
            className="btn-primary inline-flex items-center gap-2.5 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
