import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../AñadirAlimento/estilosFormmulario';
import axios from "axios"

//./elementos/Formularios
import Input from '../AñadirAlimento/CampoInput/index';
import Descrip from '../AñadirAlimento/CampoDescripcion/index';
import Imagen from '../AñadirAlimento/CampoIMagen/index';
import Hora from '../AñadirAlimento/CampoHorario/index';
import Categoria from '../AñadirAlimento/CampoCategoria/index';
import './style.css'

const URL =  `http://localhost:8082/api/food`;

const AñadirAlimento = () => {

	const [categoria, cambiarCategoria] = useState({ campo: '', valido: null });

	const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
	const [opcional, cambiarOpcional] = useState({ campo: '', valido: null });
	const [procedencia, cambiarProcedencia] = useState({ campo: '', valido: null });
	const [calorias, cambiarCalorias] = useState({ campo: '', valido: null });

	const [horaDe,cambiarHoraDe]=useState({ campo: '', valido: null });
	const [horaA,cambiarHoraA]=useState({ campo: '', valido: null });

	const [imagen,cambiarImagen]=useState({ campo: '', valido: null });


	const [advertencias, cambiarAdvertencias] = useState({ campo: '', valido: null });
	const [combinacion, cambiarCombinacion] = useState({ campo: '', valido: null });

	const [descripcion, cambiarDescripcion] = useState({ campo: '', valido: null });

	const [formularioValido, cambiarFormularioValido] = useState(null);

	                                            

	const expresiones = {

		nombre1: /^[a-zA-Z0-9_\s_ñ-]{4,80}$/,
		advert: /^[a-zA-Z0-9_\s_ñ,_-]{4,150}$/,
		combin: /^[a-zA-Z0-9_\s_ñ_,-]{4,100}$/,
		descrip: /^[a-zA-Z0-9_\s_,_ñ-]{4,250}$/,
		calor: /^\d{0,4}(\.\d{0,4})?$/,
	}





	const onSubmit = (e) => {
		e.preventDefault();
		

		if (
			nombre.valido === true&&
			opcional.valido === true &&
			procedencia.valido === true &&
			calorias.valido === true &&
			advertencias.valido === true &&
			combinacion.valido === true &&
			descripcion.valido === true


		) {

			var datos = { categoria:categoria.campo,
				nombre:nombre.campo,
				segundonombre:opcional.campo,
				procedencia:procedencia.campo,
				calorias:calorias.campo,
				horainicio:horaDe.campo,
				horafinal:horaA.campo,
				advertencia:advertencias.campo,
				combinacion:combinacion.campo,
				imagen:imagen.campo,
				descripcion:descripcion.campo
				
			};

			axios.post(URL, datos)
			.then(res => {
				console.log(res);
				console.log(res.data);
				cambiarFormularioValido(true);
				cambiarNombre({ campo: '', valido: null });
				cambiarOpcional({ campo: '', valido: null });
				cambiarProcedencia({ campo: '', valido: null });
				cambiarCalorias({ campo: '', valido: null });
				cambiarAdvertencias({ campo: '', valido: null });
				cambiarCombinacion({ campo: '', valido: null });
				cambiarDescripcion({ campo: '', valido: null });
			})
			.catch( error => {
				cambiarFormularioValido(false);
				console.log(error);
			})

		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<h2 align="center" >AGREGAR  ALIMENTO</h2>
			<Formulario action="" onSubmit={onSubmit}>

				<Categoria
				estado={categoria}
				cambiarEstado={cambiarCategoria}
				/>

				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre de Alimento"
					placeholder="ej: Platano"
					name="nombre"
					leyendaError=" El nombre tiene que ser de 4 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
				/>
				<Input
					estado={opcional}
					cambiarEstado={cambiarOpcional}
					tipo="text"
					label="Nombre opcional"
					placeholder="ej: Banana "
					name="opcional"
					leyendaError=" El nombre opcional tiene que ser de 4 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
				/>
				<Input
					estado={procedencia}
					cambiarEstado={cambiarProcedencia}
					tipo="text"
					label="Procedencia"
					placeholder="ej : Latinoamerica"
					name="procedencia"
					leyendaError=" La procedencia tiene que ser de 4 a 80 carcteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
				/>
				<Input
					estado={calorias}
					cambiarEstado={cambiarCalorias}
					tipo="number"
					label="Calorias"
					placeholder="ej: 15.12"
					name="calorias"
					leyendaError=" ingrese solo numeros(maximo 4 enteros y 4 decimales)"
					expresionRegular={expresiones.calor}
				/>

				<Hora
				  estadoDe={horaDe}
				  cambiarEstadoDe={cambiarHoraDe}
				  estadoA={horaA}
				  cambiarEstadoA={cambiarHoraA}
				  
					mensajeError=""
				/>

				<Input
					estado={advertencias}
					cambiarEstado={cambiarAdvertencias}
					tipo="text"
					label="Advertencias"
					placeholder="No recomendable para..."
					name="advertencias"
					leyendaError="Las Advertencias tienen que ser de 4 a 80 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.advert}
				/>
				<Input
					estado={combinacion}
					cambiarEstado={cambiarCombinacion}
					tipo="text"
					label="Combinacion "
					placeholder="ej: Platano-leche"
					name="combinacion"
					leyendaError=" La combinacion de alimentos deben ser de 4 a 80 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
				/>

				<Imagen
                     estado={imagen}
					 cambiarEstado={cambiarImagen}
				/>

				<Descrip
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					leyendaError="La descripcion debe ser de 4 a 250 digitos sin caracteres especiales."
					expresionRegular={expresiones.descrip}

				/>






				{formularioValido === false && <MensajeError>
					<p>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);


}

export default AñadirAlimento;