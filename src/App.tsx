import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles.css";
import Layout from "./components/ui/Layout/Layout";
import RouteTransition from "./components/ui/RouteTransition";
import { SEO } from "./components/seo/SEO";

// Lazy load all pages
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Client = lazy(() => import("./pages/Client/Client"));
const WorkPage = lazy(() => import("./pages/Work/WorkPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const ProjectWrapper = lazy(() => import("./pages/Projects/ProjectWrapper"));
const MainWork = lazy(() => import("./pages/MainWork/MainWork"));

const App = () => {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="app">
        <SEO />
        <Suspense>
          <RouteTransition>
            <Routes location={location}>
              <Route element={<Layout />}>
                <Route path="/" element={<Welcome />} />
                <Route path="/work" element={<MainWork />} />
                <Route path="/work/marketing" element={<WorkPage />} />
                <Route path="/work/experiences" element={<WorkPage />} />
                <Route path="/work/technology" element={<WorkPage />} />
                <Route path="/clients" element={<Client />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/projects/:projectId"
                  element={<ProjectWrapper />}
                />
              </Route>
            </Routes>
          </RouteTransition>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;
