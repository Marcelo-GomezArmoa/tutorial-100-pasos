import React, { useContext } from 'react'
import { Context } from '../js/store/appContext.js'
import Navbar from '../components/Navbar.jsx'
import  { useNavigate } from 'react-router-dom'


const Home = () => {

  const { store, actions } = useContext(Context)

  const navigate = useNavigate()

  const handlerClick = () => {
    console.log('este boton va a contact')
    navigate('/contact')
  }

  return (
    <div>
      Home
      <Navbar/>

      <button onClick = {handlerClick}>navego a contact</button>

      <h5>muestra los nombres en contexto global : {store.personas}</h5>
    </div>
  )
}

export default Home