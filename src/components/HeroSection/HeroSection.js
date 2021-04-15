import React from 'react'
import "./HeroSection.scss"
import Fade from "react-reveal/Fade"

export default function HeroSection({
    henna, topLine, headLine, description
}) {
    return (
        <div className="home__hero-section darkBg">
            <div className="row home__hero-row">
            <Fade left duration={1500} delay={100}>
              <div className="col">
                  <div className="home__hero-text-wrapper">
                      
                        <div className="top-line">
                            <h1 className="henna-line">
                                {henna}
                            </h1>
                            <span>&nbsp;&nbsp;</span>
                            <h1 className="nasser-line">
                                {topLine}
                            </h1>
                          
                        </div>
                        <h1 className="heading">{headLine}</h1>
                        <p className= "home__hero-subtitle">{description}</p>
                        
                    </div>
                </div>    
                </Fade>                  
            </div>
        </div>
    )
}


