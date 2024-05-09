import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Logout } from "../../Admin/AdminLayout";

export function BarraMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    return (
      <div>
        <nav className="navbar bg-body-tertiary ">
          <div className="container-fluid">
            <Link to="/user/home" className="navbar-brand">
              Waos
            </Link>
            <form className="d-flex text-aling-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <Link className="btn btn-primary" to="/user/formulario">
              Hacer pregunta
            </Link>
            <div className="dropdown ml-auto">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                onClick={toggleDropdown}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu-end ${
                  dropdownOpen ? "show" : ""
                }`}
              >
                <li>
                  <Link className="dropdown-item" to="/user/profile">
                    Mi perfil
                  </Link>
                </li>
              </ul>
            </div>
            <Col xs="auto">
            <Logout/>
          </Col>
          </div>
        </nav>
      </div>
    );
}
