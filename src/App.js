import React from "react";
import Carrusel from "./Components/Carrusel";
import Header from "./Components/Header"
import Niveles from './Components/Niveles';

function App() {
    return (
        <div className="App">
            <Header />
            <ReturnContent/>
            <Niveles />
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