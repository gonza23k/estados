import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';


const Registro = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const handleRegister = () => {
    // Lógica de registro

    // Mostrar mensaje de éxito
    setAlertMessage('¡Registro exitoso!');
    setAlertVariant('success');
  };

  return (
    <div className="container-registration mt-5 text-center">
      <h1>Crea una cuenta</h1>
      <div className="d-flex justify-content-center">
        <SocialButton icon="facebook" />
        <SocialButton icon="github" />
        <SocialButton icon="linkedin" />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario onRegister={handleRegister} />
      {alertMessage && <Alert message={alertMessage} variant={alertVariant} />}
    </div>
  );
};

export default Registro;
