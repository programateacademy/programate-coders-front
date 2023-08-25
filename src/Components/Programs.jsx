import React from 'react';

function Programs({ onSelectProgram }) {
    return (
        <div>
            <button onClick={() => onSelectProgram('Programate Academy')}>Programate Academy</button>
            <button onClick={() => onSelectProgram('Programate School')}>Programate School</button>
        </div>
    );
}

export default Programs;