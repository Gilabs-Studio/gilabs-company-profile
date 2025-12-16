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
  }
];

