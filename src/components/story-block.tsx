import Image from "next/image";
import { categoryConfig } from "@/lib/category-config";
import type { Story } from "@/lib/content";
import { normalizeCopy } from "@/lib/normalize-copy";

type StoryBlockProps = {
  index: number;
  story: Story;
};

export function StoryBlock({ index, story }: StoryBlockProps) {
  const config = categoryConfig[story.category];

  return (
    <article className="grid gap-6 border-t border-[color:var(--border)] py-9 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-8">
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/60 px-3 py-1 text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
            <span className={`h-2 w-2 rounded-full ${config.tintClass}`} />
            Story {String(index + 1).padStart(2, "0")}
          </div>
          <div className={`text-[11px] font-medium tracking-[0.22em] uppercase ${config.accentClass}`}>
            {config.eyebrow}
          </div>
        </div>
        <h3 className="max-w-3xl text-[1.95rem] leading-[1.12] font-medium text-[color:var(--foreground)] sm:text-[2.35rem]">
          {normalizeCopy(story.headline)}
        </h3>
        <div className="mt-5">
          <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
            Summary
          </p>
          <p className="mt-2 max-w-3xl text-[1.02rem] leading-8 text-[color:var(--foreground)]/88 sm:text-[1.08rem]">
            {normalizeCopy(story.summary)}
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-[130px_minmax(0,1fr)] sm:items-start">
          <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
            Why It Matters
          </p>
          <p className="border-l border-[color:var(--accent)] pl-4 text-[1rem] leading-8 text-[color:var(--foreground)]/78 sm:text-[1.04rem]">
            {normalizeCopy(story.whyItMatters)}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {story.sources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-1.5 text-sm text-[color:var(--muted-foreground)] transition-colors duration-200 hover:text-[color:var(--foreground)]"
            >
              {source.publisher}
            </a>
          ))}
        </div>
      </div>
      <div className={`order-first overflow-hidden rounded-[28px] border border-[color:var(--border)] ${config.tintClass} lg:order-none`}>
        <div className="border-b border-[color:var(--border)] px-4 py-3">
          <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
            Visual cue
          </p>
        </div>
        <div className="p-3">
          <div className="overflow-hidden rounded-[22px] bg-white/60">
            <Image
              src={config.image}
              alt={`${story.category} visual`}
              width={800}
              height={560}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-3 px-1 text-sm leading-6 text-[color:var(--muted-foreground)]">
            {config.cue}
          </p>
        </div>
      </div>
    </article>
  );
}
