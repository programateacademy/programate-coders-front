import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/header/Header.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Programs from "./components/pages/Programs/Programs.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/programas" element={<Programs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
