import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Card, Tooltip } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ColeccionListar = () => {
  const { listarColeccion, eliminarColeccion, moverColeccion } = useContext(GlobalContext);

  // Agrupar las notas por etiquetas
  const notasPorEtiqueta = listarColeccion.reduce((acc, nota) => {
    if (!acc[nota.etiqueta]) {
      acc[nota.etiqueta] = [];
    }
    acc[nota.etiqueta].push(nota);
    return acc;
  }, {});

  // Función que maneja el drag and drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    moverColeccion(result);
  };

  return (
    <div className="PanelPrincipal">
      <div className="derecha">
        <Link to="/agregar" className="BtnNota">
          ADD NOTA
        </Link>
      </div>

      {listarColeccion.length > 0 ? (
        <div className="PanelColeccion">
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Recorremos las etiquetas y agrupamos las notas bajo cada una */}
            {Object.keys(notasPorEtiqueta).map((etiqueta, index) => (
              <div key={index} className="EtiquetaGrupo">
                <h2 className="EtiquetaTitulo">{etiqueta}</h2>
                <Droppable droppableId={etiqueta}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="ListaVertical" // Aplicar clase CSS para diseño vertical
                    >
                      {notasPorEtiqueta[etiqueta].map((dato, index) => (
                        <Draggable key={dato.id} draggableId={dato.id} index={index}>
                          {(provided) => (
                            <div
                              className="NotaItem"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div className="derecha">
                                <Tooltip title="Editar Nota" placement="top">
                                  <Link to={`/editar/${dato.id}`} className="BtnAgregar">
                                    Editar
                                  </Link>
                                </Tooltip>
                                <button
                                  className="BtnAgregar"
                                  onClick={() => {
                                    if (window.confirm("Desea Eliminar esta Nota?")) {
                                      eliminarColeccion(dato.id);
                                    }
                                  }}
                                >
                                  <Tooltip title="Eliminar Nota" placement="top">
                                    <div>
                                      <img src="/src/imagenes/Eliminar.png" alt="Eliminar" />
                                    </div>
                                  </Tooltip>
                                </button>
                              </div>
                              <Link to={`/ver/${dato.id}`}>
                                <Card variant="outlined" className="NotaCard">
                                  <h3>{dato.titulo}</h3>
                                  <p className="parrafo">{dato.descripcion}</p>
                                  <p className="parrafo">{dato.categoria}</p>
                                  <p className="parrafo">{dato.etiqueta}</p>
                                </Card>
                              </Link>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </div>
      ) : (
        <p className="bg-gray-600 text-gray-100 py-5 px-10">No Contiene Tareas</p>
      )}
    </div>
  );
};

export default ColeccionListar;

