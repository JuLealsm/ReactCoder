import React from "react"
import Item from "./Item"

const ItemList = ({products, onViewDetails}) =>{
    return(
        <div className="item-list-container">
            {products.map((prod) => (
                <Item 
                    key={prod.id} 
                    prod={prod} 
                
                />
            ))}
        </div>
    )
}

export default ItemList