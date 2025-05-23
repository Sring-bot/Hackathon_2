import React, { useState } from 'react';
import { Menu, X, MessageCircle, Users, BookOpen, User } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-softer fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center">
            <div className="h-9 w-9 bg-primary-500 rounded-full flex items-center justify-center mr-2">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-primary-600">EmpathAI</span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/chat" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
              <MessageCircle className="mr-1 h-4 w-4" /> Chat
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
              <Users className="mr-1 h-4 w-4" /> Community
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary-500 transition-colors flex items-center">
              <BookOpen className="mr-1 h-4 w-4" /> Resources
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/chat">
              <Button variant="primary" size="sm">Start Talking</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link 
            to="/chat" 
            className="block py-2 px-4 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" /> Chat
            </div>
          </Link>
          <Link 
            to="/community" 
            className="block py-2 px-4 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5" /> Community
            </div>
          </Link>
          <Link 
            to="/resources" 
            className="block py-2 px-4 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" /> Resources
            </div>
          </Link>
          <div className="pt-2">
            <Link to="/chat" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" fullWidth>Start Talking</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;