export interface NavItem {
  label: string;
  path: string;
}

export interface Satellite {
  id: number;
  angle: number;
  radius: number;
  speed: number;
  type: 'COMM' | 'OBSERVATION';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsItem {
  id: number;
  title: string;
  category: 'Technology' | 'Corporate' | 'Industry';
  date: string;
  excerpt: string;
}

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}
