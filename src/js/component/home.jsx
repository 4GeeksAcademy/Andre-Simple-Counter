import React, { useState } from "react";
import SecondsCounter from "./counter.jsx";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startCounter = () => {
    clearInterval(intervalId); // Limpiar el intervalo anterior, si existe

    const newIntervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
  };

  const regresiva = () => {
    clearInterval(intervalId); // Limpiar el intervalo anterior, si existe

    const newIntervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  // Iniciar el contador al cargar la página
  React.useState(() => {
    startCounter();
  }, []); 

  return (
    <div>
      <SecondsCounter Seconds={counter}></SecondsCounter>
      <button
        type="button"
        className="btn btn-secondary m-3"
        onClick={regresiva}
      >
        Regresiva
      </button>
      <button
        type="button"
        className="btn btn-danger m-3"
        onClick={stopCounter}
      >
        Detener
      </button>
      <button
        type="button"
        className="btn btn-primary m-3"
        onClick={startCounter}
      >
        Iniciar
      </button>
    </div>
  );
};

export default Home;



