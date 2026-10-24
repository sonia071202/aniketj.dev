"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-3.5 py-2 text-sm font-medium transition-colors duration-75 rounded-lg",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {isActive && <span className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
