
import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NeoCard: React.FC<NeoCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        glass-effect rounded-[22px] p-5 shadow-lg transition-all duration-200
        ${onClick ? 'cursor-pointer hover:bg-white/20 active:scale-95 active:bg-white/30' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
