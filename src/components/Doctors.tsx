import { Award, Clock } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Rajesh Kumar',
    qualification: 'MDS, Prosthodontics',
    experience: '18 Years Experience',
    specialty: 'Implants & Cosmetic Dentistry',
    image: '/images/doctor-1.png',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Dr. Priya Sharma',
    qualification: 'MDS, Endodontics',
    experience: '12 Years Experience',
    specialty: 'Root Canal Specialist',
    image: '/images/doctor-2.png',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Dr. Arun Reddy',
    qualification: 'MDS, Orthodontics',
    experience: '10 Years Experience',
    specialty: 'Braces & Aligners',
    image: '/images/doctor-3.png',
    gradient: 'from-teal-500 to-emerald-500',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
            Our Team
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5 rich-text-heading">
            Meet Our Expert Dentists
          </h2>
          <p className="text-text-light text-lg leading-relaxed">
            Our team of highly qualified specialists is dedicated to providing you with the best dental care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="gradient-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover card-interactive border border-border/50">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${doctor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Specialty Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${doctor.gradient} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                      <Award className="w-3.5 h-3.5" />
                      {doctor.specialty}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">{doctor.qualification}</p>
                  <div className="flex items-center gap-2 text-text-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative gradient border on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${doctor.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
          {[
            { label: 'Board Certified', icon: '🏆' },
            { label: 'International Training', icon: '🌍' },
            { label: 'Published Research', icon: '📚' },
            { label: 'Award Winners', icon: '⭐' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-text-light">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
