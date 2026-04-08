import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import ClinicInfo from './components/ClinicInfo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <Appointment />
        <ClinicInfo />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
