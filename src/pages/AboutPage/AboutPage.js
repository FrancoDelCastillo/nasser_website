import React from 'react'
import HennaNasser from "../../components/HennaNasser/HennaNasser"
import About from "../../components/About/About"
import AOS from "aos"


function AboutPage() {

    AOS.init();

    return (
        <div data-aos="fade-right"
        data-aos-duration="1000">
                <About/>
                <HennaNasser/>
        </div>
    )
}

export default AboutPage