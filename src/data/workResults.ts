export interface ProjectImage {
  title: string;
  image: string;
}

export interface ProjectFeatureSection {
  title: string;
  items: string[];
}

export interface ProjectFeatures {
  sections: ProjectFeatureSection[];
}

export interface WorkResultProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  type: 'real' | 'demo';
  features: ProjectFeatures;
  image: ProjectImage[];
}

export const workResultsProjects: WorkResultProject[] = [
  {
    title: 'Sitama',
    description: 'Education Platform that helps simplify internship management for students and lecturers at Politeknik Negeri Semarang. Features a dual-role system with specific functionalities for both students and supervising lecturers.',
    technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/Kevin5621/Sitama',
    type: 'real',
    features: {
      sections: [
        {
          title: 'Student Features',
          items: [
            'Submit and track internship progress',
            'Maintain digital logbook',
            'Schedule and manage guidance sessions',
            'Upload reports and documentation',
            'View feedback and scores'
          ]
        },
        {
          title: 'Lecturer Features',
          items: [
            'Review student submissions',
            'Provide feedback on logbook entries',
            'Manage guidance schedules',
            'Assess student performance',
            'Generate progress reports'
          ]
        }
      ]
    },
    image: [
      { 
        title: 'banner', 
        image: '/work/sitama/converted-8.webp'
      },
      { title: 'Login', image: '/work/sitama/converted.webp' },
      { title: 'Dashboard Student', image: '/work/sitama/converted-1.webp' },
      { title: 'Guidance', image: '/work/sitama/converted-2.webp' },
      { title: 'Logbook Page', image: '/work/sitama/converted-3.webp' },
      { title: 'Add Guidance', image: '/work/sitama/converted-4.webp' },
      { title: 'Profile', image: '/work/sitama/converted-5.webp' },
      { title: 'Dashboard Lecturer', image: '/work/sitama/converted-6.webp' },
      { title: 'Detail Student', image: '/work/sitama/converted-7.webp' },
      { title: 'Guidance Action', image: '/work/sitama/converted-8.webp' },
      { title: 'Score Page', image: '/work/sitama/converted-9.webp' },
      { title: 'Additional 1', image: '/work/sitama/converted-10.webp' },
      { title: 'Additional 2', image: '/work/sitama/converted-11.webp' }
    ]
  },
  {
    title: 'Fiber Monitoring Project',
    description: 'A monorepo for the Fiber Monitoring Project with different user roles for managing fiber optic installation and monitoring. This project is a comprehensive solution for monitoring fiber optic installation projects. It consists of two main applications: Admin (dashboard for administrators to manage projects, view reports, and monitor overall progress) and Waspang (user interface for field workers to submit reports, track milestones, and manage project documentation).',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase (Auth, Supabase-js)',
      'Turborepo',
      'React',
      'Leaflet',
      'TypeScript',
      'Docker',
      'ExcelJS',
      'jsPDF'
    ],
    githubUrl: 'https://github.com/Kevin5621/fiber-monitoring-project',
    type: 'real',
    features: {
      sections: [
        {
          title: 'Admin Dashboard Features',
          items: [
            'Project overview and statistics',
            'Daily report monitoring',
            'Document management',
            'Progress tracking',
            'Project status visualization',
            'Team management',
            'Team performance metrics',
            'Document approval workflow',
            'Project creation and assignment',
            'Comprehensive reporting tools'
          ]
        },
        {
          title: 'Waspang (Field Worker Interface) Features',
          items: [
            'View project details and milestones',
            'Submit daily reports',
            'Upload project documents',
            'Track project activities',
            'Manage project-specific documentation',
            'Report issues and progress',
            'Document upload with categorization',
            'Project milestone tracking',
            'Field issue reporting',
            'Location-based project view'
          ]
        },
        {
          title: 'Shared Features',
          items: [
            'Authentication with Supabase Auth',
            'Responsive design for desktop and mobile',
            'Real-time updates',
            'Document management system',
            'Project tracking and reporting'
          ]
        }
      ]
    },
    image: [
      {
        title: 'banner',
        image: '/work/FiberMonitoringImages/3.png'
      },
      { title: 'admin dashboard', image: '/work/FiberMonitoringImages/adminDashboard.png' },
      { title: 'notification', image: '/work/FiberMonitoringImages/notification.png' },
      { title: 'project list', image: '/work/FiberMonitoringImages/projectList.png' },
      { title: 'map', image: '/work/FiberMonitoringImages/map.png' },
      { title: 'add project', image: '/work/FiberMonitoringImages/addProject.png' },
      { title: 'user management', image: '/work/FiberMonitoringImages/userManagement.png' },
      { title: 'project detail', image: '/work/FiberMonitoringImages/projectDetail.png' },
      { title: 'add milestone photo', image: '/work/FiberMonitoringImages/addMilestone.png' },
      { title: 'add daily report', image: '/work/FiberMonitoringImages/addDailyReport.png' },
      { title: 'login white', image: '/work/FiberMonitoringImages/loginWhite.png' },
      { title: 'login black', image: '/work/FiberMonitoringImages/loginBlack.png' }
    ]
  },
  {
    title: 'Portfolio Website Digital Marketer',
    description: 'A modern, interactive portfolio website to showcase creative projects, professional experience, and contact information. Built with Next.js and React, featuring smooth animations, project galleries, and a responsive design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Kevin5621/portofolio-website-digital-marketer-2',
    type: 'real',
    features: {
      sections: [
        {
          title: 'Showcase',
          items: [
            'Animated project gallery with detailed pages',
            'Interactive project reveal effects',
            'Project metrics and achievements display'
          ]
        },
        {
          title: 'Experience & Skills',
          items: [
            'Professional experience timeline',
            'Skills slider with smooth animation',
            'Certificates and recognitions section'
          ]
        },
        {
          title: 'Contact',
          items: [
            'Contact form with validation',
            'Social media integration',
            'Responsive layout for all devices'
          ]
        }
      ]
    },
    image: [
      {
        title: 'banner',
        image: '/work/PortofolioMarketerImages/2.png'
      },
      { title: 'menu', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-09 Adhara Eka - Portfolio.webp' },
      { title: 'quotes', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-24 Adhara Eka - Portfolio.webp' },
      { title: 'experience', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-38 Adhara Eka - Portfolio.webp' },
      { title: 'project list 1', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-49 Adhara Eka - Portfolio.webp' },
      { title: 'project list 2', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-18 Adhara Eka - Portfolio.webp' },
      { title: 'project detail', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-44 Adhara Eka - Portfolio.webp' },
      { title: 'end', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-14-40 Adhara Eka - Portfolio.webp' }
    ]
  },
  {
    title: 'CRM Pharmaceutical',
    description: 'Intelligent Healthcare CRM with AI-Powered Insights. A comprehensive, enterprise-grade CRM platform designed specifically for pharmaceutical and healthcare companies. Features 20+ backend modules, real-time notifications, AI chatbot integration, and advanced analytics for managing accounts, leads, deals, visit reports, and sales pipeline.',
    technologies: [
      'Go',
      'Gin Framework',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'GORM',
      'TanStack Query',
      'Zustand',
      'shadcn/ui',
      'Radix UI',
      'Tailwind CSS',
      'JWT',
      'WebSocket',
      'Cerebras AI',
      'Cloudflare R2',
      'Docker'
    ],
    githubUrl: '#',
    type: 'real',
    features: {
      sections: [
        {
          title: 'Backend Architecture & Security',
          items: [
            'Layered architecture (Handler → Service → Repository)',
            'Multi-level rate limiting (IP, email, global)',
            'JWT authentication with token rotation',
            'Role-based and permission-based access control (RBAC)',
            'CORS whitelist and HSTS security',
            'bcrypt password hashing',
            'WebSocket hub for real-time notifications',
            'Background workers for reminders and token cleanup',
            'Production-safe database migrations',
            'File storage abstraction (Local/R2)'
          ]
        },
        {
          title: 'Core CRM Modules',
          items: [
            'Account & Contact Management with categorization',
            'Lead Management with scoring (0-100) and conversion',
            'Sales Pipeline with Kanban board and deal tracking',
            'Product Management with categories and pricing',
            'Task & Reminder Management with priority levels',
            'Visit Reports with GPS tracking and photo uploads',
            'User Management with roles and permissions',
            'Dashboard with real-time KPIs and statistics',
            'Reports module with Excel export functionality',
            'Activity tracking and timeline visualization'
          ]
        },
        {
          title: 'AI & Analytics Features',
          items: [
            'AI Chatbot with Cerebras LLM integration',
            'Context-aware AI responses for CRM data',
            'Visit report analysis and insights',
            'AI settings management and model selection',
            'Sales funnel visualization and analytics',
            'Sales performance reports',
            'Pipeline forecasting and statistics',
            'Lead scoring and prioritization',
            'Real-time dashboard metrics',
            'Activity trends and visit statistics'
          ]
        },
        {
          title: 'Frontend Features',
          items: [
            'Feature-based architecture with TypeScript',
            'TanStack Query for server state management',
            'Zustand for client state management',
            'React Hook Form with Zod validation',
            'Responsive design with Tailwind CSS',
            'Dark/Light theme support',
            'Internationalization (i18n) with next-intl',
            'Real-time WebSocket notifications',
            'Drag-and-drop Kanban boards',
            'Data tables with sorting, filtering, and pagination',
            'Form validation and error handling',
            'Loading states and empty states'
          ]
        },
        {
          title: 'Infrastructure & DevOps',
          items: [
            'Docker support with multi-stage builds',
            'Docker Compose for development and production',
            'PostgreSQL database with GORM AutoMigrate',
            'Cloudflare R2 for production file storage',
            'Environment-based configuration',
            'Standalone Next.js build optimization',
            'Code splitting and image optimization',
            'Production-ready deployment configuration'
          ]
        }
      ]
    },
    image: [
      {
        title: 'banner',
        image: '/work/CRMFarmasi/banner.png'
      },
      {
        title: 'Dashboard Light',
        image: '/work/CRMFarmasi/dashboardLight.png'
      },
      {
        title: 'Dashboard Dark',
        image: '/work/CRMFarmasi/dashboardDark.png'
      },
      {
        title: 'User Management',
        image: '/work/CRMFarmasi/userManagement.jpg'
      },
      {
        title: 'Account & Contact Management',
        image: '/work/CRMFarmasi/accoutn&contactManager.jpg'
      },
      {
        title: 'Lead Management',
        image: '/work/CRMFarmasi/leadManagement.jpg'
      },
      {
        title: 'Sales Pipeline',
        image: '/work/CRMFarmasi/salesPipeline.jpg'
      },
      {
        title: 'Visit Reports',
        image: '/work/CRMFarmasi/visitReports.jpg'
      },
      {
        title: 'Task & Reminder Management',
        image: '/work/CRMFarmasi/taskReminder.jpg'
      },
      {
        title: 'Reports',
        image: '/work/CRMFarmasi/reports.jpg'
      },
      {
        title: 'AI Chatbot',
        image: '/work/CRMFarmasi/ai.jpg'
      },
      {
        title: 'AI Chatbot Insights',
        image: '/work/CRMFarmasi/ai2.jpg'
      }
    ]
  }
];

