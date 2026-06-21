import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import WojewodztwoPage from "./pages/WojewodztwoPage";
import PowiatPage from "./pages/PowiatPage";
import GminaPage from "./pages/GminaPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wojewodztwo/:wojSlug" element={<WojewodztwoPage />} />
          <Route path="/powiat/:powiatSlug" element={<PowiatPage />} />
          <Route path="/gmina/:gminaSlug" element={<GminaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
