import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Journey from "../pages/journey/Journey";
import AboutPage from "../components/Aboutpage/components/AboutPage";
import ServicesPage from "../components/servicespage/ServicesPage";
import Portfolio from "../components/portfoliopage/Portfolio";
import ContactPage from "../pages/contact/ContactPage";
import BlogPage from "../pages/blog/BlogPage";
import StartProject from "../pages/startproject/StartProject";

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about"      element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/services"   element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/journey"    element={<MainLayout><Journey /></MainLayout>} />
        <Route path="/portfolio"  element={<MainLayout><Portfolio /></MainLayout>} />
        <Route path="/contact"    element={<MainLayout><ContactPage /></MainLayout>} />
        <Route path="/blog"       element={<MainLayout><BlogPage /></MainLayout>} />
        <Route path="/start-project" element={<MainLayout><StartProject /></MainLayout>} />
        <Route path="*"           element={<MainLayout><div style={{padding:"120px 60px",textAlign:"center",minHeight:"60vh"}}><h2>404 — Page Not Found</h2></div></MainLayout>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
