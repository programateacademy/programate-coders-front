import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/header/Header.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";
import Inicio from "./components/pages/Inicio/Inicio.jsx";
import SobreNosotros from "./components/pages/SobreNosotros/SobreNosotros.jsx";
import Programas from "./components/pages/Programas/Programas.jsx";
import Contactanos from "./components/pages/Contactanos/Contactanos.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/contacto" element={<Contactanos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
