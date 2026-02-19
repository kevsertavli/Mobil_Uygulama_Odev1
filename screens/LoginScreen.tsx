
import React, { useState } from 'react';
import { Info, ChevronRight } from 'lucide-react';
import { NeoButton } from '../components/NeoButton';
import { ModalCard } from '../components/ModalCard';
import { THEME } from '../constants';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState<'Kadın' | 'Erkek' | ''>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full w-full p-8 justify-center">
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-black text-white tracking-tighter italic">MODUM</h1>
        <p className="text-white/60 font-semibold tracking-widest uppercase text-xs mt-2">Kampüs Destek & İyi Oluş</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="block text-white/70 text-sm font-bold mb-2 ml-4">Öğrenci No</label>
          <div className="flex items-center">
            <input 
              type="text"
              placeholder="000000000"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/40"
            />
            <button 
              onClick={() => setIsModalOpen(true)}
              className="absolute right-4 text-white/40 hover:text-white"
            >
              <Info size={20} />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm font-bold mb-2 ml-4">Yaş: {age === 25 ? '+25' : age}</label>
          <input 
            type="range"
            min="17"
            max="25"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="w-full accent-white h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-white/40 text-xs mt-2 px-2">
            <span>18</span>
            <span>25+</span>
          </div>
        </div>

        <div>
          <label className="block text-white/70 text-sm font-bold mb-4 ml-4">Cinsiyet</label>
          <div className="flex gap-4">
            <button 
              onClick={() => setGender('Kadın')}
              className={`flex-1 py-3 rounded-full border transition-all ${gender === 'Kadın' ? 'bg-white text-[#6A00A8] border-white font-bold' : 'border-white/20 text-white/60'}`}
            >
              Kadın
            </button>
            <button 
              onClick={() => setGender('Erkek')}
              className={`flex-1 py-3 rounded-full border transition-all ${gender === 'Erkek' ? 'bg-white text-[#6A00A8] border-white font-bold' : 'border-white/20 text-white/60'}`}
            >
              Erkek
            </button>
          </div>
        </div>

        <div className="pt-8">
          <NeoButton 
            onClick={onLogin} 
            className="w-full flex items-center justify-center gap-2"
            disabled={!studentId}
          >
            GİRİŞ <ChevronRight size={20} />
          </NeoButton>
        </div>

        <p className="text-center text-white/40 text-[10px] leading-tight px-4 mt-4">
          Giriş yaparak <span className="underline">KVKK Aydınlatma Metni</span> ve <span className="underline">Kullanım Koşullarını</span> kabul etmiş sayılırsınız.
        </p>
      </div>

      <ModalCard 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Bilgilendirme"
      >
        Bu anonim uygulamada paylaştığın veriler kimliğinle eşleştirilmez. Öğrenci numaran sadece bölüm ve fakülte bazlı genel analizler için kullanılır. Güvendesin!
      </ModalCard>
    </div>
  );
};
