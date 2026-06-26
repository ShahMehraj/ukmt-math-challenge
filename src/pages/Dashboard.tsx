import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Target,
  AlertCircle,
  Bookmark,
  Trophy,
  RotateCcw,
} from "lucide-react";
import { PROBLEM_BY_ID, PROBLEMS } from "@/data/problems";
import { TOPICS, TOPIC_BY_ID } from "@/data/topics";
import { FULL_CHAPTERS } from "@/data/chapters";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/cn";

export function Dashboard() {
  const { attempts, chapters, bookmarks, mockResults, paperResults, reset } =
    useProgress();

  const stats = useMemo(() => {
    const total = attempts.length;
    const correct = attempts.filter((a) => a.correct).length;
    const solvedIds = new Set(attempts.filter((a) => a.correct).map((a) => a.problemId));

    // Per-topic accuracy.
    const byTopic: Record<string, { correct: number; total: number }> = {};
    for (const a of attempts) {
      const p = PROBLEM_BY_ID[a.problemId];
      if (!p) continue;
      byTopic[p.topic] ??= { correct: 0, total: 0 };
      byTopic[p.topic].total += 1;
      if (a.correct) byTopic[p.topic].correct += 1;
    }
    return { total, correct, solvedIds, byTopic };
  }, [attempts]);

  const completedChapters = Object.values(chapters).filter((c) => c.completed).length;

  // Weak topics: attempted but accuracy < 60%.
  const weakTopics = TOPICS.map((t) => {
    const s = stats.byTopic[t.id];
    if (!s || s.total < 1) return null;
    const pct = Math.round((s.correct / s.total) * 100);
    return { topic: t, pct, ...s };
  })
    .filter(Boolean)
    .filter((x) => x!.pct < 60)
    .sort((a, b) => a!.pct - b!.pct) as Array<{
    topic: (typeof TOPICS)[number];
    pct: number;
    correct: number;
    total: number;
  }>;

  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;

  const empty =
    stats.total === 0 &&
    completedChapters === 0 &&
    mockResults.length === 0 &&
    paperResults.length === 0;

  return (
    <div className="space-y-8">
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Your progress, accuracy, and the topics to focus on next.
          </p>
        </div>
        {!empty && (
          <button
            onClick={() => {
              if (confirm("Reset all progress? This cannot be undone.")) reset();
            }}
            className="btn-ghost text-xs"
          >
            <RotateCcw size={14} /> Reset
          </button>
        )}
      </header>

      {empty ? (
        <div className="card p-10 text-center">
          <Target size={40} className="mx-auto text-brand-400" />
          <h2 className="mt-3 text-lg font-bold">No activity yet</h2>
          <p className="mt-1 text-sm text-slate-500">
            Study a chapter or solve a few problems and your analytics will appear
            here.
          </p>
          <Link to="/curriculum" className="btn-primary mt-4">
            Go to curriculum
          </Link>
        </div>
      ) : (
        <>
          {/* KPIs */}
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Kpi icon={Target} label="Problems attempted" value={stats.total} />
            <Kpi icon={TrendingUp} label="Accuracy" value={`${accuracy}%`} />
            <Kpi
              icon={Trophy}
              label="Chapters completed"
              value={`${completedChapters}/${FULL_CHAPTERS.length}`}
            />
            <Kpi icon={Bookmark} label="Bookmarks" value={bookmarks.length} />
          </section>

          {/* Topic mastery */}
          <section className="card p-6">
            <h2 className="mb-4 text-lg font-bold">Topic mastery</h2>
            <div className="space-y-3">
              {TOPICS.map((t) => {
                const s = stats.byTopic[t.id];
                const pct = s && s.total ? Math.round((s.correct / s.total) * 100) : 0;
                const attempted = !!s && s.total > 0;
                return (
                  <div key={t.id} className="flex items-center gap-3">
                    <div className="w-44 shrink-0 truncate text-sm font-medium">
                      {t.name}
                    </div>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all",
                          !attempted
                            ? "bg-slate-300 dark:bg-slate-600"
                            : pct >= 80
                            ? "bg-brand-500"
                            : pct >= 60
                            ? "bg-amber-400"
                            : "bg-red-400"
                        )}
                        style={{ width: `${attempted ? pct : 0}%` }}
                      />
                    </div>
                    <div className="w-20 shrink-0 text-right text-xs text-slate-500">
                      {attempted ? `${pct}% (${s!.correct}/${s!.total})` : "—"}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Weak topics */}
          {weakTopics.length > 0 && (
            <section className="card p-6">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <AlertCircle size={20} className="text-amber-500" /> Focus next
              </h2>
              <p className="mb-3 text-sm text-slate-500">
                These topics are below 60% accuracy — worth some targeted practice.
              </p>
              <div className="flex flex-wrap gap-2">
                {weakTopics.map((w) => (
                  <Link
                    key={w.topic.id}
                    to={`/problems`}
                    className="chip bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/40 dark:text-amber-300"
                  >
                    {w.topic.name} · {w.pct}%
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Mock history */}
          {mockResults.length > 0 && (
            <section className="card p-6">
              <h2 className="mb-3 text-lg font-bold">Mock exam history</h2>
              <div className="space-y-2">
                {[...mockResults].reverse().slice(0, 8).map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800/50"
                  >
                    <span className="font-medium">{r.examId}</span>
                    <span className="text-slate-500">
                      {r.score}/{r.maxScore} · {Math.round(r.secondsTaken / 60)} min
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Past paper history */}
          {paperResults.length > 0 && (
            <section className="card p-6">
              <h2 className="mb-3 text-lg font-bold">Past paper history</h2>
              <div className="space-y-2">
                {[...paperResults].reverse().slice(0, 8).map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800/50"
                  >
                    <span className="font-medium">{r.paperId}</span>
                    <span className="text-slate-500">
                      {r.score}/{r.maxScore} · {r.correctCount} correct ·{" "}
                      {Math.round(r.secondsTaken / 60)} min
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function Kpi({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string | number;
}) {
  return (
    <div className="card p-5">
      <Icon size={20} className="text-brand-500" />
      <div className="mt-2 text-2xl font-extrabold">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
