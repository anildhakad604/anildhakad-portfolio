"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "fade" | "mask" | "line";
  className?: string;
};

const variantClass = {
  fade: "reveal",
  mask: "reveal-mask",
  line: "reveal-line",
} as const;

export default function Reveal({ children, as: Tag = "div", delay = 0, variant = "fade", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
