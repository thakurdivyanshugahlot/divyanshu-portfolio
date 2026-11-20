import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>
          <span className="text-highlight">{"//"}</span> built by {site.name} · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a href={site.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
            <Github className="size-4" />
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-primary">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
