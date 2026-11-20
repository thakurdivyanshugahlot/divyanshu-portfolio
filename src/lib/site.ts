export const site = {
  name: "Divyanshu Gahlot",
  handle: "divyanshu",
  role: "Full-stack developer",
  focus: "Next.js · Node.js · TypeScript · AI-powered web apps",
  location: "Delhi / NCR, India",
  tagline:
    "I ship production web apps end to end — database design, APIs, responsive UI and deployment — with a soft spot for AI features like streaming chat and RAG search.",
  summary:
    "Full-stack developer who ships production web applications, including live client websites and AI-powered products with streaming chat, authentication, background job pipelines and RAG-based search. Comfortable owning a feature end to end: database design, REST APIs, responsive UI and deployment.",
  openTo: "Full-stack / software developer roles",
  email: "divyanshu.gahlot0304@gmail.com",
  links: {
    github: "https://github.com/thakurdivyanshugahlot",
    linkedin: "https://www.linkedin.com/in/divyanshu-gahlot-a69468290/",
  },
};

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  kind: "project" | "client";
  year: string;
  summary: string;
  points: string[];
  stack: string[];
  url?: string;
  code?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "mynotebook",
    name: "MyNOTEBOOK",
    subtitle: "AI research assistant over your own sources",
    kind: "project",
    year: "2026",
    summary:
      "A NotebookLM-style assistant that answers questions from your PDFs, text, subtitles, websites and YouTube videos — every answer cites the exact excerpt or video timestamp.",
    points: [
      "Multi-source ingestion into Qdrant vectors, with clickable citations back to the exact excerpt or timestamp in the source.",
      "Raised retrieval quality with query rewriting, sub-query decomposition, HyDE and reciprocal-rank fusion.",
      "Responses stream in real time over SSE using Inngest Realtime, on a Next.js + Express app with Prisma/SQLite and Clerk auth.",
    ],
    stack: ["Next.js", "Express", "Prisma", "SQLite", "OpenAI", "Qdrant", "Inngest", "Clerk"],
    url: "https://my-notebook-psi.vercel.app/",
    code: [{ label: "github", href: "https://github.com/thakurdivyanshugahlot/MyNOTEBOOK" }],
  },
  {
    slug: "gitwiki",
    name: "GitWiki",
    subtitle: "AI assistant for GitHub repositories",
    kind: "project",
    year: "2026",
    summary:
      "Connect a GitHub repo and ask questions about its code and architecture — answers stream in real time with citations to source files.",
    points: [
      "PostgreSQL schema with Prisma, Clerk authentication and fault-tolerant background indexing with Inngest (step-level retries, job status tracking).",
      "Retrieval layer: chunked source files, OpenAI embeddings and per-repository Pinecone namespaces for isolated search.",
    ],
    stack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Inngest", "OpenAI", "Pinecone", "Clerk"],
    url: "https://gitwiki-frontend.vercel.app/",
    code: [
      { label: "frontend", href: "https://github.com/thakurdivyanshugahlot/gitwiki-frontend" },
      { label: "backend", href: "https://github.com/thakurdivyanshugahlot/gitwiki-backend" },
    ],
  },
  {
    slug: "modern-connect",
    name: "Modern Connect",
    subtitle: "AI workspace for Gmail & Google Calendar",
    kind: "project",
    year: "2026",
    summary:
      "Read, send and manage Gmail and Google Calendar through a conversational assistant powered by Gemini 2.5 Flash.",
    points: [
      "Connected Google services via the Corsair MCP SDK and added a high-level send-email tool that fixed failing sends.",
      "Google OAuth, a stable new-user onboarding flow, and Gmail Pub/Sub webhooks with a scheduled renewal cron on Vercel.",
    ],
    stack: ["Next.js", "Drizzle ORM", "MCP", "Gemini 2.5 Flash", "Upstash Redis", "Vercel"],
    url: "https://modern-connect-mu.vercel.app/",
    code: [{ label: "github", href: "https://github.com/thakurdivyanshugahlot/modern-connect" }],
  },
  {
    slug: "era-of-digital-marketing",
    name: "Era of Digital Marketing",
    subtitle: "Production website for a marketing agency",
    kind: "client",
    year: "2025",
    summary:
      "Designed, built and deployed the company's live website with server-side rendering for faster loads and better SEO.",
    points: [
      "Node.js / Express REST APIs backed by MongoDB.",
      "Google Sheets integration so the client updates site content without touching code.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB"],
    url: "https://www.eraofdigitalmarketing.com/",
  },
  {
    slug: "anantika",
    name: "Anantika",
    subtitle: "The Screen Journal — bilingual digital journal",
    kind: "client",
    year: "2026",
    summary:
      "An English / Hindi portfolio and journal for film, OTT and screen-culture research, with localized content and theme controls.",
    points: [
      "PostgreSQL schema with Prisma on Neon for bilingual posts, plus admin-protected, validated content APIs.",
      "Image uploads with type and size validation, stored in Vercel Blob; motion with GSAP and Lenis.",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Neon", "GSAP"],
    url: "https://nivedit-as.vercel.app/",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "frontend", items: ["Next.js", "React", "Tailwind CSS", "SSR"] },
  {
    group: "backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Drizzle ORM", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    group: "infra",
    items: ["Clerk", "Inngest", "Redis", "SSE / Streaming", "Vercel", "Git", "Octokit"],
  },
  {
    group: "ai",
    items: ["OpenAI API", "Claude API", "RAG", "LangChain", "OpenAI Agents SDK", "MCP", "Embeddings", "Pinecone", "Qdrant"],
  },
];

export const experience = [
  {
    when: "Oct 2025 — Now",
    what: "Freelance full-stack developer",
    where: "Client websites & web apps",
    detail:
      "Handling requirements, delivery and deployment directly with clients — including Era of Digital Marketing and Anantika.",
  },
];

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  school: "KIET Group of Institutions, Ghaziabad",
  year: "2025",
};

export const certifications = [
  { name: "Web Development Cohort", by: "Chai aur Code", year: "2026" },
  { name: "Generative AI Cohort", by: "Chai aur Code", year: "2026" },
];
