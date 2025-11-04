"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ValueProp {
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    title: "Modern Approach",
    description:
      "We leverage the latest technologies and best practices to build future-proof solutions that scale with your business.",
  },
  {
    title: "Quality Focused",
    description:
      "Every line of code is written with attention to detail, ensuring maintainability, performance, and user experience.",
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and honest feedback ensure you're always informed about your project's progress.",
  },
  {
    title: "Agile Methodology",
    description:
      "We adapt quickly to changes, deliver iteratively, and prioritize features that provide the most value to your users.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative z-10 min-h-scree sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl [font-family:var(--font-space-grotesk)]">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            What sets us apart in delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <Card
              key={prop.title}
              className="group border-zinc-200 bg-white transition-all hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <CardHeader>
                <CardTitle className="text-xl [font-family:var(--font-space-grotesk)]">
                  {prop.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

