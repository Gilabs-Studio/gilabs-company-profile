import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-dvh flex items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              We build apps and websites
            </h1>
            <p className="text-balance text-muted-foreground max-w-xl">
              Clean UI, clear deliverables, on schedule. Working prototype in 3 days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/contact?type=app">App</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?type=website">Website</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Transparent scope and pricing.</p>
          </div>

          <div className="relative order-first h-[260px] w-full rounded-xl bg-linear-to-br from-muted to-background ring-1 ring-border md:order-last md:h-[360px]">
            <div className="absolute inset-6 rounded-lg bg-background/60 ring-1 ring-border" />
            <div className="absolute right-6 top-6 h-8 w-24 rounded-full bg-muted/70" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-md bg-muted" />
              <div className="h-20 rounded-md bg-muted" />
              <div className="h-20 rounded-md bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


