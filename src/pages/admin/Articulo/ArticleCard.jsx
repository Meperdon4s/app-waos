import React, { useState } from 'react';
import { Container, Button, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Articulo, Auth } from '../../../api';


 const ArtCtr = new Articulo()
 const AuthCtr = new Auth()
export function ArticleCard(){

  const access = AuthCtr.setAccessToken()

  const { id } = useParams();


  

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  const [globalRating, setGlobalRating] = useState(0);
  const [articulo, setArticulo] = useState();

  const verArt = async() =>{
    const response = await ArtCtr.verArticulo(access, id)
    const datos = response
    console.log(datos);
  }

  
  

  const handleLikeButtonClick = () => {
    if (!liked) {
      setGlobalRating((prevRating) => prevRating + 1);
    } else {
      setGlobalRating((prevRating) => prevRating - 1);
    }
    setLiked(!liked);
  };

  const handleCommentSubmit = () => {
    const newComment = {
      text: commentText,
      author: 'Usuario',
      date: new Date().toLocaleString() // Cambia esto según el formato que desees

    };
    setComments([...comments, newComment]);
    setCommentText('');
  };
  
  return (
    <Container className="py-4 py-xl-5">
      <div className="card" style={{ borderStyle: 'none' }}>
        <div className="card-body p-4" style={{ background: 'linear-gradient(150deg, white 0%, rgb(247,237,229) 57%, #dff1ff 100%)', borderRadius: '30px', borderStyle: 'none' }}>
          <p className="fw-bold mb-0" style={{ fontSize: 'xx-large', fontFamily: 'Abhaya Libre', color: 'rgba(190,61,53,0.46)' }}>Artículo</p>
          <div className="row mb-5" style={{ marginBottom: '32px' }}>
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 style={{ fontSize: '40px' }}>Título</h2>
              <p className="w-lg-50" style={{ fontSize: '20px' }}>Subtitulo</p>
            </div>
          </div>
          <div className="d-flex" style={{ marginTop: '-40px' }}>
            <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" style={{ width: '75px', height: '75px' }} alt="Autor" />
            <div>
              <p className="fw-bold mb-0" style={{ fontSize: 'x-large' }}>Autor</p>
              <p className="text-muted mb-0" style={{ fontSize: 'medium' }}>@id_autor</p>
            </div>
          </div>
          <Button className="btn btn-primary" style={{ marginTop: '15px', marginBottom: '20px', background: '#e7976a', fontWeight: 'bold', borderStyle: 'none' }}>Categoria</Button>
          <p style={{ fontFamily: 'Noto Sans Canadian Aboriginal', textAlign: 'justify', paddingRight: '20px', paddingLeft: '21px' }}>
            <span style={{ color: 'rgb(0, 0, 0)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </p>
        </div>
      </div>

      <Container>
        <Row style={{ marginTop: '20px' }}>
        <div className="d-flex justify-content-end">
            <Button id="likebutton" className="btn btn-outline-dark btn-sm" type="button" onClick={handleLikeButtonClick} style={{ background: liked ? 'gray' : 'white', border: 'none', marginRight: '10px' }}>
              Me gusta
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="-3 1 20 20" fill="none" style={{ marginLeft: '5px' }}>
                <path d="M2 10.5C2 9.67157 2.67157 9 3.5 9C4.32843 9 5 9.67157 5 10.5V16.5C5 17.3284 4.32843 18 3.5 18C2.67157 18 2 17.3284 2 16.5V10.5Z" fill="currentColor"></path>
                <path d="M6 10.3333V15.7639C6 16.5215 6.428 17.214 7.10557 17.5528L7.15542 17.5777C7.71084 17.8554 8.32329 18 8.94427 18H14.3604C15.3138 18 16.1346 17.3271 16.3216 16.3922L17.5216 10.3922C17.7691 9.15465 16.8225 8 15.5604 8H12V4C12 2.89543 11.1046 2 10 2C9.44772 2 9 2.44772 9 3V3.66667C9 4.53215 8.71929 5.37428 8.2 6.06667L6.8 7.93333C6.28071 8.62572 6 9.46785 6 10.3333Z" fill="currentColor"></path>
              </svg>
            </Button>
            <p style={{ fontSize: 'medium', fontWeight: 'bold', display: 'inline-block' }}>Calificación global: {globalRating}</p>
          </div>
          <div className="col-12 col-md-6">
            <Button className="btn btn-primary fs-5 py-2 px-4" style={{ marginLeft: '14px', background: 'rgb(231,108,108)', borderStyle: 'none', borderRadius: '10px', marginTop: '10px', textAlign: 'center', marginBottom: '10px', fontWeight: 'bold' }}>Reportar</Button>
          </div>
        </Row>
      </Container>

      <Container>
        <Row style={{ minHeight: '130px' }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <Form.Control as="textarea" rows={3} value={commentText} onChange={(e) => setCommentText(e.target.value)} style={{ borderRadius: '5px', borderStyle: 'ridge', borderColor: 'rgb(161,23,210)' }} />
          </div>
          <div className="col-5 col-md-2 col-xxl-1 text-center d-flex justify-content-lg-center align-items-lg-center" style={{ marginTop: '10px' }}>
            <Button className="btn btn-primary comment-btn" onClick={handleCommentSubmit} style={{ background: 'rgb(182,162,218)', fontWeight: 'bold', textAlign: 'center', borderStyle: 'none' }}>Comentar</Button>
          </div>
        </Row>
        <hr />
        <p className="mb-0" style={{ textAlign: 'left', fontSize: 'medium', marginTop: '13px', paddingTop: '0px' }}>{comments.length} Comentarios</p>
        <hr />
        {comments.map((comment, index) => (
          <div className="card" key={index}>
            <div className="card-body" style={{ paddingRight: '44px' }}>
              <div className="row">
                <div className="col-2 col-lg-1 col-xl-1 text-center" style={{ paddingRight: '0px' }}>
                  <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" style={{ width: '50px', height: '50px', marginTop: '7px' }} alt="Usuario_comentario" />
                </div>
                <div className="col-10" style={{ background: 'linear-gradient(161deg, white 2%, #dff1ff 100%)', borderRadius: '20px' }}>
                  <h5 style={{ marginTop: '5px' }}>{comment.author}</h5>
                  <p><span style={{ color: 'rgb(0, 0, 0)' }}>{comment.text}</span></p>
                  <p style={{ color: 'gray', fontSize: 'small' }}>{comment.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
};

