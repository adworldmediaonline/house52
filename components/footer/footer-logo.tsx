import Link from "next/link";

export function FooterLogo() {
  return (
    <Link
      href="/"
      className="flex items-baseline gap-2 transition-opacity hover:opacity-80"
      aria-label="House 52 Home"
    >
      <span className="text-primary text-2xl font-bold uppercase tracking-tight">
        House
      </span>
      <span className="text-accent text-2xl font-bold uppercase tracking-tight">
        52
      </span>
    </Link>
  );
}
