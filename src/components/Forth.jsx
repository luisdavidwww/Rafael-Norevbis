import React from 'react';



//componentes
import CarouselFuntionTwo from "./CarouselFuntionTwo";

//Estilos
import './Style.css';

const Forth = () => {
  return (
    <div className='Forth-Container'>
      <div className='containerbtn-photo'>
          <a className='btn-outline-photo' type='button' href=' https://drive.google.com/drive/folders/1L1Q1Uu36uLuucLsJe9o4JQ6xXN-flRwt?usp=sharing'>SUBIR FOTOS </a>
      </div>
{/*
      <div className='containerbtn-Bank'>
          <a className='btn-outline-Bank' type='button' >VER DATOS BANCARIOS </a>
      </div>
*/}
      <div className='containerbtn-Ca'>
          <a className='btn-outline-Ca' type='button'  href='https://walink.co/e43e4a' >CONFIRMAR ASISTENCIA </a>
      </div>
{/*
        <CarouselFuntionTwo condition={"algo"}/>
*/}

     
    </div>
  )
}

export default Forth;