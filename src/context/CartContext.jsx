import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider =  ({children}) =>{
    const [cart, setCart] = useState ([])

    const addToCart = (item, amount) =>{
        if(isInCart(item.id)){
            //somar quantidades a um item existente
            const updatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return{...prod, quantity: prod.quantity + amount}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart,{...item, quantity:amount }])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !==id))
    }

    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id ===id)
    }

    const cartTotal = ()=>{
        return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0)
    }

    const cartQuantity = () =>{
        return cart.reduce(( acc, prod) => acc += prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal, cartQuantity}} >
            {children}
        </CartContext.Provider>
    )
}