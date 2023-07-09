import Link from "next/link";
import { ReactNode } from "react";

interface ISidebarLink {
  href: string;
  children: ReactNode;
}

export default function SidebarLink({ href, children }: ISidebarLink) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
