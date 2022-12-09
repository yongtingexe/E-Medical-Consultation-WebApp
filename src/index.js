import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import General from "./General";
import Pediatrics from './Pediatrics'


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/general" element={<General />} />
      <Route path="/general" element={<Pediatrics />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
