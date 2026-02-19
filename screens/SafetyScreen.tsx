
import React, { useState } from 'react';
import { NeoButton } from '../components/NeoButton';
import { ModalCard } from '../components/ModalCard';
import { Shield, Users, PhoneCall, User, CheckCircle } from 'lucide-react';

export const SafetyScreen: React.FC = () => {
  const [modalType, setModalType] = useState<'kades' | 'self' | 'others' | null>(null);

  const openKades = () => {
    window.location.href = "https://play.google.com/store/apps/details?id=tr.gov.egm.kades";
    setModalType(null);
  };

  return (
    <div className="flex flex-col h-full px-6 pt-12">
      <h2 className="text-4xl font-black text-white mb-2">Güvenlik</h2>
      <p className="text-white/60 text-lg mb-8">Hangi konuda destek almak istersin?</p>

      <div className="space-y-6">
        <NeoButton 
          onClick={() => setModalType('self')}
          className="w-full py-10 flex flex-col items-center justify-center gap-3 bg-white/5"
        >
          <User size={32} className="text-[#62D2FF]" />
          Kendimle ilgili
        </NeoButton>

        <NeoButton 
          onClick={() => setModalType('others')}
          className="w-full py-10 flex flex-col items-center justify-center gap-3 bg-white/5"
        >
          <Users size={32} className="text-[#62D2FF]" />
          Başkası ile ilgili
        </NeoButton>

        <NeoButton 
          variant="accent" 
          onClick={() => setModalType('kades')}
          className="w-full py-10 flex flex-col items-center justify-center gap-3 mt-4"
        >
          <PhoneCall size={32} />
          KADES
        </NeoButton>
      </div>

      <ModalCard 
        isOpen={modalType === 'kades'} 
        onClose={() => setModalType(null)} 
        title="KADES Yönlendirmesi"
        confirmText="Uygulamaya Git"
        onConfirm={openKades}
      >
        KADES uygulamasına yönlendiriliyorsun. Güvende değilsen lütfen hemen "Uygulamaya Git" butonuna bas veya 112'yi ara.
      </ModalCard>

      <ModalCard 
        isOpen={modalType === 'self' || modalType === 'others'} 
        onClose={() => setModalType(null)} 
        title="Yardım Talebi"
        confirmText="Anladım"
      >
        <div className="flex flex-col items-center text-center">
          <CheckCircle size={48} className="text-green-400 mb-4" />
          <p>Talebin ilgili kampüs güvenlik birimlerine ve psikolojik destek ekibimize anonim olarak iletildi. En kısa sürede uygulama üzerinden seninle iletişime geçeceğiz.</p>
        </div>
      </ModalCard>
    </div>
  );
};
