import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
