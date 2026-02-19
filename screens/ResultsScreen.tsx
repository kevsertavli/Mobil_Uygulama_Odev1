
import React, { useState, useEffect } from 'react';
import { mockApi } from '../services/mockApi';
import { ResultItem } from '../types';
import { NeoCard } from '../components/NeoCard';
import { NeoButton } from '../components/NeoButton';
import { AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

interface ResultsScreenProps {
  onHome: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ onHome }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<ResultItem[]>([]);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await mockApi.fetchResults();
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-6" />
        <h2 className="text-2xl font-black text-white">Sonuçların Hesaplanıyor...</h2>
        <p className="text-white/60 mt-2">Yapay zeka verilerini analiz ediyor, biraz sabır.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <AlertCircle size={64} className="text-red-400 mb-6" />
        <h2 className="text-2xl font-black text-white">Eyvah! Bir Hata Oluştu</h2>
        <p className="text-white/60 mt-2 mb-8">{error}</p>
        <NeoButton onClick={loadData} className="flex items-center gap-2">
          <RefreshCw size={20} /> TEKRAR DENE
        </NeoButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-6 pt-12 pb-32 overflow-y-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black text-white">Sonuçlarım</h2>
          <p className="text-white/60 text-lg">Harika ilerliyorsun!</p>
        </div>
        <CheckCircle2 size={48} className="text-[#62D2FF]" />
      </div>

      <div className="space-y-6 mb-12">
        {results.map((res, idx) => (
          <NeoCard key={idx} className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-black text-xl uppercase tracking-wider">{res.category}</span>
              <span className="text-[#FF5BBE] font-black text-2xl">%{res.score}</span>
            </div>
            {/* Score Bar */}
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-[#62D2FF] to-[#FF5BBE] rounded-full"
                style={{ width: `${res.score}%` }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{res.description}</p>
          </NeoCard>
        ))}
      </div>

      <NeoButton variant="accent" onClick={onHome} className="w-full">
        ANA SAYFAYA DÖN
      </NeoButton>
    </div>
  );
};
