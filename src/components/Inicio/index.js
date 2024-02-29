import React from "react";
import { useHistory } from "react-router-dom";
import ComponentBuscador from "../Buscador";
import "./style.css";
import { Categorias } from "./Categorias";

function Inicio() {
  let history = useHistory();

  const accionBuscar = (text) => {
    const params = `name=${text}`;
    search(params);
  };

  const accionBuscarCategoria = (text) => {
    const params = `category=${text}`;
    search(params);
  };

  const search = (params) => {
    history.push({
      pathname: "/ui/resultados",
      search: `?${params}`
    });

  };

  return (
    <div>
      <div className="container-title">
        <h1 className="titulo-catalogo" align="center">
          <strong>CATÁLOGO DE ALIMENTOS</strong>
        </h1>
        <ComponentBuscador accionBuscar={accionBuscar} />
      </div>
      <h3 className="categorias" align="center">
        <strong>CATEGORIAS</strong>
      </h3>
      <Categorias accionBuscarCategoria={accionBuscarCategoria} />
    </div>
  );
}

export default Inicio;
