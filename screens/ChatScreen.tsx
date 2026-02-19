
import React, { useState, useEffect, useRef } from 'react';
import { Send, Camera, ArrowLeft, Phone } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatScreenProps {
  topic?: string;
  onBack: () => void;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({ topic, onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: 'Teşekkürler, size nasıl yardımcı olabiliriz?', sender: 'system', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topic) {
      setMessages(prev => [
        ...prev, 
        { id: 'init', text: `Merhaba, "${topic}" konusuyla ilgili size yardımcı olmaya hazırız.`, sender: 'system', timestamp: new Date() }
      ]);
    }
  }, [topic]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulated reply
    setTimeout(() => {
      const systemMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Mesajınızı aldık. İlgili birimlerimize ileteceğiz. En kısa sürede dönüş sağlanacaktır.',
        sender: 'system',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, systemMsg]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-black/10">
      {/* Custom Top Bar */}
      <div className="flex items-center justify-between p-6 glass-effect rounded-b-[25px]">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-white/70"><ArrowLeft /></button>
          <div>
            <h3 className="text-white font-black">Bize Yazın</h3>
            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Çevrimiçi Destek</p>
          </div>
        </div>
        <button className="text-green-400"><Phone /></button>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[80%] p-4 rounded-[22px] shadow-sm
                ${msg.sender === 'user' 
                  ? 'bg-[#FF5BBE]/80 text-white rounded-tr-none' 
                  : 'glass-effect text-white rounded-tl-none'}
              `}
            >
              <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
              <p className="text-[9px] mt-1 opacity-50 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 mb-20">
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 p-3 rounded-full backdrop-blur-md">
          <button className="text-white/40 ml-2"><Camera size={24} /></button>
          <input 
            type="text"
            placeholder="Mesajınızı yazın..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-transparent text-white outline-none text-sm placeholder:text-white/20 px-2"
          />
          <button 
            onClick={handleSend}
            className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
