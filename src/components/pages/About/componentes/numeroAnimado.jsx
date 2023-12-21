import React, { useState, useEffect } from 'react';

const NumeroAnimado = ({ numero }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador < numero) {
        setContador(prevContador => prevContador + 1);
      } else {
        clearInterval(intervalo);
      }
    }, 20);

    return () => clearInterval(intervalo); // Limpiar el intervalo cuando el componente se desmonta

  }, [numero, contador]);

  return <div>{contador}</div>;
};

export default NumeroAnimado;