import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';
import AnimatedBackground from '../components/home/AnimatedBackground';
import { MessageCircle, Users, BarChart, Shield, Lightbulb, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'AI Support Chat',
      description: 'Talk to our empathetic AI assistant anytime, with no judgment or waiting.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Connection',
      description: "Connect with others who understand what you're going through."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Mood Tracking',
      description: 'Monitor your emotional patterns and identify triggers.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Complete Anonymity',
      description: 'Your privacy is our priority. No personal information required.'
    },
  ];
  
  const testimonials = [
    {
      quote: "EmpathAI helped me express feelings I couldn't share with anyone else. The anonymous format made it safe to be vulnerable.",
      author: "ForestWanderer28",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but the AI responses felt genuinely thoughtful. It helped me through a really tough week.",
      author: "MountainDreamer42",
      rating: 4
    },
    {
      quote: "Finding others with similar struggles made me feel less alone. The community here is supportive without being intrusive.",
      author: "OceanBreeze76",
      rating: 5
    },
  ];
  
  return (
    <div className="min-h-screen bg-warmth-50">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative z-10">
        <HeroSection />
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-700 mb-4">How EmpathAI Helps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides multiple ways to support your mental wellbeing, all in a safe and anonymous environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-700 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              EmpathAI makes getting support simple and accessible in just three easy steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Start a Conversation</h3>
              <p className="text-gray-600">Begin chatting with our AI or browse community discussions.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Express Yourself</h3>
              <p className="text-gray-600">Share your thoughts and feelings in a judgment-free space.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-600">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Receive Support</h3>
              <p className="text-gray-600">Get personalized guidance and connect with others who understand.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 bg-white relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-700 mb-4">User Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what others in our community have shared about their journey with EmpathAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-500 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-primary-50 mb-8">
              Join thousands of others who have found support and understanding through EmpathAI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/chat" className="bg-white text-primary-600 hover:bg-primary-50 transition-colors py-3 px-8 rounded-full font-medium text-lg">
                Start Talking Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;