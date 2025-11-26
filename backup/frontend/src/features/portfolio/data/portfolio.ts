import { PortfolioPageData } from "../types";

export const portfolioData: PortfolioPageData = {
  hero: {
    headline: "Our Work — Built Fast, Built Right.",
    subtext:
      "Real projects, real results. Here's what we've built for clients who needed speed without sacrificing quality.",
  },
  categories: [
    {
      id: "web-mobile-apps",
      number: "01",
      title: "Web & Mobile Apps",
      description:
        "Cross-platform applications that work seamlessly on any device. Built for performance and user experience.",
      items: [
        {
          id: "app-1",
          title: "E-Commerce Mobile App",
          description:
            "Full-featured shopping app with real-time inventory, secure payments, and personalized recommendations.",
          category: "web-mobile-apps",
          image: "/images/portfolio/ecommerce-app.jpg",
          imageAlt: "E-Commerce Mobile App Screenshot",
          tags: ["React Native", "Node.js", "MongoDB"],
          year: 2024,
        },
        {
          id: "app-2",
          title: "Fitness Tracking Platform",
          description:
            "Comprehensive fitness app with workout plans, progress tracking, and social features.",
          category: "web-mobile-apps",
          image: "/images/portfolio/fitness-app.jpg",
          imageAlt: "Fitness Tracking Platform Screenshot",
          tags: ["Flutter", "Firebase", "GraphQL"],
          year: 2024,
        },
        {
          id: "app-3",
          title: "Food Delivery Service",
          description:
            "On-demand food delivery platform with real-time tracking and multi-restaurant support.",
          category: "web-mobile-apps",
          image: "/images/portfolio/food-delivery.jpg",
          imageAlt: "Food Delivery Service App Screenshot",
          tags: ["Next.js", "Express", "PostgreSQL"],
          year: 2023,
        },
      ],
    },
    {
      id: "company-websites",
      number: "02",
      title: "Company Websites",
      description:
        "Professional websites that represent your brand and convert visitors into customers.",
      items: [
        {
          id: "website-1",
          title: "Corporate Brand Website",
          description:
            "Modern, responsive website with CMS integration and multilingual support for global reach.",
          category: "company-websites",
          image: "/images/portfolio/corporate-website.jpg",
          imageAlt: "Corporate Brand Website Screenshot",
          tags: ["Next.js", "Contentful", "Tailwind CSS"],
          year: 2024,
        },
        {
          id: "website-2",
          title: "Agency Portfolio Site",
          description:
            "Stunning portfolio website with smooth animations and case study showcases.",
          category: "company-websites",
          image: "/images/portfolio/agency-portfolio.jpg",
          imageAlt: "Agency Portfolio Site Screenshot",
          tags: ["React", "Framer Motion", "Vercel"],
          year: 2024,
        },
        {
          id: "website-3",
          title: "E-Learning Platform",
          description:
            "Educational website with course management, student dashboards, and payment integration.",
          category: "company-websites",
          image: "/images/portfolio/elearning-platform.jpg",
          imageAlt: "E-Learning Platform Screenshot",
          tags: ["Next.js", "Stripe", "Prisma"],
          year: 2023,
        },
      ],
    },
    {
      id: "business-systems",
      number: "03",
      title: "Business Systems (ERP / CRM)",
      description:
        "Enterprise solutions that streamline operations, manage data, and boost productivity.",
      items: [
        {
          id: "erp-1",
          title: "Custom ERP System",
          description:
            "Comprehensive enterprise resource planning system with inventory, HR, and financial modules.",
          category: "business-systems",
          image: "/images/portfolio/erp-system.jpg",
          imageAlt: "Custom ERP System Dashboard Screenshot",
          tags: ["React", "Node.js", "PostgreSQL"],
          year: 2024,
        },
        {
          id: "crm-1",
          title: "Sales CRM Platform",
          description:
            "Customer relationship management system with lead tracking, pipeline management, and analytics.",
          category: "business-systems",
          image: "/images/portfolio/crm-platform.jpg",
          imageAlt: "Sales CRM Platform Screenshot",
          tags: ["Vue.js", "Laravel", "MySQL"],
          year: 2024,
        },
        {
          id: "system-1",
          title: "Project Management Tool",
          description:
            "Internal project management system with task tracking, team collaboration, and reporting.",
          category: "business-systems",
          image: "/images/portfolio/project-management.jpg",
          imageAlt: "Project Management Tool Screenshot",
          tags: ["Next.js", "tRPC", "Prisma"],
          year: 2023,
        },
      ],
    },
    {
      id: "saas-products",
      number: "04",
      title: "SaaS Products",
      description:
        "Scalable software-as-a-service platforms built to grow with your business.",
      items: [
        {
          id: "saas-1",
          title: "Analytics Dashboard",
          description:
            "Real-time analytics platform with customizable dashboards and data visualization tools.",
          category: "saas-products",
          image: "/images/portfolio/analytics-dashboard.jpg",
          imageAlt: "Analytics Dashboard Screenshot",
          tags: ["React", "Python", "Redis"],
          year: 2024,
        },
        {
          id: "saas-2",
          title: "API Management Platform",
          description:
            "Complete API gateway with authentication, rate limiting, and monitoring capabilities.",
          category: "saas-products",
          image: "/images/portfolio/api-management.jpg",
          imageAlt: "API Management Platform Screenshot",
          tags: ["Node.js", "Kubernetes", "MongoDB"],
          year: 2024,
        },
        {
          id: "saas-3",
          title: "Collaboration Tool",
          description:
            "Team collaboration platform with real-time editing, video calls, and file sharing.",
          category: "saas-products",
          image: "/images/portfolio/collaboration-tool.jpg",
          imageAlt: "Collaboration Tool Screenshot",
          tags: ["Next.js", "WebRTC", "PostgreSQL"],
          year: 2023,
        },
      ],
    },
  ],
};

