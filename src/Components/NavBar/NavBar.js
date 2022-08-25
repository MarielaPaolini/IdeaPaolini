import logo from '../../Components/ImagenesMuseo/logo.png';
import './styles.css'
import CarritoNavBar from '../CartWidget';
import React from 'react'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img className='logoEmpresa' width={'100px'} src={logo} alt="logo"/>
            </div>
            <div>
                <CarritoNavBar />
            </div>
            <div>
                <ul>
                    <li>
                        <a href=''>Inicio</a>
                    </li>
                    <li>
                        <a href=''>Nosotros</a>
                    </li>
                    <li>
                        <a href=''>Contacto</a>
                    </li>
                </ul>
            </div>
            <div>
                <button type="button" class="btn btn-secondary">Regístrate</button>
            </div>
        </div>
    )
};

export default NavBar;