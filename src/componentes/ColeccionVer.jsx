import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@mui/material";

const ColeccionVer = () => {
  const { listarColeccion } = useContext(GlobalContext);
  const navigate = useNavigate(); // cambiar la ruta
  const parametro = useParams(); // capturar Parametros

  const Listar = listarColeccion.filter((coleccion) => coleccion.etiqueta === parametro.id);
  console.log(Listar);

  return (

    <div className="PanelPrincipal">
      {Listar.length > 0 ? (
        <div className="PanelCudrado">
          <div className="row">
            {Listar.map((dato) => (
              <div key={dato.id}
              >
                <h3 className="tiitulover">{dato.titulo}</h3>

                <div className="col2">

                  <Card variant="outlined">
                    <p>{dato.descripcion}</p>
                    <p>{dato.categoria}</p>
                    <p>{dato.etiqueta}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>

        </div>
      ) : (
        <p className="bg-gray-600 text-gray-100 py-5 px-10">No Contiene Notas</p>
      )
      }
    </div >



  )
};
export default ColeccionVer;