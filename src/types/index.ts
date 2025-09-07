export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  role: 'admin' | 'editor' | 'author' | 'viewer';
  avatar?: string;
  bio?: string;
  lastLogin?: Date;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export interface Page {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'published' | 'archived';
  pageType: 'home' | 'about' | 'services' | 'contact' | 'faq' | 'careers' | 'custom';
  featuredImage?: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  author: User;
  publishedAt?: Date;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: 'draft' | 'published' | 'archived';
  category: 'news' | 'insights' | 'technology' | 'company' | 'tutorials' | 'announcements';
  tags: string[];
  featuredImage?: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  author: User;
  publishedAt?: Date;
  scheduledAt?: Date;
  viewCount: number;
  readTime: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: {
    name: string;
    industry: string;
    logo?: string;
    website?: string;
  };
  project: {
    description: string;
    challenge: string;
    solution: string;
    results: string;
    duration: string;
    teamSize: number;
  };
  technologies: Array<{
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile' | 'devops' | 'other';
  }>;
  images: {
    featured: string;
    gallery: string[];
    screenshots: string[];
  };
  testimonial?: {
    quote: string;
    author: {
      name: string;
      position: string;
      company: string;
      avatar?: string;
    };
  };
  metrics: Array<{
    label: string;
    value: string;
    improvement: string;
  }>;
  status: 'draft' | 'published' | 'archived';
  isFeatured: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  author: User;
  publishedAt?: Date;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  position: string;
  department: string;
  bio: string;
  avatar?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  _id: string;
  quote: string;
  author: {
    name: string;
    position: string;
    company: string;
    avatar?: string;
  };
  project?: {
    name: string;
    type: string;
  };
  rating: number;
  isActive: boolean;
  isFeatured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  projectType?: string;
  budget?: string;
}
