import {React, useState} from 'react';

// Componentes
import  FormCodInvitado  from "../components/FormCodInvitado";
import  InvitadoValido  from "../components/InvitadoValido";


const Home = () => {
    const [isInvitadoValido, setIsInvitadoValido] = useState(false);
    const [invitado, setInvitado] = useState([]);

  return (
    <div>
      <FormCodInvitado InvitadoValidate={setIsInvitadoValido} SetInvitado={setInvitado} Invitadof={invitado} isInvitadoValidoF={isInvitadoValido}/>
    </div>
  )
}

export default Home;