import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectShot from "@/components/ProjectShot";
import { clientWork } from "@/lib/data";

export default function ClientWork() {
  return (
    <section id="client-work" className="border-b border-line bg-paper-dim py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Client Work"
          title="Live production sites — personal builds and agency work alike."
          description="A mix of independent projects and client work delivered with the team at ASharp Infotech — e-commerce, automotive, hospitality, education, and nonprofit — each one a real, running site rather than a demo."
        />

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {clientWork.map((item, i) => (
            <Reveal as="div" key={item.domain} delay={i * 80}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.name} — opens in a new tab`}
                className="group block"
              >
                <ProjectShot src={item.screenshot} alt={item.screenshotAlt} domain={item.domain} />
                <div className="mt-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-accent">
                      {item.name}
                    </h3>
                    <span className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
