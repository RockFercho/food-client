import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import Cards from './Cards'
import './resultado.css'
import ComponentBuscador from "../Buscador";
import 'bootstrap/dist/css/bootstrap.min.css'
import { URL } from '../../global/const';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Index() {
    const [foods, setFoods] = useState([]);
    let history = useHistory();
    
    const location = useLocation();
    const query = useQuery();

    useEffect(() => {
        if(query.get('name')) {
            const params = {
                name: query.get('name'),
              };
            accionBuscar(params)
        } else if(query.get('category')) {
            const params = {
                category: query.get('category'),
              };
            accionBuscar(params)
        } else {
            setFoods([]);
        }
    }, [location]);

    const accionBuscar = (params) => {
        axios.get(URL,{
            params
        }).then((res) => {
          setFoods(res.data);
        }).catch(error => {
            console.log(error);
        });
      };

      const buscadorTexto = (texto) => {
        if(texto.trim().length > 0) {
            history.push({
                pathname: "/ui/resultados",
                search: `?name=${texto}`
            });
        }
        else {
            setFoods([]);
        }
    };

    return (
        <div className="contenedorRes">
            <h1 align="center"><strong>RESULTADO DE BÚSQUEDA</strong></h1>
            <div className="buscador">
                <ComponentBuscador accionBuscar={buscadorTexto} />
            </div>
            <div className="resultado">
                <Cards foods={foods} />
            </div>
        </div>

    )
}
