import type { ReactNode } from "react";
import Link from "next/link";

const navigation = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/members", label: "Members" },
  { href: "/admin/fee-ledger", label: "Fee ledger" },
  { href: "/admin/notice-board", label: "Notice board" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col sm:flex-row">
      <aside className="border-b border-zinc-200 p-5 sm:w-56 sm:border-b-0 sm:border-r">
        <p className="mb-4 font-semibold">Admin portal</p>
        <nav aria-label="Admin navigation" className="flex flex-wrap gap-4 sm:flex-col">
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
