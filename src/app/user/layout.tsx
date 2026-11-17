import type { ReactNode } from "react";
import Link from "next/link";

const navigation = [
  { href: "/user/dashboard", label: "Dashboard" },
  { href: "/user/profile", label: "Profile" },
  { href: "/user/calendar", label: "Calendar" },
  { href: "/user/fee-status", label: "Fee status" },
];

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col sm:flex-row">
      <aside className="border-b border-zinc-200 p-5 sm:w-56 sm:border-b-0 sm:border-r">
        <p className="mb-4 font-semibold">Member portal</p>
        <nav aria-label="Member navigation" className="flex flex-wrap gap-4 sm:flex-col">
          {navigation.map((item) => (
            <Link className="text-sm text-zinc-700 hover:text-emerald-700" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      {children}
    </div>
  );
}
