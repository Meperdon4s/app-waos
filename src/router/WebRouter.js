import React from 'react';
import {Routes, Route} from "react-router-dom";
import {ClientLayout} from "../layouts";
import {Home} from "../pages/Web";
import {useAuth} from "../hooks"
import {Auth, Register, ArticleCard} from "../pages/admin";
import { UserProfile} from '../pages/admin/User';
import { FormularioPregunta } from '../components/Web/Articulos';

export function WebRouter() {
  const {user}=useAuth();
  const LoadLayout=(Layout,Page)=>{
    return(
      <Layout>
        <Page/>
      </Layout>
      )
    }
  
  return (
   <Routes>
    {
        !user ?(
          <>
          <Route exact path='/user/*' element={<Auth/>}/>
          <Route exact path='/user/registro' element={<Register/>}/>
          </>

        ):(
          <>
          {["/user", "/user/home"].map((path)=>(

          <Route exact path='/user/home' element={LoadLayout(ClientLayout, Home)}/> 
          ))}

        
          <Route exact path="/user/profile" element={LoadLayout(ClientLayout, UserProfile)}/>
          <Route exact path="/user/articulo/:id" element={LoadLayout(ClientLayout, ArticleCard)}/>
          <Route exact path="/user/formulario" element={LoadLayout(ClientLayout, FormularioPregunta)}/>


          </>
        )
      }
    
   </Routes>
  )
}
