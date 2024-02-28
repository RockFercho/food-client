import styled, { css } from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  color:#000000;
`

const Formulario = styled.form`
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 60px;
  
	@media (max-width: 800px){
		grid-template-columns: 1fr;
		line-heigth: 0.1;
	}
`
const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 3;
  padding-top: 60px;

  @media (max-width: 800px){
    grid-column: span 1;
		line-heigth: 10%;
  }
`

const Label = styled.label`
display: block;
font-weight: 700;
padding: 10px;
min-height: 40px;
cursor: pointer;
font-size:16px;
${props => props.valido === false && css`
		color: ${"#bb2929"};
	`}
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
outline: none;
box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}
${props => props.valido === true && css`
		border: 3px solid transparent;
	`}

	${props => props.valido === false && css`
		border: 3px solid ${"#bb2929"} !important;
	`}
`;
export { Formulario, ContenedorBotonCentrado, Label, Select, H1 };