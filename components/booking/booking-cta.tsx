import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BookingCtaProps {
  label: string;
  href: string;
}

export function BookingCta({ label, href }: BookingCtaProps) {
  return (
    <Button
      asChild
      size="lg"
      className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold uppercase tracking-wide px-8 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
