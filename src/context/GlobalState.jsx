import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

const initialState = {
    listarColeccion: [
        {
            id: "1",
            titulo: "Hola Commo esta",
            descripcion: "xxxxx",
            categoria: "Amigos ONE",
            etiqueta: "Amigos",
        },
        {
            id: "2",
            titulo: "Jugar Futbol",
            descripcion : "Juegos a las 12:00pm",
            categoria: "Deporte 20022",
            etiqueta: "Deporte",
        },
        {
            id: "3",
            titulo: "Jugar Baseboll",
            descripcion : "Juegos a las 12:pm",
            categoria: "Deporte 20022",
            etiqueta: "Deporte",
        },
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