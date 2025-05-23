import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import ChatInput from '../components/chat/ChatInput';
import MoodTracker from '../components/chat/MoodTracker';
import { Message, MoodType } from '../types';
import { detectMockMood } from '../utils/mockData';
import { MessageCircle } from 'lucide-react';
import { getChatResponse } from '../services/gemini';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMood, setCurrentMood] = useState<MoodType>('neutral');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      mood: detectMockMood(content),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      const response = await getChatResponse(content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'ai',
        timestamp: new Date(),
        mood: 'neutral',
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleMoodChange = (mood: MoodType) => {
    setCurrentMood(mood);
  };
  
  return (
    <div className="min-h-screen bg-warmth-50 pt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col h-[calc(100vh-64px)]">
        <div className="bg-white shadow-soft rounded-2xl flex flex-col flex-1 overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-warmth-200">
            <div className="flex items-center">
              <div className="bg-primary-100 rounded-full p-2 mr-3">
                <MessageCircle className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800">EmpathAI Chat</h2>
                <p className="text-xs text-gray-500">Your conversation is private and secure</p>
              </div>
            </div>
            
            <MoodTracker 
              currentMood={currentMood} 
              onMoodChange={handleMoodChange} 
            />
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-warmth-50">
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-warmth-200 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] md:max-w-[70%]">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;