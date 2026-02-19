
import React from 'react';
import { NeoButton } from '../components/NeoButton';
import { MapPin, Globe } from 'lucide-react';

interface ComplaintScreenProps {
  onSelectTopic: (topic: string) => void;
}

export const ComplaintScreen: React.FC<ComplaintScreenProps> = ({ onSelectTopic }) => {
  return (
    <div className="flex flex-col h-full px-6 pt-12">
      <h2 className="text-4xl font-black text-white mb-2">Şikayet & Öneri</h2>
      <p className="text-white/60 text-lg mb-12">Hangi kısım ile ilgili şikayetin veya bir önerin var?</p>

      <div className="grid grid-cols-1 gap-6">
        <NeoButton 
          onClick={() => onSelectTopic('Kampüs İçi')}
          className="py-12 flex flex-col items-center gap-4 bg-white/10"
        >
          <MapPin size={40} className="text-[#FF5BBE]" />
          KAMPÜS İÇİ
        </NeoButton>

        <NeoButton 
          onClick={() => onSelectTopic('Kampüs Dışı')}
          className="py-12 flex flex-col items-center gap-4 bg-white/10"
        >
          <Globe size={40} className="text-[#62D2FF]" />
          KAMPÜS DIŞI
        </NeoButton>
      </div>
    </div>
  );
};
