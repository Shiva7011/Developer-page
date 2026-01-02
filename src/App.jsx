import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShubhamHero from "./pages/ShubhamHero/ShubhamHero";
import ShivaHero from "./pages/Shiva/ShivaHero";
import GaganHero from "./pages/Gagan/GaganHero";
import BhulvaHero from "./pages/bhulva/bhulvaHero";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shubhamhero" element={<ShubhamHero />} />
        <Route path="/shivahero" element={<ShivaHero />} />
        <Route path="/gaganhero" element={<GaganHero />} />
        <Route path="/bhulvahero" element={<BhulvaHero />} />
      </Routes>
    </BrowserRouter>
  );
}
