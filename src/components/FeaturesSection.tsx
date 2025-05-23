import React from 'react';
import { Shield, LineChart, Cpu, Database, Clock, Globe, Server, Settings, Cloud } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
    <div className="inline-flex items-center justify-center p-3 mb-5 bg-purple-50 text-purple-700 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Enterprise Security',
      description: 'Advanced security measures including DDoS protection, firewalls, and regular security audits to keep your data safe.'
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Predictable Performance',
      description: 'High-performance infrastructure with guaranteed resources, ensuring smooth operation even during peak traffic.'
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'Scalable Resources',
      description: 'Easily scale CPU, RAM, and storage resources as your business grows without experiencing downtime.'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with point-in-time recovery options to protect your critical business data.'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime, backed by SLAs, ensuring your applications are always available to your customers.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global CDN',
      description: 'Content delivery network integrated with our hosting solutions for faster loading speeds worldwide.'
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Dedicated Resources',
      description: 'No shared resources - get dedicated CPU, RAM, and SSD storage for optimal performance.'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Full Root Access',
      description: 'Complete control over your server environment with root access and your choice of operating systems.'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Expert Support',
      description: '24/7 technical support from experienced system administrators to resolve issues quickly.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hosting platform is built with the latest technology to provide you with reliable, 
            secure, and high-performance infrastructure for your business applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default FeaturesSection;