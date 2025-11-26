import { ServicePageData } from "../types";

export const servicesData: ServicePageData = {
  hero: {
    headline: "What We Do — and What We Do Fast.",
    subtext:
      "We build digital products that actually work.\n\nNo buzzwords, no endless process — just focus, speed, and care for quality.",
  },
  sections: [
    {
      id: "web-development",
      heading: "Websites that move fast and feel right.",
      body: "From landing pages to full-stack platforms, we build web experiences that are clean, fast, and easy to use.\n\nWhether it's your first site or a complex dashboard, we make sure it runs smooth and looks solid on every screen.",
      microTagline: "→ Frontend, Backend, APIs — all handled by the same flow.",
    },
    {
      id: "mobile-development",
      heading: "Apps that follow your users anywhere.",
      body: "We craft cross-platform apps that feel natural and quick to build.\n\nDesigned to perform well, update easily, and grow with your product.\n\nFlutter is our main weapon, speed is our habit.",
      microTagline: "→ One codebase. Smooth everywhere.",
    },
    {
      id: "ui-ux-design",
      heading: "Simple, beautiful, and made for humans.",
      body: "We don't overdesign — we design what matters.\n\nInterfaces that help people do things easily, without thinking too hard.\n\nEvery pixel has a reason, and every flow feels natural.",
      microTagline: "→ Fast to use. Easy to love.",
    },
    {
      id: "system-integration",
      heading: "Things that talk to each other.",
      body: "We connect your tools, databases, and APIs so everything runs together like a single system.\n\nLess manual work, less waiting, more automation.",
      microTagline: "→ Build once. Connect forever.",
    },
    {
      id: "maintenance-scaling",
      heading: "We don't disappear after launch.",
      body: "Need updates? Fixes? A redesign?\n\nWe stay around to keep things running fast and safe — just like when we built it.\n\nThink of us as your tech pit-crew.",
      microTagline: "→ Keep your product alive and fast.",
    },
  ],
  cta: {
    heading: "Need something built fast?",
    subtext:
      "Tell us what you're working on — we'll figure out how to make it real, quick.\n\nWe don't promise everything, but we do promise speed, care, and good code.",
    primaryButton: {
      label: "Start a Project",
      href: "/contact",
    },
    secondaryButton: {
      label: "Chat with Us",
      href: "/contact",
    },
  },
};

