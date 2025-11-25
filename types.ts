export interface NavItem {
  label: string;
  path: string;
}

export interface Review {
  id: number;
  name: string;
  age: string;
  job: string;
  content: string;
  rating: number;
  type: 'Best' | 'PainFree' | 'Normal';
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface DoctorProfile {
  name: string;
  role: string;
  philosophy: string;
  career: string[];
  imageUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}