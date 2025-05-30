import { CgCloseR } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import ItemAmount from "./ItemAmount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ItemDetail({ detail }) {
    const {cart, addToCart} = useContext(CartContext)
    const { name, description, price, img, stock } = detail;
    const navigate = useNavigate();
    const [itemAdded, setItemAdded]= useState(false);

    const handleClick = ()=>{
        navigate('/');
    }

    const onAdd = (amount) =>{
        addToCart(detail, amount)
        setItemAdded(true)
        toast.success(`${amount}  Unitis added to your Shopping Cart`);
    }
    

    return (
        <div className="productCardDetails">
            <button className="closeDetails-btn" onClick={handleClick} ><CgCloseR /></button>
            <img className="productImgDetails" src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Precio: ${price},00</p>
            {itemAdded 
                ?<div className="itemAdded">
                    <Link to={`/`} className="itemAdded-Links" >Keep Browsing</Link>
                    <Link to={`/cart`} className="itemAdded-Links" >Go to cart</Link>
                </div>
                :<ItemAmount stock={stock} onAdd={onAdd} />
            }
            
        </div>
    );
}

export default ItemDetail;