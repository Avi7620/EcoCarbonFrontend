// src/components/ChatBot.tsx
import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Leaf, Wind, Trees, BarChart3, Sun, Users } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QAItem {
  keywords: string[];
  answer: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Predefined Q&A with keywords
  const customQA: QAItem[] = [
{
          keywords: ["location", "where are you located", "address", "office location", "location address", "where is your office"],
      answer: `Office:
Konark Alpha, Sr No 50, 2, Nagar Road, Kharadi, Pune, Maharashtra`
    },
        {
      keywords: ["phone", "give me phone number", "mobilenumber", "call", "number", "contact number", "phone number", "mobile", "whatsapp", "whatsapp number"],
      answer: "+91 XXX XXX XXX"
    },
    {
      keywords: ["ecocarbon", "what is ecocarbon", "eco carbon", "about ecocarbon", "about eco carbon", "tell me about ecocarbon", "tell me about eco carbon", "ecocarbon website", "eco carbon website"],
      answer: "EcoCarbon is a modern web platform for showcasing interior design projects, featuring before–after visuals, service details, and an elegant layout to attract potential clients."
    },
    {
      keywords: ["contact", "contact info", "email", "office", "business hours"],
      answer: `Email:
info@ecocarbon.com
support@ecocarbon.com

Office:
Konark Alpha, Sr No 50, 2, Nagar Road, Kharadi, Pune, Maharashtra

Business Hours:
Mon - Fri: 9:00 AM - 6:00 PM
Sat: 10:00 AM - 4:00 PM`
    },
    {
      keywords: ["projects", "project names", "current projects", "project list"],
      answer: `Current EcoCarbon projects:
1. Amazon Rainforest Conservation
2. Wind Power Initiative
3. Mangrove Restoration
4. Solar Farm Project`
    },
    {
      keywords: ["services", "service names", "offerings", "service list"],
      answer: `EcoCarbon offers the following services:
1. Carbon Offsetting
2. Renewable Energy Projects
3. Forest Conservation
4. Sustainability Consulting
5. Solar Energy Solutions
6. Community Programs`
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const simulateAIResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();

    // Keyword-based matching
    for (const qa of customQA) {
      if (qa.keywords.some(kw => msg.includes(kw.toLowerCase()))) {
        return qa.answer;
      }
    }

    // Default fallback responses
    const responses = [
      "That's a great question! I'm here to help you with any information you need.",
      "I understand. Let me assist you with that.",
      "Thanks for sharing! I'm processing your request.",
      "Interesting! I can help you explore that further.",
      "I appreciate your message. How else can I assist you today?",
    ];

    if (msg.includes('hello') || msg.includes('hi')) {
      return "Hello! It's great to hear from you. What can I help you with?";
    }
    if (msg.includes('help')) {
      return "I'm here to assist you! Feel free to ask me anything, and I'll do my best to help.";
    }
    if (msg.includes('thank')) {
      return "You're very welcome! Is there anything else I can help you with?";
    }

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateAIResponse(userMessage.text),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div
        ref={chatRef}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col animate-scale-in"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">AI Assistant</h2>
              <p className="text-xs text-blue-100">Always here to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all duration-200"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.isUser
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-sm'
                    : 'bg-white text-gray-800 shadow-md rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${msg.isUser ? 'text-blue-100' : 'text-gray-400'}`}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-white text-gray-800 shadow-md rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
