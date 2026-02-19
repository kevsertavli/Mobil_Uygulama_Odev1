
import React, { useState } from 'react';
import { 
  Home, Shield, MessageSquare, AlertCircle, 
  ChevronRight, Brain, Activity, User 
} from 'lucide-react';

// Screens
import { LoginScreen } from './screens/LoginScreen';
import { HomeMoodScreen } from './screens/HomeMoodScreen';
import { SafetyScreen } from './screens/SafetyScreen';
import { ComplaintScreen } from './screens/ComplaintScreen';
import { ChatScreen } from './screens/ChatScreen';
import { SurveyScreen } from './screens/SurveyScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { WellbeingCategoryScreen } from './screens/WellbeingCategoryScreen';

enum ViewState {
  LOGIN,
  HOME,
  SAFETY,
  COMPLAINT,
  CHAT,
  SURVEY,
  RESULTS,
  WELLBEING_CATEGORY
}

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.LOGIN);
  const [prevView, setPrevView] = useState<ViewState>(ViewState.HOME);
  const [activeTab, setActiveTab] = useState<'home' | 'safety' | 'complaint' | 'chat'>('home');
  const [wellbeingType, setWellbeingType] = useState<'mental' | 'physical'>('mental');
  const [chatTopic, setChatTopic] = useState<string | undefined>(undefined);

  const navigateTo = (nextView: ViewState) => {
    setPrevView(view);
    setView(nextView);
  };

  const handleTabChange = (tab: 'home' | 'safety' | 'complaint' | 'chat') => {
    setActiveTab(tab);
    setChatTopic(undefined);
    switch(tab) {
      case 'home': navigateTo(ViewState.HOME); break;
      case 'safety': navigateTo(ViewState.SAFETY); break;
      case 'complaint': navigateTo(ViewState.COMPLAINT); break;
      case 'chat': navigateTo(ViewState.CHAT); break;
    }
  };

  const renderContent = () => {
    switch (view) {
      case ViewState.LOGIN:
        return <LoginScreen onLogin={() => navigateTo(ViewState.HOME)} />;
      case ViewState.HOME:
        return <HomeMoodScreen 
          onSurveyStart={() => navigateTo(ViewState.SURVEY)} 
          onWellbeingSelect={(type) => {
            setWellbeingType(type);
            navigateTo(ViewState.WELLBEING_CATEGORY);
          }} 
        />;
      case ViewState.SAFETY:
        return <SafetyScreen />;
      case ViewState.COMPLAINT:
        return <ComplaintScreen onSelectTopic={(topic) => {
          setChatTopic(topic);
          setActiveTab('chat');
          navigateTo(ViewState.CHAT);
        }} />;
      case ViewState.CHAT:
        return <ChatScreen topic={chatTopic} onBack={() => navigateTo(ViewState.HOME)} />;
      case ViewState.SURVEY:
        return <SurveyScreen onComplete={() => navigateTo(ViewState.RESULTS)} />;
      case ViewState.RESULTS:
        return <ResultsScreen onHome={() => navigateTo(ViewState.HOME)} />;
      case ViewState.WELLBEING_CATEGORY:
        return <WellbeingCategoryScreen 
          type={wellbeingType} 
          onBack={() => navigateTo(ViewState.HOME)} 
          onSelectCategory={() => navigateTo(ViewState.SURVEY)}
        />;
      default:
        return <HomeMoodScreen onSurveyStart={() => {}} onWellbeingSelect={() => {}} />;
    }
  };

  return (
    <div className="relative h-screen w-full max-w-md mx-auto bg-black shadow-2xl flex flex-col">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6A00A8] to-[#1E9BFF] -z-10" />

      {/* Main Content Area */}
      <div className="flex-1 w-full overflow-hidden relative">
        {renderContent()}
      </div>

      {/* Bottom Tab Bar (Conditional) */}
      {view !== ViewState.LOGIN && view !== ViewState.SURVEY && (
        <div className="p-4 bg-transparent">
          <div className="glass-effect rounded-full px-8 py-4 flex justify-between items-center shadow-2xl border-white/20">
            <button 
              onClick={() => handleTabChange('home')}
              className={`p-2 transition-all ${activeTab === 'home' ? 'text-white scale-125' : 'text-white/40'}`}
            >
              <Home size={24} fill={activeTab === 'home' ? 'white' : 'transparent'} />
            </button>
            <button 
              onClick={() => handleTabChange('safety')}
              className={`p-2 transition-all ${activeTab === 'safety' ? 'text-white scale-125' : 'text-white/40'}`}
            >
              <Shield size={24} fill={activeTab === 'safety' ? 'white' : 'transparent'} />
            </button>
            <button 
              onClick={() => handleTabChange('complaint')}
              className={`p-2 transition-all ${activeTab === 'complaint' ? 'text-white scale-125' : 'text-white/40'}`}
            >
              <AlertCircle size={24} fill={activeTab === 'complaint' ? 'white' : 'transparent'} />
            </button>
            <button 
              onClick={() => handleTabChange('chat')}
              className={`p-2 transition-all ${activeTab === 'chat' ? 'text-white scale-125' : 'text-white/40'}`}
            >
              <MessageSquare size={24} fill={activeTab === 'chat' ? 'white' : 'transparent'} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
