import { Link } from "react-router-dom"

const CartEmpty = () =>{
    return(
        <div className="emptyContainer">
            <h2>Your Shopping Cart is Empty</h2>
            <Link to={`/`} className="emptyLink">Keep Browsing</Link>
        </div>
    )
}

export default CartEmpty