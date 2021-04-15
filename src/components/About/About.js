import React from 'react'
import "./About.scss"
import video2 from "../../assets/video/video2.mp4"


export default function About(){
    return(
        
        <div className="about-container">
            <h1 className="about-header">Sobre Nosotros </h1>
            
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="text-container">
                            <span className="desc-container">NASSER GROUP es parte de la industria cosmética del Perú. 
                            Se encuentra conformado por un equipo de profesionales con años de experiencia en <b>Cejas y Pestañas.</b></span>
                        </div>  
                    </div> 
                </div>

            <div className="video-container">
                <video className="video-loop" preload="auto" autoPlay loop muted>                        
                    <source src={video2} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
