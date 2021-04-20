import React from 'react'
import HeroSection from "../../components/HeroSection/HeroSection"
import {homeObjOne} from "./Data"
import HennaNasser from "../../components/HennaNasser/HennaNasser"
import About from "../../components/About/About"
import Products from "../../components/Products/Products"
import HowToBuy from "../../components/HowToBuy/HowToBuy"
import Contact from "../../components/Contact/Contact"

import AOS from "aos"



function Home() {

    AOS.init();

    return (
        <div data-aos="fade"
        data-aos-duration="500">
                <HeroSection {...homeObjOne}/>
                <HennaNasser/>
                <div  data-aos="fade"
                data-aos-duration="1000">
                <About/>
                </div>
                <div  data-aos="fade"
                data-aos-duration="1000">
                <Products/>
                </div>
                <div  data-aos="fade"
                data-aos-duration="1000">
                <HowToBuy/>
                </div>
                <div  data-aos="fade"
                data-aos-duration="1000">
                <Contact/>
                </div>
        </div>
    )
}

export default Home
