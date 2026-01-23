import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Services from "./components/Services";
import About from "./pages/About/About";
import BottomNavbar from "./components/BottomNavbar";
import Features from "./components/Features";
import FeatureDetail from "./components/FeatureDetail";
import ProductPage from "./pages/Product/ProductPages";
import ContactInfo from "./components/ContactInfo";
import WhyChooseUs from "./components/WhyChooseUs";
import FastContact from "./components/FastContact";
import ServiceDetail from "./components/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";
import Calculate from "./components/Calculate";
import SertBakirAlasimlari from "./components/SertBakirAlasimlari";
import LegacyRedirect from "./components/LegacyRedirect";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <WhyChooseUs />
                  <About />
                  <Services />
                  <Features />
                </>
              }
            />

            <Route path="/kg-calculate" element={<Calculate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/feature/:slug" element={<FeatureDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/urunler/:productSlug" element={<ProductPage />} />

            <Route
              path="/urunler/sert-bakir-alasimlari"
              element={<SertBakirAlasimlari />}
            />
            <Route path="/about" element={<About />} />

            <Route path="/*" element={<LegacyRedirect />} />
          </Routes>
        </main>

        <ContactInfo />
        <FastContact />
        <BottomNavbar />
      </div>
    </>
  );
};

export default App;