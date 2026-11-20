import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="shrink-0 whitespace-nowrap font-mono text-sm text-foreground">
          <span className="text-primary">~/</span>
          {site.handle}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" />
        </Link>
        <nav className="flex items-center gap-0 overflow-x-auto font-mono sm:gap-1 text-xs sm:text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-1.5 py-1.5 sm:px-2.5 text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary hover:text-primary" }}
            >
              <span className="hidden opacity-50 sm:inline">./</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
