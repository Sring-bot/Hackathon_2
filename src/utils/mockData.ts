import { Message, CommunityMatch, User } from '../types';

// Mock data for chat messages
export const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hello, how are you feeling today?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3600000),
    mood: 'neutral',
  },
  {
    id: '2',
    content: 'I\'ve been feeling a bit overwhelmed lately with work and personal life.',
    sender: 'user',
    timestamp: new Date(Date.now() - 3500000),
    mood: 'anxious',
  },
  {
    id: '3',
    content: 'I understand feeling overwhelmed. It can be challenging to balance different aspects of life. Would you like to talk more about what specifically is making you feel this way?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3400000),
    mood: 'calm',
  },
  {
    id: '4',
    content: 'I think it\'s mostly the deadlines at work, and I haven\'t been sleeping well.',
    sender: 'user',
    timestamp: new Date(Date.now() - 3300000),
    mood: 'anxious',
  },
  {
    id: '5',
    content: 'Sleep difficulties can definitely contribute to feeling overwhelmed. Have you noticed any patterns with your sleep or specific worries keeping you awake?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3200000),
    mood: 'calm',
  },
];

// Mock community matches
export const mockCommunityMatches: CommunityMatch[] = [
  {
    id: '1',
    username: 'PeacefulPine42',
    mood: 'anxious',
    lastActive: new Date(Date.now() - 1800000),
  },
  {
    id: '2',
    username: 'CalmingCreek78',
    mood: 'sad',
    lastActive: new Date(Date.now() - 900000),
  },
  {
    id: '3',
    username: 'GentleBreeze23',
    mood: 'anxious',
    lastActive: new Date(Date.now() - 300000),
  },
  {
    id: '4',
    username: 'SereneStream56',
    mood: 'neutral',
    lastActive: new Date(Date.now() - 1200000),
  },
  {
    id: '5',
    username: 'WhisperingWillow19',
    mood: 'happy',
    lastActive: new Date(Date.now() - 600000),
  },
];

// Generate random nature-themed username
export const generateUsername = (): string => {
  const adjectives = [
    'Peaceful', 'Gentle', 'Serene', 'Calm', 'Tranquil', 
    'Quiet', 'Whispering', 'Flowing', 'Drifting', 'Dreamy',
    'Forest', 'Meadow', 'River', 'Ocean', 'Mountain'
  ];
  
  const nouns = [
    'Pine', 'Oak', 'Willow', 'Creek', 'River', 
    'Lake', 'Ocean', 'Breeze', 'Wind', 'Rain',
    'Sunset', 'Dawn', 'Dusk', 'Night', 'Day'
  ];
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNumber = Math.floor(Math.random() * 100);
  
  return `${randomAdjective}${randomNoun}${randomNumber}`;
};

// Mock current user
export const mockUser: User = {
  id: '12345',
  username: 'PeacefulPine42',
  currentMood: 'anxious',
};

// Mock AI response function
export const getMockAIResponse = (message: string): Promise<Message> => {
  const responses = [
    "I understand how you feel. Would you like to talk more about that?",
    "That sounds challenging. How long have you been feeling this way?",
    "I'm here to listen. What do you think might help in this situation?",
    "Thank you for sharing that with me. It takes courage to express these feelings.",
    "I'm wondering if there's a specific event that triggered these emotions?",
    "It makes sense that you'd feel that way given what you've described.",
    "Have you tried any coping strategies that have helped in the past?",
    "Let's explore this further. What aspects of this situation feel most difficult?",
    "I'm noticing that this seems to be a recurring theme. How does that resonate with you?",
    "It's completely normal to have these feelings. Many people experience similar thoughts."
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  const mood = detectMockMood(message);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
        mood: 'calm'
      });
    }, 1000);
  });
};

// Simple mock mood detection
export const detectMockMood = (message: string): 'neutral' | 'happy' | 'sad' | 'anxious' | 'angry' | 'calm' => {
  message = message.toLowerCase();
  
  if (message.includes('happy') || message.includes('joy') || message.includes('excited') || message.includes('great')) {
    return 'happy';
  } else if (message.includes('sad') || message.includes('depressed') || message.includes('down') || message.includes('unhappy')) {
    return 'sad';
  } else if (message.includes('worry') || message.includes('anxious') || message.includes('stress') || message.includes('nervous')) {
    return 'anxious';
  } else if (message.includes('angry') || message.includes('mad') || message.includes('upset') || message.includes('frustrated')) {
    return 'angry';
  } else if (message.includes('calm') || message.includes('peace') || message.includes('relax') || message.includes('serene')) {
    return 'calm';
  } else {
    return 'neutral';
  }
};