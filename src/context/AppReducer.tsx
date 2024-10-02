type ColeccionType = {
    id: string;
    titulo: string;
    descripcion: string;
    categoria: string;
    etiqueta: string;
  };
  
  // Definir el tipo del estado
  type StateType = {
    listarColeccion: ColeccionType[];
  };
  
  // Definir el tipo de las acciones
  type ActionType =
    | { type: "ADD_COLECCION"; payload: ColeccionType }
    | { type: "UPDATE_COLECCION"; payload: ColeccionType }
    | { type: "DELETE_COLECCION"; payload: string };
  
  export default function appReducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case "ADD_COLECCION":
        return {
          ...state,
          listarColeccion: [...state.listarColeccion, action.payload], // payload contiene la información de la acción que se ejecuta
        };
  
      case "UPDATE_COLECCION": {
        const actualizarColeccion = action.payload;
  
        const actualizar = state.listarColeccion.map((coleccion) => {
          if (coleccion.id === actualizarColeccion.id) {
            return actualizarColeccion;
          }
          return coleccion;
        });
        return {
          ...state,
          listarColeccion: actualizar,
        };
      }
      case "DELETE_COLECCION":
        return {
          ...state,
          listarColeccion: state.listarColeccion.filter((coleccion) => coleccion.id !== action.payload),
        };
  
      default:
        return state;
    }
  }
  