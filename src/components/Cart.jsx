import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartView from "./CartView"
import CartEmpty from "./CartEmpty"


const Cart = () => {
    const {cart} = useContext(CartContext)

    return(
        <div>
            {cart.length ? <CartView/>: <CartEmpty/>}
        </div>
    )
}

export default Cart