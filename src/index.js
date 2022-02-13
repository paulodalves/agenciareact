import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./routes/Home";
import Viagem from "./routes/Viagem";
import Contato from "./routes/Contato";
import Destino from "./routes/Destino";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="viagem" element={<Viagem />} />
      <Route path="contato" element={<Contato />} />
      <Route path="destino" element={<Destino />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
