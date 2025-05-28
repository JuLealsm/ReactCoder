import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () =>{
    const [buyer,setBuyer] = useState({});
    const[validateMail, setValidateMail] = useState('');
    const {cart,cartTotal,clear}= useContext(CartContext);
    const [orderId, setOrderId] = useState('');

    const buyerData = (e)=>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()

        if(!buyer.name || !buyer.address || !buyer.email){
            toast.error("Please fill all the fields to complete the Purchase");
        }else if (buyer.email !== validateMail){
            toast.error("The emails entered do not match.");
        }else{
                let orden = {
                    comprador:buyer,
                    compras:cart,
                    total:cartTotal(),
                    date: serverTimestamp()
                }

                const ventas = collection(db, "orders")
                addDoc(ventas, orden)
                .then((res)=>{
                    setOrderId(res.id)
                    clear()
                })
                .catch((error)=>console.log(error))
            }

    }
    return(
        <div className="formContainer">
            <ToastContainer />
            {
                orderId
                ? <div>
                    <h2>Your purchase has been completed successfully!</h2>
                    <p>The ID of your purchase is: {orderId} </p>
                    <Link to={`/`} className="itemAdded-Links" >Keep Browsing</Link>
                </div>
                :  <div>
            <h1 className="formTitle">Fill your data</h1>
            <form onSubmit={finalizarCompra}>
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={buyerData}/>

                <label for="address">Address:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" onChange={buyerData}/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" onChange={buyerData}/>

                <label for="confirm-email">Confirm Email:</label>
                <input type="email" id="confirm-email" name="confirm-email" placeholder="Repeat your email" onChange={(e)=> setValidateMail(e.target.value)}/>
                
                <button className="submit" type="submit">Complete Purchase</button>
            </form>


        </div>
            }
        </div>
    )
}
export default Checkout