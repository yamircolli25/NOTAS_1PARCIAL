import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Button, FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { Label } from "@mui/icons-material";

const ColeccionFormulario = () => {
    const [coleccion, setColeccion] = useState({
        id: "",
        titulo: "",
        descripcion: "",
        categoria: "",
        etiqueta: "",
    });
    const { aregarColeccion, actualizarColeccion, listarColeccion } = useContext(GlobalContext);

    const navigate = useNavigate(); // cambiar la ruta
    const parametro = useParams(); // capturar Parametros

    const capturarValor = (e) =>
        setColeccion({ ...coleccion, [e.target.name]: e.target.value });

    const EnviarDatos = (e) => {
        e.preventDefault();
        if (!coleccion.id) {
            aregarColeccion(coleccion);
        } else {
            actualizarColeccion(coleccion);
        }
        navigate("/");
    };

    useEffect(() => {
        const buscarColeccion = listarColeccion.find((coleccion) => coleccion.id === parametro.id);
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
                    {coleccion.id ? "Actualizar " : "Crear "} Coleccion
                </h2>
                <div>
                    <FormControl defaultValue="" required className="formControl">
                        <InputLabel htmlFor="my-input">Titulo</InputLabel>

                        <Input
                            type="text"
                            name="titulo"
                            value={coleccion.titulo}
                            onChange={capturarValor}
                            placeholder="Título Contenido "
                            className=""
                            autoFocus />
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
                            placeholder="Dscripcion Contenido "
                            className=""
                            autoFocus />
                    </FormControl>
                </div>
                <div>
                    <FormControl className="formControl">
                        <InputLabel htmlFor="my-input">Categoria</InputLabel>

                        <Input
                            type="text"
                            name="categoria"
                            value={coleccion.categoria}
                            onChange={capturarValor}
                            placeholder="Categoría/s (opcional)"
                            className=""
                            autoFocus />
                    </FormControl>
                </div>

                <div>
                    <FormControl defaultValue="" required className="formControl">
                        <InputLabel htmlFor="my-input">Etiquetas</InputLabel>
                        <Select
                            name="etiqueta"
                            value={coleccion.etiqueta}
                            onChange={capturarValor}
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

                <button className="BtnAgregar" >
                    {coleccion.id ? "Actualizar" : "Guardar"} {/* Si la ID nom es idificada es Crear SINO Actualizar*/}
                </button>
            </form >

        </div >
    )
};
export default ColeccionFormulario;
