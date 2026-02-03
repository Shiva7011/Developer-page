import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShubhamHero from "./pages/ShubhamHero/ShubhamHero";
import ShivaHero from "./pages/Shiva/ShivaHero";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shubhamhero" element={<ShubhamHero />} />
        <Route path="/shivahero" element={<ShivaHero />} />
      </Routes>
    </BrowserRouter>
  );
}
