import React, { useState, useEffect } from 'react';
import moment from 'moment';

//Estilos
import './CuentaRegresiva.css';
import './Style.css';

const Second = () => {

        // Establecer la fecha objetivo al 1ro de marzo del año actual a las 8:00 PM
        const targetDate = moment(`${moment().year()}-08-22 21:00:00`, 'YYYY-MM-DD HH:mm:ss');

        const calculateTimeLeft = () => {
          const now = moment();
          const difference = moment.duration(targetDate.diff(now));
          let timeLeft = {};
      
          if (difference.asMilliseconds() > 0) {
            timeLeft = {
              days: Math.floor(difference.asDays()),
              hours: difference.hours(),
              minutes: difference.minutes(),
              seconds: difference.seconds(),
            };
          }
      
          return timeLeft;
        };
      
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
          }, 1000);
      
          return () => clearInterval(timer);
        }, [targetDate]);

        
  return (
    <div className='Second-Container'>
        <div className='main-container-Conutdown'>
            <h1 className='title-Conutdown'>CONTEMOS JUNTOS PARA <br /> EL DÍA DE LA CELEBRACIÓN </h1>

            <div className='flex-container-main-Conutdown'>
            {Object.keys(timeLeft).length > 0 ? (
            <>
                <div className='time-block'>
                    <div className='time-value'>{timeLeft.days}
                        <span className='time-label-point'>:</span>
                    </div>
                    <div className='time-label' >DÍAS</div>
                </div>
                <div className='time-block'>
                    <div className='time-value'>{timeLeft.hours}
                        <span className='time-label-point'>:</span>
                    </div>
                    <div className='time-label'>HORAS</div>
                </div>
                <div className='time-block'>
                    <div className='time-value'>{timeLeft.minutes}
                        <span className='time-label-point'>:</span>
                    </div>
                    <div className='time-label'>MINUTOS</div>
                </div>
                <div className='time-block'>
                    <div className='time-value'>{timeLeft.seconds}
                        <span className='time-label-point' style={{opacity:'0'}}>:</span>
                    </div>
                    <div className='time-label'>SEGUNDOS</div>
                </div>
            </>
            ) : (
            <span>¡El tiempo se ha agotado!</span>
            )}
            </div>
        </div>
    </div>
  )
}

export default Second;