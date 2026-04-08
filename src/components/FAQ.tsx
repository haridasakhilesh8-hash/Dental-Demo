import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Is dental treatment painful?',
    answer: 'At Smile Care, we use advanced anesthesia techniques and modern equipment to ensure all procedures are virtually painless. Most patients report feeling only slight pressure during treatments. We also offer sedation options for anxious patients.',
  },
  {
    question: 'How much does a dental implant cost?',
    answer: 'Dental implant costs at our clinic range from ₹25,000 to ₹50,000 per implant, depending on the type and complexity. We offer flexible payment plans and accept all major insurance providers. A detailed cost estimate is provided after the initial consultation.',
  },
  {
    question: 'How long does a root canal treatment take?',
    answer: 'Most root canal treatments at our clinic are completed in a single visit lasting 45-90 minutes. Complex cases may require 2 visits. Our advanced rotary instruments and digital imaging ensure faster, more precise treatments.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept all major dental insurance plans including Star Health, ICICI Lombard, Bajaj Allianz, and more. Our team will help you understand your coverage and maximize your benefits. We also offer interest-free EMI options.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend dental check-ups every 6 months for most patients. This allows us to catch problems early and maintain optimal oral health. Patients with specific conditions may need more frequent visits as advised by our doctors.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'For dental emergencies like severe pain, knocked-out teeth, or broken crowns, call our emergency line immediately at +91 98765 43210. We offer 24/7 emergency services. In the meantime, rinse with warm salt water and apply a cold compress to reduce swelling.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3 badge px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-5 rich-text-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-text-light text-lg leading-relaxed">
            Find answers to common questions about our dental services and treatments.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`gradient-card rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary/30 shadow-elevated' 
                  : 'border-border/50 shadow-card hover:shadow-card-hover'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    openIndex === index 
                      ? 'gradient-primary text-white' 
                      : 'bg-primary-light text-primary group-hover:bg-primary group-hover:text-white'
                  }`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-text pr-4">{faq.question}</span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-surface text-text-light'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 pl-20">
                  <p className="text-text-light leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="glass rounded-2xl p-8 shadow-soft inline-block">
            <p className="text-text-light mb-4 text-lg">Still have questions?</p>
            <a
              href="tel:+919876543210"
              className="btn-primary inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call us at +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
