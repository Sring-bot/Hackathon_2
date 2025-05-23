import React, { useState } from 'react';
import { Send, Smile, Paperclip, Mic } from 'lucide-react';
import Button from '../ui/Button';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="border-t border-warmth-200/50 bg-white/80 backdrop-blur-sm p-4 animate-slide-up">
      <div className="flex items-center bg-warmth-50/50 rounded-full px-4 py-2 shadow-inner-glow transition-all duration-300 focus-within:shadow-glow">
        <button 
          type="button" 
          className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
          aria-label="Add emoji"
        >
          <Smile className="h-5 w-5" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-transparent border-none outline-none px-4 py-1 text-gray-700 placeholder-gray-400"
        />
        
        <div className="flex items-center gap-2">
          <button 
            type="button" 
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            aria-label="Attach file"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          
          <button 
            type="button" 
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            aria-label="Voice message"
          >
            <Mic className="h-5 w-5" />
          </button>
          
          <Button 
            type="submit" 
            variant="primary" 
            className="!py-1.5 !px-3"
            disabled={!message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;