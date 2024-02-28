import React from 'react';
import {Horario,Label,Input,LeyendaError,SuperHorario} from './../estilosFormmulario';
import './style.css'

const horario =({mensajeError,cambiarEstadoDe,estadoDe,cambiarEstadoA,estadoA})=>{

    const onChangeDe =(e)=>{
        cambiarEstadoDe({campo:e.target.value,valido:true})

    }
    const onChangeA =(e)=>{
        cambiarEstadoA({campo:e.target.value,valido:true})

    }

    return(
       <div> 
        <SuperHorario  >
            <Label htmlFor="">Sugerencia Horarios de Consumo </Label>
            <Horario>
                
            <Input type="time" placeholder="de:"
              value={estadoDe.campo}
              onChange={onChangeDe}
            />
            <Input type="time" placeholder="a:"
            value={estadoA.campo}
            onChange={onChangeA}
            />
            </Horario>
            <LeyendaError>{mensajeError}</LeyendaError>
        </SuperHorario>
       </div> 
    ) ;

}

export default horario;