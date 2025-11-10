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
      slug: "building-fast-without-breaking-things",
      title: "Building Fast Without Breaking Things",
      excerpt:
        "How we maintain quality while moving quickly. The practices and principles that keep our code reliable.",
      content: `Speed and quality don't have to be at odds. Here's how we structure our workflow to deliver fast without cutting corners.

## The Challenge

When clients need something built quickly, the temptation is to skip steps. Skip tests, skip documentation, skip code reviews. But we've learned that these shortcuts create technical debt that slows us down later.

## Our Approach

We maintain quality through:

**1. Automated Testing**
Every feature gets tested. Not just happy paths, but edge cases too. This catches bugs early, when they're cheap to fix.

**2. Code Reviews**
Every pull request gets reviewed. Not just for correctness, but for maintainability. Is this code easy to understand? Will it be easy to change later?

**3. Continuous Integration**
We deploy frequently. Small changes are easier to debug than big releases. If something breaks, we know exactly what changed.

**4. Documentation as We Go**
We document decisions and complex logic as we write code. Not as an afterthought, but as part of the process.

## The Result

By maintaining these practices, we can move fast without accumulating debt. Our code stays clean, our tests catch issues early, and our deployments are smooth.

Speed comes from good practices, not from skipping them.`,
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
      slug: "why-flutter-for-cross-platform-apps",
      title: "Why Flutter for Cross-Platform Apps",
      excerpt:
        "Our experience building mobile apps that work seamlessly on iOS and Android from a single codebase.",
      content: `After building dozens of mobile apps, we've found Flutter to be the sweet spot for speed, performance, and maintainability.

## Why Not Native?

Native development means writing code twice—once for iOS, once for Android. That's twice the bugs, twice the maintenance, and twice the time.

## Why Not React Native?

React Native is great, but it has limitations. Performance can be inconsistent, and you often need to write native code anyway for complex features.

## Why Flutter?

**1. Single Codebase**
Write once, run everywhere. iOS and Android share the same code, which means faster development and easier maintenance.

**2. Performance**
Flutter compiles to native code. No JavaScript bridge means smooth animations and fast performance, even on older devices.

**3. Beautiful UI**
Flutter's widget system makes it easy to build custom, beautiful interfaces. Material Design and Cupertino widgets are built-in.

**4. Hot Reload**
See changes instantly. This speeds up development significantly compared to native development.

**5. Growing Ecosystem**
The Flutter ecosystem is mature and growing. There's a package for almost everything you need.

## Real Results

We've built apps that:
- Launch faster than native alternatives
- Perform smoothly on both platforms
- Are easier to maintain with a single codebase
- Can be updated quickly with new features

For most projects, Flutter is the right choice.`,
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
      slug: "designing-for-speed-and-clarity",
      title: "Designing for Speed and Clarity",
      excerpt:
        "Simple design principles that make interfaces faster to build and easier to use.",
      content: `Good design isn't about making things look pretty—it's about making things work better. Here's what we focus on.

## Clarity Over Cleverness

The best interface is the one users don't have to think about. Every element should have a clear purpose.

**Clear Hierarchy**
Important information stands out. Less important information fades back. Users should know where to look first.

**Consistent Patterns**
Once users learn how something works, they should be able to apply that knowledge everywhere. Consistent buttons, consistent navigation, consistent interactions.

## Speed in Design

**Start Simple**
Begin with the simplest possible solution. Add complexity only when necessary.

**Reusable Components**
Build a design system. Reuse components instead of creating new ones. This speeds up both design and development.

**Prototype Early**
Test ideas quickly with prototypes. Don't spend time perfecting something that might not work.

## User-Centered Decisions

Every design decision should answer: Does this help the user accomplish their goal?

If it doesn't, remove it. If it does, make it obvious.

## The Process

1. Understand the user's goal
2. Design the simplest path to that goal
3. Test with real users
4. Iterate based on feedback

Simple, clear design is faster to build, easier to maintain, and better for users.`,
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
      slug: "the-art-of-system-integration",
      title: "The Art of System Integration",
      excerpt:
        "Connecting different tools and services so they work together seamlessly. Lessons from real projects.",
      content: `Most projects involve multiple systems that need to talk to each other. Here's how we approach integration challenges.

## The Challenge

Modern applications rarely exist in isolation. They need to connect to:
- Payment processors
- Email services
- Analytics platforms
- Third-party APIs
- Internal databases
- Legacy systems

Each connection is a potential point of failure.

## Our Approach

**1. API-First Design**
Design APIs that are clear, consistent, and well-documented. Good APIs make integration straightforward.

**2. Error Handling**
Assume things will fail. Build retry logic, fallbacks, and clear error messages. Users should never see cryptic error codes.

**3. Monitoring**
Track integration health. Know immediately when something breaks, not when users complain.

**4. Versioning**
APIs change. Version your APIs so existing integrations don't break when you add new features.

**5. Testing**
Test integrations thoroughly. Mock external services in tests, but also test against real services in staging.

## Common Patterns

**Webhooks**
For real-time updates, webhooks are often better than polling. They're more efficient and provide faster updates.

**Message Queues**
For async processing, message queues handle spikes and failures gracefully.

**API Gateways**
Centralize authentication, rate limiting, and logging at the gateway level.

## Lessons Learned

- Start with the simplest integration that works
- Document everything
- Monitor everything
- Plan for failure
- Version your APIs

Good integration is invisible to users but critical to functionality.`,
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
      slug: "maintaining-products-after-launch",
      title: "Maintaining Products After Launch",
      excerpt:
        "Why we stick around after the initial build. The importance of ongoing support and iteration.",
      content: `Launching a product is just the beginning. Here's how we structure maintenance and updates to keep things running smoothly.

## Why Maintenance Matters

Products don't stay static. They need:
- Security updates
- Bug fixes
- Performance improvements
- New features
- Dependency updates

Without maintenance, products decay. They become slow, insecure, and outdated.

## Our Maintenance Approach

**1. Regular Updates**
We schedule regular maintenance windows. Security patches, dependency updates, and small improvements happen on a predictable schedule.

**2. Monitoring**
We monitor performance, errors, and usage. Problems are caught early, before they impact users.

**3. Documentation**
As we make changes, we update documentation. Future developers (including ourselves) need to understand what changed and why.

**4. User Feedback**
We listen to users. Their feedback guides what we fix and what we build next.

**5. Technical Debt**
We address technical debt regularly. Small refactors prevent big rewrites later.

## Support Tiers

**Critical Issues**
Security vulnerabilities and data loss risks are fixed immediately.

**High Priority**
Bugs that block core functionality are fixed within 24 hours.

**Medium Priority**
Feature requests and non-critical bugs are addressed in regular sprints.

**Low Priority**
Nice-to-have improvements are scheduled based on impact and effort.

## The Value

Maintenance isn't just fixing bugs. It's:
- Keeping products secure
- Improving performance
- Adding features users need
- Preventing future problems

A well-maintained product stays valuable. A neglected product becomes a liability.

We're here for the long term, not just the launch.`,
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
      slug: "nextjs-16-what-were-excited-about",
      title: "Next.js 16: What We're Excited About",
      excerpt:
        "Our take on the latest Next.js features and how they're changing how we build web applications.",
      content: `Next.js 16 brings some exciting improvements. Here's what we're using and why it matters for our projects.

## Server Components by Default

Server Components are now the default. This means:
- Less JavaScript sent to the client
- Faster initial page loads
- Better SEO
- Simpler data fetching

We're building more with Server Components and only using Client Components when we need interactivity.

## Improved Caching

Next.js 16 has better caching defaults. Pages are cached more aggressively, which means:
- Faster response times
- Lower server costs
- Better user experience

We're seeing significant performance improvements on our projects.

## Turbopack Improvements

Development builds are faster with Turbopack. Hot reload is nearly instant, which speeds up our development workflow.

## Better Error Handling

Error boundaries are more powerful. We can handle errors more gracefully and provide better user experiences when things go wrong.

## What We're Building

With Next.js 16, we're building:
- Faster applications
- Better SEO
- More maintainable code
- Better developer experience

## Migration Notes

If you're upgrading from Next.js 15:
- Most code works without changes
- Server Components are now default
- Some APIs have been updated
- Check the migration guide

Next.js 16 is a solid upgrade. The performance improvements alone make it worth upgrading.`,
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

// Helper function to get post by slug
export function getPostBySlug(slug: string) {
  return blogData.posts.find((post) => post.slug === slug);
}

// Helper function to get all slugs
export function getAllSlugs() {
  return blogData.posts.map((post) => post.slug);
}

// Helper function to get related posts (exclude current post, prefer same category)
export function getRelatedPosts(
  currentPostSlug: string,
  limit: number = 3
) {
  const currentPost = getPostBySlug(currentPostSlug);
  if (!currentPost) {
    return [];
  }

  // Filter out current post
  const otherPosts = blogData.posts.filter(
    (post) => post.slug !== currentPostSlug
  );

  // Prioritize posts from the same category
  const sameCategoryPosts = otherPosts.filter(
    (post) => post.category === currentPost.category
  );

  // If we have enough posts from the same category, return them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit);
  }

  // Otherwise, fill the rest with posts from other categories
  const otherCategoryPosts = otherPosts.filter(
    (post) => post.category !== currentPost.category
  );

  return [...sameCategoryPosts, ...otherCategoryPosts].slice(0, limit);
}
