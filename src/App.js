import React from "react";
import Inicial from "./paginas/inicial/Inicial"
import Comidas from "./paginas/comidas/Comidas"
import Bebidas from "./paginas/bebidas/Bebidas"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


export default function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="bebidas/*" element={<Bebidas />} />
        <Route path="comidas/*" element={<Comidas />} />
      </Routes>


    </Router>

  );
}


