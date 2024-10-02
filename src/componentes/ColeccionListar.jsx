import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Box, Button, Card, Grid, Modal, Tooltip } from "@mui/material";

// Definición de los tipos que se utilizan en la aplicación
type ColeccionType = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  etiqueta: string;
};

type GlobalContextType = {
  listarColeccion: ColeccionType[];
  eliminarColeccion: (id: string) => void;
};

const ColeccionListar: React.FC = () => {
  // Definición del uso del contexto con sus tipos correspondientes
  const { listarColeccion, eliminarColeccion } = useContext(GlobalContext) as GlobalContextType;

  return (
    <div className="PanelPrincipal">
      <div className="derecha">
        <Link to={"/agregar"} className="BtnNota">
          ADD NOTA
        </Link>
      </div>
      {listarColeccion.length > 0 ? (
        <div className="PanelColeccion">
          <div className="row">
            {listarColeccion.map((dato) => (
              <div key={dato.id}>
                <div className="col">
                  <div className="derecha">
                    <Tooltip title="Editar Nota" placement="top">
                      <Link to={`/editar/${dato.id}`} className="BtnAgregar">
                        Editar
                      </Link>
                    </Tooltip>
                    <button
                      className="BtnAgregar"
                      onClick={() => {
                        if (window.confirm("Desea Eliminar Informacion?")) {
                          eliminarColeccion(dato.id);
                        }
                      }}
                    >
                      <Tooltip title="Eliminar Nota" placement="top">
                        Eliminar
                      </Tooltip>
                    </button>
                  </div>
                  <Link to={`/ver/${dato.etiqueta}`}>
                    <Card variant="outlined">
                      <h3>{dato.titulo}</h3>
                      <p className="parrafo">{dato.descripcion}</p>
                      <p className="parrafo">{dato.categoria}</p>
                      <p className="parrafo">{dato.etiqueta}</p>
                    </Card>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="bg-gray-600 text-gray-100 py-5 px-10">No Contiene Tareas</p>
      )}
    </div>
  );
};

export default ColeccionListar;
