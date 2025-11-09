import { BlogPageData } from "../types";

export const blogData: BlogPageData = {
  hero: {
    headline: "Insights, Stories, and What We're Learning.",
    subtext:
      "Thoughts on building products, working with clients, and the lessons we've learned along the way.",
  },
  posts: [
    {
      id: "post-1",
      title: "Building Fast Without Breaking Things",
      excerpt:
        "How we maintain quality while moving quickly. The practices and principles that keep our code reliable.",
      content:
        "Speed and quality don't have to be at odds. Here's how we structure our workflow to deliver fast without cutting corners...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-12-15",
      category: "Engineering",
      tags: ["Development", "Best Practices", "Workflow"],
      image: "/images/blog/fast-development.jpg",
      imageAlt: "Fast development workflow",
      readTime: 5,
    },
    {
      id: "post-2",
      title: "Why Flutter for Cross-Platform Apps",
      excerpt:
        "Our experience building mobile apps that work seamlessly on iOS and Android from a single codebase.",
      content:
        "After building dozens of mobile apps, we've found Flutter to be the sweet spot for speed, performance, and maintainability...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-12-10",
      category: "Mobile",
      tags: ["Flutter", "Mobile Development", "Cross-Platform"],
      image: "/images/blog/flutter-apps.jpg",
      imageAlt: "Flutter cross-platform development",
      readTime: 7,
    },
    {
      id: "post-3",
      title: "Designing for Speed and Clarity",
      excerpt:
        "Simple design principles that make interfaces faster to build and easier to use.",
      content:
        "Good design isn't about making things look pretty—it's about making things work better. Here's what we focus on...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-12-05",
      category: "Design",
      tags: ["UI/UX", "Design Principles", "User Experience"],
      image: "/images/blog/design-principles.jpg",
      imageAlt: "Design principles for speed",
      readTime: 6,
    },
    {
      id: "post-4",
      title: "The Art of System Integration",
      excerpt:
        "Connecting different tools and services so they work together seamlessly. Lessons from real projects.",
      content:
        "Most projects involve multiple systems that need to talk to each other. Here's how we approach integration challenges...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-11-28",
      category: "Engineering",
      tags: ["Integration", "APIs", "System Design"],
      image: "/images/blog/system-integration.jpg",
      imageAlt: "System integration architecture",
      readTime: 8,
    },
    {
      id: "post-5",
      title: "Maintaining Products After Launch",
      excerpt:
        "Why we stick around after the initial build. The importance of ongoing support and iteration.",
      content:
        "Launching a product is just the beginning. Here's how we structure maintenance and updates to keep things running smoothly...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-11-20",
      category: "Business",
      tags: ["Maintenance", "Support", "Product Lifecycle"],
      image: "/images/blog/maintenance.jpg",
      imageAlt: "Product maintenance and support",
      readTime: 5,
    },
    {
      id: "post-6",
      title: "Next.js 16: What We're Excited About",
      excerpt:
        "Our take on the latest Next.js features and how they're changing how we build web applications.",
      content:
        "Next.js 16 brings some exciting improvements. Here's what we're using and why it matters for our projects...",
      author: {
        name: "GiLabs Team",
      },
      publishedAt: "2024-11-15",
      category: "Engineering",
      tags: ["Next.js", "React", "Web Development"],
      image: "/images/blog/nextjs-16.jpg",
      imageAlt: "Next.js 16 features",
      readTime: 6,
    },
  ],
};

