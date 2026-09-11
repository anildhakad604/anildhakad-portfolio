import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectShot from "@/components/ProjectShot";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Projects built end to end — API, database, and the screens on top."
          description="Live screenshots of the applications in production."
        />

        <div className="mt-14 space-y-20">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.slug} delay={i * 100} className="group">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
                <ProjectShot
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  domain={project.domain}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                />

                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">{project.period}</p>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{project.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.stack.map((tech) => (
                      <li key={tech} className="border border-line px-2.5 py-1 font-mono text-xs text-ink-soft">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {project.githubHref ? (
                      <a
                        href={project.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        GitHub Profile ↗
                      </a>
                    ) : null}
                    {project.liveHref ? (
                      <a
                        href={project.liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        Live Site ↗
                      </a>
                    ) : null}
                    {project.linkNote ? (
                      <span className="text-xs text-ink-faint">{project.linkNote}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
