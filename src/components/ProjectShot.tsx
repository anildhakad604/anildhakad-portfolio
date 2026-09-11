import Image from "next/image";

type ProjectShotProps = {
  src: string;
  alt: string;
  domain: string;
  className?: string;
};

export default function ProjectShot({ src, alt, domain, className = "" }: ProjectShotProps) {
  return (
    <div className={`overflow-hidden border-2 border-line bg-paper ${className}`}>
      <div className="flex items-center gap-1.5 border-b-2 border-line bg-paper-dim px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 font-mono text-[11px] text-ink-faint">{domain}</span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}
