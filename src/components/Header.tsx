import React, { useState, useEffect } from 'react';
import { Globe, Waves, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Globe className={`h-8 w-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
            <Waves className={`h-4 w-4 absolute -bottom-1 -right-1 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
          </div>
          <span className={`text-xl font-bold ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
            Hostive AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className={`font-medium hover:text-purple-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Features
          </a>
          <a 
            href="#plans" 
            className={`font-medium hover:text-purple-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Plans
          </a>
          <a 
            href="#status" 
            className={`font-medium hover:text-purple-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Status
          </a>
          <a 
            href="#testimonials" 
            className={`font-medium hover:text-purple-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className={`font-medium hover:text-purple-500 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            FAQ
          </a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <Button 
            size="sm" 
            className={isScrolled ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-purple-600 text-white hover:bg-purple-700'}
            onClick={scrollToPlans}
          >
            Get Started
          </Button>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#plans" className="font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
              Plans
            </a>
            <a href="#status" className="font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
              Status
            </a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <div className="pt-2 border-t border-gray-200">
              <Button 
                size="sm" 
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
                onClick={scrollToPlans}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;