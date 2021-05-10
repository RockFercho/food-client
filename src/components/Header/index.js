import { Fragment } from "react";
import { Link } from "react-router-dom";
import './style.css'
import logo from '../../images/logo.png'

function Header() {
    return (
        <Fragment>
            <div className='header'>
                <div>
                    <Link to='/inicio'>
                        <img src={logo} className='image' alt='logo' width="50" height="50" />
                    </Link>
                </div>
                <div className='link'>
                    <Link to='/inicio' className='text-link'>Inicio</Link>
                </div>
                <div className='link'>
                    <Link to='/alimentos' className='text-link'>Alimentos</Link>
                </div>
                <div className='link'>
                    <Link to='/añadir' className='text-link'>Añadir</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
