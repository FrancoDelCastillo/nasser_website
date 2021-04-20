import React from "react"
import HowToBuy from "../../components/HowToBuy/HowToBuy"

import AOS from "aos"

export default function HowToBuyPage(){

    AOS.init();

    return(
        <div data-aos="fade"
        data-aos-duration="1000">
            
                <HowToBuy/>
            
        </div>
    )
}