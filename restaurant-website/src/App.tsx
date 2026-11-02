import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ChefSection } from './components/ChefSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-950 text-cream-100 flex flex-col font-sans selection:bg-gold-500 selection:text-obsidian-950">
      <Navbar onOpenReservation={() => setIsReservationModalOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenReservation={() => setIsReservationModalOpen(true)} />
        <Story />
        <SignatureDishes onOpenReservation={() => setIsReservationModalOpen(true)} />
        <MenuSection />
        <GallerySection />
        <ChefSection />
        <TestimonialsSection />
        <ReservationSection />
        <LocationSection />
      </main>

      <Footer />

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}

export default App;
