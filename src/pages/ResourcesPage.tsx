import React from 'react';
import Card from '../components/ui/Card';
import { BookOpen, Link as LinkIcon, Phone, Globe, Download } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const emergencyResources = [
    {
      name: 'National Suicide Prevention Lifeline',
      url: 'https://www.aasra.info/helpline.html',
      description: 'Available 24/7 for emotional support for people in suicidal crisis',
      icon: <Phone />,
    },
    {
      name: 'Crisis Text Line',
      contact: 'Text HOME to 741741',
      description: 'Free 24/7 text support for those in crisis',
      icon: <Phone />,
    },
    {
      name: 'Emergency Services',
      contact: '112',
      description: 'Call for immediate emergency assistance',
      icon: <Phone />,
    },
  ];
  
  const supportResources = [
    {
      name: 'Minds Foundation',
      url: 'https://www.mindsfoundation.org',
      description: 'Resources, support groups, and education for individuals and families',
      icon: <Globe />,
    },
    {
      name: 'Mental Health Innovation Network',
      url: 'https://www.mhinnovation.net/organisations/action-mental-illness-india-acmi',
      description: 'Mental health resources, screening tools, and community support',
      icon: <Globe />,
    },
    {
      name: 'Find a Therapist - Live Love Laugh Foundation',
      url: 'https://www.thelivelovelaughfoundation.org/find-help/therapist',
      description: 'Directory to find therapists and counselors in your area',
      icon: <Globe />,
    },
  ];
  
  const selfHelpResources = [
    {
      name: 'Mindfulness Meditation Guide',
      url: '#',
      description: 'A beginner\'s guide to mindfulness practices and meditation techniques',
      icon: <Download />,
    },
    {
      name: 'Anxiety Coping Strategies',
      url: '#',
      description: 'Practical techniques for managing anxiety and panic symptoms',
      icon: <Download />,
    },
    {
      name: 'Sleep Hygiene Checklist',
      url: '#',
      description: 'Tips for improving sleep quality and establishing healthy sleep patterns',
      icon: <Download />,
    },
  ];
  
  return (
    <div className="min-h-screen bg-warmth-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-display font-bold text-primary-700 mb-4">Mental Health Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've compiled helpful resources for those seeking additional support. Remember that while EmpathAI provides emotional support, it's not a replacement for professional care.
          </p>
        </div>
        
        {/* Emergency Resources */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Phone className="h-5 w-5 text-red-500 mr-2" />
            <h2 className="text-xl font-medium text-gray-800">Emergency Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyResources.map((resource, index) => (
              <Card key={index} variant="elevated" className="border-l-4 border-red-500">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-full bg-red-100 text-red-500 mr-3">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{resource.name}</h3>
                      <p className="text-red-500 font-medium">{resource.contact}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Support Organizations */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="h-5 w-5 text-primary-500 mr-2" />
            <h2 className="text-xl font-medium text-gray-800">Support Organizations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportResources.map((resource, index) => (
              <Card key={index} variant="elevated">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-500 mr-3">
                      {resource.icon}
                    </div>
                    <h3 className="font-medium text-gray-800">{resource.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-500 hover:text-primary-700 mt-auto"
                  >
                    <LinkIcon className="h-4 w-4 mr-1" /> Visit Website
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Self-Help Resources */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-5 w-5 text-secondary-500 mr-2" />
            <h2 className="text-xl font-medium text-gray-800">Self-Help Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selfHelpResources.map((resource, index) => (
              <Card key={index} variant="elevated">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-3">
                    <div className="p-2 rounded-full bg-secondary-100 text-secondary-500 mr-3">
                      {resource.icon}
                    </div>
                    <h3 className="font-medium text-gray-800">{resource.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    className="flex items-center text-secondary-500 hover:text-secondary-700 mt-auto"
                  >
                    <Download className="h-4 w-4 mr-1" /> Download PDF
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Disclaimer */}
        <div className="bg-white rounded-lg shadow-soft p-5 max-w-3xl mx-auto mt-12">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Important Disclaimer</h3>
          <p className="text-gray-600 text-sm">
            EmpathAI is designed to provide emotional support and is not a substitute for professional mental health care. If you're experiencing a crisis or need immediate help, please contact emergency services or a mental health professional. The resources provided are for informational purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;