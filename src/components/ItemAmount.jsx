import { useState } from "react";

const ItemAmount = ({ stock,onAdd }) => {
    const [amount, setAmount] = useState(1);

    if (stock === 0) return <p>Out of Stock.</p>;

    const handleIncrement = () => {
        if (amount < stock) {
            setAmount(amount + 1);
        }
    };

    const handleDecrement = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const buy = ()=>{
        onAdd(amount)
    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button className="amount-btn"  onClick={handleDecrement} disabled={amount <= 1}>-</button>
                <input className="amountInput" type="number" value={amount} readOnly />
                <button className="amount-btn"  onClick={handleIncrement} disabled={amount >= stock}>+</button>
            </div>
            <button className="btnAddToCart" onClick={buy}>Add to cart</button>
        </div>
    );
};


export default ItemAmount;