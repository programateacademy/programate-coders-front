import React, { useState } from 'react'
import Header from "../Components/Header"
import CardsAcademy from "../Components/CardsAcademy"
import CardsSchool from '../Components/CardsSchool'
import Niveles from "../Components/Niveles"
import VideoSection from "../Components/VideoSection"
import Programs from '../Components/Programs'
import InfoData from '../DataBases/files'
// import { program } from '@babel/types'
import Footer from "../Components/Footer";

function Recursos() {

    const [selectedProgram, setSelectedProgram] = useState('Programate Academy');
    const [levelsArray, setLevelsArray] = useState([]);


    const handleSelectProgram = (program) => {
        setSelectedProgram(program);
    };

    const handleCardClick = (levels) => {
        setLevelsArray(levels);
    };

    const selectedProgramData = InfoData.find(program => program.program === selectedProgram);

    
    
        const filteredPrograms = selectedProgramData.cards;
        // console.log(filteredPrograms)
    

    return (
        <>
            <Header />
            <Programs onSelectProgram={handleSelectProgram} />
            {selectedProgram === 'Programate Academy' && <CardsAcademy data = {filteredPrograms} onCardClick = {handleCardClick } />}
            {selectedProgram === 'Programate School' && <CardsSchool data = {filteredPrograms} />}
            <VideoSection data ={filteredPrograms} />
            {levelsArray && <Niveles levelsArray={levelsArray} />}
            <Footer />

        </>
    )
}

export default Recursos;
