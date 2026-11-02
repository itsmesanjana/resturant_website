import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const handleOpenAppointment = (doctorName?: string, specialtyName?: string) => {
    if (doctorName) setSelectedDoctor(doctorName);
    if (specialtyName) setSelectedSpecialty(specialtyName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main className="flex-1">
        <Hero onOpenAppointment={() => handleOpenAppointment()} />
        <AboutSection />
        <SpecialtiesSection
          onSelectSpecialty={(spec) => handleOpenAppointment(undefined, spec)}
        />
        <DoctorsSection
          onBookDoctor={(doc, spec) => handleOpenAppointment(doc, spec)}
        />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <AppointmentSection
          initialDoctor={selectedDoctor}
          initialSpecialty={selectedSpecialty}
        />
        <LocationSection />
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDoctor={selectedDoctor}
        selectedSpecialty={selectedSpecialty}
      />
    </div>
  );
}

export default App;
