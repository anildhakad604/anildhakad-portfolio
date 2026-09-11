import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-paper-dim py-24 sm:py-28">
      <Container>
        <SectionHeading index="05" eyebrow="Experience" title="Where I've worked, and what I actually did there." />

        <div className="mt-14 space-y-0 border-t border-line">
          {experience.map((job, i) => (
            <Reveal
              as="div"
              key={job.company}
              delay={i * 100}
              className="grid gap-4 border-b border-line py-10 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">{job.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{job.role}</h3>
                <p className="mt-1 text-sm text-ink-soft">{job.company}</p>
                <p className="text-sm text-ink-faint">{job.location}</p>
              </div>
              <ul className="space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
