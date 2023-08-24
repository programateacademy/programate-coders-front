import React from "react";
import Inicio from "./Pages/Inicio";
import Cuentanos from "./Pages/Cuentanos";
import Recursos from "./Pages/Recursos";

function App() {
  const content = ReturnContent();
  return (
    <div className="App">
      {content}
    </div>
  );
}

function ReturnContent() {
  const url = window.location.pathname;
  console.log(url);
  switch (url) {
    case "/Recursos":
      return <Recursos />;
    case "/Cuentanos":
      return <Cuentanos />;
    default:
      return <Inicio />;
  }
}

export default App;