
export enum SurveyType {
  MENTAL = 'mental',
  PHYSICAL = 'physical',
  STRESS = 'stress',
  GENERAL = 'general'
}

export interface UserSession {
  studentId: string;
  age: number;
  gender: 'Kadın' | 'Erkek' | '';
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

export interface SurveyQuestion {
  id: number;
  text: string;
}

export interface ResultItem {
  category: string;
  score: number;
  description: string;
}
