import React, { useState } from 'react';

function Formulario() {
  const [dato, setDato] = useState('');

  const handleChange = (event) => {
    setDato(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/datos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dato })
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={dato}
        onChange={handleChange}
        placeholder="Ingrese un dato"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;