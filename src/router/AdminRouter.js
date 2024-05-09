import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AdminLayouts} from "../layouts";
import {Auth, Register, ReporteUser, ReporteArt} from "../pages/admin";
import {useAuth} from "../hooks"





export function AdminRouter() {

  const {user}=useAuth();

  const loadLayout=(Layout, Page)=>{
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
          <Route exact path='/admin/*' element={<Auth/>}/>
          <Route exact path='/admin/registro' element={<Register/>}/>
          </>

        ):(
          <>
          {["/admin", "/admin/reporteuser"].map((path)=>(

          <Route key={path} path={path} element={loadLayout(AdminLayouts, ReporteUser)}/>
          ))}

          <Route exact path="/admin/reportearticulo" element={loadLayout(AdminLayouts, ReporteArt)}/>

          </>
        )
      }
      
    </Routes>

  )
}
