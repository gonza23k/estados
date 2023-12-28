import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Formulario = ({ onRegister }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!nombre || !email || !password || !confirmPassword) {
      setErrorMessage('Completa todos los campos!');
      return;
    }

    if (!email.includes('@') || password !== confirmPassword) {
      setErrorMessage('Verifica el formato del email y las contraseñas.');
      return;
    }

    // Registro exitoso
    onRegister();
  };

  return (
    <Form onSubmit={handleSubmit} className="formulary mt-4">
      <Form.Group controlId="nombre">
        <Form.Control
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Registrarse
      </Button>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </Form>
  );
};

export default Formulario;
