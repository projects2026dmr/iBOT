import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";

import {
  getWojewodztwoBySlug,
  getPowiatyByWojewodztwo,
  getWojSeoTitle,
  getWojSeoDescription,
  getWojBreadcrumb
} from "@/data/poland";

export default function WojewodztwoPage() {
  const { wojSlug } = useParams();

  if (!wojSlug) {
    return <div className="container mx-auto px-4 py-10">Brak danych.</div>;
  }

  const woj = getWojewodztwoBySlug(wojSlug);

  if (!woj) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Nie znaleziono województwa</h1>
        <p className="text-slate-600">Sprawdź poprawność adresu URL.</p>
      </div>
    );
  }

  const powiaty = getPowiatyByWojewodztwo(woj.slug);
  const breadcrumb = getWojBreadcrumb(woj);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* SEO */}
      <SEOHead
        title={getWojSeoTitle(woj)}
        description={getWojSeoDescription(woj)}
        canonicalPath={`/wojewodztwo/${woj.slug}`}
        ogType="website"
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumb} />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        SEO w województwie {woj.name}
      </h1>

      <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
        Sprawdź powiaty w województwie {woj.name} i wybierz lokalizację, aby
        zobaczyć szczegółowe informacje dotyczące pozycjonowania lokalnego,
        widoczności w Google oraz możliwości rozwoju Twojej firmy.
      </p>

      {/* Powiat List */}
      <h2 className="text-xl font-semibold text-slate-800 mb-3">
        Powiaty w województwie {woj.name}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {powiaty.map((p) => (
          <Link
            key={p.slug}
            to={`/powiat/${p.slug}`}
            className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
