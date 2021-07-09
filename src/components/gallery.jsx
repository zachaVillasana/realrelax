import React from "react";
import { useEffect } from "react";
import DptoServices from "../servicios/DptoServices";
import NumberFormat from "react-number-format";

export const Gallery = (props) => {
  const [listaDptos, setListaDptos] = React.useState([]);

  const listarDptos = () => {
    /*
    let lista = DptoServices.getDptos();
    setListaDptos(lista);
   console.log(listaDptos);*/

    DptoServices.getDptos().then((result) => {
      console.log(result);
      setListaDptos(result.data);
    });
  };
  useEffect(listarDptos, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Departamentos</h2>
        </div>
        <p>
          ¡Chequea ahora la disponibilidad de nuestros departamos y no te
          pierdas nuestras ofertas!
        </p>

        <div className="check">
          <div className="group">
            <span className="form-label">Destino</span>
            <input className="control" type="text" placeholder="Región" />
          </div>

          <div className="group">
            <span className="form-label">Check In</span>
            <input className="control" type="date" required />
          </div>

          <div className="group">
            <span className="form-label">Check Out</span>
            <input className="control" type="date" required />
          </div>

          <div className="hab">
            <span className="form-label">Habitaciones</span>
            <select className="select-arrow">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <button className="btn btn-custom btn-lg left">Chequear</button>
        </div>

        <div className="row">
          {listaDptos.map((dpto) => {
            return (
              <div className="portfolio-items">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <a
                        href="img/portfolio/01-large.jpg"
                        title="Project Title"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Baños: {dpto.banhos}</h4>
                          <h4>Habitaciones: {dpto.habitaciones}</h4>
                          <h4>
                            Valor por Noche:{" "}
                            {
                              <NumberFormat
                                value={dpto.valorNoche}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />
                            }
                          </h4>
                        </div>
                        <img
                          src={"img/portfolio/01-large.jpg"}
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
