export const metadata = {
  title: "Methodology | World Brief",
  description: "How World Brief selects, summarizes, and presents daily issues.",
};

const principles = [
  "Cover only the stories that materially change how people think, build, invest, or respond.",
  "Summarize developments in plain language without flattening the nuance out of them.",
  "Include why-it-matters context so readers understand consequence, not just chronology.",
  "Link readers back to original reporting, institutional sources, or primary documentation.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col px-6 py-10 sm:py-14">
      <div className="max-w-2xl border-b border-[color:var(--border)] pb-8">
        <p className="text-xs tracking-[0.24em] text-[color:var(--muted-foreground)] uppercase">
          Methodology
        </p>
        <h1 className="mt-4 text-4xl leading-tight font-medium text-[color:var(--foreground)] sm:text-5xl">
          Curated for signal, written for clarity.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-foreground)]">
          World Brief is designed as a daily editorial product, not an endless feed. The goal is to reduce noise and help readers quickly understand what matters across AI, geopolitics, and startups.
        </p>
      </div>

      <section className="mt-10 grid gap-10 sm:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-xs tracking-[0.24em] text-[color:var(--muted-foreground)] uppercase">
            Principles
          </p>
        </div>
        <div className="space-y-6">
          {principles.map((principle) => (
            <p
              key={principle}
              className="border-t border-[color:var(--border)] pt-6 text-lg leading-8 text-[color:var(--foreground)]/85"
            >
              {principle}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
