import React, { useState } from 'react'
import Header from "../Components/Header"
import CardsAcademy from "../Components/CardsAcademy"
import CardsSchool from '../Components/CardsSchool'
// import Niveles from "../Components/Niveles"
import VideoSection from "../Components/VideoSection"
import Programs from '../Components/Programs'
import InfoData from '../DataBases/Info'
// import { program } from '@babel/types'
import Footer from '../Components/Footer'

function Recursos() {

    const [selectedProgram, setSelectedProgram] = useState('Programate Academy');
    const handleSelectProgram = (program) => {
        setSelectedProgram(program);
    };


    return (
        <>
            <Header />
            <Programs onSelectProgram={handleSelectProgram} />
            {selectedProgram === 'Programate Academy' && <CardsAcademy  />}
            {selectedProgram === 'Programate School' && <CardsSchool  />}
            <VideoSection />
            {/* <Niveles/> */}
        <Footer/>
        </>
    )
}

export default Recursos
