export default function appReducer(ejecutar, accion) {
    switch (accion.type) {
      case "ADD_COLECCION":
        return {
          ...ejecutar,
          listarColeccion: [...ejecutar.listarColeccion, accion.payload], // payload Cragar la informacion de la accion que se ejecute
        };
  
      case "UPDATE_COLECCION": {
        const actualizarColeccion = accion.payload;
  
        const actualizar = ejecutar.listarColeccion.map((coleccion) => {
          if (coleccion.id === actualizarColeccion.id) {
            return actualizarColeccion;
          }
          return coleccion;
        });
        return {
          ...ejecutar,
          listarColeccion: actualizar,
        };
      }
      case "DELETE_COLECCION":
        return {
          ...ejecutar,
          listarColeccion: ejecutar.listarColeccion.filter((coleccion) => coleccion.id !== accion.payload),
        };
        
      default:
        return ejecutar;
    }
  }