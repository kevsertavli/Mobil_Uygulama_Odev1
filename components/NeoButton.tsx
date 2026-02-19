
import React from 'react';

interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false
}) => {
  const variants = {
    primary: 'bg-white/10 border-white/20 text-white hover:bg-white/20',
    secondary: 'bg-black/20 border-white/10 text-white hover:bg-black/30',
    accent: 'bg-gradient-to-r from-[#FF5BBE] to-[#6A00A8] border-none text-white shadow-[#FF5BBE]/20 shadow-xl'
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        px-6 py-4 rounded-full border backdrop-blur-sm font-black text-lg uppercase tracking-wider
        transition-all duration-150 active:scale-90 active:brightness-75 disabled:opacity-50
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </button>
  );
};
