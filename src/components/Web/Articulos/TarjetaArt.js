import React, {useState, useEffect} from 'react'
import Axios from "../../../services/Axios";
import {Link, json} from 'react-router-dom';
import { Articulo, Auth } from '../../../api';
import {MenuCategoria} from '../../../components/Web/Menu';


const ArtCtr = new Articulo()
const authCtr = new Auth()

export function TarjetaArt() {
    const access = authCtr.getAccessToken()


  const [listaArticulos,setListaArticulos] = useState([]);


    const buscarArticulos=async()=>{
        try {
            const response = await ArtCtr.getArticulos(access)
            
            setListaArticulos(response);

            
        } catch (error) {
            
        }

    }

    useEffect(() => {
     buscarArticulos();
    }, [])

  return (
    <div class="container p-2 mt-5 col-sm-5 col-md-8">
        <MenuCategoria/>


      {listaArticulos.map((articulos,index)=>{
        return(
    <Link class="nav-link" to={`/user/articulo/${articulos._id}`}>

      <div class="card border border-primary shadow-0 ">
      
  <div class="card-body">
    <h5 class="card-title">{articulos.titulo}</h5>
    <h6 class="card-title">{JSON.stringify(articulos.autor)}</h6>
    <h6 class="card-title">{articulos.categoria}</h6>
    <p class="card-text">
      {articulos.descripcion}
    </p>


  </div>
  
  <div class="card-footer">{articulos.calificacion}<i class="bi bi-star-fill"></i></div>
</div>
</Link>
  )}
  )}

</div>

  )
}