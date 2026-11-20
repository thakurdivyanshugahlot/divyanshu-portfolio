import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/project-card";
import { PageIntro, SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Divyanshu Gahlot" },
      {
        name: "description",
        content:
          "MyNOTEBOOK, GitWiki, Modern Connect and client websites built by Divyanshu Gahlot with Next.js, Node.js and AI APIs.",
      },
      { property: "og:title", content: "Projects — Divyanshu Gahlot" },
      {
        property: "og:description",
        content: "AI-powered apps and production client websites, with live links and source code.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const own = projects.filter((p) => p.kind === "project");
  const client = projects.filter((p) => p.kind === "client");
  return (
    <>
      <PageIntro path="~/projects" title="Things I've built.">
        AI-powered products I designed end to end, and production websites shipped for real clients.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading index="01" title="ai products" />
        <div className="grid gap-5 md:grid-cols-2">
          {own.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              detailed
              className={i === own.length - 1 && own.length % 2 === 1 ? "md:col-span-2" : undefined}
            />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionHeading index="02" title="client work" />
        <div className="grid gap-5 md:grid-cols-2">
          {client.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={own.length + i}
              detailed
              className={i === client.length - 1 && client.length % 2 === 1 ? "md:col-span-2" : undefined}
            />
          ))}
        </div>
      </section>
    </>
  );
}
