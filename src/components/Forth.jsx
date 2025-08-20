import React from 'react';



//componentes
import CarouselFuntionTwo from "./CarouselFuntionTwo";

//Estilos
import './Style.css';

const Forth = () => {
  return (
    <div className='Forth-Container'>

      <div className='containerbtn-photo'>
          <a className='btn-outline-photo' type='button' href='https://maps.app.goo.gl/h6zZiHqTK7wdK5p38'>VER UBICACIÓN </a>
      </div>

      <div className='containerbtn-Ca'>
          <a className='btn-outline-Ca' type='button'  href='https://walink.co/1ce1df' >CONFIRMAR <span className='btn-outline-Ca-spam'>a la novia</span> </a>
      </div>

      <div className='containerbtn-Cb'>
          <a className='btn-outline-Cb' type='button'  href='https://walink.co/cf679a' >CONFIRMAR <span className='btn-outline-Cb-spam'>al novio</span> </a>
      </div>
     
    </div>
  )
}

export default Forth;