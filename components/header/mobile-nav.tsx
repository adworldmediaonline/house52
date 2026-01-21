"use client";

import * as React from "react";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "./types";

interface MobileNavProps {
  items: NavItem[];
  onItemClick: () => void;
}

const PHONE_NUMBER = "9998070792";

export function MobileNav({ items, onItemClick }: MobileNavProps) {
  return (
    <div className="border-t border-border/40 bg-card lg:hidden">
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            if (item.hasDropdown && item.dropdownItems) {
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <span
                    className={cn(
                      "text-sm font-medium uppercase tracking-wide",
                      item.isActive ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  <div className="ml-4 flex flex-col gap-2 border-l border-border/30 pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        onClick={onItemClick}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
                  item.isActive ? "text-primary" : "text-foreground"
                )}
                onClick={onItemClick}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Phone Number */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-2 pt-4 border-t border-border/40"
            onClick={onItemClick}
          >
            <PhoneIcon className="size-4" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
