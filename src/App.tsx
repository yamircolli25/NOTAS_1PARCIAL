iimport { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Header from "./componentes/Header";
import ColeccionFormulario from "./componentes/ColeccionFormulario";
import ColeccionListar from "./componentes/ColeccionListar";
import ColeccionVer from "./componentes/ColeccionVer";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ColeccionListar />} />
          <Route path="/agregar" element={<ColeccionFormulario />} />
          <Route path="/editar/:id" element={<ColeccionFormulario />} />
          <Route path="/ver/:id" element={<ColeccionVer />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
