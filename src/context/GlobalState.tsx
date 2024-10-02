import React, { createContext, useReducer, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import appReducer from "./AppReducer";

// Definir los tipos de los elementos de la colección
type ColeccionType = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  etiqueta: string;
};

// Definir el estado inicial y su estructura
type InitialStateType = {
  listarColeccion: ColeccionType[];
  aregarColeccion?: (coleccion: Omit<ColeccionType, "id">) => void;
  actualizarColeccion?: (coleccion: ColeccionType) => void;
  eliminarColeccion?: (id: string) => void;
};

// Estado inicial de la colección
const initialState: InitialStateType = {
  listarColeccion: [
    {
      id: "1",
      titulo: "Hola Como esta",
      descripcion: "xxxxx",
      categoria: "Amigos ONE",
      etiqueta: "Amigos",
    },
    {
      id: "2",
      titulo: "Jugar Futbol",
      descripcion: "Juegos a las 12:00pm",
      categoria: "Deporte 20022",
      etiqueta: "Deporte",
    },
    {
      id: "3",
      titulo: "Jugar Beisbol",
      descripcion: "Juegos a las 12:pm",
      categoria: "Deporte 20022",
      etiqueta: "Deporte",
    },
  ],
};

// Crear el contexto global
export const GlobalContext = createContext<InitialStateType>(initialState);

// Definir el tipo para los props del proveedor
type GlobalProviderProps = {
  children: ReactNode;
};

// Proveedor global del contexto con tipado para TypeScript
export const GlobalProvider = ({ children }: GlobalProviderProps
