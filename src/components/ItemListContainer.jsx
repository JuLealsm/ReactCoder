import { useEffect, useState } from "react"
import { fetchData, data } from "../mock/asyncMock"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";

function ItemListContainer({ message, onViewDetails }){
    const [products, setProducts]= useState ([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true);
        const productsCollection = categoryId ? query(collection(db,"Items"), where("category","==", categoryId)) :collection(db,"Items");
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setProducts(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[categoryId])


        return(
            <div>
                <h1 className="pageTitle">{message}</h1>
                {loading && <LoaderComponent/>}
                {error && <p>Error: {error.message}</p>}

                <ItemList products={products} onViewDetails={onViewDetails} />
            </div>
        )
}
export default ItemListContainer