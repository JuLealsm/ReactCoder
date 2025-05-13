import {Link } from "react-router-dom";

const Item = ({prod, onViewDetails}) =>{
    const { name, price, img, id } = prod;
    return(
        <div className='productCard'>
            <img className="productImg" src={img} alt={name} />
            <h3>{name}</h3>
            <p>${price},00</p>
            <Link to={`/product/${id}`} className="LinkViewDetails">View Details</Link>
            <button className="btnAddToCart">Add to cart</button>
        </div>
    )
}

export default Item