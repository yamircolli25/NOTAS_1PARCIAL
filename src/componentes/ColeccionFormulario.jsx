import { useContext, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Button, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";

type ColeccionType = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  etiqueta: string;
};

type ParamsType = {
  id: string;
};

const ColeccionFormulario: React.FC = () => {
  const [coleccion, setColeccion] = useState<ColeccionType>({
    id: "",
    titulo: "",
    descripcion: "",
    categoria: "",
    etiqueta: "",
  });

  // Definición de contexto con su tipado específico
  const { aregarColeccion, actualizarColeccion, listarColeccion } = useContext(GlobalContext);

  const navigate = useNavigate(); // cambiar la ruta
  const parametro = useParams<ParamsType>(); // capturar parámetros

  const capturarValor = (
    e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setColeccion({ ...coleccion, [name as string]: value });
  };

  const EnviarDatos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!coleccion.id) {
      aregarColeccion(coleccion);
    } else {
      actualizarColeccion(coleccion);
    }
    navigate("/");
  };

  useEffect(() => {
    const buscarColeccion = listarColeccion.find((c) => c.id === parametro.id);
    if (buscarColeccion) {
      setColeccion({
        id: buscarColeccion.id,
        titulo: buscarColeccion.titulo,
        descripcion: buscarColeccion.descripcion,
        categoria: buscarColeccion.categoria,
        etiqueta: buscarColeccion.etiqueta,
      });
    }
  }, [parametro.id, listarColeccion]);

  return (
    <div className="PanelAgregarNota">
      <form onSubmit={EnviarDatos} className="formulario">
        <h2 className="text-3xl mb-7">
          {coleccion.id ? "Actualizar " : "Crear "} Colección
        </h2>
        <div>
          <FormControl defaultValue="" required className="formControl">
            <InputLabel htmlFor="my-input">Titulo</InputLabel>
            <Input
              type="text"
              name="titulo"
              value={coleccion.titulo}
              onChange={capturarValor}
              placeholder="Título Contenido"
              autoFocus
            />
          </FormControl>
        </div>
        <div>
          <FormControl defaultValue="" required className="formControl">
            <InputLabel htmlFor="my-input">Descripción</InputLabel>
            <Input
              type="text"
              name="descripcion"
              value={coleccion.descripcion}
              onChange={capturarValor}
              placeholder="Descripción Contenido"
              autoFocus
            />
          </FormControl>
        </div>
        <div>
          <FormControl className="formControl">
            <InputLabel htmlFor="my-input">Categoría</InputLabel>
            <Input
              type="text"
              name="categoria"
              value={coleccion.categoria}
              onChange={capturarValor}
              placeholder="Categoría/s (opcional)"
              autoFocus
            />
          </FormControl>
        </div>

        <div>
          <FormControl defaultValue="" required className="formControl">
            <InputLabel htmlFor="my-input">Etiquetas</InputLabel>
            <Select
              name="etiqueta"
              value={coleccion.etiqueta}
              onChange={(e) =>
                capturarValor(e as ChangeEvent<{ name?: string; value: unknown }>)
              }
              defaultValue="Ninguno"
            >
              <MenuItem value="Ninguno">Ninguno</MenuItem>
              <MenuItem value="Amigos">Amigos</MenuItem>
              <MenuItem value="Deporte">Deporte</MenuItem>
              <MenuItem value="Restaurante">Restaurante</MenuItem>
              <MenuItem value="Estudio">Estudio</MenuItem>
            </Select>
          </FormControl>
        </div>

        <button className="BtnAgregar">
          {coleccion.id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default ColeccionFormulario;

