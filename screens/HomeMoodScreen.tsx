
import React, { useState } from 'react';
import { MOODS } from '../constants';
import { NeoCard } from '../components/NeoCard';
import { NeoButton } from '../components/NeoButton';
import { ModalCard } from '../components/ModalCard';
import { Play } from 'lucide-react';

interface HomeMoodScreenProps {
  onSurveyStart: () => void;
  onWellbeingSelect: (type: 'mental' | 'physical') => void;
}

export const HomeMoodScreen: React.FC<HomeMoodScreenProps> = ({ onSurveyStart, onWellbeingSelect }) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [showStressModal, setShowStressModal] = useState(false);

  const handleStressAction = () => {
    window.open("https://www.youtube.com/results?search_query=stres+azaltma+egzersizleri", "_blank");
    setShowStressModal(false);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto px-6 pt-12 pb-32">
      <div className="mb-8">
        <p className="text-white/60 font-semibold text-sm">Duygularınızı ifade edin</p>
        <h2 className="text-3xl font-black text-white mt-1">Heyyy! Bugün nasılsın?</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {MOODS.map((mood, idx) => (
          <NeoCard 
            key={idx} 
            onClick={() => setSelectedMood(idx)}
            className={`flex flex-col items-center justify-center aspect-square gap-2 border-2 transition-all duration-300 ${
              selectedMood === idx ? 'border-[#FF5BBE] bg-white/20 scale-105' : 'border-transparent'
            }`}
          >
            <div className="scale-[1.5] mb-1">{mood.icon}</div>
            <span className="text-white/80 text-[10px] font-bold uppercase">{mood.label}</span>
          </NeoCard>
        ))}
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <NeoCard onClick={() => onWellbeingSelect('mental')} className="flex flex-col gap-2 p-5 h-32 justify-center">
            <span className="text-white text-lg font-black leading-tight">Ruhsal İyi Oluş</span>
            <span className="text-white/50 text-[10px] uppercase font-bold">Zihnini Keşfet</span>
          </NeoCard>
          <NeoCard onClick={() => onWellbeingSelect('physical')} className="flex flex-col gap-2 p-5 h-32 justify-center">
            <span className="text-white text-lg font-black leading-tight">Fiziksel İyi Oluş</span>
            <span className="text-white/50 text-[10px] uppercase font-bold">Bedenine Bak</span>
          </NeoCard>
        </div>

        <NeoCard 
          onClick={() => setShowStressModal(true)} 
          className="flex items-center justify-between p-6 bg-gradient-to-r from-white/10 to-[#FF5BBE]/20"
        >
          <div className="flex flex-col">
            <span className="text-white text-xl font-black">Stresini Yönet</span>
            <span className="text-white/60 text-sm">Hemen rahatlamak için tıkla</span>
          </div>
          <div className="bg-white/20 rounded-full p-3"><Play size={20} className="text-white" fill="white" /></div>
        </NeoCard>

        <div className="pt-4">
          <NeoButton 
            variant="accent" 
            onClick={onSurveyStart} 
            className={`w-full transition-all ${selectedMood !== null ? 'opacity-100' : 'opacity-70'}`}
          >
            {selectedMood !== null ? 'DEĞERLENDİRMEYE BAŞLA' : 'ÖNCE DUYGU SEÇ'}
          </NeoButton>
        </div>
      </div>

      <ModalCard 
        isOpen={showStressModal} 
        onClose={() => setShowStressModal(false)} 
        title="Rahatlama Vakti"
        confirmText="İzle ve Rahatla"
        onConfirm={handleStressAction}
      >
        Seni stres azaltma teknikleri ve meditasyon içeriklerine yönlendiriyoruz. Kulaklıklarını takmanı öneririz.
      </ModalCard>
    </div>
  );
};
