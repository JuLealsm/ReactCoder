import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () =>{
const {cart, removeItem, cartTotal, clear} = useContext(CartContext)

    return(
        <div className="cartContainer">
        <h3 className="cartTitle">Shopping Cart</h3>
        <div>
            {cart.map((compra) => (
            <div key={compra.id} className="cartItem">
                <img src={compra.img} alt={compra.name} />
                <span>{compra.name}</span>
                <span>Qty: {compra.quantity}</span>
                <span>Unit: ${compra.price},00</span>
                <span>Total: ${compra.price * compra.quantity},00</span>
                <button onClick={() => removeItem(compra.id)}>🗑️</button>
            </div>
            ))}
        </div>

        <div className="cartTotal">Cart Total: ${cartTotal()},00</div>

        <div className="cartActions">
            <button onClick={clear}>Clear Shopping Cart</button>
            <Link to="/checkout">Buy now</Link>
        </div>
        </div>
    )
}

export default CartView