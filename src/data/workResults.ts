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

export const workResultsProjects: Record<string, WorkResultProject[]> = {
  en: [
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
  ],
  id: [
    {
      title: 'Sitama',
      description: 'Platform Pendidikan yang membantu menyederhanakan manajemen magang untuk mahasiswa dan dosen di Politeknik Negeri Semarang. Menampilkan sistem dual-role dengan fungsionalitas khusus untuk mahasiswa dan dosen pembimbing.',
      technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
      githubUrl: 'https://github.com/Kevin5621/Sitama',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Fitur Mahasiswa',
            items: [
              'Kirim dan lacak progres magang',
              'Kelola logbook digital',
              'Jadwalkan dan kelola sesi bimbingan',
              'Upload laporan dan dokumentasi',
              'Lihat feedback dan nilai'
            ]
          },
          {
            title: 'Fitur Dosen',
            items: [
              'Review pengajuan mahasiswa',
              'Berikan feedback pada entri logbook',
              'Kelola jadwal bimbingan',
              'Asses performa mahasiswa',
              'Generate laporan progres'
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
        { title: 'Dashboard Mahasiswa', image: '/work/sitama/converted-1.webp' },
        { title: 'Bimbingan', image: '/work/sitama/converted-2.webp' },
        { title: 'Halaman Logbook', image: '/work/sitama/converted-3.webp' },
        { title: 'Tambah Bimbingan', image: '/work/sitama/converted-4.webp' },
        { title: 'Profil', image: '/work/sitama/converted-5.webp' },
        { title: 'Dashboard Dosen', image: '/work/sitama/converted-6.webp' },
        { title: 'Detail Mahasiswa', image: '/work/sitama/converted-7.webp' },
        { title: 'Aksi Bimbingan', image: '/work/sitama/converted-8.webp' },
        { title: 'Halaman Nilai', image: '/work/sitama/converted-9.webp' },
        { title: 'Tambahan 1', image: '/work/sitama/converted-10.webp' },
        { title: 'Tambahan 2', image: '/work/sitama/converted-11.webp' }
      ]
    },
    {
      title: 'Fiber Monitoring Project',
      description: 'Monorepo untuk Fiber Monitoring Project dengan berbagai peran pengguna untuk mengelola instalasi dan monitoring fiber optik. Proyek ini adalah solusi komprehensif untuk memantau proyek instalasi fiber optik. Terdiri dari dua aplikasi utama: Admin (dashboard untuk administrator mengelola proyek, melihat laporan, dan memantau progres keseluruhan) dan Waspang (antarmuka pengguna untuk pekerja lapangan mengirim laporan, melacak milestone, dan mengelola dokumentasi proyek).',
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
            title: 'Fitur Admin Dashboard',
            items: [
              'Ringkasan proyek dan statistik',
              'Monitoring laporan harian',
              'Manajemen dokumen',
              'Pelacakan progres',
              'Visualisasi status proyek',
              'Manajemen tim',
              'Metrik performa tim',
              'Workflow persetujuan dokumen',
              'Pembuatan dan penugasan proyek',
              'Alat pelaporan komprehensif'
            ]
          },
          {
            title: 'Fitur Waspang (Antarmuka Pekerja Lapangan)',
            items: [
              'Lihat detail proyek dan milestone',
              'Kirim laporan harian',
              'Upload dokumen proyek',
              'Lacak aktivitas proyek',
              'Kelola dokumentasi khusus proyek',
              'Laporkan masalah dan progres',
              'Upload dokumen dengan kategorisasi',
              'Pelacakan milestone proyek',
              'Pelaporan masalah lapangan',
              'Tampilan proyek berbasis lokasi'
            ]
          },
          {
            title: 'Fitur Bersama',
            items: [
              'Autentikasi dengan Supabase Auth',
              'Desain responsif untuk desktop dan mobile',
              'Update real-time',
              'Sistem manajemen dokumen',
              'Pelacakan dan pelaporan proyek'
            ]
          }
        ]
      },
      image: [
        {
          title: 'banner',
          image: '/work/FiberMonitoringImages/3.png'
        },
        { title: 'dashboard admin', image: '/work/FiberMonitoringImages/adminDashboard.png' },
        { title: 'notifikasi', image: '/work/FiberMonitoringImages/notification.png' },
        { title: 'daftar proyek', image: '/work/FiberMonitoringImages/projectList.png' },
        { title: 'peta', image: '/work/FiberMonitoringImages/map.png' },
        { title: 'tambah proyek', image: '/work/FiberMonitoringImages/addProject.png' },
        { title: 'manajemen pengguna', image: '/work/FiberMonitoringImages/userManagement.png' },
        { title: 'detail proyek', image: '/work/FiberMonitoringImages/projectDetail.png' },
        { title: 'tambah foto milestone', image: '/work/FiberMonitoringImages/addMilestone.png' },
        { title: 'tambah laporan harian', image: '/work/FiberMonitoringImages/addDailyReport.png' },
        { title: 'login putih', image: '/work/FiberMonitoringImages/loginWhite.png' },
        { title: 'login hitam', image: '/work/FiberMonitoringImages/loginBlack.png' }
      ]
    },
    {
      title: 'Portfolio Website Digital Marketer',
      description: 'Website portfolio modern dan interaktif untuk menampilkan proyek kreatif, pengalaman profesional, dan informasi kontak. Dibangun dengan Next.js dan React, menampilkan animasi halus, galeri proyek, dan desain responsif.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Kevin5621/portofolio-website-digital-marketer-2',
      type: 'real',
      features: {
        sections: [
          {
            title: 'Pameran',
            items: [
              'Galeri proyek animasi dengan halaman detail',
              'Efek reveal proyek interaktif',
              'Tampilan metrik dan pencapaian proyek'
            ]
          },
          {
            title: 'Pengalaman & Keahlian',
            items: [
              'Timeline pengalaman profesional',
              'Slider keahlian dengan animasi halus',
              'Bagian sertifikat dan pengakuan'
            ]
          },
          {
            title: 'Kontak',
            items: [
              'Form kontak dengan validasi',
              'Integrasi media sosial',
              'Layout responsif untuk semua perangkat'
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
        { title: 'kutipan', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-24 Adhara Eka - Portfolio.webp' },
        { title: 'pengalaman', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-38 Adhara Eka - Portfolio.webp' },
        { title: 'daftar proyek 1', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-12-49 Adhara Eka - Portfolio.webp' },
        { title: 'daftar proyek 2', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-18 Adhara Eka - Portfolio.webp' },
        { title: 'detail proyek', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-13-44 Adhara Eka - Portfolio.webp' },
        { title: 'akhir', image: '/work/PortofolioMarketerImages/Screenshot 2025-12-16 at 16-14-40 Adhara Eka - Portfolio.webp' }
      ]
    },
    {
      title: 'CRM Pharmaceutical',
      description: 'CRM Healthcare Cerdas dengan Insight Berbasis AI. Platform CRM tingkat enterprise yang komprehensif dirancang khusus untuk perusahaan farmasi dan healthcare. Menampilkan 20+ modul backend, notifikasi real-time, integrasi AI chatbot, dan analitik canggih untuk mengelola akun, lead, deal, laporan kunjungan, dan sales pipeline.',
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
            title: 'Arsitektur Backend & Keamanan',
            items: [
              'Arsitektur berlapis (Handler → Service → Repository)',
              'Rate limiting multi-level (IP, email, global)',
              'Autentikasi JWT dengan rotasi token',
              'Kontrol akses berbasis peran dan izin (RBAC)',
              'CORS whitelist dan keamanan HSTS',
              'Hashing password bcrypt',
              'WebSocket hub untuk notifikasi real-time',
              'Background workers untuk pengingat dan pembersihan token',
              'Migrasi database aman untuk produksi',
              'Abstraksi penyimpanan file (Local/R2)'
            ]
          },
          {
            title: 'Modul CRM Inti',
            items: [
              'Manajemen Akun & Kontak dengan kategorisasi',
              'Manajemen Lead dengan scoring (0-100) dan konversi',
              'Sales Pipeline dengan papan Kanban dan pelacakan deal',
              'Manajemen Produk dengan kategori dan harga',
              'Manajemen Tugas & Pengingat dengan level prioritas',
              'Laporan Kunjungan dengan pelacakan GPS dan upload foto',
              'Manajemen Pengguna dengan peran dan izin',
              'Dashboard dengan KPI dan statistik real-time',
              'Modul Laporan dengan fungsi ekspor Excel',
              'Pelacakan aktivitas dan visualisasi timeline'
            ]
          },
          {
            title: 'Fitur AI & Analitik',
            items: [
              'AI Chatbot dengan integrasi Cerebras LLM',
              'Respons AI yang sadar konteks untuk data CRM',
              'Analisis dan insight laporan kunjungan',
              'Manajemen pengaturan AI dan pemilihan model',
              'Visualisasi dan analitik sales funnel',
              'Laporan performa penjualan',
              'Peramalan dan statistik pipeline',
              'Scoring dan prioritisasi lead',
              'Metrik dashboard real-time',
              'Tren aktivitas dan statistik kunjungan'
            ]
          },
          {
            title: 'Fitur Frontend',
            items: [
              'Arsitektur berbasis fitur dengan TypeScript',
              'TanStack Query untuk manajemen state server',
              'Zustand untuk manajemen state klien',
              'React Hook Form dengan validasi Zod',
              'Desain responsif dengan Tailwind CSS',
              'Dukungan tema gelap/terang',
              'Internasionalisasi (i18n) dengan next-intl',
              'Notifikasi WebSocket real-time',
              'Papan Kanban drag-and-drop',
              'Tabel data dengan sorting, filtering, dan pagination',
              'Validasi form dan penanganan error',
              'State loading dan empty state'
            ]
          },
          {
            title: 'Infrastruktur & DevOps',
            items: [
              'Dukungan Docker dengan multi-stage builds',
              'Docker Compose untuk development dan produksi',
              'Database PostgreSQL dengan GORM AutoMigrate',
              'Cloudflare R2 untuk penyimpanan file produksi',
              'Konfigurasi berbasis environment',
              'Optimasi build Next.js standalone',
              'Code splitting dan optimasi gambar',
              'Konfigurasi deployment siap produksi'
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
          title: 'Dashboard Terang',
          image: '/work/CRMFarmasi/dashboardLight.png'
        },
        {
          title: 'Dashboard Gelap',
          image: '/work/CRMFarmasi/dashboardDark.png'
        },
        {
          title: 'Manajemen Pengguna',
          image: '/work/CRMFarmasi/userManagement.jpg'
        },
        {
          title: 'Manajemen Akun & Kontak',
          image: '/work/CRMFarmasi/accoutn&contactManager.jpg'
        },
        {
          title: 'Manajemen Lead',
          image: '/work/CRMFarmasi/leadManagement.jpg'
        },
        {
          title: 'Sales Pipeline',
          image: '/work/CRMFarmasi/salesPipeline.jpg'
        },
        {
          title: 'Laporan Kunjungan',
          image: '/work/CRMFarmasi/visitReports.jpg'
        },
        {
          title: 'Manajemen Tugas & Pengingat',
          image: '/work/CRMFarmasi/taskReminder.jpg'
        },
        {
          title: 'Laporan',
          image: '/work/CRMFarmasi/reports.jpg'
        },
        {
          title: 'AI Chatbot',
          image: '/work/CRMFarmasi/ai.jpg'
        },
        {
          title: 'Insight AI Chatbot',
          image: '/work/CRMFarmasi/ai2.jpg'
        }
      ]
    }
  ]
};
