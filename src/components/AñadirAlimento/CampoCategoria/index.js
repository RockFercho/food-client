import React from 'react';
import { Label, Select,/*Opction*/LeyendaError } from './../estilosFormmulario';

const Categoria = ({ estado, cambiarEstado, leyendaError }) => {

  const onChange = (e) => {
    cambiarEstado({ campo: e.target.value, valido: true })


  }


  return (

    <div>
      <Label valido={estado.valido} >*Categoria</Label>

      <Select name="categorias" id="categoria"
        //required
        value={estado.campo}
        onChange={onChange}
        valido={estado.valido}
      >

        <option value="">- Seleccione una categoria</option>
        <option value="Frutas">Frutas</option>
        <option value="Verduras">Verduras</option>
        <option value="Carnes y pescado">Carnes y pescado</option>
        <option value="Hortalizas">Hortalizas</option>

      </Select>

      <LeyendaError>{leyendaError}</LeyendaError>
    </div>
  );


}
export default Categoria;