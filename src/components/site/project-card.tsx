import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  index,
  detailed = false,
  className,
}: {
  project: Project;
  index: number;
  detailed?: boolean;
  className?: string | undefined;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 ${className ?? ""}`}
    >
      <div className="flex items-center justify-between border-b border-border bg-terminal px-4 py-2.5 font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-muted-foreground/30 transition-colors group-hover:bg-primary" />
          <span>{project.slug}</span>
        </div>
        <span>
          {String(index + 1).padStart(2, "0")} · {project.kind === "client" ? "client" : "project"} · {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
              {project.name}
              <ArrowUpRight className="size-5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-1 font-mono text-sm text-highlight">{project.subtitle}</p>
        <p className="mt-4 text-muted-foreground">{project.summary}</p>

        {detailed && (
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {project.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="font-mono text-primary">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, detailed ? undefined : 5).map((tech) => (
            <span key={tech} className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {tech}
            </span>
          ))}
          {!detailed && project.stack.length > 5 && (
            <span className="px-1 py-0.5 font-mono text-[11px] text-muted-foreground">+{project.stack.length - 5}</span>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 font-mono text-xs">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              live ↗
            </a>
          )}
          {project.code?.map((c) => (
            <a key={c.href} href={c.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
              <Github className="size-3.5" />
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
