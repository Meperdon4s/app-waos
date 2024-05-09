import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../../../services/Axios";
import { Auth, User } from "../../../../api";

export function Registro() {
  const datosUsuario = {
    nombreusuario: "",
    email: "",
    password: "",
  };

  const [usuarios, setUsuarios] = useState(datosUsuario);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "nombreusuario" && (value.length < 3 || value.length > 25)) {
      error = "El nombre de usuario debe tener entre 3 y 25 caracteres";
    } else if (name === "password" && (value.length < 8 || value.length > 12)) {
      error = "La contraseña debe tener entre 8 y 12 caracteres";
    }
    setErrors({ ...errors, [name]: error });
    setUsuarios({ ...usuarios, [name]: value });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const GuardarUsuario = async() => {
    try {
      const response = await ArtCtr.subirArticulo(access, articulo)
      console.log(response);
      

      
  } catch (error) {
      
  }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    GuardarUsuario();
  };

  return (
    <div className="regis template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form class="needs-validation" onSubmit={onSubmit} noValidate>
          <h3 className="text-center">Regístrate</h3>
          {errors.general && <p className="text-danger">{errors.general}</p>}
          <div className="mb-2">
            <label htmlFor="Lusuario">Nombre de usuario</label>
            <input
              name="nombreusuario"
              type="text"
              value={usuarios.nombreusuario}
              onChange={onChange}
              placeholder="Introduce un Nombre de usuario"
              className={`form-control ${
                errors.nombreusuario ? "is-invalid" : ""
              }`}
              required
            />
            {errors.nombreusuario && (
              <div className="invalid-feedback">{errors.nombreusuario}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="correo">Correo</label>
            <input
              name="email"
              type="email"
              placeholder="Introduce tu Correo"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={usuarios.email}
              onChange={onChange}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="contrasena">Contraseña</label>
            <div className="input-group">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Introduce tu Contraseña"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                value={usuarios.password}
                onChange={onChange}
                required
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="d-grid">
            <button class="btn btn-primary" type="submit">
              Regístrate
            </button>
          </div>
          <p className="text-center mt-2"><Link to="/user/home" className="ms-2">Listo para el login</Link></p>
        </form>
      </div>
    </div>
  );
}

