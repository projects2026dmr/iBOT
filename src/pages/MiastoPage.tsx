import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { findMiasto } from "../data/miastaService";
import SEOHead from "../components/SEOHead";

export default function MiastoPage() {
  const { slug } = useParams();
  const miasto = findMiasto(slug);

  if (!miasto) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">Nie znaleziono miasta</h1>
        <p className="text-slate-600">Sprawdź poprawność adresu URL.</p>
      </div>
    );
  }

  // JSON-LD
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": miasto.title,
      "description": miasto.description,
      "url": `${window.location.origin}/miasto/${miasto.slug}`,
      "areaServed": {
        "@type": "City",
        "name": miasto.name
      },
      "knowsAbout": miasto.keywords,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${window.location.origin}/miasto/${miasto.slug}`
      }
    };

    const old = document.getElementById("miasto-jsonld");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "miasto-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const cleanup = document.getElementById("miasto-jsonld");
      if (cleanup) cleanup.remove();
    };
  }, [miasto]);

  // 🔥 Dinamik varyasyon üretici (her şehirde farklı içerik)
  const expand = (text: string) => {
    return text
      .replaceAll("{city}", miasto.name)
      .replaceAll("{woj}", miasto.wojewodztwo)
      .replaceAll("{CITY}", miasto.name.toUpperCase());
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto px-4 py-10">

        <SEOHead
          title={miasto.title}
          description={miasto.description}
          canonicalPath={`/miasto/${miasto.slug}`}
          ogType="website"
          imageUrl={`/og/miasto/${miasto.slug}.jpg`}
        />

        <div className="rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 space-y-16">

          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-indigo-600">Strona główna</Link> {" / "}
            <span className="text-slate-700">{miasto.name}</span>
          </nav>

          {/* HERO */}
          <section>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              SEO lokalne • {miasto.name}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-4">
              {miasto.h1}
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl leading-relaxed">
              {expand(
                "Profesjonalne pozycjonowanie stron w mieście {city}. Kompleksowe działania SEO dopasowane do lokalnego rynku, konkurencji i potencjału wyszukiwania w województwie {woj}."
              )}
            </p>
          </section>

          {/* 🔥 1. ANALIZA RYNKU */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              {expand("Analiza rynku SEO w {city} — dlaczego konkurencja jest tak wysoka?")}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "{city} to jeden z najbardziej dynamicznych rynków lokalnych w województwie {woj}. Firmy działające tutaj inwestują w SEO, Google Ads, social media i content marketing, co sprawia, że konkurencja w wynikach wyszukiwania jest wyjątkowo intensywna."
              )}
            </p>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "Aby zdobyć wysokie pozycje w Google w {city}, nie wystarczy podstawowa optymalizacja. Potrzebna jest strategia oparta na danych, analizie konkurencji, lokalnych sygnałach rankingowych oraz treściach dopasowanych do intencji użytkowników."
              )}
            </p>
          </section>

          {/* 🔥 2. INTENCJE UŻYTKOWNIKÓW */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              {expand("Jakie intencje wyszukiwania dominują w {city}?")}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "Użytkownicy w {city} szukają usług lokalnych, porównują oferty i podejmują decyzje zakupowe bezpośrednio w Google. Dlatego SEO lokalne jest kluczowe — pozwala przechwycić ruch o najwyższym potencjale konwersji."
              )}
            </p>

            <ul className="space-y-2 text-slate-700 text-lg">
              <li>• frazy usługowe (np. fryzjer, mechanik, prawnik),</li>
              <li>• frazy lokalizacyjne (np. {expand("{city} centrum, {city} południe, {city} północ")}),</li>
              <li>• frazy porównawcze (najlepszy, ranking, opinie),</li>
              <li>• frazy zakupowe (cena, koszt, oferta).</li>
            </ul>
          </section>

          {/* 🔥 3. BRANŻE */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              {expand("Najbardziej konkurencyjne branże w {city}")}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "W {city} SEO działa szczególnie mocno w branżach, w których klienci podejmują decyzje lokalnie i porównują oferty w Google."
              )}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-lg text-slate-700">
              <li>• usługi lokalne (fryzjerzy, kosmetyczki, mechanicy),</li>
              <li>• gastronomia i restauracje,</li>
              <li>• e‑commerce,</li>
              <li>• specjaliści (prawnicy, lekarze, księgowi),</li>
              <li>• firmy remontowe i budowlane,</li>
              <li>• nieruchomości i deweloperzy.</li>
            </ul>
          </section>

          {/* 🔥 4. PROCES SEO */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              {expand("Jak wygląda proces SEO dla firm z {city}?")}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "Proces SEO w {city} opiera się na analizie konkurencji, optymalizacji technicznej, strategii contentowej oraz budowie autorytetu domeny."
              )}
            </p>

            <ul className="space-y-2 text-lg text-slate-700">
              <li>• audyt techniczny strony,</li>
              <li>• analiza konkurencji lokalnej,</li>
              <li>• strategia contentowa pod frazy lokalne,</li>
              <li>• optymalizacja UX i konwersji,</li>
              <li>• link building lokalny,</li>
              <li>• sygnały lokalne (opinie, NAP, mapy).</li>
            </ul>
          </section>

          {/* 🔥 5. DZIELNICE / OBSZARY */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              {expand("Pozycjonowanie w dzielnicach i obszarach {city}")}
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "W wielu branżach ranking dzielnicowy jest ważniejszy niż ogólnomiejski. Użytkownicy szukają usług najbliżej siebie, dlatego warto tworzyć treści dedykowane poszczególnym obszarom miasta {city}."
              )}
            </p>

            <p className="text-slate-700 leading-relaxed text-lg">
              {expand(
                "Dzielnice, osiedla i mikro‑lokalizacje generują ogromny ruch lokalny, który można przechwycić dzięki odpowiednio zoptymalizowanym treściom."
              )}
            </p>
          </section>

          {/* 🔥 6. CTA */}
          <section className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white px-6 py-8 md:px-10 md:py-10 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
              {expand("Chcesz zdobywać klientów w {city}?")}
            </h2>
            <p className="text-sm md:text-lg opacity-90 mb-5 md:mb-6 max-w-2xl mx-auto">
              {expand(
                "Oferujemy profesjonalne pozycjonowanie lokalne dopasowane do rynku w {city} i województwie {woj}. Skontaktuj się z nami i otrzymaj darmową analizę SEO."
              )}
            </p>
            <a
              href="/#"
              className="inline-flex items-center justify-center rounded-full bg-white/95 text-indigo-700 font-semibold px-7 py-3 md:px-9 md:py-3.5 text-sm md:text-base shadow-sm hover:bg-slate-100 hover:shadow-md transition-all"
            >
              Darmowa konsultacja SEO
            </a>
          </section>

        </div>
      </div>
    </div>
  );
}
