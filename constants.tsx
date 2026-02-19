
import React from 'react';
import { 
  Smile, Frown, Meh, Zap, Flame, Eye, Trash2, Heart, Shield, 
  User, MessageCircle, AlertCircle, Home, Brain, Activity, 
  Wind, Moon, Utensils, Ruler, Dumbbell, Star
} from 'lucide-react';

export const THEME = {
  bg1: '#6A00A8',
  bg2: '#1E9BFF',
  accent: '#FF5BBE',
  cyan: '#62D2FF',
  glass: 'rgba(255, 255, 255, 0.12)',
  glassBorder: 'rgba(255, 255, 255, 0.16)',
  text: 'rgba(255, 255, 255, 0.92)',
  muted: 'rgba(255, 255, 255, 0.70)',
};

export const MOODS = [
  { label: 'Neşeliyim', icon: <Smile className="text-yellow-300" /> },
  { label: 'Üzgünüm', icon: <Frown className="text-blue-300" /> },
  { label: 'Kaygılıyım', icon: <Wind className="text-purple-300" /> },
  { label: 'Coşkuluyum', icon: <Flame className="text-orange-400" /> },
  { label: 'Kızgınım', icon: <Zap className="text-red-400" /> },
  { label: 'Şaşkınım', icon: <Meh className="text-green-300" /> },
  { label: 'Tiksiniyorum', icon: <Trash2 className="text-green-600" /> },
  { label: 'Utangacım', icon: <Star className="text-pink-300" /> },
  { label: 'Korkuyorum', icon: <Shield className="text-slate-400" /> },
];

export const MENTAL_CATEGORIES = [
  { id: 'anxiety', label: 'Anksiyete/Depresyon', icon: <Brain size={24} /> },
  { id: 'addiction', label: 'Bağımlılık', icon: <Activity size={24} /> },
  { id: 'partner', label: 'Partner Şiddeti', icon: <Heart size={24} /> },
  { id: 'eating', label: 'Yeme Bozukluğu', icon: <Utensils size={24} /> },
  { id: 'general', label: 'Genel Sağlık', icon: <Shield size={24} /> },
  { id: 'sleep', label: 'Uyku Bozukluğu', icon: <Moon size={24} /> },
  { id: 'other', label: 'Diğer', icon: <AlertCircle size={24} /> },
];

export const PHYSICAL_CATEGORIES = [
  { id: 'health', label: 'Sağlık', icon: <Activity size={24} /> },
  { id: 'sleep', label: 'Uyku', icon: <Moon size={24} /> },
  { id: 'nutrition', label: 'Beslenme', icon: <Utensils size={24} /> },
  { id: 'height_weight', label: 'Boy-Kilo', icon: <Ruler size={24} /> },
  { id: 'exercise', label: 'Egzersiz', icon: <Dumbbell size={24} /> },
];
