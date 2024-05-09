import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UsersProfile() {
   const [siguiendo, setSiguiendo] = useState(false);
  const handleClick = () => {
  
    setSiguiendo(!siguiendo);
  };

  return (
    <Container>
      <Row style={{ paddingBottom: '0px' }}>
        <Col md={6} lg={5} style={{ marginTop: '15px' }}>
          <img
            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
            alt="Foto de perfil"
            style={{ width: '300px', height: '300px', borderRadius: '150px', boxShadow: '2px 0px 12px rgb(123,140,157)' }}
          />
          <h1 className="d-table-cell">nombre_usuario</h1>
          <p className="text-muted mb-0" style={{ marginRight: '34px', paddingRight: '0px' }}>@id_usuario</p>
          <Button
            className="btn btn-primary fs-5 py-2 px-4"
            href="#"
            style={{ background: 'linear-gradient(45deg, #ff7009, #5dc5ff), rgb(231,108,108)', borderStyle: 'none', borderRadius: '20px', textAlign: 'center', fontWeight: 'bold', marginLeft: '0px', marginTop: '10px' }}
          onClick={handleClick}>
           {siguiendo ? 'Siguiendo' : 'Seguir'}
          </Button>
          <div className="row gy-4 row-cols-2 row-cols-md-4">
            <div className="col-xxl-1">
              <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                <div className="px-3">
                  <h4 className="fw-bold mb-0">123</h4>
                  <p className="mb-0">Seguidores</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-1">
              <div className="text-center d-flex flex-column justify-content-center align-items-center py-3">
                <div className="px-3">
                  <h4 className="fw-bold mb-0">123</h4>
                  <p className="mb-0">Seguiendo</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={11} lg={6} style={{ marginRight: '2px', paddingTop: '0px', marginTop: '40px' }}>
          <div className="bg-info-subtle shadow p-4 mb-0 pb-3 pt-3 me-0" style={{ background: 'linear-gradient(150deg, rgba(255,207,212,0.76) 14%, rgba(168,187,252,0.3) 76%, rgba(168,255,245,0.19) 100%), rgb(135,135,135)', margin: '2px', borderRadius: '25px', backdropFilter: 'blur(22px)', color: '#212529' }}>
            <p className="d-table-cell" style={{ fontSize: '20px', textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px', paddingTop: '13px' }}>
              <span style={{ backgroundColor: 'rgba(231, 231, 231, 0)' }}>
                descripcion_usuario_ Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
              </span>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravid.
            </p>
          </div>
        </Col>
      </Row>
      <Container style={{ marginBottom: '30px', marginTop: '35px', paddingLeft: '35px', paddingRight: '35px', marginRight: '50px' }}>
        <div className="bg-info-subtle shadow p-4 mb-0 pb-3 pt-3 me-0" style={{ background: 'linear-gradient(150deg, white 0%, rgb(247,237,229) 64%, #dedede 100%), rgb(135,135,135)', margin: '2px', borderRadius: '25px', backdropFilter: 'blur(22px)', color: '#212529', display: 'block', position: 'static' }}>
          <h2 className="fw-bold mb-2" style={{ paddingLeft: '0px' }}>pregunta_usuario</h2>
          <p className="mb-0" style={{ paddingBottom: '16px' }}>fecha_pregunta_usuario</p>
          <Link to = "/pregunta_usuario"><Button className="btn btn-primary fs-5 py-2 px-4" role="button" href="#" style={{ background: '#e7a76a', borderRadius: '10px', borderStyle: 'none' }}
          onClick={handleClick}>
            Ver publicación
          </Button></Link>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={12} style={{ paddingBottom: '0px', marginBottom: '23px' }}>
            <Button className="btn btn-primary fs-5 py-2 px-4" role="button" href="#" style={{ marginLeft: '14px', background: 'rgb(231,108,108)', borderStyle: 'none', borderRadius: '10px', marginTop: '10px', textAlign: 'center' }}>
              Reportar
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
