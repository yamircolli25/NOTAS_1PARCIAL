import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

const initialState = {
    listarColeccion: [
    ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);


    function aregarColeccion(colecion) {
        dispatch({
            type: "ADD_COLECCION",
            payload: { ...colecion, id: v4() },
        });
    }

    function actualizarColeccion(actualizarcoleccion) {
        dispatch({
            type: "UPDATE_COLECCION",
            payload: actualizarcoleccion,
        });
    }

    function eliminarColeccion(id) {
        dispatch({
            type: "DELETE_COLECCION",
            payload: id,
        });
    }


    return (
        <GlobalContext.Provider
            value={{
                listarColeccion: state.listarColeccion,
                aregarColeccion,
                actualizarColeccion,
                eliminarColeccion
            }}
        >
            {children}
        </GlobalContext.Provider>
    );

};