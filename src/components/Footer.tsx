import React from 'react';
import { Globe, Waves, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Globe className="h-6 w-6 text-purple-500" />
                <Waves className="h-3 w-3 absolute -bottom-1 -right-1 text-purple-500" />
              </div>
              <span className="text-xl font-bold">Hostive AI</span>
            </div>
            <p className="text-gray-600 mb-6">
              Providing AI-powered enterprise-grade hosting solutions for businesses of all sizes. Reliable, secure, and scalable infrastructure for your success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Web Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">VPS Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Dedicated Servers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Managed Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-500" />
                <span className="text-gray-600">213-758-7859</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-500" />
                <span className="text-gray-600">info@hostiveai.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hostive AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;