import React from 'react';
import {AdminMenu,Logout} from "../../components/Admin/AdminLayout";
import { Row, Navbar, Form, InputGroup, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function AdminLayouts({children}) {
  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f8f9fa" }}>
      <h1 className="text-center">Panel de Administrador</h1>
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
          <Nav className="me-auto">
            <Nav.Link><Link to={"/admin/reportearticulo"}> Reportes Articulo</Link></Nav.Link>
            <Nav.Link><Link to={"/admin/reporteuser"}>Reportes usuario</Link></Nav.Link>

          </Nav>

        
      </Form>
          <Col xs="auto">
            <Logout/>
          </Col>
    </Navbar>
      <div className="row">
      
      </div>


      {children}
    

    </div>

  )
}
