import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import imagenes from "../../../../assets/imagenes";
import {Auth} from "../../../../api"
import { useFormik } from "formik";
import { Form, FloatingLabel, Button, Row, InputGroup, FormControl} from "react-bootstrap";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useAuth } from "../../../../hooks";

const authCtr = new Auth()

export function Login() {
    const {login}= useAuth()


  const formik = useFormik({
    initialValues:initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async(formValue)=>{
      try {
        const response = await authCtr.login(formValue);
          console.log(response);
          authCtr.setAccessToken(response.access)
          authCtr.setRefreshToken(response.refresh)
          login(response.access)
        }
      catch (error) {
        console.error(error);
    
      }
    }


  })

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 ">
      <div className="welcome-message-container p-5">
        <h1 className="text-center mb-4">¡Bienvenido!</h1>
        <img
          src={imagenes.img1}
          alt="Welcome"
          className="img-fluid"
          width="300"
          height="200"
        />
      </div>
      <div className="form-container p-5 rounded bg-white">
        <form noValidate onSubmit={formik.handleSubmit}>
          <h3 className="text-center">Iniciar Sesión</h3>
          <Row className="mb-3">
            <InputGroup>
            <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3">
              <FormControl
              type="email"
              name="email"
              placeholder="ej: usuario@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              isValid={formik.errors.email}
              isInvalid={!!formik.errors.email}
              required>
              </FormControl>
            </FloatingLabel>
            </InputGroup>
            <InputGroup>
            <FloatingLabel
            controlId="floatingInput"
            label="Contraseña"
            className="mb-3">
              <FormControl
              type="password"
              name="password"
              placeholder="contraseña"
              onChange={formik.handleChange}
              value={formik.values.password}
              isValid={formik.errors.password}
              isInvalid={!!formik.errors.password}
              required>
              </FormControl>
            </FloatingLabel>
            </InputGroup>

          </Row>

          <Form.Group>
            <div className="d-grip gap-2 text-end mt-2">
              <Button type="submit" size="lg" >Iniciar Sesión</Button>
            </div>
          </Form.Group>
          
          <p className="text-end mt-2">
            <Link to="/admin/registro" className="ms-2">
              Regístrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

