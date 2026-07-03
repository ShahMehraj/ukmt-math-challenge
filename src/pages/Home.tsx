import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Target,
  Timer,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { CURRICULUM, FULL_CHAPTERS } from "@/data/chapters";
import { ALL_PROBLEMS as PROBLEMS } from "@/data/problems";
import { TOPICS } from "@/data/topics";

const features = [
  {
    icon: Brain,
    title: "Interactive lessons",
    body: "Never just read. Every key idea is followed by a question you answer before moving on, with hints and instant feedback.",
  },
  {
    icon: Target,
    title: "Authentic problems",
    body: "Practice problems written in genuine IMC and Hamilton style, each tagged by topic, difficulty, source and skills.",
  },
  {
    icon: Timer,
    title: "Timed mock exams",
    body: "Sit IMC-style multiple-choice papers against the clock, and tackle Hamilton written-solution sets.",
  },
  {
    icon: BarChart3,
    title: "Progress & weak-spot detection",
    body: "Track mastery per topic, see where you're losing marks, and get spaced-repetition reviews.",
  },
];

export function Home() {
  const availableCount = CURRICULUM.filter((c) => c.status === "available").length;
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-emerald-50 px-6 py-16 text-center dark:border-brand-900/40 dark:from-brand-950/40 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-3xl">
          <span className="chip mx-auto mb-4 bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <Sparkles size={13} /> IMC · Year 11 & below · Hamilton · Year 10
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Master the{" "}
            <span className="text-brand-600">Intermediate Challenge</span> &{" "}
            <span className="text-brand-600">Hamilton Olympiad</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            A complete, interactive preparation platform: intuitive theory,
            guided worked examples, a tagged problem bank, and timed mock exams —
            built to take you from the basics to olympiad-level confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/curriculum" className="btn-primary px-6 py-3 text-base">
              Explore the curriculum <ArrowRight size={18} />
            </Link>
            <Link to="/papers" className="btn-ghost px-6 py-3 text-base">
              Sit a past paper
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { n: CURRICULUM.length, label: "Chapters mapped" },
          { n: availableCount, label: "Ready to study" },
          { n: PROBLEMS.length, label: "Bank problems" },
          { n: TOPICS.length, label: "Topic areas" },
        ].map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className="text-3xl font-extrabold text-brand-600">{s.n}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-6 text-center text-2xl font-bold">
          Everything you need to prepare
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <f.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Start now */}
      <section>
        <h2 className="mb-6 text-center text-2xl font-bold">Start learning now</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {FULL_CHAPTERS.map((c) => (
            <Link
              key={c.id}
              to={`/chapter/${c.id}`}
              className="card group flex flex-col p-6 transition-transform hover:-translate-y-1"
            >
              <span className="chip mb-3 w-fit bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                <CheckCircle2 size={13} /> Available
              </span>
              <h3 className="text-lg font-bold group-hover:text-brand-600">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">
                {c.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Begin <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
