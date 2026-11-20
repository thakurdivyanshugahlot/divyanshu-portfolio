import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PageIntro } from "@/components/site/section-heading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Divyanshu Gahlot" },
      {
        name: "description",
        content: "Get in touch with Divyanshu Gahlot for full-stack developer roles or freelance projects.",
      },
      { property: "og:title", content: "Contact — Divyanshu Gahlot" },
      { property: "og:description", content: "Email, GitHub and LinkedIn — say hi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "github", value: "thakurdivyanshugahlot", href: site.links.github, icon: Github },
  { label: "linkedin", value: "divyanshu-gahlot", href: site.links.linkedin, icon: Linkedin },
];

function ContactPage() {
  return (
    <>
      <PageIntro path="~/contact" title="Let's build something.">
        I'm currently open to {site.openTo.toLowerCase()}, and happy to chat about freelance work too. The fastest way to
        reach me is email.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-card">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 px-6 py-6 transition-colors hover:bg-accent"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-terminal text-primary">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="label-mono">{label}</p>
                  <p className="break-all text-base font-medium transition-colors group-hover:text-primary sm:text-xl">{value}</p>
                </div>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          <span className="text-highlight">{"//"}</span> based in {site.location}
        </p>
      </section>
    </>
  );
}
