import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sigma } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/cn";

const links = [
  { to: "/curriculum", label: "Curriculum" },
  { to: "/problems", label: "Problem Bank" },
  { to: "/papers", label: "Past Papers" },
  { to: "/mock", label: "Mock Exams" },
  { to: "/books", label: "Books" },
  { to: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Sigma size={20} />
          </span>
          <span className="text-lg tracking-tight">
            IMC<span className="text-brand-600"> + </span>HMC
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <span className="mx-1 h-6 w-px bg-slate-200 dark:bg-slate-700" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="btn-ghost h-9 w-9 !px-0"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-4 py-2 md:hidden dark:border-slate-800">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                    : "text-slate-600 dark:text-slate-300"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
