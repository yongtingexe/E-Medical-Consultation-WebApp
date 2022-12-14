import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import General from "./General";
import Pediatrics from './Pediatrics'
import Diabetology from './Diabetology'

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/general" element={<General />} />
      <Route path="/pediatrics" element={<Pediatrics />} />
      <Route path="/diabetology" element={<Diabetology />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
