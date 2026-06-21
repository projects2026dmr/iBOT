import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-md">
          <span className="text-7xl">🔍</span>
          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            404
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-700">
            Strona nie znaleziona
          </p>
          <p className="mt-4 text-base text-slate-500">
            Przepraszamy, strona której szukasz nie istnieje lub została
            przeniesiona.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            ← Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  );
}
