import { useParams, Link } from "react-router-dom";
import { WOJEWODZTWA_PLACEHOLDERS } from "@/data/placeholders";

export default function WojewodztwoPage() {
  const { wojSlug } = useParams<{ wojSlug: string }>();

  const woj = WOJEWODZTWA_PLACEHOLDERS.find((w) => w.slug === wojSlug);

  if (!woj) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Województwo nie znalezione
        </h1>
        <p className="mt-4 text-slate-600">
          Nie znaleźliśmy województwa o podanym adresie.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          ← Wróć na stronę główną
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh]">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-900">{woj.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Województwo
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              SEO w województwie {woj.name}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Poznaj nasze usługi SEO dostępne w województwie {woj.name}.
              Pomagamy lokalnym firmom zdobywać klientów w ich regionie.
            </p>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-10">
              <p className="text-sm text-slate-500">
                🚧 Ta strona jest w trakcie budowy. Wkrótce pojawią się tu
                szczegółowe informacje o usługach SEO w województwie{" "}
                <strong>{woj.name}</strong>, lista powiatów oraz powiązanych
                gmin.
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
