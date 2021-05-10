import styled, { css } from 'styled-components';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#008F39"
}



const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 10px;

	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	


	${props => props.valido === false && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const SuperHorario = styled.div`
display: grid;
grid-template-columns: 1fr  ;
gad: 20px;

position: relative;
z-index: 90;
`;

const Horario = styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;
gad: 20px;

`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 40px;
	line-height: 45px;
	padding: 0 10px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === true && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === false && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;

	${props => props.valido === true && css`
		display: none;
	`}

	${props => props.valido === false && css`
		display: block;
	`}
`;

const Descri = styled.div`  
  grid-column: span 3;
   input {
      width: 100%;
      
   }

   @media (max-width: 800px){
	grid-column: span 1;
    }
 `;

const Select = styled.select`
   grid-template-columns: 1fr ;
   width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 40px;
	line-height: 45px;
	padding: 0 10px 0 10px;
	transition: .3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}

	${props => props.valido === true && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === false && css`
		border: 3px solid ${colores.error} !important;
	`}
 `;

const Opction = styled.option`
     windth: 100%;
 `;



const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 3;

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #008F39;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	border-radius: 6px;
	border: 2px solid #000000;
	
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 18px;
	color: #000;
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 3;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}

	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,
	Descri,
	Horario,
	SuperHorario,
	Select,
	Opction
};