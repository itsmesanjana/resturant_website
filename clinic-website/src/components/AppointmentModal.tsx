import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor?: string;
  selectedSpecialty?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedDoctor,
  selectedSpecialty,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm overflow-y-auto p-4 sm:p-6 flex items-center justify-center cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-8 cursor-default"
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-white text-slate-600 hover:text-brand-600 border border-slate-200 shadow-xl flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <AppointmentSection
                initialDoctor={selectedDoctor}
                initialSpecialty={selectedSpecialty}
                isModal={true}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
