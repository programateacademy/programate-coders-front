import React from "react";
import CardsSchool from "./Components/CardsSchool";

function App() {
  return (
    <div className="App">
      <CardsSchool />
    </div>
  );
}

function ReturnContent() {
    const url = window.location.pathname
    console.log (url)
    switch (url) {
        case "/Quienes-Somos":
            return <Carrusel />
        case "/Cuentanos":
            return <Niveles />
        default: <h1>Principal view</h1>
    }

}

export default App;