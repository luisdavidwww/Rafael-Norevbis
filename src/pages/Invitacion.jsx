import React, { useState, useEffect, useRef } from 'react';
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


      const audioRef = useRef(null);
      const [showModal, setShowModal] = useState(true); // Mostrar modal al inicio
    
      const handleStart = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => console.log("Click manual requerido"));
        }
        setShowModal(false); // Oculta la ventana
      };


  
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



    useEffect(() => {
      getHome();
    }, []);
  
    return (
        <>
        {
        loanding ? (<Loader />):(
          <>
                {/* 🎶 Música de fondo */}
      <audio ref={audioRef} loop>
        <source src="/music/La Gloria de Dios (Piano Instrumental) - Ánesi Sounds.mp3" type="audio/mpeg" />
      </audio>

      {/* Modal de bienvenida */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            letterSpacing:'1.5px',
            zIndex: 9999,
            color: "#fff",
            flexDirection: "column",
            textAlign: "center",
            padding: "0px"
          }}
        >
          <h1 style={{ marginBottom: "20px", fontSize: "2.52rem", fontFamily: 'Romantic_Lovely', }}>¡Bienvenido!</h1>
          <button
            onClick={handleStart}
            style={{
              padding: "12px 25px",
              fontSize: "1.1rem",
              border:"2px solid #A8904E ",
              backgroundColor: "#BEA760",
              fontFamily: 'Butler_Medium',
              color: "#fff",
              borderRadius: "50px",
              cursor: "pointer"
            }}
          >
            VER INVITACIÓN
          </button>
        </div>
      )}

            <div className='header-container-main'></div>
            <div className='header-container-main-2'></div>

            <Forth />
        {/* <Second />
            <ThirdC />
            <Forth />
            <Quina />*/}
            <Second />
          </>
          )
      }
        </>
      
    );
  };
export default Invitacion