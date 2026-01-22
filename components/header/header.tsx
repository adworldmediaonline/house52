"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon, XIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavItemComponent } from "./nav-item";
import { MobileNav } from "./mobile-nav";
import { navigationItems } from "./navigation-data";

const PHONE_NUMBER = "9998070792";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="h-[80px] sm:h-[120px] sticky top-0 z-50 w-full border-b border-border/40 bg-card backdrop-blur supports-[backdrop-filter]:bg-card/95">
      <nav className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="House 52 Home"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigationItems.map((item) => (
            <NavItemComponent key={item.label} item={item} />
          ))}
          {/* Phone Number */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
            aria-label="Call us"
          >
            <PhoneIcon className="size-4" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground hover:text-primary hover:bg-transparent"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <XIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <MobileNav items={navigationItems} onItemClick={handleMobileNavItemClick} />
      )}
    </header>
  );
}
