import React, { useState } from 'react';
import '../estilos/Titulo.css'
import { FaSearch } from 'react-icons/fa';
import { TarjetasPersonajes } from '../componentes/Tarjetas';

export const BusquedaPersonajes = ({ personajes }) => {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [realizoBusqueda, setRealizoBusqueda] = useState(false);


  const handleBusqueda = () => {
    const resultados = personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultados);
    setHistorial([...historial, busqueda]);
    setRealizoBusqueda(true);
  };

  const handleChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
    setResultados([]);
  };

  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            Inicio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del personaje"
                    value={busqueda}
                    onChange={handleChangeBusqueda}
                  />
                  <div
                    className="input-group-append"
                    style={{ marginLeft: '5px' }}
                  >
                    <button className="btn btn-primary" type="button" onClick={handleBusqueda}>
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container mt-5">
        {realizoBusqueda && resultados.length === 0 && (
          <div className="alert alert-warning" role="alert">
            No se encontraron resultados
          </div>
        )}
        {realizoBusqueda && resultados.length > 0 && (
          <TarjetasPersonajes personajes={resultados} />
        )}
      </div>
      <br></br>
      <div className="container mt-5">
        <h3>Historial de búsquedas:</h3>
        <ul className="list-group">
          {historial.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
