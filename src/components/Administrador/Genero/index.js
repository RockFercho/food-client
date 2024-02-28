import React from 'react';
import { LeyendaError } from '../../AñadirAlimento/estilosFormmulario';
import { Label, Select } from '../estilos';

const Genero = ({ estado, cambiarEstado, leyendaError }) => {

  const onChange = (e) => {
    cambiarEstado({ campo: e.target.value, valido: true })

  }

  //  console.log(estado.campo);
  // console.log(estado.valido);
  return (

    <div>
      <Label valido={estado.valido} >*Género</Label>

      <Select name="categorias" id="categoria"
        //required
        value={estado.campo}
        onChange={onChange}
        valido={estado.valido}
      >

        <option value="">- Seleccione un genero</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </Select>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );


}
export default Genero;
