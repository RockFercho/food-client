import React, {useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { CajaMayor, Titulo, Imagen, Detalle, Subtitulos,  Otros, Parrafos } from './estilos';
import { URL } from '../../global/const';


let alimento = '';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const MostrarDetalle = props => {
    const query = useQuery();
    const location = useLocation();
    const [food, setFood] = useState({});
    let history = useHistory();

    const redirect  = () => {
        history.push({
            pathname: "/ui/inicio"
        });
    }

    useEffect(() => {
        const id = query.get('food');
        const URLID = `${URL}/${id}`;
        if(id) {
            axios.get(URLID)
            .then((res) => {
              alimento = res.data;
              if(alimento) {
                  setFood(alimento)
              }
              else {
                  redirect();
              }
            }).catch(error => {
                console.log(error);
                redirect();
            });
        } else {
            redirect();
        }
    }, [location]);

    return (
        <CajaMayor>
            <Titulo>
                <h1 align="center">DETALLE DEL ALIMENTO</h1>
            </Titulo>
            <Imagen>
                <img src={food.imagen} height="280px" width="280px" alt="" />
                <br></br>
                <h4 align="center"><b>{food.nombre}</b></h4>

            </Imagen>
            <Detalle>
                <Parrafos>
                    {food.descripcion}
                </Parrafos>
                <Otros>
                    <Subtitulos>
                        Nombre Opcional
                </Subtitulos>
                    <Parrafos>
                        {food.segundonombre}
                    </Parrafos>
                    <Subtitulos>
                        CATEGORIA
              </Subtitulos>
                    <Parrafos>
                        {food.categoria}
                    </Parrafos>
                    <Subtitulos>
                        PROCEDENCIA
              </Subtitulos>
                    <Parrafos>
                        {food.procedencia}
                    </Parrafos>
                    <Subtitulos>
                        CALORIAS
              </Subtitulos>
                    <Parrafos>
                        {food.calorias}
                    </Parrafos>
                    <Subtitulos>
                        HORARIOS DE CONSUMO
            </Subtitulos>
                    <Parrafos>
                        {food.horainicio}-{food.horafinal}
                    </Parrafos>
                    <Subtitulos>
                        ADVERTENCIAS
              </Subtitulos>
                    <Parrafos>
                        {food.advertencia}
                    </Parrafos>
                    <Subtitulos>
                        COMBINACION DE ALIMENTOS
           </Subtitulos>
                    <Parrafos>
                        {food.combinacion}
                    </Parrafos>
                </Otros>
            </Detalle>

        </CajaMayor>
    );
}
export default MostrarDetalle;
