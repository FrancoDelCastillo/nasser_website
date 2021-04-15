import React from 'react'
import './Contact.scss'
import Paper from "@material-ui/core/Paper"
import {FaEnvelope, FaGlobeAmericas, FaMobileAlt} from "react-icons/fa"

export default function Contact() {
    return (
       
        <div className="henna-container">
            <h1 className="henna-header">Contacto</h1>
                <div className="paper-container">
                    <Paper className="paper-contact" elevation={6}> 
                    <FaEnvelope className="paper-icon"/>
                    <h2 className="paper-title">Escríbenos</h2>
                        <p className="email-contact">jennifermoralesgonzaga@gmail.com</p>
                    </Paper>
                    <Paper className="paper-contact" elevation={6}> 
                    <FaGlobeAmericas className="paper-icon"/>
                    <h2 className="paper-title">Ubicación</h2>
                        
                        <p className="paper-description">Lima, Perú</p>
                    </Paper>

                    <Paper className="paper-contact" elevation={6}> 
                    <FaMobileAlt className="paper-icon"/>
                    <h2 className="paper-title">Llámenos</h2>
                        
                        <p className="paper-description">941 548 277 / 942 036 285</p>
                    </Paper>                
            </div>
            <div className="contact-footer-container">
            <h3 className="contact-footer">Podemos ajustarnos a tus necesidades sin problemas</h3>  
            </div>
        </div>


    )
}
