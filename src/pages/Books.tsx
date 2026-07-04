import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { BOOKS } from "@/data/books";

export function Books() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight">Books</h1>
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          Chapter-by-chapter study companions to classic reference texts. Every
          concept is retold as original commentary with interactive checks and
          worked examples, and each chapter's practice problems live in the{" "}
          <Link to="/problems" className="font-medium text-brand-600 hover:underline">
            Problem Bank
          </Link>
          .
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BOOKS.map((book) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="card group flex flex-col p-5 transition-all hover:border-brand-400 hover:shadow-lg dark:hover:border-brand-500"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                <BookOpen size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight">{book.title}</h3>
                {book.author && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {book.author}
                  </p>
                )}
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">
              {book.description}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
              <span className="text-sm text-slate-500">
                {book.chapters.length}{" "}
                {book.chapters.length === 1 ? "chapter" : "chapters"} available
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                Open <ChevronRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
