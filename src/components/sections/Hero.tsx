import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-line pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div>
            <Reveal as="div" className="flex items-center gap-3">
              <Reveal as="span" variant="line" className="inline-block h-0.5 w-10 origin-left bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {profile.role} — {profile.city}
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={100}
              variant="mask"
              className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-ink text-balance sm:text-6xl lg:text-[4.75rem]"
            >
              I build backend systems that hold up, and the interfaces on top of them.
            </Reveal>

            <Reveal as="p" delay={280} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {profile.tagline}
            </Reveal>

            <Reveal as="div" delay={360} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Magnetic strength={0.3}>
                <Button href="#client-work">View Client Work</Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button href="#contact" variant="secondary">
                  Get in Touch
                </Button>
              </Magnetic>
            </Reveal>

            <Reveal as="div" delay={440} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t-2 border-line pt-6 text-sm text-ink-faint">
              <span>Currently: Junior Full-Stack .NET Developer @ ASharp Infotech</span>
              <span className="hidden h-1 w-1 rounded-full bg-ink-faint sm:block" aria-hidden="true" />
              <span>Based in {profile.city}</span>
            </Reveal>
          </div>

          <Reveal as="div" delay={200} className="lg:pt-2">
            <dl className="divide-y divide-line border-2 border-line font-mono text-sm">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-ink-faint">Experience</dt>
                <dd className="text-ink">2+ years</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-ink-faint">Core stack</dt>
                <dd className="text-ink">C# · ASP.NET Core 9</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-ink-faint">Data</dt>
                <dd className="text-ink">SQL Server · MySQL</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-ink-faint">Front end</dt>
                <dd className="text-ink">Next.js · React</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="text-ink-faint">Ships to</dt>
                <dd className="text-ink">IIS · Vercel</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
