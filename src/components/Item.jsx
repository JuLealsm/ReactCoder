import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"; // ajuste o caminho se necessário
import { Link } from "react-router-dom";
import ItemAmount from "./ItemAmount"; // ajuste o caminho se necessário

const Item = ({ prod }) => {
    const { name, price, img, id, stock } = prod;
    const [showAmount, setShowAmount] = useState(false);
    const { addToCart } = useContext(CartContext); // <- Aqui acessa a função

    // Função chamada quando o usuário escolhe a quantidade e confirma
    const handleAdd = (quantity) => {
        addToCart(prod, quantity); // Adiciona o produto ao carrinho
        setShowAmount(false); // Opcional: fecha o seletor após adicionar
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
