import type { ReactNode } from "react";

export function SectionHeading({ index, title, children }: { index: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="label-mono">
          <span className="text-primary">{index}</span> — {title}
        </p>
      </div>
      {children}
    </div>
  );
}

export function PageIntro({ path, title, children }: { path: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-spot" />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-16 sm:pt-20">
        <p className="font-mono text-sm text-muted-foreground animate-rise">
          <span className="text-primary">$</span> cd {path}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl animate-rise [animation-delay:80ms]">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg text-muted-foreground animate-rise [animation-delay:160ms]">{children}</div>
        )}
      </div>
    </section>
  );
}
