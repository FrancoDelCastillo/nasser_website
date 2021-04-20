import React from "react"
import Products from "../../components/Products/Products"

import AOS from "aos"

export default function ProductsPage(){

    AOS.init();

    return(
        <div data-aos="fade-up"
        data-aos-duration="1000">
                <Products/>
        </div>
    )
}