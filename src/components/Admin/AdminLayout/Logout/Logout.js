import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../../../hooks"
import { FaPowerOff } from 'react-icons/fa'

export  function Logout() {

  const {logout} = useAuth()
  const navigate = useNavigate()


  const cerrarSesion=()=>{
    logout();
    navigate("/admin")
  }
  return (
    <Button variant='danger' onClick={cerrarSesion}><FaPowerOff>Salir</FaPowerOff> Salir</Button>
  )
}
