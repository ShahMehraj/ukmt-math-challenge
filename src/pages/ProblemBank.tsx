import { useMemo, useState } from "react";
import { Filter, Search, X, Bookmark } from "lucide-react";
import { ALL_PROBLEMS as PROBLEMS } from "@/data/problems";
import { TOPICS } from "@/data/topics";
import type { Difficulty, ProblemSource, TopicId } from "@/lib/types";
import { ProblemCard } from "@/components/ProblemCard";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";

const DIFFICULTIES: Difficulty[] = ["foundation", "easy", "medium", "hard", "olympiad"];
const SOURCES: ProblemSource[] = [
  "IMC",
  "Hamilton",
  "Cayley",
  "Maclaurin",
  "JMC",
  "Kangaroo",
  "original",
];

export function ProblemBank() {
  const [topic, setTopic] = useState<TopicId | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [source, setSource] = useState<ProblemSource | "all">("all");
  const [format, setFormat] = useState<
    "all" | "mcq" | "written" | "numeric" | "text"
  >("all");
  const [query, setQuery] = useState("");
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  const { bookmarks } = useProgress();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROBLEMS.filter((p) => {
      if (topic !== "all" && p.topic !== topic) return false;
      if (difficulty !== "all" && p.difficulty !== difficulty) return false;
      if (source !== "all" && p.source !== source) return false;
      if (format !== "all" && p.format !== format) return false;
      if (onlyBookmarks && !bookmarks.includes(p.id)) return false;
      if (q) {
        const hay = (
          p.statement +
          " " +
          p.subtopic +
          " " +
          p.tags.join(" ") +
          " " +
          p.concepts.join(" ") +
          " " +
          p.skills.join(" ")
        ).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [topic, difficulty, source, format, query, onlyBookmarks, bookmarks]);

  const activeFilters =
    (topic !== "all" ? 1 : 0) +
    (difficulty !== "all" ? 1 : 0) +
    (source !== "all" ? 1 : 0) +
    (format !== "all" ? 1 : 0) +
    (onlyBookmarks ? 1 : 0);

  function clearAll() {
    setTopic("all");
    setDifficulty("all");
    setSource("all");
    setFormat("all");
    setQuery("");
    setOnlyBookmarks(false);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Problem Bank</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {PROBLEMS.length} problems, each tagged by topic, subtopic, difficulty,
          source and skills. Filter by any combination to build a focused set.
        </p>
      </header>

      {/* Filters */}
      <div className="card space-y-4 p-5">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Filter size={16} className="text-brand-600" /> Filters
          {activeFilters > 0 && (
            <button
              onClick={clearAll}
              className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-red-500"
            >
              <X size={13} /> Clear ({activeFilters})
            </button>
          )}
        </div>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search statements, tags, concepts, skills…"
            className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select label="Topic" value={topic} onChange={(v) => setTopic(v as any)}>
            <option value="all">All topics</option>
            {TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </Select>
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={(v) => setDifficulty(v as any)}
          >
            <option value="all">All difficulties</option>
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d[0].toUpperCase() + d.slice(1)}
              </option>
            ))}
          </Select>
          <Select label="Source" value={source} onChange={(v) => setSource(v as any)}>
            <option value="all">All sources</option>
            {SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <Select label="Format" value={format} onChange={(v) => setFormat(v as any)}>
            <option value="all">All formats</option>
            <option value="mcq">Multiple choice</option>
            <option value="numeric">Numeric</option>
            <option value="text">Short answer</option>
            <option value="written">Written solution</option>
          </Select>
        </div>

        <button
          onClick={() => setOnlyBookmarks((b) => !b)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
            onlyBookmarks
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
          )}
        >
          <Bookmark size={14} className={onlyBookmarks ? "fill-white" : ""} />
          Bookmarked only
        </button>
      </div>

      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold">{filtered.length}</span> of{" "}
        {PROBLEMS.length} problems
      </p>

      <div className="space-y-4">
        {filtered.map((p) => (
          <ProblemCard key={p.id} problem={p} />
        ))}
        {filtered.length === 0 && (
          <div className="card p-10 text-center text-slate-500">
            No problems match these filters.
          </div>
        )}
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
      >
        {children}
      </select>
    </label>
  );
}
