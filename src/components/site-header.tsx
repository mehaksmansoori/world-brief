import Link from "next/link";

const navItems = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "Methodology" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-[color:var(--border)] bg-[color:var(--background)]/92 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-[color:var(--foreground)] uppercase">
          World Brief
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[color:var(--muted-foreground)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-[color:var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
