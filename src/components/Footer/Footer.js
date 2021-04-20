import React from 'react'
import "./Footer.scss"
import {Link} from "react-router-dom"
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaWhatsapp
} from "react-icons/fa"
import brandHorizontal from "../../brand/brand-horizontal-white.png"


function Footer() {
    
    return (
        <div className="footer-container">
            <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Únete a nuestra exclusiva cartera de clientes para recibir tus pedidos a la brevedad
            </p>
 
            <div className="btn-area">
                <a href="https://wa.me/51941548277?text=Quiero%20hacer%20un%20pedido" target="_blank"><button className="btn-wsp" >Hablemos por WhatsApp&nbsp;<FaWhatsapp className="wsp-icon"/></button></a>
            </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                    <Link to="/home"><h2>Inicio</h2></Link>
                    <Link to="/productos"><h2>Productos</h2></Link>
                    <Link to="/como-comprar"><h2>Cómo comprar</h2></Link>
                    <Link to="/contacto"><h2>Contacto</h2></Link>
                        
                    </div>
                    <div className="footer-links-items">
                        <h2>Redes Sociales</h2>
                    <Link to="#">Instagram</Link>
                    <Link  to={'//www.facebook.com/Nasser-Group-101927825369075'}  
                        target="_blank">Facebook</Link>
                    <Link to={'//www.youtube.com/channel/UCgzsR6YS1DXrTpuSGmsqRDw'} target="_blank">Youtube</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/home" className="brand-logo">
                            <img src={brandHorizontal}/>
                        </Link>
                    </div>
                    
                    <div className="social-icons">
                        <Link to={'//www.facebook.com/Nasser-Group-101927825369075'}  
                        target="_blank"
                        aria-label="Facebook"
                        className="social-icon-link">
                            <FaFacebook/>
                        </Link>
                        <Link to="#" aria-label="Instagram" className="social-icon-link">
                            <FaInstagram/>
                        </Link>
                        <Link to={'//www.youtube.com/channel/UCgzsR6YS1DXrTpuSGmsqRDw'} 
                        target="_blank"
                        aria-label="Youtube"
                        className="social-icon-link">
                            <FaYoutube/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
