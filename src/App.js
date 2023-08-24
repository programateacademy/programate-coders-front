<<<<<<< HEAD
HEAD

import React from 'react';
import Niveles from './Components/Niveles';

function App() {
    return (
        <div className="App">
            <Niveles/>
        </div> 
    );
}


import React from 'react';
import Formulario from './Components/Formulario';

function App() {
    return (
        <div className="App">
            <Formulario/>
        </div> 
    );
}
    
=======

=======
>>>>>>> 5e80f287f3c7870380045e2951c848edacff475a
import React from "react";
<<<<<<< HEAD
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

export default App
=======
import Carrusel from "./Components/Carrusel";
import Header from "./Components/Header"
import Niveles from './Components/Niveles';
import Formulario from './Components/Formulario';

function App() {
    return (
        <div className="App">
            <Header />
            <Carrusel />
            <Niveles />
            <Formulario />
        </div>
    );
}

<<<<<<< HEAD
>>>>>>> fdfdd1bfbafb0a4c2f8f869238dce90ab7979270
=======

>>>>>>> 5e80f287f3c7870380045e2951c848edacff475a
export default App;
>>>>>>> 3af47a62b8e8890259b2f2317dc5f8f90ed8c375
