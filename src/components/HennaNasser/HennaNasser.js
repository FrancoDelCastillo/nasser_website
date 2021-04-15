import React from "react";
import "./HennaNasser.scss"
import hennaimg from "../../assets/img/henna-nasser.png"
import {FaStar} from "react-icons/fa"

export default function HennaNasser(){
    return(
        <div className="henna-container">
            <h3 className="henna-header">¿Qué es Henna NASSER®?</h3>
            <div className="henna-wrapper">
            <div className="col-img">
                    <img src={hennaimg} alt="Henna Nasser" className="henna-nasser"/>
                </div>
                <div className="col-description">
                    <p className="henna-description">
                        Es una tinta natural extraída de la planta de henna, 
                        mediante un tratamiento no invasivo te brinda un efecto de cejas <span className="cejas">más pobladas y naturales </span> con un acabado duradero.

                    </p>

                </div>

            </div>

        </div>
    )
}