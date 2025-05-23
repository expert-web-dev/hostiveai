import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { plans } from '../data/plans';
import Card from './ui/Card';
import Button from './ui/Button';
import Badge from './ui/Badge';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (planId: string) => {
    navigate(`/checkout?plan=${planId}`);
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Select Your Hosting Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect hosting plan for your business needs. All plans include 24/7 support, 
            free migrations, and our uptime guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              highlight={plan.popular}
              className="flex flex-col"
            >
              {plan.popular && (
                <Badge variant="default" className="self-start mb-4">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-600 ml-2">/year</span>
              </div>
              
              <div className="mb-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-24">CPU:</div>
                      <div className="font-medium">{plan.cpu}</div>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-24">Memory:</div>
                      <div className="font-medium">{plan.ram}</div>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-24">Storage:</div>
                      <div className="font-medium">{plan.storage}</div>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-24">Bandwidth:</div>
                      <div className="font-medium">{plan.bandwidth}</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => handlePlanSelection(plan.id)}
                >
                  Choose Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your business?
          </p>
          <Button variant="outline" size="lg">
            Contact Us for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;