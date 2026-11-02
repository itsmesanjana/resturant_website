import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReservationSection } from './ReservationSection';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
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
          className="fixed inset-0 z-50 bg-obsidian-950/90 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-center justify-center cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl my-8 cursor-default"
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-obsidian-900 border border-gold-500/40 text-cream-200 hover:text-gold-400 flex items-center justify-center transition-colors shadow-2xl cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-sm overflow-hidden bg-obsidian-950">
              <ReservationSection isModal={true} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
