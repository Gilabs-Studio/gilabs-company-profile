import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">GiLabs — Software Agency</h1>
        <p className="text-balance text-muted-foreground max-w-xl">
          We craft web and mobile solutions. This is a minimal Next.js 16 + Tailwind v4 + shadcn starter.
        </p>
      </div>
      <div className="flex gap-3">
        <Button size="lg">Get in touch</Button>
        <Button size="lg" variant="outline">See our work</Button>
      </div>
    </main>
  );
}
