import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import ColeccionFormulario from "./components/ColeccionFormulario";
import ColeccionListar from "./components/ColeccionListar";
import ColeccionVer from "./components/ColeccionVer";

function App() {
  return (
    <GlobalProvider>
      <div className="">
        <div className="">
          <Header />
          <Routes>
            <Route path="/" element={<ColeccionListar />} />
            <Route path="/agregar" element={<ColeccionFormulario />} />
            <Route path="/editar/:id" element={<ColeccionFormulario />} />
            <Route path="/ver/:id" element={<ColeccionVer />} />

          </Routes>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;