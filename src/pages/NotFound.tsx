import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <div className="text-6xl font-extrabold text-brand-500">404</div>
      <p className="mt-2 text-slate-500">
        We couldn't find that page or chapter.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </div>
  );
}
