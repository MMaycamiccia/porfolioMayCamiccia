import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/Componentes/Home/Home";
import About from "./Componentes/About/About";
import NavBar from "./Componentes/NavBar/NavBar";
import Tecnologias from "./Componentes/Tecnologias/Tecnologias"
import Proyectos from "./Componentes/Proyectos/Proyectos"

function App() {
  const location = useLocation();

  return (
    <div>
      <div>
        {location.pathname !== "/home" && <NavBar />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />

   </Routes>
    </div>
  );
}


export default App;