import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Waves, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const SuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <Globe className="h-10 w-10 text-orange-600" />
            <Waves className="h-5 w-5 absolute -bottom-1 -right-1 text-orange-600" />
          </div>
          <span className="text-2xl font-bold text-orange-600 ml-3">Hostive AI</span>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Received!
          </h1>

          <div className="text-lg text-gray-600 mb-8 space-y-4">
            <p>
              Thank you for choosing Hostive AI for your hosting needs. We've received your order and our team is reviewing it.
            </p>
            <p>
              You will receive a confirmation email within the next 24-48 hours with your account details and next steps.
            </p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 shrink-0" />
                <span>Our team will review your order and verify all details</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 shrink-0" />
                <span>You'll receive account credentials and server information via email</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 shrink-0" />
                <span>Our support team will help you with the initial setup</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="lg" className="w-full">
                Return to Homepage
              </Button>
            </Link>
            
            <p className="text-sm text-gray-500">
              Questions? Contact our support team at{' '}
              <a href="tel:+12137587859" className="text-orange-600 hover:text-orange-700">
                213-758-7859
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;