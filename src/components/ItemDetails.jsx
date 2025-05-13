import { CgCloseR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import ItemAmount from "./ItemAmount";

function ItemDetail({ detail }) {

    const { name, description, price, img } = detail;
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/');
    }

    return (
        <div className="productCardDetails">
            <button className="closeDetails-btn" onClick={handleClick} ><CgCloseR /></button>
            <img className="productImgDetails" src={img} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Precio: ${price},00</p>
            <ItemAmount stock={detail.stock} />
            <button className="btnAddToCart">Add to cart</button>
        </div>
    );
}

export default ItemDetail;