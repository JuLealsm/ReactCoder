import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; 
import { Link } from "react-router-dom";
import ItemAmount from "./ItemAmount"; 
import { toast } from "react-toastify";

const Item = ({ prod }) => {
    const { name, price, img, id, stock } = prod;
    const [showAmount, setShowAmount] = useState(false);
    const { addToCart } = useContext(CartContext); 

    
    const handleAdd = (quantity) => {
        addToCart(prod, quantity); 
        setShowAmount(false);
        toast.success(`${quantity}  "${name}" added to your Shopping Cart`);
    };

    return (
        <div className='productCard'>
        <img className="productImg" src={img} alt={name} />
        <h3>{name}</h3>
        <p>${price},00</p>
        <Link to={`/product/${id}`} className="LinkViewDetails">View Details</Link>

        {!showAmount ? (
            <button className="btnAddToCart" onClick={() => setShowAmount(true)}>
            Add to cart
            </button>
        ) : (
            <ItemAmount stock={stock} onAdd={handleAdd} />
        )}
        </div>
    );
};

export default Item;
