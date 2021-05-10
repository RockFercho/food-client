import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Alimentos from '../../components/Alimentos';
import AñadirAlimento from '../../components/AñadirAlimento';
import Header from '../../components/Header';
import Inicio from '../../components/Inicio';
import './style.css'

function MainRouter() {
    return (
        <Router>
            <Route path='/' component={Header} />
            <Switch>
                <Route path='/inicio'>
                    <div className='container-image inicio'>
                        <Inicio />
                    </div>
                </Route>
                <Route path='/alimentos'>
                    <div className='container-image alimentos'>
                        <Alimentos />
                    </div>
                </Route>
                <Route path='/añadir'>
                    <div className='container-image anadir-alimento'>
                        <AñadirAlimento />
                    </div>
                </Route>
                <Redirect from='' to='/inicio' exact />
            </Switch>
        </Router >
    );
}

export default MainRouter;
