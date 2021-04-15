import React from "react"
import Contact from "../../components/Contact/Contact"
import Slide from "react-reveal/Slide"

export default function ContactPage(){
    return(
        <div>
            <Slide left>
                <Contact/>
            </Slide>
        </div>
    )
}