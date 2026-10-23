"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { m } from "motion/react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      prefetch
      onClick={onClick}
      className={cn(
        "relative px-3.5 py-2 text-sm font-medium transition-colors duration-100 rounded-lg",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {isActive && (
        <m.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
