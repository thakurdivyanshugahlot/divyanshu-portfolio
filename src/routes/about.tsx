import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site/section-heading";
import { certifications, education, experience, site, skills } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Divyanshu Gahlot" },
      {
        name: "description",
        content: "Experience, skills and education of Divyanshu Gahlot, a full-stack developer based in Delhi/NCR.",
      },
      { property: "og:title", content: "About — Divyanshu Gahlot" },
      {
        property: "og:description",
        content: "Full-stack developer working across Next.js, Node.js, Postgres and AI tooling.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro path="~/about" title="About me.">
        {site.summary}
      </PageIntro>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading index="01" title="experience" />
          <ol className="relative space-y-8 border-l border-border pl-6">
            {experience.map((e) => (
              <li key={e.what} className="relative">
                <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-primary shadow-glow" />
                <p className="font-mono text-xs text-muted-foreground">{e.when}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.what}</h3>
                <p className="text-sm text-highlight">{e.where}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
              </li>
            ))}
            <li className="relative">
              <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border border-primary bg-background" />
              <p className="font-mono text-xs text-muted-foreground">{education.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{education.degree}</h3>
              <p className="text-sm text-highlight">{education.school}</p>
            </li>
          </ol>

          <div className="mt-14">
            <SectionHeading index="02" title="certifications" />
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <span>
                    {c.name} <span className="text-muted-foreground">· {c.by}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild variant="wire" size="lg" className="mt-10">
            <a href="/Divyanshu_Gahlot_Resume.pdf" target="_blank" rel="noreferrer">
              <Download /> download resume.pdf
            </a>
          </Button>
        </div>

        <div>
          <SectionHeading index="03" title="skills" />
          <div className="space-y-6">
            {skills.map((s) => (
              <div key={s.group}>
                <p className="font-mono text-sm">
                  <span className="text-highlight">{s.group}</span>
                  <span className="text-muted-foreground"> = [</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-2 pl-4">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-2 font-mono text-sm text-muted-foreground">]</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
