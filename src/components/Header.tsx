"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import Container from "@/components/ui/Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300 ${
        scrolled || open ? "border-line bg-paper/90 backdrop-blur-sm" : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Anil Kumar Dhakad
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative py-1 text-sm transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </Container>
    </header>

    <div
      id="mobile-menu"
      className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-paper transition-opacity duration-300 ease-out sm:top-20 md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Container className="flex h-full flex-col justify-between py-8">
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl font-semibold text-ink transition-all duration-300 ease-out"
              style={{
                transitionDelay: open ? `${i * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="border-2 border-ink px-4 py-3.5 text-center text-sm font-semibold text-ink transition-all duration-300 ease-out"
          style={{
            transitionDelay: open ? `${navLinks.length * 50}ms` : "0ms",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(10px)",
          }}
        >
          Resume
        </a>
      </Container>
    </div>
    </>
  );
}
