"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
          <CardHeader className="text-center">
            <CardTitle className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl [font-family:var(--font-space-grotesk)]">
              Let&apos;s Build Something Great
            </CardTitle>
            <CardDescription className="text-lg text-zinc-600 dark:text-zinc-400">
              Ready to transform your ideas into reality? Get in touch and let&apos;s discuss your project.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="w-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:w-auto"
              asChild
            >
              <a href="mailto:hello@example.com">Get Started</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-zinc-300 dark:border-zinc-700 sm:w-auto"
              asChild
            >
              <a href="#services">Learn More</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

