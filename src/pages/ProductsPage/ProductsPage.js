import React from "react"
import Products from "../../components/Products/Products"
import Slide from "react-reveal/Slide"

export default function ProductsPage(){
    return(
        <div>
            <Slide bottom>
                <Products/>
            </Slide>
        </div>
    )
}