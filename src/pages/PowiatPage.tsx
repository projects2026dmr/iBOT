import { useParams, Link } from "react-router-dom";

export default function PowiatPage() {
  const { powiatSlug } = useParams<{ powiatSlug: string }>();

  return (
    <div className="min-h-[60vh]">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">
              Powiat: {powiatSlug}
            </span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Powiat
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              SEO w powiecie: {powiatSlug}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Strona powiatu — treść pojawi się wkrótce.
            </p>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-10">
              <p className="text-sm text-slate-500">
                🚧 Ta strona jest w trakcie budowy. Wkrótce pojawią się tu
                szczegółowe informacje o usługach SEO w tym powiecie.
              </p>
            </div>

            <Link
              to="/"
              className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              ← Wróć na stronę główną
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
