import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome/Welcome";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
