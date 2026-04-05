import Link from "next/link";
import { issues } from "@/lib/content";

export const metadata = {
  title: "Archive | World Brief",
  description: "Browse previous daily issues from World Brief.",
};

export default function ArchivePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col px-6 py-10 sm:py-14">
      <div className="max-w-2xl border-b border-[color:var(--border)] pb-8">
        <p className="text-xs tracking-[0.24em] text-[color:var(--muted-foreground)] uppercase">
          Archive
        </p>
        <h1 className="mt-4 text-4xl leading-tight font-medium text-[color:var(--foreground)] sm:text-5xl">
          Past issues worth revisiting.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted-foreground)]">
          A clean date-based archive of every daily brief, designed to stay readable rather than becoming a content dump.
        </p>
      </div>

      <div className="mt-8">
        {issues.map((issue) => (
          <Link
            key={issue.issueDate}
            href={`/issue/${issue.issueDate}`}
            className="group block border-t border-[color:var(--border)] py-7 transition-colors duration-200 hover:bg-black/[0.015]"
          >
            <p className="text-xs tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
              {issue.issueLabel}
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-medium text-[color:var(--foreground)] sm:text-3xl">
              {issue.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)]">
              {issue.summary}
            </p>
            <p className="mt-4 text-sm text-[color:var(--foreground)] transition-transform duration-200 group-hover:translate-x-1">
              Read issue
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
