import { Descri, Label, Input, LeyendaError } from './../estilosFormmulario';

const Descripcion = ({ estado, cambiarEstado, expresionRegular, leyendaError, funcion }) => {



  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });

  }

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: true });

      } else {
        cambiarEstado({ ...estado, valido: false });
      }
    }
  }
  if (funcion) {
    funcion();
  }

  return (

    <Descri >
      <Label htmlFor="" valido={estado.valido}>*Descripcion</Label>
      <Input
        type="text"
        minLength="1"
        maxLength="250"
        placeholder="Descripcion"
        value={estado.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
        //required
      />
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </Descri>


  );

}
export default Descripcion;
