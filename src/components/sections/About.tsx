import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24 sm:py-28">
      <Container>
        <SectionHeading index="01" eyebrow="About" title="A developer who works across the whole stack, by necessity and by choice." />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal as="div" delay={120} className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>{profile.summary}</p>
            <p>
              My work has mostly lived at the intersection of an ASP.NET Core backend and whatever front end a
              project calls for — Next.js and React most recently, Angular in an earlier role. That range came
              from projects that needed a full slice shipped end to end, not from choosing breadth over depth.
              The backend — API design, EF Core, layered architecture, and lately payment integrations — is
              still where I default to and where I want to keep going deeper.
            </p>
            <p>I&rsquo;m based in {profile.location}.</p>
          </Reveal>

          <Reveal as="div" delay={220}>
            <div className="flex items-center gap-4 border-2 border-line p-4">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={320}
                height={320}
                className="h-16 w-16 shrink-0 border border-line object-cover sm:h-20 sm:w-20"
              />
              <div>
                <p className="font-display text-base font-medium text-ink">{profile.name}</p>
                <p className="text-sm text-ink-faint">{profile.role}</p>
              </div>
            </div>

            <h3 className="mt-10 font-display text-lg font-semibold text-ink">Education</h3>
            <ul className="mt-5 space-y-6 border-l border-line pl-6">
              {education.map((item) => (
                <li key={item.degree} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">{item.period}</p>
                  <p className="mt-1 font-medium text-ink">{item.degree}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{item.school}</p>
                  <p className="mt-0.5 text-sm text-ink-faint">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
