
import React from 'react';
import { NeoButton } from './NeoButton';
import { X } from 'lucide-react';

interface ModalCardProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
}

export const ModalCard: React.FC<ModalCardProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  confirmText = "Tamam",
  onConfirm 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="glass-effect rounded-[30px] w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-black text-white mb-4 pr-8">{title}</h2>
        <div className="text-white/80 text-lg leading-relaxed mb-8">
          {children}
        </div>
        <NeoButton variant="accent" onClick={onConfirm || onClose} className="w-full">
          {confirmText}
        </NeoButton>
      </div>
    </div>
  );
};
