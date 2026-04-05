import Image from "next/image";
import Link from "next/link";
import { categoryConfig } from "@/lib/category-config";
import { StoryBlock } from "@/components/story-block";
import type { Issue } from "@/lib/content";
import { normalizeCopy } from "@/lib/normalize-copy";

type IssueViewProps = {
  issue: Issue;
};

export function IssueView({ issue }: IssueViewProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-8 sm:gap-16 sm:py-12">
      <section className="grid gap-8 border-b border-[color:var(--border)] pb-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-end">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs tracking-[0.24em] text-[color:var(--muted-foreground)] uppercase">
              {issue.issueLabel}
            </p>
            <span className="hidden h-1 w-1 rounded-full bg-[color:var(--muted-foreground)]/40 sm:block" />
            <p className="text-xs tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
              Daily brief
            </p>
          </div>
          <h1 className="mt-4 max-w-4xl text-[2.9rem] leading-[0.98] font-medium text-[color:var(--foreground)] sm:text-[4.8rem]">
              {normalizeCopy(issue.title)}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)] sm:text-[1.15rem]">
              {normalizeCopy(issue.summary)}
            </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[22px] border border-[color:var(--border)] bg-white/60 p-4">
              <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
                Tracks
              </p>
              <p className="mt-2 text-3xl font-medium text-[color:var(--foreground)]">3</p>
            </div>
            <div className="rounded-[22px] border border-[color:var(--border)] bg-white/60 p-4">
              <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
                Stories
              </p>
              <p className="mt-2 text-3xl font-medium text-[color:var(--foreground)]">
                {issue.sections.reduce((sum, section) => sum + section.stories.length, 0)}
              </p>
            </div>
            <div className="rounded-[22px] border border-[color:var(--border)] bg-white/60 p-4">
              <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
                Reading time
              </p>
              <p className="mt-2 text-3xl font-medium text-[color:var(--foreground)]">10m</p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl rounded-[24px] border border-[color:var(--border)] bg-white/60 p-5">
            <p className="text-[11px] tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
              Editor&apos;s Note
            </p>
            <p className="mt-3 text-base leading-8 text-[color:var(--foreground)]/82">
              {normalizeCopy(issue.editorNote)}
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--border)] bg-white/60 p-3">
          <div className="overflow-hidden rounded-[24px]">
            <Image
              src="/visuals/hero-orbit.svg"
              alt="Abstract visual representing the intersection of AI, geopolitics, and startups"
              width={1200}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="grid gap-3 px-2 pt-4 sm:grid-cols-3">
            {issue.sections.map((section) => {
              const config = categoryConfig[section.category];

              return (
                <Link
                  key={section.category}
                  href={`#section-${section.category.toLowerCase()}`}
                  className="rounded-[20px] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className={`text-[11px] tracking-[0.22em] uppercase ${config.accentClass}`}>
                    {config.eyebrow}
                  </p>
                  <p className="mt-2 text-base font-medium text-[color:var(--foreground)]">
                    {section.category}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {section.stories.length} stories
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {issue.sections.map((section) => {
          const config = categoryConfig[section.category];

          return (
            <Link
              key={section.category}
              href={`#section-${section.category.toLowerCase()}`}
              className={`overflow-hidden rounded-[28px] border border-[color:var(--border)] ${config.tintClass} transition-transform duration-200 hover:-translate-y-1`}
            >
              <div className="p-3">
                <div className="overflow-hidden rounded-[20px] bg-white/60">
                  <Image
                    src={config.image}
                    alt={`${section.category} section preview`}
                    width={800}
                    height={560}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="border-t border-[color:var(--border)] px-5 pb-5 pt-4">
                <p className={`text-[11px] tracking-[0.22em] uppercase ${config.accentClass}`}>
                  {config.eyebrow}
                </p>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <h2 className="text-2xl leading-tight font-medium text-[color:var(--foreground)]">
                    {section.category}
                  </h2>
                  <span className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-1 text-sm text-[color:var(--muted-foreground)]">
                    {section.stories.length}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {normalizeCopy(section.description)}
                </p>
              </div>
            </Link>
          );
        })}
      </section>

      {issue.sections.map((section) => (
        <section
          key={section.category}
          id={`section-${section.category.toLowerCase()}`}
          className="grid gap-8 sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-10"
        >
          <div className="sm:sticky sm:top-28 sm:self-start">
            <div className={`overflow-hidden rounded-[28px] border border-[color:var(--border)] ${categoryConfig[section.category].tintClass}`}>
              <div className="p-3">
                <div className="overflow-hidden rounded-[20px] bg-white/60">
                  <Image
                    src={categoryConfig[section.category].image}
                    alt={`${section.category} section visual`}
                    width={800}
                    height={560}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="border-t border-[color:var(--border)] px-5 pb-5 pt-4">
                <p
                  className={`text-[11px] tracking-[0.22em] uppercase ${categoryConfig[section.category].accentClass}`}
                >
                  {categoryConfig[section.category].eyebrow}
                </p>
                <p className="mt-2 text-3xl font-medium text-[color:var(--foreground)]">
                  {section.category}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {normalizeCopy(section.description)}
                </p>
              </div>
            </div>
          </div>
          <div>
            {section.stories.map((story, index) => (
              <StoryBlock key={story.headline} index={index} story={story} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
