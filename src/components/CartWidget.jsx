import { useContext } from "react"
import { PiShoppingCartLight } from "react-icons/pi"
import { CartContext } from "../context/CartContext"

const CartWidget = ( ) =>{
    const {cartQuantity}= useContext(CartContext)
    
    return(
        <div className="cartwidget">
            <PiShoppingCartLight />
            <span>{cartQuantity()}</span>
        </div>
    )
}

export default CartWidget