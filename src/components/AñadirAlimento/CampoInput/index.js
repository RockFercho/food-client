import React from 'react';
import { Input, Label, GrupoInput, LeyendaError } from './../estilosFormmulario';
//import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ className, requerido, estado, nuMin, nuMax, cambiarEstado, tipo, label,
	 placeholder, name, leyendaError, expresionRegular, onKeyDown, funcion }) => {

	const onChange = (e) => {
		cambiarEstado({ ...estado, campo: e.target.value });
	}

	const validacion = () => {
		if (expresionRegular) {
			if (expresionRegular.test(estado.campo)) {
				cambiarEstado({ ...estado, valido: true });
				if(estado.campo===""){
					cambiarEstado({ ...estado, valido: null});
				  }
			} else {
				cambiarEstado({ ...estado, valido: false });
			}
		}

		if (funcion) {
			funcion();
		}
	}
	// console.log(estado.campo);
	 //console.log(estado.valido);
	return (
		<div>
			{label && <Label htmlFor={name} valido={estado.valido}>{label}</Label>}
			<GrupoInput>
				<Input
					className={className}
					type={tipo}
					minLength={nuMin}
					maxLength={nuMax}
					placeholder={placeholder}
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
					required={requerido}
					onKeyDown={onKeyDown}
				/>

			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}

export default ComponenteInput;