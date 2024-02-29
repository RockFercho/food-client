import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Card from './Card';

function Cards(props) {

    const [foods, setFoods] = useState([]);

    let history = useHistory();

    useEffect(() => {
        setFoods(props.foods)
    }, [props]);

    const redirect = (food) => {
        history.push({
            pathname: '/ui/mostrar',
            search: `?food=${food._id}`
        });
    }
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                {
                    foods.length > 0  ?
                    foods.map(card => (
                        <div className="contenedor" key={card.id} >
                            <Card title={card.nombre} imageSource={card.imagen} click={() => redirect(card)}/>
                        </div>

                    )) :
                    <div className="contMensaje">
                        <h3 className="mensaje">Alimento no encontrado</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cards
