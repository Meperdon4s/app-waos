import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './UsuarioCard.css';

export default function UsuarioCard() {
  const [siguiendo, setSiguiendo] = useState(false);
  const handleClick = () => {
  
    setSiguiendo(!siguiendo);
  };
  

return (
  <div className="container py-4 py-xl-5">
    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div className="col-xl-4 text-start">
        <div className="bg-info-subtle shadow p-4 mb-0 pb-3 pt-3 me-0 usuario-card">
          <div className="d-flex" onClick={handleClick}>
            <img
              className="rounded-circle img-fluid d-lg-flex flex-shrink-0 me-3 fit-cover"
              data-bs-toggle="tooltip"
              width="50"
              height="50"
              src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              alt="Foto de perfil"
            />
            <Link to="/users" className="usuario-info" onClick={handleClick}>
              <div>
                <p className="fw-bold mb-0">Nombre_usuario</p>
                <p className="text-muted mb-0">@id_usuario</p>
              </div>
            </Link>
            <i className="far fa-star" style={{ marginLeft: '102px', paddingTop: '13px', cursor: 'pointer' }} onClick={handleClick}></i>
          </div>
          <Button className="badge rounded-pill bg-primary mb-2 btn-seguir" onClick={handleClick}>
            {siguiendo ? 'Siguiendo' : 'Seguir'}
          </Button>
          <p style={{ textAlign: 'justify' }}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
          <Link to="/publicacion_reciente">
            <Button
              className="badge rounded-pill bg-primary text-center text-sm-center text-md-center text-lg-end text-xl-end text-xxl-end text-light-emphasis d-md-flex justify-content-md-center me-xl-auto pb-2 pt-2 mb-2 ps-5 me-5 pe-5 ms-5 btn-publicacion"
              onClick={handleClick}>
              Publicación más reciente
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

};


