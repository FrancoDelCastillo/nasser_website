import React from 'react'
import HennaNasser from "../../components/HennaNasser/HennaNasser"
import About from "../../components/About/About"
import Slide from "react-reveal/Slide"

function AboutPage() {
    return (
        <div>
            <Slide bottom>
                <About/>
                <HennaNasser/>
            </Slide>
        </div>
    )
}

export default AboutPage