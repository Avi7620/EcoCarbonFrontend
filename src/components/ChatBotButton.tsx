import { Bot } from 'lucide-react';

interface ChatBotButtonProps {
  onClick: () => void;
}

export default function ChatBotButton({ onClick }: ChatBotButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 z-40 group animate-bounce"
      aria-label="Open chat"
    >
      <Bot className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
    </button>
  );
}
