"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NavItem } from "./types";

interface NavItemProps {
  item: NavItem;
}

export function NavItemComponent({ item }: NavItemProps) {
  if (item.hasDropdown && item.dropdownItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
              item.isActive ? "text-primary" : "text-foreground"
            )}
          >
            {item.label}
            <ChevronDownIcon className="size-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-popover border-border/50"
        >
          {item.dropdownItems.map((dropdownItem) => (
            <DropdownMenuItem key={dropdownItem.label} asChild>
              <Link href={dropdownItem.href} className="cursor-pointer">
                {dropdownItem.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
        item.isActive ? "text-primary" : "text-foreground"
      )}
    >
      {item.label}
    </Link>
  );
}
