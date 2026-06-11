export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
  impact?: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  features: string[];
  image: string;
  detailedDesc: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface Partner {
  name: string;
  logoType: 'CanadianSolar' | 'Tesla' | 'Enphase' | 'Schneider';
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  date: string;
}
