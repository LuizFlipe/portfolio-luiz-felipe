import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/case/:slug" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
