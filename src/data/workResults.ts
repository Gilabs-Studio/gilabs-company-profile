export interface ProjectImage {
  title: string;
  image: string;
  bannerLight?: string;
  bannerDark?: string;
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
        image: '/image/sitama-banner.webp',
        bannerLight: '/image/sitama-banner-light.webp',
        bannerDark: '/image/sitama-banner-dark.webp'
      },
      { title: 'Login', image: '/image/sitama-login.webp' },
      { title: 'Dashboard Student', image: '/image/sitama-dashboard-student.webp' },
      { title: 'Guidance', image: '/image/sitama-guidance.webp' },
      { title: 'Logbook Page', image: '/image/sitama-logbook.webp' },
      { title: 'Add Guidance', image: '/image/sitama-add-guidance.webp' },
      { title: 'Profile', image: '/image/sitama-profile.webp' },
      { title: 'Dashboard Lecturer', image: '/image/sitama-dashboard-lecturer.webp' },
      { title: 'Detail Student', image: '/image/sitama-detail-student.webp' },
      { title: 'Guidance Action', image: '/image/sitama-guidance-action.webp' },
      { title: 'Score Page', image: '/image/sitama-score.webp' }
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
        image: '/image/fiber-monitoring-banner.webp',
        bannerLight: '/image/fiber-monitoring-banner-light.webp',
        bannerDark: '/image/fiber-monitoring-banner-dark.webp'
      },
      { title: 'admin dashboard', image: '/image/fiber-monitoring-admin-dashboard.webp' },
      { title: 'notification', image: '/image/fiber-monitoring-notification.webp' },
      { title: 'project list', image: '/image/fiber-monitoring-project-list.webp' },
      { title: 'map', image: '/image/fiber-monitoring-map.webp' },
      { title: 'add project', image: '/image/fiber-monitoring-add-project.webp' },
      { title: 'user management', image: '/image/fiber-monitoring-user-management.webp' },
      { title: 'project detail', image: '/image/fiber-monitoring-project-detail.webp' },
      { title: 'add milestone photo', image: '/image/fiber-monitoring-add-milestone.webp' },
      { title: 'add daily report', image: '/image/fiber-monitoring-add-daily-report.webp' }
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
        image: '/image/portfolio-marketer-banner.webp',
        bannerLight: '/image/portfolio-marketer-banner-light.webp',
        bannerDark: '/image/portfolio-marketer-banner-dark.webp'
      },
      { title: 'menu', image: '/image/portfolio-marketer-menu.webp' },
      { title: 'quotes', image: '/image/portfolio-marketer-addon.webp' },
      { title: 'experience', image: '/image/portfolio-marketer-experience.webp' },
      { title: 'quotes', image: '/image/portfolio-marketer-quotes.webp' },
      { title: 'horizontal scroll', image: '/image/portfolio-marketer-project-list-1.webp' },
      { title: 'project list', image: '/image/portfolio-marketer-project-list-2.webp' },
      { title: 'get connect', image: '/image/portfolio-marketer-get-connect.webp' },
      { title: 'project detail', image: '/image/portfolio-marketer-project-detail.webp' },
      { title: 'expertise', image: '/image/portfolio-marketer-project-detail-expertise.webp' },
      { title: 'showcase coursel', image: '/image/portfolio-marketer-project-detail-showcase.webp' },
      { title: 'end', image: '/image/portfolio-marketer-project-detail-end.webp' }
    ]
  }
];

