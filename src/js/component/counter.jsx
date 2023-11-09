import React from "react";

function SecondsCounter({ Seconds }) {

  console.log(Seconds)
  return <div className="card d-flex flex-row contenedor" style={{ width: "18rem" }}>

    <div className="card-body contenedor">
      <div className="card-body contenedor">
        <div className="caja"> <i class="fa-regular fa-clock text-center"></i></div>
      </div>

    </div>
    <div className="card-body contenedor">
      <div className="caja">{Math.floor((Seconds / 100000) % 10)}</div>
    </div>

    <div className="card-body contenedor">
      <div className="caja">{Math.floor((Seconds / 10000) % 10)}</div>
    </div>

    <div className="card-body contenedor">
      <div className="caja">{Math.floor((Seconds / 1000) % 10)}</div>
    </div>

    <div className="card- contenedor">
      <div className="caja">{Math.floor((Seconds / 100) % 10)}</div>
    </div>

    <div className="card- contenedor">
      <div className="caja">{Math.floor((Seconds / 10) % 10)}</div>
    </div>
    <div className="card- contenedor">
      <div className="caja">{Math.floor(Seconds % 10)}
      </div>
    </div>
  </div>
}
export default SecondsCounter