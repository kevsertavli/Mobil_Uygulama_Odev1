
import { ResultItem } from '../types';

export const mockApi = {
  fetchResults: async (): Promise<ResultItem[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 15% error simulation
        if (Math.random() < 0.15) {
          reject(new Error("Veriler yüklenirken bir hata oluştu."));
          return;
        }

        resolve([
          { category: 'Stres', score: 45, description: 'Orta seviye stres. Yoga yapmayı deneyebilirsin.' },
          { category: 'Kaygı', score: 20, description: 'Düşük seviye kaygı. Her şey yolunda görünüyor.' },
          { category: 'Uyku', score: 75, description: 'Yüksek uyku kalitesi! Böyle devam et.' },
          { category: 'Sosyal', score: 60, description: 'Aktif bir sosyal yaşantın var.' },
          { category: 'Genel', score: 82, description: 'Mükemmel bir MODUM! Kampüsün tadını çıkar.' },
        ]);
      }, 800);
    });
  }
};
