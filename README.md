# Divyanshu Gahlot — Portfolio

A dark, terminal-inspired personal portfolio built with TanStack Start, React, TypeScript and Tailwind CSS.

## Run locally

### 1. Install Node.js

Install Node.js 22 LTS from https://nodejs.org/ if it is not already installed.

Check your versions:

```sh
node --version
npm --version
```

### 2. Open a terminal in this folder

After extracting the ZIP, open a terminal inside the `divyanshu-portfolio` folder.

### 3. Install dependencies

```sh
npm install --legacy-peer-deps
```

The compatibility flag is needed for this project's current dependency set.

### 4. Start the development server

```sh
npm run dev
```

Open the local URL printed in the terminal, usually http://localhost:3000.

Stop the server with `Ctrl + C`.

## Production build

```sh
npm run build
npm run preview
```

## Other commands

```sh
npm test
npm run lint
```

## Edit your content

Personal details, projects, skills, experience and education are centralized in:

```text
src/lib/site.ts
```

Your resume is available at `public/Divyanshu_Gahlot_Resume.pdf` and is linked from the home and about pages.

## Pages

- `/` — home and selected work
- `/projects` — all projects
- `/about` — experience, education, certifications and skills
- `/contact` — contact details and social links

No API keys, database or environment variables are required to run this portfolio.
