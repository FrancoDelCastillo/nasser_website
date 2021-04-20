import React from 'react'
import "./HeroSection.scss"
import AOS from "aos"


export default function HeroSection({
    henna, topLine, headLine, description
}) {
    AOS.init();

    return (
        
        <div className="home__hero-section darkBg">
            <div className="row home__hero-row">
            
              <div className="col">
                  <div data-aos="fade" 
                  data-aos-delay="800"
                  data-aos-mirror="true"
                  data-aos-duration="1300" className="home__hero-text-wrapper">
                      
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
                
                </div>
            </div>
        

    )
}


