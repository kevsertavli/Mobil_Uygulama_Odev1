
import React, { useState, useEffect } from 'react';
import { NeoButton } from '../components/NeoButton';
import { ModalCard } from '../components/ModalCard';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const QUESTIONS = [
  "Kendimi genellikle enerjik ve motive hissediyorum.",
  "Geleceğe dair umutlu ve heyecanlıyım.",
  "Günlük sorumluluklarımı yerine getirmekte zorlanmıyorum.",
  "Stresli durumlarla başa çıkma konusunda kendime güveniyorum.",
  "Küçük sorunlar karşısında aşırı tepki vermediğimi düşünüyorum.",
  "Kendimi çoğu zaman huzurlu ve sakin hissediyorum.",
  "Sosyal çevremde kendimi değerli ve kabul edilmiş hissediyorum.",
  "Arkadaşlarımla vakit geçirmek bana keyif veriyor.",
  "Kampüs ortamında kendimi güvende hissediyorum.",
  "Derslerime odaklanmakta güçlük çekmiyorum.",
  "Uyku düzenimin sağlıklı olduğunu düşünüyorum.",
  "Sabahları dinlenmiş bir şekilde uyanıyorum.",
  "Beslenme alışkanlıklarımın dengeli olduğuna inanıyorum.",
  "Duygularımı kontrol etmekte başarılı olduğumu düşünüyorum.",
  "Kendime zaman ayırmaktan suçluluk duymuyorum.",
  "Zor bir dönemden geçerken kime başvuracağımı biliyorum.",
  "Akademik başarılarım beni tatmin ediyor.",
  "Yeni insanlarla tanışmak benim için kolaydır.",
  "Geçmişteki hatalarım üzerine aşırı düşünmemeye çalışırım.",
  "Hobilerime vakit ayırmak beni rahatlatıyor.",
  "Fiziksel sağlığımın genel olarak iyi olduğunu düşünüyorum.",
  "Karar verirken kendime olan güvenim yüksektir.",
  "Yalnız kaldığım zamanlarda kendimi mutsuz hissetmem.",
  "Hayatımdaki değişikliklere kolayca uyum sağlayabiliyorum.",
  "Başkalarının hakkımdaki düşünceleri beni aşırı kaygılandırmaz.",
  "Yardıma ihtiyacım olduğunda bunu istemekten çekinmem.",
  "Gün içinde odaklanma sorunu yaşamıyorum.",
  "Genel olarak hayatımdan memnun olduğumu söyleyebilirim."
];

interface SurveyScreenProps {
  onComplete: () => void;
}

export const SurveyScreen: React.FC<SurveyScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalSteps = QUESTIONS.length;
  const options = [
    "Kesin Katılmıyorum",
    "Katılmıyorum",
    "Kararsızım",
    "Katılıyorum",
    "Kesin Katılıyorum"
  ];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    
    // Kısa bir bekleme ile otomatik geçiş
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
        setSelectedOption(null);
      } else {
        onComplete();
      }
    }, 400);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto scroll-smooth px-6 pt-12 pb-32">
      {/* Progress Section */}
      <div className="mb-6 sticky top-0 bg-transparent backdrop-blur-sm pb-2 z-10">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-3xl font-black text-white">Değerlendirme</h2>
          <span className="text-white/40 font-bold">{currentStep}/{totalSteps}</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF5BBE] to-[#62D2FF] transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-effect rounded-[30px] p-8 mb-8 min-h-[220px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
        {/* Dekoratif kategori ikonu simülasyonu */}
        <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
            <Check size={120} className="text-white" />
        </div>
        
        <span className="text-[#62D2FF] font-black text-xs uppercase mb-2 tracking-widest">Soru {currentStep}</span>
        <p className="text-xl font-bold text-white leading-relaxed z-10">
          "{QUESTIONS[currentStep - 1]}"
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-4 mb-8">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectOption(idx)}
            className={`
              w-full py-5 px-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between text-left
              ${selectedOption === idx 
                ? 'bg-white text-[#6A00A8] border-white scale-[1.02] shadow-xl' 
                : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'}
            `}
          >
            <span className="text-sm font-black uppercase tracking-wide">{option}</span>
            {selectedOption === idx && <Check size={20} className="text-[#6A00A8]" />}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-auto">
        <NeoButton 
          variant="secondary" 
          onClick={handlePrev} 
          disabled={currentStep === 1}
          className="flex-1 flex items-center justify-center gap-2 text-xs"
        >
          <ChevronLeft size={16} /> ÖNCEKİ
        </NeoButton>
        <NeoButton 
          variant="accent" 
          onClick={handleNext} 
          disabled={selectedOption === null}
          className="flex-1 flex items-center justify-center gap-2 text-xs"
        >
          {currentStep === totalSteps ? 'BİTİR' : 'SONRAKİ'} <ChevronRight size={16} />
        </NeoButton>
      </div>

      <ModalCard 
        isOpen={isIntroModalOpen} 
        onClose={() => setIsIntroModalOpen(false)} 
        title="Başlıyoruz!"
      >
        <p className="mb-4 text-white/80">Bu 28 soru, senin kampüs yaşamındaki genel iyi oluşunu analiz etmemizi sağlayacak.</p>
        <div className="bg-[#62D2FF]/20 p-4 rounded-2xl border border-[#62D2FF]/30 text-sm italic text-[#62D2FF]">
          Sorular dinamik olarak değişecek. Lütfen her birini dikkatle oku.
        </div>
      </ModalCard>
    </div>
  );
};
