import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAgency } from './components/AboutAgency';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WorkProcess } from './components/WorkProcess';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const scrollToContact = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-900 text-slate-100 flex flex-col font-sans selection:bg-neon-purple selection:text-white">
      <Navbar onStartProject={() => scrollToContact()} />

      <main className="flex-1">
        <Hero onStartProject={() => scrollToContact()} />
        <AboutAgency />
        <ServicesSection onSelectService={() => scrollToContact('Custom Service Architecture')} />
        <TechStackSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <WorkProcess />
        <PricingSection onSelectPlan={(plan) => scrollToContact(plan)} />
        <FAQSection />
        <ContactSection initialPlan={selectedPlan} />
      </main>

      <Footer />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => scrollToContact(selectedProject?.title)}
      />
    </div>
  );
}

export default App;
