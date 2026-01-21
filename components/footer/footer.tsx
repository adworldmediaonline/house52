import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { FooterLogo } from "./footer-logo";
import { footerContent } from "./footer-content";

export function Footer() {
  const { quickLinks, contact } = footerContent;

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Brand */}
          <div className="space-y-6 lg:col-span-1">
            <FooterLogo />
            <p className="text-base leading-relaxed text-muted-foreground max-w-xs">
              Bringing you premium gaming experiences in a professional and welcoming environment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-foreground uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-5">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-4 text-base text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MailIcon className="size-5 text-primary" />
                </div>
                <span className="pt-0.5">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-start gap-4 text-base text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <PhoneIcon className="size-5 text-primary" />
                </div>
                <span className="pt-0.5">{contact.phone}</span>
              </a>
              <div className="flex items-start gap-4 text-base text-muted-foreground">
                <div className="p-2 rounded-md bg-primary/10">
                  <MapPinIcon className="size-5 text-primary" />
                </div>
                <div className="flex flex-col space-y-1 pt-0.5">
                  {contact.address.map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-foreground uppercase tracking-wider">
              Legal
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/privacy-policy"
                className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/legality"
                className="text-base text-muted-foreground hover:text-primary transition-colors w-fit"
              >
                Legality
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground">
              © {new Date().getFullYear()} House 52. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Licensed & Regulated Poker Club
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
