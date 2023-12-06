import { useState } from "react";
import ProgramCards from "./components/organisms/programCards/Academy/ProgramCardsAcademyAcademy.jsx";
import PanelSources from "./components/organisms/PanelSources/PanelSources.jsx";
import Footer from "./components/organisms/Footer/Footer.jsx";
import Header from './components/organisms/header/Header'


function App() {
  return <>
  <ProgramCards></ProgramCards>
  <PanelSources></PanelSources>
  <Footer></Footer>
  </>;
}

export default App;
