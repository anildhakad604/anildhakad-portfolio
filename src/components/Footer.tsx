import Container from "@/components/ui/Container";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-band text-band-text">
      <Container className="flex flex-col gap-10 py-14 sm:py-16">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-lg font-semibold tracking-tight text-band-text">
              Anil Kumar Dhakad<span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-band-text/60">
              Full-stack .NET developer based in {profile.city}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-band-text/65">Site</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-band-text/70 transition-colors hover:text-band-text">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-band-text/65">Elsewhere</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-band-text/70 transition-colors hover:text-band-text"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-band-text/70 transition-colors hover:text-band-text"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-band-text/70 transition-colors hover:text-band-text"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-band-text/10 pt-6 text-xs text-band-text/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Anil Kumar Dhakad. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
