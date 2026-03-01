import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import WeddingFilms from "../pages/WeddingFilms"
import PortfolioUpload from "../pages/PortfolioUpload";
import Album from "../pages/Album";
import Admin from "../pages/Admin";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolioUpload" element={<PortfolioUpload />}/>
        <Route path="/portfolio/:slug"element={<Album />}></Route>
        {/* { path: "portfolio/:slug", element: <Album /> }, */}
        <Route path="/weddingFilms" element={<WeddingFilms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
