import React, { useState } from "react";
import Input from "../AñadirAlimento/CampoInput";
import {
  Boton,
  MensajeError,
  MensajeExito,
} from "../AñadirAlimento/estilosFormmulario";
import { Formulario, ContenedorBotonCentrado, H1 } from "./estilos";
import Genero from "../Administrador/Genero/index";
import Fecha from "./Fecha";
import axios from "axios";
import { URL_ADMINISTRATOR } from "../../global/const";

const MSG_ERROR_CI = "El  CI. ya se encuentra registrado";
const MSG_ERROR_EMAIL = "El correo ya se encuentra registrado";

var msg = "Por favor rellena el formulario correctamente.";

const Administrador = () => {
  const [nombres, cambiarNombres] = useState({ campo: "", valido: null });
  const [apellidos, cambiarApellidos] = useState({ campo: "", valido: null });
  const [ci, cambiarCi] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [nacimiento, cambiarNacimiento] = useState({ campo: "", valido: null });
  const [genero, cambiarGenero] = useState({ campo: "", valido: null });
  const [formulario, cambiarFormulario] = useState(null);

  const expresiones = {
    nombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]*$/,
    apellido: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ_\s_ñ-]*$/,
    correo_electronico: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
    carnet: /^[0-9\b]*$/,
  };

  function mostrar() {
    cambiarFormulario(null);
  }

  const handleChange = (event) => {
    cambiarCorreo({
      valido: null,
      campo: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (expresiones.correo_electronico.test(correo.campo)) {
      correo.valido = true;
    }

    if (
      nombres.valido === true &&
      apellidos.valido === true &&
      ci.valido === true &&
      correo.valido === true &&
      nacimiento.valido === true &&
      genero.valido === true
    ) {
      var datos = {
        name: nombres.campo,
        lastname: apellidos.campo,
        ci: ci.campo,
        email: correo.campo,
        datebirth: nacimiento.campo,
        gender: genero.campo,
      };

      axios
        .post(URL_ADMINISTRATOR, datos)
        .then((res) => {
          cambiarFormulario(true);
          cambiarNombres({ campo: "", valido: null });
          cambiarApellidos({ campo: "", valido: null });
          cambiarCi({ campo: "", valido: null });
          cambiarCorreo({ campo: "", valido: null });
          cambiarNacimiento({ campo: "", valido: null });
          cambiarGenero({ campo: "", valido: null });
          setTimeout(mostrar, 4000);
        })
        .catch((error) => {
          if (error.response.data.message.search("ci") != -1) {
            msg = MSG_ERROR_CI;
          }
          if (error.response.data.message.search("email") != -1) {
            msg = MSG_ERROR_EMAIL;
          }
          cambiarFormulario(false);
          setTimeout(mostrar, 4000);
        });
    } else {
      msg = "Por favor rellena el formulario correctamente.";

      cambiarFormulario(false);
      setTimeout(mostrar, 4000);

      if (nombres.valido == null) {
        cambiarNombres({ valido: false });
      }
      if (apellidos.valido == null) {
        cambiarApellidos({ valido: false });
      }

      if (ci.valido == null) {
        cambiarCi({ valido: false });
      }
      if (correo.valido == null) {
        cambiarCorreo({ valido: false });
      }
      if (nacimiento.valido == null) {
        cambiarNacimiento({ valido: false });
      }
      if (genero.valido == null) {
        cambiarGenero({ valido: false });
      }
    }
  };

  return (
    <main>
      <H1>Agregar Administrador</H1>

      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombres}
          cambiarEstado={cambiarNombres}
          tipo="text"
          nuMin="1"
          nuMax="50"
          label="*Nombres"
          placeholder="ej: Michel"
          name="nombre"
          leyendaError=" Los nombres tienen que ser de 1 a 50 caracteres, sin caracteres especiales. "
          expresionRegular={expresiones.nombre}
          requerido={""}
        />
        <Input
          estado={apellidos}
          cambiarEstado={cambiarApellidos}
          tipo="text"
          nuMin="1"
          nuMax="50"
          label="*Apellidos"
          placeholder="ej: Mamani choquehuanca"
          name="apellido"
          leyendaError=" Los apellidos tiene que ser de 1 a 50 caracteres, sin caracteres especiales. "
          expresionRegular={expresiones.apellido}
          requerido={""}
        />
        <Input
          estado={ci}
          cambiarEstado={cambiarCi}
          tipo="text"
          nuMin="1"
          nuMax="10"
          label="*Carnet de Identidad"
          placeholder="ej: 3490293"
          name="ci"
          leyendaError=" El CI tiene que ser de 1 a 10 caracteres, sin caracteres especiales. "
          expresionRegular={expresiones.carnet}
          requerido={""}
        />
        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          nuMin="1"
          nuMax="250"
          label="*Correo Electrónico"
          placeholder="ej: ejemplo90@gmail.com"
          name="correo"
          leyendaError="Introdusca un correo valido "
          requerido={""}
          onKeyDown={handleChange}
        />

        <Fecha
          estado={nacimiento}
          cambiarEstado={cambiarNacimiento}
          nuMin="1"
          nuMax="100"
          label="*Fecha Nacimiento"
          placeholder="ej: ejemplo90@gmail.com"
          name="fecha"
          leyendaError=" Introdusca su fecha de nacimiento"
          requerido={""}
        />
        <Genero
          estado={genero}
          cambiarEstado={cambiarGenero}
          leyendaError=" Selecione un genero"
        />

        {formulario === false && (
          <MensajeError>
            <p>
              <b> Error: </b> {msg}
            </p>
          </MensajeError>
        )}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formulario === true && (
            <MensajeExito>
              <b>El usuario fue agregado correctamente</b>
            </MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
};
export default Administrador;

