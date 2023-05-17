import React from "react";

export function Paginacion({ prev, next, irAnterior, irSiguiente }) {
  const handlePrev = () => {
    irAnterior();
  }
  const handleNext = () => {
    irSiguiente();
  }
  
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {
          prev ? (
            <li className="page-item">
              <button className="btn btn-dark" onClick={handlePrev}>
                Anterior</button>
            </li>
          ) : null}
        {
          next ? (
            <li className="page-item">
              <button className="btn btn-dark" onClick={handleNext}>
                Siguiente</button>
            </li>
          ) : null}
        
      </ul>
    </nav>
  );
}