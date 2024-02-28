import React, { useState } from 'react';
import { Fragment } from 'react';
import ComponenteInput from '../AñadirAlimento/CampoInput';
import './style.css';

function ComponentBuscador({ accionBuscar }) {
    const [busqueda, cambiarBusqueda] = useState({ campo: '', validoExpReg: true });
    const SOLO_LETRAS_ESPACIOS_ACENTOS = /^[A-zÀ-ú\s]*$/;

    const ponerTexto = (value) => {
        if (SOLO_LETRAS_ESPACIOS_ACENTOS.test(value.campo)) {
            cambiarBusqueda({ ...value, validoExpReg: true });
        } else {
            cambiarBusqueda({ ...value, validoExpReg: false });
        }
    }

    const accionEnter = (event) => {
        const texto = event.target.value;
        if (event.keyCode === 13 && texto) {
            accionBuscar(texto);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className={`input-container`} >
                    <span className={`material-icons icon ${!busqueda.validoExpReg && 'error-icon'}`}>search</span>
                    <ComponenteInput className={`input-field ${!busqueda.validoExpReg && 'error-input-container'}`} type="text" placeholder="Buscar"
                        nuMax={80} onKeyDown={(e) => accionEnter(e)} estado={busqueda} cambiarEstado={ponerTexto} />
                </div>
                {!busqueda.validoExpReg && <h6 className="error">Debe ser solo letras</h6>}
            </div>
        </Fragment>
    );
}

export default ComponentBuscador;