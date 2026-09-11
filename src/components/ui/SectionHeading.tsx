import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  title,
  eyebrow,
  description,
  align = "left",
}: {
  index: string;
  title: string;
  eyebrow: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`relative isolate max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 -z-10 select-none font-display text-[5rem] font-bold leading-none text-ghost sm:-top-28 sm:text-[7rem] ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "-left-1 sm:-left-2"
        }`}
      >
        {index}
      </span>

      <Reveal as="div" className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-accent ${
        align === "center" ? "justify-center" : ""
      }`}>
        <Reveal as="span" variant="line" className="inline-block h-0.5 w-8 origin-left bg-accent" />
        <span>{eyebrow}</span>
      </Reveal>

      <Reveal as="h2" delay={80} className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">
        {title}
      </Reveal>

      {description ? (
        <Reveal as="p" delay={140} className="mt-4 text-base leading-relaxed text-ink-soft">
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
