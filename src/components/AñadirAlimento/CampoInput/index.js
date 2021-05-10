import React from 'react';
import { Input, Label, GrupoInput, LeyendaError } from './../estilosFormmulario';
//import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = ({ requerido, estado, nuMin, nuMax, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion }) => {

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

		if (funcion) {
			funcion();
		}
	}
	/*console.log(estado.campo);
		console.log(estado.valido);*/

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoInput>
				<Input
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
				/>

			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}

export default ComponenteInput;