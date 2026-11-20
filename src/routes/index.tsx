import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";
import { projects, site, skills } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divyanshu Gahlot — Full-stack developer" },
      {
        name: "description",
        content:
          "Divyanshu Gahlot builds production web apps with Next.js, Node.js and TypeScript — including AI products with streaming chat and RAG search.",
      },
      { property: "og:title", content: "Divyanshu Gahlot — Full-stack developer" },
      {
        property: "og:description",
        content: "Production web apps and AI-powered products, built end to end. See the work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 bg-spot" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground animate-rise">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              open to {site.openTo.toLowerCase()}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl animate-rise [animation-delay:80ms]">
              Divyanshu
              <br />
              <span className="text-primary text-glow">Gahlot</span>
              <span className="text-muted-foreground">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-rise [animation-delay:160ms]">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:240ms]">
              <Button asChild variant="terminal" size="lg">
                <Link to="/projects">
                  view projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="wire" size="lg">
                <a href="/Divyanshu_Gahlot_Resume.pdf" target="_blank" rel="noreferrer">
                  <Download /> resume.pdf
                </a>
              </Button>
            </div>
          </div>

          <TerminalCard />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index="01" title="selected work">
          <Link to="/projects" className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
            all projects →
          </Link>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              className={i === projects.length - 1 && projects.length % 2 === 1 ? "md:col-span-2" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading index="02" title="toolbox" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((s) => (
              <div key={s.group} className="bg-background p-5">
                <p className="font-mono text-xs text-highlight">{s.group}/</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="label-mono">
          <span className="text-primary">03</span> — what's next
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Have a role or a project in mind? Let's talk.
        </h2>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="terminal" size="lg">
            <Link to="/contact">get in touch</Link>
          </Button>
          <Button asChild variant="wire" size="lg">
            <Link to="/about">more about me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function TerminalCard() {
  return (
    <div className="rounded-xl border border-border bg-terminal shadow-card animate-rise [animation-delay:200ms]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-destructive/70" />
        <span className="size-3 rounded-full bg-highlight/70" />
        <span className="size-3 rounded-full bg-primary/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">divyanshu@dev: ~</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-primary">$</span> <span className="text-foreground">cat whoami.ts</span>
          {"\n\n"}
          <span className="text-muted-foreground">{"// "}hi, thanks for stopping by</span>
          {"\n"}
          <span className="text-highlight">const</span> <span className="text-foreground">me</span> = {"{"}
          {"\n"}  role: <span className="text-primary">"{site.role}"</span>,
          {"\n"}  stack: [<span className="text-primary">"Next.js"</span>, <span className="text-primary">"Node"</span>, <span className="text-primary">"TS"</span>],
          {"\n"}  loves: <span className="text-primary">"AI + RAG products"</span>,
          {"\n"}  based: <span className="text-primary">"Delhi/NCR"</span>,
          {"\n"}  shipping: <span className="text-highlight">true</span>,
          {"\n"}
          {"}"};
          {"\n\n"}
          <span className="text-primary">$</span> <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
        </code>
      </pre>
      <div className="flex items-center gap-2 border-t border-border px-5 py-3 font-mono text-xs text-muted-foreground">
        <MapPin className="size-3.5 text-primary" /> {site.location}
      </div>
    </div>
  );
}
