import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 border-2 px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "border-ink bg-ink text-paper hover:border-accent hover:bg-accent"
      : "border-ink/25 text-ink hover:border-accent hover:text-accent";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
