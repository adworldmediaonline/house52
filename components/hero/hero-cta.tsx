import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroCtaProps {
  label: string;
  href: string;
}

export function HeroCta({ label, href }: HeroCtaProps) {
  return (
    <Button
      asChild
      size="lg"
      className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold uppercase tracking-wide px-8 py-6 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
