"use-client";
import Link from "next/link";
import { ReactNode } from "react";

interface ISidebarLink {
  href: string;
  children: ReactNode;
  isActive: boolean;
}

export default function SidebarLink({
  href,
  children,
  isActive,
}: ISidebarLink) {
  return (
    <li>
      <Link
        href={href}
        className={`block rounded p-1.5 transition-colors ${
          isActive
            ? "bg-primary text-white"
            : "hover:bg-button hover:bg-opacity-20"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
