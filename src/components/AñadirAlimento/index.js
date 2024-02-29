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
import { URL} from '../../global/const';

const MSG_ERROR_NAME = 'El nombre del alimento ya se encuentra registrado';

var msg = 'Por favor rellena el formulario correctamente.';

const AñadirAlimento = () => {

	const [categoria, cambiarCategoria] = useState({ campo: '', valido: null});

	const [nombre, cambiarNombre] = useState({ campo: '', valido: null});
	const [opcional, cambiarOpcional] = useState({ campo: '', valido: null });
	const [procedencia, cambiarProcedencia] = useState({ campo: '', valido: null});
	const [calorias, cambiarCalorias] = useState({ campo: '', valido: null});

	const [horaDe, cambiarHoraDe] = useState({ campo: '', valido: null });
	const [horaA, cambiarHoraA] = useState({ campo: '', valido: null });

	const [imagen, cambiarImagen] = useState({ campo: '', valido: null});


	const [advertencias, cambiarAdvertencias] = useState({ campo: '', valido: null });
	const [combinacion, cambiarCombinacion] = useState({ campo: '', valido: null });

	const [descripcion, cambiarDescripcion] = useState({ campo: '', valido: null});

	const [formularioValido, cambiarFormularioValido] = useState(null);



	const expresiones = {

		nombre1: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_ñ-]*$/,
		advert: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_,_.-]*$/,
		combin: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_._,-]*$/,
		descrip: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9_\s_,_.-]*$/,
		calor: /^\d{0,4}(\.\d{0,4})?$/,
	}





	const onSubmit = (e) => {
		e.preventDefault();


		if (
			categoria.valido===true &&
			nombre.valido === true &&
			procedencia.valido === true &&
			calorias.valido === true &&
			imagen.valido === true &&
			descripcion.valido === true



		) {

			var datos = {
				categoria: categoria.campo,
				nombre: nombre.campo,
				segundonombre: opcional.campo,
				procedencia: procedencia.campo,
				calorias: calorias.campo,
				horainicio: horaDe.campo,
				horafinal: horaA.campo,
				advertencia: advertencias.campo,
				combinacion: combinacion.campo,
				imagen: imagen.campo,
				descripcion: descripcion.campo

			};

			axios.post(URL, datos)
				.then(res => {
					cambiarFormularioValido(true);
					cambiarNombre({ campo: '', valido: null });
					cambiarOpcional({ campo: '', valido: null });
					cambiarProcedencia({ campo: '', valido: null });
					cambiarCalorias({ campo: '', valido: null });
					cambiarAdvertencias({ campo: '', valido: null });
					cambiarCombinacion({ campo: '', valido: null });
					cambiarDescripcion({ campo: '', valido: null });
				})
				.catch(error => {
					if (error.response.status === 409) {
						msg = MSG_ERROR_NAME;
					}
					cambiarFormularioValido(false);
				})
		} else {
			//console.log(datos);
			msg = 'Por favor rellena el formulario correctamente.';
			cambiarFormularioValido(false);
		 if(categoria.valido==null){	
			cambiarCategoria({valido: false});
		 }
		 if(nombre.valido==null){
			cambiarNombre({valido: false});
		 }
		 if(procedencia.valido==null){
			cambiarProcedencia({valido: false});
		 }
		 if(calorias.valido==null){
			cambiarCalorias({valido: false});
		 }
		 if(imagen.valido==null){
			cambiarImagen({valido: false});
		 }
		 if(descripcion.valido==null){
			cambiarDescripcion({valido: false});
		 }

			
		}
	}
	
	return (
		<main>
			<h1 align="center" >AGREGAR  ALIMENTO</h1>
			<Formulario action="" onSubmit={onSubmit}>

				<Categoria
					estado={categoria}
					cambiarEstado={cambiarCategoria}
				/>

				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					nuMin="1"
					nuMax="80"
					label="*Nombre de Alimento"
					placeholder="ej: Platano"
					name="nombre"
					leyendaError=" El nombre tiene que ser de 1 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={""}
				/>
				<Input
					estado={opcional}
					cambiarEstado={cambiarOpcional}
					tipo="text"
					nuMax="80"
					label="Nombre opcional"
					placeholder="ej: Banana "
					name="opcional"
					leyendaError=" El nombre opcional tiene que ser de 1 a 80 caracteres, sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={""}
				/>
				<Input
					estado={procedencia}
					cambiarEstado={cambiarProcedencia}
					tipo="text"
					nuMin="1"
					nuMax="80"
					label="*Procedencia"
					placeholder="ej : Latinoamerica"
					name="procedencia"
					leyendaError=" La procedencia tiene que ser de 1 a 80 carcteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={""}
				/>
				<Input
					estado={calorias}
					cambiarEstado={cambiarCalorias}
					tipo="text"
					nuMin="1"
					nuMax="9"
					label="*Calorias"
					placeholder="ej: 15.12"
					name="calorias"
					leyendaError=" ingrese solo numeros(maximo 4 enteros y 4 decimales)"
					expresionRegular={expresiones.calor}
					requerido={""}
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
					nuMax="150"
					label="Advertencias"
					placeholder="No recomendable para..."
					name="advertencias"
					leyendaError="Las Advertencias tienen que ser de 1 a 150 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.advert}
					requerido={""}
				/>
				<Input
					estado={combinacion}
					cambiarEstado={cambiarCombinacion}
					tipo="text"
					nuMax="100"
					label="Combinacion de Alimentos "
					placeholder="ej: Platano-leche"
					name="combinacion"
					leyendaError=" La combinacion de alimentos deben ser de 1 a 100 caracteres sin caracteres especiales. "
					expresionRegular={expresiones.nombre1}
					requerido={""}
				/>

				<Imagen
					estado={imagen}
					cambiarEstado={cambiarImagen}
					leyendaError="Seleccione una imagen. "
					requirido={""}
				/>

				<Descrip
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					leyendaError="La descripcion debe ser de 1 a 250 digitos sin caracteres especiales."
					expresionRegular={expresiones.descrip}

				/>






				{formularioValido === false && <MensajeError>
					<p>
						< b > Error: </b>  {msg}
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito><b>El alimento fue agregado correctamente</b></MensajeExito>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);


}

export default AñadirAlimento;
