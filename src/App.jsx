import { Route, Routes } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd"; // Importar DragDropContext
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import { useContext } from "react";

import Header from "./components/Header";
import ColeccionFormulario from "./components/ColeccionFormulario";
import ColeccionListar from "./components/ColeccionListar";
import ColeccionVer from "./components/ColeccionVer";

function App() {
  const { listarColeccion, actualizarColeccion } = useContext(GlobalContext);

  // Función para manejar el drag and drop
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    // Reordenar las notas después de moverlas
    const items = Array.from(listarColeccion);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Actualizar el estado con el nuevo orden
    actualizarColeccion(items);
  };

  return (
    <GlobalProvider>
      <div className="">
        <div className="">
          <Header />
          {/* Aplicar DragDropContext en la vista principal */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Routes>
              <Route path="/" element={<ColeccionListar />} />
              <Route path="/agregar" element={<ColeccionFormulario />} />
              <Route path="/editar/:id" element={<ColeccionFormulario />} />
              <Route path="/ver/:id" element={<ColeccionVer />} />
            </Routes>
          </DragDropContext>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
