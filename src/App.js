import React, { useEffect, useState } from 'react';
import './App.css';
import { BusquedaPersonajes } from './componentes/Header.jsx';
import { TarjetasPersonajes } from './componentes/Tarjetas';
import { Paginacion } from './componentes/Paginacion';

function App() {
  const urlInicial = "https://rickandmortyapi.com/api/character"
  const [personajes, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const fetchPersonajes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPersonajes(urlInicial);
  }, []);

  // !Para la paginacion
  const Atras = () => {
    fetchPersonajes(info.prev);
  }

  const Siguiente = () => {
    fetchPersonajes(info.next);
  }

  return (
    <div>
      <div>
        <BusquedaPersonajes 
        personajes={personajes || []}
        />
      </div>
      <a name="arriba"></a>
      <br></br>
      <div className='container mt-5'>
        <Paginacion
          prev={info.prev}
          next={info.next}
          irAnterior={Atras}
          irSiguiente={Siguiente}
        />
        <TarjetasPersonajes
          personajes={personajes}
        />
        <div className='pagination justify-content-center'>
          <a className='btn btn-dark'
            href="#arriba">Ir a la parte de arriba</a>
        </div>
      </div>
    </div>

  );
}

export default App;