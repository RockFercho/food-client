import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MostrarDetalle from '../../components/MotrarDetalle';
import Alimentos from '../../components/Alimentos';
import AñadirAlimento from '../../components/AñadirAlimento';
import Header from '../../components/Header';
import Inicio from '../../components/Inicio';
import ResultadoBusqueda from '../../components/ResultadoBusqueda';
import Login from '../../components/Login';
import './style.css'
import Administrador from '../../components/Administrador';

function MainRouter() {

    const [session, setSession] = useState(false);

    if (localStorage.getItem('token') !== null && !session) {
        setSession(true);
        const time = 15 * 60 * 1000;
        if (localStorage.getItem('startTime') === null) {
            localStorage.setItem('startTime', new Date().getTime());
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('startTime');
                window.location = '/ui/login';
            }, time);
        } else {
            const startTime = localStorage.getItem('startTime');
            const milisegundos = time - (new Date().getTime() - startTime)
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('startTime');
                window.location = '/ui/login';
            }, milisegundos);
        }
    }

    return (
        <Router>
            <Route path='/ui' component={Header} />
            <Switch>
                <Route exact path='/ui/inicio'>
                    <div className='container-image inicio'>
                        <Inicio />
                    </div>
                </Route>
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                    <Route exact path='/ui/alimentos'>
                        <div className='container-image alimentos'>
                            <Alimentos />
                        </div>
                    </Route>
                }
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                    <Route exact path='/ui/añadir'>
                        <div className='container-image anadir-alimento'>
                            <AñadirAlimento />
                        </div>
                    </Route>
                }
                {localStorage.getItem('token') !== null && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined &&
                    <Route exact path='/ui/administrador'>
                        <div className='container-image mostrar-detalle'>
                            <Administrador />
                        </div>
                    </Route>}
                <Route exact path='/ui/resultados'>
                    <div className='container-image resultado-busqueda'>
                        <ResultadoBusqueda />
                    </div>
                </Route>
                <Route exact path='/ui/mostrar'>
                    <div className='container-image mostrar-detalle'>
                        <MostrarDetalle />
                    </div>
                </Route>
                <Route exact path='/ui/resultados'>
                    <div className='container-image resultado-busqueda'>
                        <ResultadoBusqueda />
                    </div>
                </Route>
                <Route exact path='/ui/mostrar'>
                    <div className='container-image mostrar-detalle'>
                        <MostrarDetalle />
                    </div>
                </Route>
                {(localStorage.getItem('token') === null || localStorage.getItem('token') === '' || localStorage.getItem('token') === undefined) &&
                    <Route exact path='/ui/login'>
                        <div className='container-image login'>
                            <Login />
                        </div>
                    </Route>
                }
                <Redirect strict from='/*' to='/ui/inicio' />
            </Switch>
        </Router >
    );
}

export default MainRouter;
