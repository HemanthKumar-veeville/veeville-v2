import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";
import WorkPage from "./pages/Work/WorkPage";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/work" element={<WorkPage />} />
    </Routes>
  );
}
