import { useParams } from "react-router-dom";
import { findMiasto } from "../data/miastaService";
import SEOHead from "../components/SEOHead";

export default function MiastoPage() {
  const { slug } = useParams();
  const miasto = findMiasto(slug);

  if (!miasto) return <div>Miasto nie znaleziono</div>;

  return (
    <>
      <SEOHead
        title={miasto.title}
        description={miasto.description}
        keywords={miasto.keywords.join(", ")}
      />

      <h1>{miasto.h1}</h1>

      <p>
        Profesjonalne pozycjonowanie stron w mieście {miasto.name}. 
        Kompleksowe działania SEO dopasowane do lokalnego rynku.
      </p>
    </>
  );
}
