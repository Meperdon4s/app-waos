import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

export function UserProfile() {
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('nombre_usuario');
  const [userId, setUserId] = useState('@id_usuario');
  const [description, setDescription] = useState('descripcion_usuario_');

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveChanges = () => {
    // Aquí puedes guardar los cambios realizados por el usuario
    setEditingProfile(false);
    // Aquí podrías realizar acciones como enviar los cambios al servidor
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor selecciona un archivo JPEG o PNG.');
    }
  };

  return (
    <body>
      <Container>
        <Row>
          <Col md={6} lg={5} style={{ marginTop: '15px' }}>
            <img
              src={profileImage ? profileImage : "https://cdn.bootstrapstudio.io/placeholders/1400x800.png"}
              alt="Foto de perfil"
              style={{ width: '300px', height: '300px', borderRadius: '150px', boxShadow: '2px 0px 12px rgb(123,140,157)' }}
            />
            {editingProfile && (
              <input
                className="form-control"
                type="file"
                name="avatar-file"
                style={{ marginTop: '10px' }}
                onChange={handleFileChange}
              />
            )}
            {editingProfile ? (
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <h1>{username}</h1>
            )}
            <p className="text-muted mb-0">{userId}</p>
            {!editingProfile && (
              <Button
                className="fs-5 py-2 px-4"
                onClick={handleEditProfile}
                style={{ marginLeft: '14px', background: 'rgb(121,140,210)', borderStyle: 'none', borderRadius: '10px', marginTop: '10px' }}
              >
                Editar perfil
              </Button>
            )}
            {editingProfile && (
              <Button
                className="fs-5 py-2 px-4"
                onClick={handleSaveChanges}
                style={{ marginLeft: '14px', background: 'rgb(121,140,210)', borderStyle: 'none', borderRadius: '10px', marginTop: '10px' }}
              >
                Guardar cambios
              </Button>
            )}
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
          <Col md={6} lg={6} style={{ paddingTop: '0px', marginTop: '50px', marginRight: '2px' }}>
            <div className="bg-info-subtle shadow p-4 mb-0 pb-3 pt-3 me-0" style={{ background: 'linear-gradient(150deg, rgba(255,207,212,0.76) 14%, rgba(168,187,252,0.3) 76%, rgba(168,255,245,0.19) 100%), rgb(135,135,135)', margin: '2px', borderRadius: '25px', backdropFilter: 'blur(22px)', color: '#212529' }}>
              {editingProfile ? (
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ fontSize: '20px', textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px', width: '100%', border: 'none', resize: 'none' }}
                />
              ) : (
                <p className="d-table-cell" style={{ fontSize: '20px', textAlign: 'justify', paddingLeft: '20px', paddingRight: '20px' }}>{description}</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '20px', marginBottom: '30px' }}>
        <div className="bg-info-subtle shadow p-4 mb-0 pb-3 pt-3 me-0" style={{ background: 'linear-gradient(150deg, white 0%, rgb(247,237,229) 64%, #dedede 100%), rgb(135,135,135)', margin: '2px', borderRadius: '25px', backdropFilter: 'blur(22px)', color: '#212529' }}>
          <h2 className="fw-bold mb-2" style={{ paddingLeft: '0px' }}>pregunta_usuario</h2>
          <p className="mb-0" style={{ paddingBottom: '16px' }}>fecha_pregunta_usuario</p>
          <Link to="/pregunta_usuario">
            <Button className="fs-5 py-2 px-4" href="#" style={{ background: '#e7a76a', borderRadius: '10px', borderStyle: 'none' }}>
              Ver publicación
            </Button>
          </Link>
        </div>
      </Container>
    </body>
  );
}