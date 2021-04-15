import React, {useState} from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.scss"
import { IconContext } from "react-icons/lib"
import brandHorizontalWhite from "../../brand/brand-horizontal-green.svg"

export default function Navbar(){

 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false)

    return(
        <>
        <IconContext.Provider value={{color:'#141312'}}>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={brandHorizontalWhite} className="navbar-icon"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/acerca" className="nav-links" onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-links" onClick={closeMobileMenu}>
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/como-comprar" className="nav-links" onClick={closeMobileMenu}>
                                Cómo comprar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
                                Contacto
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}