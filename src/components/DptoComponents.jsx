import { render } from "@testing-library/react";
import React from "react";
import dptoservices from "../servicios/DptoServices";

class DptoComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dptos: [],
    };
  }
  componentDidMount() {
    dptoservices.getDptos().then((Response) => {
      this.setState({ dptos: Response.data });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="portfolio-items">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="portfolio-item">
              <div className="hover-bg">
                {this.state.dptos.map((dpto) => (
                  <tr key={dpto.id}>
                    <td>
                      <h2>Valor Noche: $</h2>
                      {dpto.valorNoche}
                    </td>
                    <br />
                    <td>
                      <h2>Habitaciones: </h2>
                      {dpto.habitaciones}
                    </td>
                    <td>
                      <h2>Baños:</h2>
                      {dpto.banhos}
                    </td>
                    <td>
                      <h2>Dirección</h2>
                      {dpto.direccion}
                    </td>
                  </tr>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DptoComponents;
