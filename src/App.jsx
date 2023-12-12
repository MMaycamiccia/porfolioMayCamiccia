import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../src/Componentes/Home/Home";
import About from "./Componentes/About/About";
import NavBar from "./Componentes/NavBar/NavBar";
import Tecnologias from "./Componentes/Tecnologias/Tecnologias"
import Proyectos from "./Componentes/Proyectos/Proyectos"
import Formularios from "./Componentes/Formularios/FormularioMail"
import LandingPage from "./Componentes/LandingPage/LandingPage";

function App() {
  const location = useLocation();

  return (
    <div>
      <div>
        {location.pathname !== "/" && <NavBar />}
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/formularioMail" element={<Formularios />} />

   </Routes>
    </div>
  );
}


export default App;