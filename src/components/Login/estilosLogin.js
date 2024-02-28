import styled, { css } from "styled-components";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#008F39",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  // min-height: 40px;
  cursor: pointer;
  font-size: 16px;

  ${(props) =>
    props.valido === false &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #ffff;
  border-radius: 3px;
  height: 35px;
  line-height: 45px;
  padding: 0px 10px 0px 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === true &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === false &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
    width: 240px;
    display:none;
    padding-bottom: 20px;
    ${props => props.valido === true && css `
        display:none;

    `}
  ${(props) =>
    props.valido === false &&
    css`
      display: block;
    `}
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px 0px 0px;

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  height: 35px;
  line-height: 35px;
  width: 100%;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  padding-top: 20px;
`;

const MensajeError = styled.div`
    height:35px;
    width: 240px;
    line-height:35px;
    background:${colores.error};
    border-radius: 3px;
    font-size:12px;
    p{
        margin:0;
    }
    b{
        margin-left:10px;
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
};
