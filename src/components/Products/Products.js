import React from 'react'
import product_card from "../../data/product_data"
import "./Products.scss"


const Products = () => {
    const listItems = product_card.map((item)=>
        <div className="card_container" key={item.id}>
            <div className="card_img">
                <img className="product_img" src={item.thumb}/>
            </div>
            <div className="card_header">
                <h2 className="product_name">{item.product_name}</h2>
                <p className="product_description">{item.description}</p>
            </div>
        </div>
    );

    return (
        
        <div className="products-container">
            <h3 className="products-header">Productos</h3>
            <div className="cards-wrapper">
            {listItems}
            </div>
        </div>
    )
}


export default Products