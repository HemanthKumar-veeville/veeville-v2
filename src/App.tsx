import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import Layout from "./components/ui/Layout/Layout";
import RouteTransition from "./components/ui/RouteTransition";

// Lazy load all pages
const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const WorkPage = lazy(() => import("./pages/Work/WorkPage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const ProjectWrapper = lazy(() => import("./pages/Projects/ProjectWrapper"));

export default function App() {
  const location = useLocation();

  return (
    <Suspense>
      <RouteTransition>
        <Routes location={location}>
          <Route element={<Layout />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/:projectId" element={<ProjectWrapper />} />
          </Route>
        </Routes>
      </RouteTransition>
    </Suspense>
  );
}
