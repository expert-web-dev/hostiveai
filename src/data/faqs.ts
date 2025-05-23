import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    question: 'What types of businesses do you provide hosting for?',
    answer: 'We provide hosting solutions for businesses of all sizes, from startups to large enterprises. Our flexible plans can accommodate a wide range of needs, whether you\'re running a small e-commerce site or a large-scale web application.',
    category: 'general',
  },
  {
    question: 'How reliable is your server uptime?',
    answer: 'We guarantee a 99.9% uptime for all our hosting plans, with our Enterprise plan offering a 99.99% uptime guarantee. Our infrastructure is built with redundancy at every level to ensure your business stays online even during hardware failures.',
    category: 'technical',
  },
  {
    question: 'Do you offer managed or unmanaged hosting?',
    answer: 'We offer both managed and unmanaged hosting options. Our managed hosting includes regular updates, security patches, monitoring, and technical support. Unmanaged hosting gives you full control over your server environment if you prefer to handle these aspects yourself.',
    category: 'services',
  },
  {
    question: 'What security measures do you have in place?',
    answer: 'We implement multiple layers of security including firewalls, DDoS protection, regular security audits, malware scanning, and SSL certificates. Our Enterprise plan includes advanced security features like intrusion detection and prevention systems.',
    category: 'security',
  },
  {
    question: 'How do I migrate my existing website to your servers?',
    answer: 'We offer a free migration service for all new customers. Our technical team will handle the entire process, ensuring a smooth transition with minimal downtime. We\'ll work with you to schedule the migration at a time that minimizes disruption to your business.',
    category: 'technical',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 technical support across all our plans. Support is available via live chat, email, and phone. Business and Enterprise plans include priority support with faster response times and access to senior technical staff.',
    category: 'support',
  },
];