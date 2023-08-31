import React, { useState } from 'react';
import Header from "../Components/Header";
import CardsAcademy from "../Components/CardsAcademy";
import CardsSchool from '../Components/CardsSchool';
import Niveles from '../Components/Niveles';
import TiposRecursos from '../Components/TiposRecursos';
import Documentos from '../Components/Documentos';
import VideoSection from "../Components/VideoSection";
import Programs from '../Components/Programs';
import InfoData from '../DataBases/files';
import Footer from "../Components/Footer";

function Recursos() {
    const [selectedProgram, setSelectedProgram] = useState('Programate Academy');
    const [levelsArray, setLevelsArray] = useState([]);
    const [namePlayList, setNamePlayList] = useState("JavaScript");

    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedResourceType, setSelectedResourceType] = useState(null);
    const [selectedLevelObject, SetSelectedLevelObject] = useState(null)

    const handleSelectProgram = (program) => {
        setSelectedProgram(program);
        // Resetear otros estados 
        setSelectedLevel(null);
        setSelectedResourceType(null);
        SetSelectedLevelObject(null);
    };

    const handleCardClick = (levels, name) => {
        setLevelsArray(levels);
        setNamePlayList(name);
        // Resetear otros estados 
        setSelectedLevel(null);
        setSelectedResourceType(null);
        SetSelectedLevelObject(null);
    };

    const handleLevelClick = (level, levelsObject) => {
        setSelectedLevel(level);
        SetSelectedLevelObject(levelsObject)
        setSelectedResourceType(null);
    };

    const handleResourceTypeClick = (resourceType) => {
        setSelectedResourceType(resourceType);
    };
    console.log(levelsArray)
    const selectedProgramData = InfoData.find(program => program.program === selectedProgram);
    const filteredPrograms = selectedProgramData.cards;
    console.log(selectedLevel)

    return (
        <>
            <Header />
            <Programs onSelectProgram={handleSelectProgram} />
            {selectedProgram === 'Programate Academy' && <CardsAcademy data={filteredPrograms} onCardClick={handleCardClick} />}
            {selectedProgram === 'Programate School' && <CardsSchool data={filteredPrograms} onCardClick={handleCardClick} />}
            <VideoSection language={namePlayList} />
            <Niveles levelsArray={levelsArray} handleLevelClick={handleLevelClick} />
            {selectedLevel && (
                <TiposRecursos
                    levelsObject={selectedLevelObject}
                    handleResourceTypeClick={handleResourceTypeClick}
                />
            )}
            {selectedResourceType && selectedLevelObject && (
                <Documentos
                    selectedResourceType={selectedResourceType}
                    infoTypeLevelSelected={selectedLevelObject.infoType[0]}
                />
            )}
            <Footer />
        </>
    );
}

export default Recursos;

