import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitial(): boolean {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("imc-theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("imc-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="btn-ghost h-9 w-9 !px-0"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
