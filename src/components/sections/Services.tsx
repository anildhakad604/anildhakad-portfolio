import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Services"
          title="What I can take off your plate."
          description="Freelance, contract, or full-time — the shape of the engagement matters less than having one person who can own a feature from database to browser."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              as="div"
              key={service.title}
              delay={i * 90}
              className={`border-t border-line pt-6 ${service.featured ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
                {service.featured ? (
                  <span className="border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    Focus area
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="text-accent">—</span>
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
