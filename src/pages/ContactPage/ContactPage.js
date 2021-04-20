import React from "react"
import Contact from "../../components/Contact/Contact"

import AOS from "aos"

export default function ContactPage(){

    AOS.init();

    return(
        <div data-aos="fade"
        data-aos-duration="1000">
            <Contact/>
        </div>
    )
}