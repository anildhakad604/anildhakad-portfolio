import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Have a project in mind, or a role to fill?"
          description="Send a message here, or reach me directly — I typically reply within a day."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal as="div" delay={100} className="space-y-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-lg text-ink hover:text-accent">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">Phone</p>
              <a href={`tel:${profile.phoneHref}`} className="mt-2 block text-lg text-ink hover:text-accent">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-ink-faint">Location</p>
              <p className="mt-2 text-lg text-ink">{profile.location}</p>
            </div>
            <div className="flex gap-6 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal as="div" delay={200} className="border-2 border-line p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
