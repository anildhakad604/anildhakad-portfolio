import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper-dim py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The stack I reach for, grouped by what it's actually for."
        />

        <Reveal as="div" delay={100} className="mt-14 grid gap-px overflow-hidden border-2 border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`bg-paper-dim p-7 sm:p-8 ${group.featured ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
                {group.featured ? (
                  <span className="border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    Focus area
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
