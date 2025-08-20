import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//componentes
import Second from "../components/Second";
import ThirdC from "../components/ThirdC";
import Forth from "../components/Forth";
import Quina from "../components/Quina";
import Loader from "../components/Loader/Loader";

import '../components/Style.css'


const Invitacion = ({}) => {

    const [loanding, setLoanding] = useState(false);
  
      //Peticion principal 
    const getHome = async () => {
            try {
              //Se inicializa el componente "Cargando"
              setLoanding(true);
  
              // Verificar conexión a Internet
              if (!navigator.onLine) {
                throw new Error('No hay conexión a Internet');
              }
  
              // Simular una pequeña demora antes de desactivar el loader (500ms en este ejemplo)
              setTimeout(() => {
                //Desactiva el componente "Cargando" y no se carga ningún error 
                setLoanding(false);
              }, 1500); // 500ms de retraso
  
            } catch (error) {
              setLoanding(false);
            }
    };


    const location = useLocation();
    const navigate = useNavigate();
    const invitado = location.state?.invitado;


  
    // Si no hay datos, redirigir o mostrar un mensaje
    if (!invitado) {
      return (
        <div>
          <p>No se encontró información del invitado.</p>
          <button onClick={() => navigate('/')}>Volver al inicio</button>
        </div>
      );
    }

    useEffect(() => {
      getHome();
    }, []);
  
    return (
        <>
        {
        loanding ? (<Loader />):(
          <>
            <div className='header-container-main'></div>
            <Second />
            <ThirdC />
            <Forth />
            <Quina />
          </>
          )
      }
        </>
      
    );
  };
export default Invitacion