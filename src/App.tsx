import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import WorkPage from "./pages/Work/WorkPage";
import "./styles.css";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </>
  );
}
