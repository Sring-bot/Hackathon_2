import React from 'react';
import { Message } from '../../types';
import MoodIndicator from '../ui/MoodIndicator';
import ReactMarkdown from 'react-markdown';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4 animate-fade-in`}>
      <div 
        className={`relative max-w-[80%] md:max-w-[70%] px-5 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
          isAI 
            ? 'bg-white/90 text-gray-700 rounded-tl-sm shadow-soft hover:shadow-glow' 
            : 'bg-primary-500/90 text-white rounded-tr-sm shadow-soft hover:shadow-glow'
        }`}
      >
        {message.mood && (
          <div className="absolute top-2 right-2">
            <MoodIndicator mood={message.mood} size="sm" />
          </div>
        )}
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <ReactMarkdown
            components={{
              strong: ({node, ...props}) => <span className="font-bold text-primary-600" {...props} />,
              li: ({node, ...props}) => <li className="my-1" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-2" {...props} />
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
        <div className="text-xs mt-2 opacity-70">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;