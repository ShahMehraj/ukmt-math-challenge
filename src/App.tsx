import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Home } from "@/pages/Home";
import { Curriculum } from "@/pages/Curriculum";
import { ChapterPage } from "@/pages/ChapterPage";
import { Foundations } from "@/pages/Foundations";
import { ProblemBank } from "@/pages/ProblemBank";
import { MockList } from "@/pages/MockList";
import { MockRunner } from "@/pages/MockRunner";
import { PastPapers } from "@/pages/PastPapers";
import { PaperRunner } from "@/pages/PaperRunner";
import { Books } from "@/pages/Books";
import { BookReader } from "@/pages/BookReader";
import { Dashboard } from "@/pages/Dashboard";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/chapter/:id" element={<ChapterPage />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/problems" element={<ProblemBank />} />
          <Route path="/mock" element={<MockList />} />
          <Route path="/mock/:id" element={<MockRunner />} />
          <Route path="/papers" element={<PastPapers />} />
          <Route path="/papers/:id" element={<PaperRunner />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookReader />} />
          <Route path="/books/:bookId/:chapterId" element={<BookReader />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        <p>
          IMC + HMC Academy · An interactive preparation platform for the UK
          Intermediate Mathematical Challenge & Hamilton Olympiad.
        </p>
        <p className="mt-1 text-xs">
          Built for learning. Problems are written in the style of UKMT
          competitions for educational use.
        </p>
      </footer>
    </div>
  );
}
