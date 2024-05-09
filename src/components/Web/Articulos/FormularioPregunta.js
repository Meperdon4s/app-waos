import React, { useState } from "react";
import { Articulo, Auth } from "../../../api";
//mport Axios from "../services/Axios";


const ArtCtr  = new Articulo()
const authCtr = new Auth()

export function FormularioPregunta() {

    const access = authCtr.getAccessToken()
    const valores = {
        titulo: "",
        categoria: "",
        descripcion: "",
    };

    const [articulo, setArticulo] = useState(valores);

    const onChange = (e) => {
        const { name, value } = e.target;
        setArticulo({ ...articulo, [name]: value });
    };

    const guardarArticulo = async() => {
        try {
            const response = await ArtCtr.subirArticulo(access, articulo)
            console.log(response);
            

            
        } catch (error) {
            
        }
      
    }

    const onSubmit = (e) => {
        e.preventDefault();
        guardarArticulo();
    };

    return (
        <div className="container mt-5">
            <div className="card p-5 shadow" style={{ backgroundColor: "#f8f9fa" }}>
                <h2 className="text-center mb-4" style={{ color: "blue" }}>Nueva Publicación</h2>

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título del Artículo</label>
                        <input
                            name="titulo"
                            type="text"
                            className="form-control"
                            value={articulo.titulo}
                            onChange={onChange}
                            placeholder="Ingrese el título del artículo"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">Categoría</label>
                        <select
                            name="categoria"
                            className="form-select"
                            value={articulo.categoria}
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="Tecnologia">Tecnología</option>
                            <option value="Ciencias">Ciencias</option>
                            <option value="Lengua">Lengua</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea
                            name="descripcion"
                            className="form-control"
                            value={articulo.descripcion}
                            onChange={onChange}
                            placeholder="Ingrese la descripción del artículo"
                            style={{ minHeight: "150px" }} // Espacio más grande
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-lg" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
