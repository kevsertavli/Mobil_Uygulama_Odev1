
import React from 'react';
import { MENTAL_CATEGORIES, PHYSICAL_CATEGORIES } from '../constants';
import { NeoCard } from '../components/NeoCard';
import { ArrowLeft } from 'lucide-react';

interface WellbeingCategoryScreenProps {
  type: 'mental' | 'physical';
  onBack: () => void;
  onSelectCategory: (id: string) => void;
}

export const WellbeingCategoryScreen: React.FC<WellbeingCategoryScreenProps> = ({ type, onBack, onSelectCategory }) => {
  const categories = type === 'mental' ? MENTAL_CATEGORIES : PHYSICAL_CATEGORIES;
  const title = type === 'mental' ? 'Ruhsal İyi Oluş' : 'Fiziksel İyi Oluş';

  return (
    <div className="flex flex-col h-full px-6 pt-12 pb-24 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="text-white/70 hover:text-white"><ArrowLeft size={32} /></button>
        <h2 className="text-3xl font-black text-white">{title}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <NeoCard 
            key={cat.id} 
            onClick={() => onSelectCategory(cat.id)}
            className="flex flex-col items-center justify-center p-8 aspect-square text-center"
          >
            <div className="text-[#62D2FF] mb-3">{cat.icon}</div>
            <span className="text-white font-bold text-xs uppercase leading-tight">{cat.label}</span>
          </NeoCard>
        ))}
      </div>
    </div>
  );
};
