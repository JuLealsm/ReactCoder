import { useEffect, useState } from "react";
//import { getItem } from "../mock/asyncMock";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailsContainer = ()=> {
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(null)
    const {id}=useParams();
    const [detail, setDetail]= useState ({});

    useEffect (()=>{
        setLoading(true);
        const productCollection = collection(db,"Items");
        const docRef= doc(productCollection, id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetail({id:res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
    },[])

//    useEffect(() => {
    //     getItem(id)
    //     .then (res => {setDetail(res)})
    //     .catch((error)=>console.log(error))
    //     .finally(()=>setLoading(false))

    // }, [id]);
if(invalid){
    return(
        <div>
            <h2>The product you're looking for is not available</h2>
            <Link to={`/`} className="itemAdded-Links" >Go Back to Browsing</Link>
        </div>
    )
}
    return(
        <div className="item-details-container">
            {loading ? (<LoaderComponent/>) : (<ItemDetail detail={detail} />)}
        </div>
    )
}

export default ItemDetailsContainer