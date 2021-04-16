import React from 'react'
import HeroSection from "../../components/HeroSection/HeroSection"
import {homeObjOne} from "./Data"
import HennaNasser from "../../components/HennaNasser/HennaNasser"
import About from "../../components/About/About"
import Products from "../../components/Products/Products"
import HowToBuy from "../../components/HowToBuy/HowToBuy"
import Contact from "../../components/Contact/Contact"
import Fade from "react-reveal/Fade"

function Home() {
    return (
        <div>
            <Fade delay={500}>
                <HeroSection {...homeObjOne}/>
                <HennaNasser/>
                <About/>
            </Fade>
                <Products/>
                <HowToBuy/>
                <Contact/>
        </div>
    )
}

export default Home
