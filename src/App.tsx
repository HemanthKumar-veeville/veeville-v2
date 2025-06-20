import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import WorkPage from "./pages/Work/WorkPage";
import "./styles.css";
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </>
  );
}
