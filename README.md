## Personal Portfolio

A long-term personal portfolio website for Java backend development and AI
application development roles. It is built with Next.js App Router, TypeScript,
Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- App Router
- Framer Motion

## Project Structure

- `app`: App Router pages and route segments.
- `components`: Reusable UI components.
- `components/layout`: Shared layout components such as navbar and footer.
- `components/home`: Home page sections.
- `components/projects`: Project list and detail components.
- `components/common`: Shared small components.
- `data`: Static profile, project, skill, and timeline data.
- `types`: Shared TypeScript type definitions.
- `lib`: Constants and utility modules.
- `public/images`: Avatar and project screenshots.
- `public/images/botanical`: Optional botanical mood images such as `botanical-1.jpg` and `botanical-2.jpg`.
- `public/resume`: Resume PDF files.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Content Updates

- Update `data/profile.ts` for personal information and education.
- Update `data/projects.ts` to add, remove, or edit projects.
- Update `data/skills.ts` for technical stack changes.
- Update `data/timeline.ts` for education, internships, awards, and milestones.

Project detail pages are generated from `data/projects.ts` by `slug`, so adding
a new project should not require editing route files.

## Resume

Place the final resume PDF at:

```text
public/resume/resume.pdf
```

The resume page uses this stable path for both download and online preview.
When updating the resume, keep the file name as `resume.pdf`.

## Visual Assets

- Avatar: `public/images/avatar/avatar.png`
- Botanical atmosphere images can be added later as:
  - `public/images/botanical/botanical-1.jpg`
  - `public/images/botanical/botanical-2.jpg`

The current site uses CSS-based floral and botanical accents, so these images
are optional enhancements rather than required build assets.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy and connect a custom domain if needed.

## Deployment Checklist / 部署检查清单

1. Confirm `npm run build` passes.
2. Confirm `public/resume/resume.pdf` exists.
3. Confirm the avatar exists at `public/images/avatar/avatar.png`. If you replace it with `avatar.jpg`, update the image path in the components.
4. Confirm Contact links are correct: GitHub, Blog, and Email.
5. After deployment, add the deployed URL to `portfolioUrl` in `data/profile.ts`.
6. After deployment, add the personal website link to the resume header.
