type VignetteProps = {
  slug: string;
  title: string;
  topic?: string;
  numeral?: string;
  duration?: string;
};

export default function Vignette({ slug, title, topic = "mrm", numeral, duration }: VignetteProps) {
  const src = `/animations/${topic}/${slug}.mp4`;
  const poster = `/animations/${topic}/${slug}-poster.jpg`;
  const captions = `/animations/${topic}/${slug}.vtt`;
  const ariaLabel = numeral ? `Vignette ${numeral}: ${title}` : title;

  return (
    <figure className="my-10 not-prose">
      <div className="border border-rule bg-ink overflow-hidden">
        <video
          className="block w-full h-auto"
          src={src}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          aria-label={ariaLabel}
          aria-describedby={`${slug}-transcript-link`}
        >
          Your browser does not support embedded video. The vignette describes how
          model risk management strains under {title.toLowerCase()}.
        </video>
      </div>
      <a
        id={`${slug}-transcript-link`}
        href={captions}
        className="sr-only focus:not-sr-only focus:underline text-accent text-xs"
      >
        Read transcript ({title}, WebVTT)
      </a>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-[0.16em] uppercase text-ink-mute">
        <span>
          {numeral ? <span className="text-accent">{numeral}.</span> : null}{" "}
          {title}
        </span>
        {duration ? <span aria-hidden="true">{duration}</span> : null}
      </figcaption>
    </figure>
  );
}
