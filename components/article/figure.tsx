import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  number,
}: {
  src: string;
  alt: string;
  caption?: string;
  number?: number;
}) {
  return (
    <figure className="not-prose my-10">
      <div className="relative overflow-hidden border border-line bg-paper-raised">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={720}
          className="h-auto w-full object-cover transition-opacity duration-300"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-sans text-[13px] leading-relaxed text-ink-muted">
          {number && <span className="font-semibold text-ink">Figure {number}. </span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
