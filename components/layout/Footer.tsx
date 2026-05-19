import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 text-center text-sm text-slate-500 lg:px-8">
        <div>
          <p className="text-base font-semibold text-slate-950">Marco</p>
          <p className="mt-2">{profile.title}</p>
          <p className="mt-3 text-slate-600">
            Building reliable backend systems and practical AI applications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
            Email
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              {social.href.includes("github.com") ? "GitHub" : "Blog"}
            </a>
          ))}
        </div>
        <p>&copy; 2026 Marco. Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
