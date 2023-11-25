// VehicleForm.js
/*import React, { useState } from 'react';
import VehicleService from '../services/VehicleService';

const VehicleForm = () => {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newVehicle = {
      placa,
      modelo,
      anio,
      fechaCompra,
      observaciones,
    };

    VehicleService.createVehicle(newVehicle)
      .then(data => {
        console.log('Vehículo creado:', data);
        // Puedes hacer algo después de la creación, como actualizar la lista de vehículos.
      });
  };

  return (
    <div>
      <h2>Crear Nuevo Vehículo</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario }
        <button type="submit">Guardar</button>
      </form>
      
    </div>
  );
};

export default VehicleForm;*/
