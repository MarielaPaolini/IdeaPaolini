import logo from '../../Components/ImagenesMuseo/logo.png';
import './styles.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from '../CartButton';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <NavLink to="/">
                    <img className='logoEmpresa' width={'100px'} src={logo} alt="logo"/>
                </NavLink>
            </div>
            <div>
               <NavLink to="/carrito">
                    <CartButton />
                </NavLink>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="categoria/tinto">Tintos</NavLink>
                        </li>
                        <li>
                            <NavLink to="categoria/blanco">Blancos</NavLink> 
                        </li>
                        <li>
                            <NavLink to="/detalle">Detalle</NavLink> 
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <button type="button" class="btn btn-secondary">Regístrate</button>
            </div>
        </div>
    )
};

export default NavBar;