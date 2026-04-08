import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Srinivas Rao',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    text: 'I was terrified of dental procedures, but Dr. Rajesh made my implant surgery completely painless. The entire team is so professional and caring. Highly recommend Smile Care to anyone looking for quality dental care.',
    treatment: 'Dental Implants',
    avatar: 'SR',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Lakshmi Devi',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    text: 'My daughter had her braces done here and the results are amazing! Dr. Arun explained every step clearly and made her feel comfortable throughout the treatment. The clinic is very clean and modern.',
    treatment: 'Orthodontic Braces',
    avatar: 'LD',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Mohammed Irfan',
    location: 'Secunderabad',
    rating: 5,
    text: 'Had a root canal treatment that I was dreading for months. Dr. Priya completed it in just one sitting with zero pain! The pricing was transparent with no hidden charges. Best dental clinic in Hyderabad.',
    treatment: 'Root Canal',
    avatar: 'MI',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Anitha Krishnan',
    location: 'Madhapur, Hyderabad',
    rating: 5,
    text: 'The teeth whitening results exceeded my expectations. My smile looks so much brighter now! The staff is friendly and the appointment scheduling is very convenient. Will definitely come back for regular checkups.',
    treatment: 'Teeth Whitening',
    avatar: 'AK',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5 rich-text-heading">
            What Our Patients Say
          </h2>
          <p className="text-text-light text-lg leading-relaxed">
            Don't just take our word for it. Here's what our patients have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group gradient-card rounded-3xl p-7 lg:p-8 shadow-card hover:shadow-card-hover card-interactive border border-border/50 relative overflow-hidden"
            >
              {/* Background quote */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold star-glow" />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-light mb-7 leading-relaxed text-lg relative">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-light">{testimonial.location}</p>
                  </div>
                </div>
                <span className="badge-success text-secondary text-xs font-bold px-4 py-1.5 rounded-full">
                  {testimonial.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-5 glass px-8 py-5 rounded-2xl shadow-elevated">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold text-gold star-glow" />
                ))}
              </div>
              <span className="font-bold text-text text-lg ml-1">4.9/5</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-text-light font-medium">500+ reviews on Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
