import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import RouteTransition from "./components/ui/RouteTransition";

// Lazy load all pages
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const WorkPage = lazy(() => import("./pages/Work/WorkPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <RouteTransition>
        <Suspense>
          <Routes location={location}>
            <Route path="/" element={<Welcome />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </RouteTransition>
    </>
  );
}
