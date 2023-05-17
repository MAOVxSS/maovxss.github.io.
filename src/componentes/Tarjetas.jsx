import React from "react";
import "../estilos/styles.css";

export const TarjetasPersonajes = ({ personajes = [] }) => {
  return (
    <div className="row">
      {personajes.map((item, index) => (
        <div key={index} className="col mb-4">
          <div
            className={`card text-center`}
            style={{ minWidth: "200px" }}
          >
            <img className="card-image" src={item.image} alt="" />
            <div className="card-hidden">
            <div className="card-body">
              <h4 className="card-tittle"><strong>{item.name}</strong>
              </h4>
              <hr />
              <h6 className="card-text">
                <strong>Origen:</strong> {item.origin.name}<br />
                <strong>Locacion:</strong> {item.location.name}<br />
                {/* <strong>Estado:</strong> {item.status}<br /> */}
                <strong>Estatus: </strong>
                  {item.status === "Alive" ? (
                    <>
                      <span className="alive" />
                      {item.status}
                    </>
                  ) : (
                    <>
                      <span className="dead" />
                      {item.status}
                    </>
                  )}
                  <br></br>
                <strong>Especie:</strong> {item.species}<br />
                <strong>Genero:</strong> {item.gender}
              </h6>
            </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}