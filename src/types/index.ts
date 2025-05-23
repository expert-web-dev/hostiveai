export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: string[];
  storage: string;
  bandwidth: string;
  cpu: string;
  ram: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface ServerStatus {
  id: string;
  name: string;
  location: string;
  status: 'operational' | 'maintenance' | 'outage';
  uptime: number;
  lastChecked: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}